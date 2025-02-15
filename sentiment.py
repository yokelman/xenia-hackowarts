# Backend server code for getting sentiment from a YouTube video's comments
# Some code is taken from https://www.geeksforgeeks.org/sentiment-analysis-of-youtube-comments/

# Hugging face transformers for using sentiment models
from transformers import pipeline
# Module for YouTube's API
from googleapiclient.discovery import build
# Regex module
import re
# Log time taken for inference
import time
# Load environment variables
import os
from dotenv import load_dotenv
# Create APIs
from flask import Flask, request, jsonify
from flask_cors import CORS
# Parse ISO 8601 format time for video duration
import isodate

sentiment_pipeline = pipeline("sentiment-analysis", model="cardiffnlp/twitter-roberta-base-sentiment")
classifier = pipeline("text-classification", model="unitary/toxic-bert")
app = Flask(__name__)
CORS(app)

load_dotenv()
# YouTube API key
API_KEY = os.getenv("API_KEY")
youtube = build('youtube', 'v3', developerKey=API_KEY) # initializing Youtube API

# POST params: video_id
# Fetches metadata such as thumbnail, number of likes, views, etc. of a video
@app.route('/metadata', methods=['POST'])
def metadata():
    data = request.get_json()
    # YouTube video id
    video_id = data.get('video_id')
    video_response = youtube.videos().list(
        part='snippet, contentDetails, statistics',
        id=video_id
    ).execute()
    if video_response['pageInfo']['totalResults']:
        videoStats = video_response['items'][0]
        # Parsing duration from ISO 8601 format to readable one
        duration = int(isodate.parse_duration(videoStats['contentDetails']['duration']).total_seconds())
        hours = duration // 3600
        minutes = (duration % 3600) // 60
        seconds = duration % 60
        return jsonify({
            "status": 200, 
            "message": "Video found!", 
            "duration": f"{hours}h{minutes}m{seconds}s", 
            "channelId": videoStats['snippet']['channelId'],
            "channelTitle": videoStats['snippet']['channelTitle'],
            "title": videoStats['snippet']['title'],
            "publishedAt": videoStats['snippet']['publishedAt'],
            # additional formatting to get numbers in international number system
            "commentCount": f"{int(videoStats['statistics']['commentCount']):,}",
            "likeCount": f"{int(videoStats['statistics']['likeCount']):,}",
            "viewCount": f"{int(videoStats['statistics']['viewCount']):,}"
        })
    else:
        return jsonify({
            "status": 404, 
            "message": "Could not find video!"
        })

# POST params: num_of_comments, video_id
# Main analyis of video comments, returns multiple stats
# STILL IN PROGRESS
@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    # Number of comments that will be fetched from YouTube to be analyzed; can configure
    num_of_comments=data.get('num_of_comments')
    # YouTube video id
    video_id=data.get('video_id')
    # Final sentiment score
    avg_sentiment = 0

    print("video id: " + video_id)

    # Getting the channelId of the video uploader
    video_response = youtube.videos().list(
        part='snippet',
        id=video_id
    ).execute()

    # Splitting the response for channelID
    video_snippet = video_response['items'][0]['snippet']
    uploader_channel_id = video_snippet['channelId']
    print("channel id: " + uploader_channel_id)

    # Start tracking time
    time1=time.time()

    # Fetch comments
    print("Fetching Comments...")
    comments = []
    nextPageToken = None
    while len(comments) < num_of_comments:
        requestt = youtube.commentThreads().list(
            part='snippet',
            videoId=video_id,
            order='relevance',
            maxResults=100,  # You can fetch up to 100 comments per request
            pageToken=nextPageToken
        )
        response = requestt.execute()
        for item in response['items']:
            comment = item['snippet']['topLevelComment']['snippet']
            # print(comment)
            # Check if the comment is not from the video uploader
            if comment['authorChannelId']['value'] != uploader_channel_id:
                comments.append(comment['textDisplay'])
        nextPageToken = response.get('nextPageToken')
        if not nextPageToken:
            break
    print(len(comments))
    hyperlink_pattern = re.compile(r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+')

    relevant_comments = []

    # Cleaning comments
    for comment_text in comments:
        comment_text = comment_text.lower().strip()
        if (any(char.isalnum() for char in comment_text)) and not hyperlink_pattern.search(comment_text):
                relevant_comments.append(comment_text)
    comments=relevant_comments

    toxic_comments = []
    results = classifier(comments, truncation=True, padding=True, max_length=512, batch_size=4)
    for result in results:
        if result['label'] == 'toxic' and result['score'] > 0.5:  # If the comment is toxic
            toxic_comments.append(comment)

    # CALCULATING SENTIMENTS ALL AT ONCE FOR MODEL 1
    # sentiments = sentiment_pipeline(comments)
    # print(len(comments))
    # for sentiment in sentiments:
    #     avg_sentiment += sentiment['score'] * (1 if sentiment['label'] == 'POSITIVE' else -1)

    # CALCULATING SENTIMENT ONE BY ONE FOR MODEL 1
    # for comment in comments:
    #   # try:
    #     sentiment = sentiment_pipeline(comment, truncation=True)
    #     avg_sentiment += sentiment[0]['score'] * (1 if sentiment[0]['label'] == 'POSITIVE' else -1)
    #   # except:
    #   #   print(comment)

    # # FOR MODEL 2 ONE BY ONE
    # for comment in comments:
    #     # Ensure the pipeline processes the text with truncation and padding, and set max_length to avoid long inputs
    #     sentiment = sentiment_pipeline(comment, truncation=True, padding=True, max_length=512)  # max_length=512 ensures truncation at the right length
    #     # Calculate sentiment score (1 for POSITIVE, -1 for NEGATIVE)
    #     if sentiment[0]['label'] == 'LABEL_0':
    #       mult=-1
    #     elif sentiment[0]['label'] == 'LABEL_2':
    #       mult=1
    #     else:
    #       mult=0
    #     avg_sentiment += sentiment[0]['score'] * mult

    # BATCH PROCESSING FOR MODEL 2
    sentiments = sentiment_pipeline(comments, truncation=True, padding=True, max_length=512, batch_size=4)
    for sentiment in sentiments:
        if sentiment['label'] == 'LABEL_0':
            mult=-1
        elif sentiment['label'] == 'LABEL_2':
            mult=1
        else:
            mult=0
        avg_sentiment += sentiment['score'] * mult
    avg_sentiment /= len(comments)

    print("Sentiment score:", avg_sentiment)
    print("Total time taken:", time.time()-time1)

app.run()