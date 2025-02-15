"use client"
import { useState } from "react"
import Toolbar from "../components/Toolbar"
import { Graph } from "../components/Graph"
import TopComment from "../components/TopComment"
import Metadata from "../components/Metadata"
import RatingGraph from "../components/RatingGraph"


const page = () => {
  const [url, setUrl] = useState("")
  const [analysed, setAnalysed] = useState(false)
let [meta, setMeta] = useState({
        duration:100,
        channelId:100,
        channelTitle:"title of channel",
        title:"title",
        commentCount:100,
        likeCount:"20k",
        viewCount:"30k"
    })

  const exportAsPDF = () => {
    window.print({ margin: 0})
  }

  function getYouTubeID(url) {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

  const analyze = () => {
    console.log(getYouTubeID(url))
    fetch('http://localhost:5000/metadata', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 'video_id': getYouTubeID(url)}) // Convert object to JSON string
    }
    ).then(e => e.json()).then(e => {
      setMeta({
        duration:e.duration,
        channelId:e.channelId,
        channelTitle:e.channelTitle,
        title:e.title,
        commentCount:e.commentCount,
        likeCount:e.likeCount,
        viewCount:e.viewCount
      })

      setAnalysed(true)

    })

 fetch('http://localhost:5000/analyze',{
  method: "POST", 
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ 'video_id': getYouTubeID(url) , 'num_of_comments':100}) // Convert object to JSON string
}).then(e => e.json()).then(e => {
  console.log(e)
})
  }

  return (
    <div className="px-10 sm:px-40 print:px-10 print:bg-black ">
      <Toolbar />
      {!analysed ?
        <div className="mt-40">
          <h1 className="text-7xl font-extralight text-center my-10">All it takes is <span className="underline decoration-purple-500">one click</span> </h1>
          <div className=" flex flex-col md:flex-row gap-2">
            <input type="text" value={url} onChange={e => setUrl(e.target.value)} className="text-lg bg-neutral-900 p-6 rounded-xl w-full" placeholder="Put the URL of the video here ...." />

            <button className="p-3 px-6 bg-white text-black font-black rounded-xl text-lg hover:bg-neutral-300 transition-all" onClick={analyze}>Analyze!</button>
          </div>
        </div> :
        <div className=" py-4">
          <div className="py-2 flex justify-end gap-2 controls pb-10">
            <button className="p-3 px-6 bg-neutral-900 text-white font-black rounded-xl text-lg hover:bg-neutral-800 transition-all">Analyse another video</button>
            <button className="p-3 px-6 bg-white text-black font-black rounded-xl text-lg hover:bg-neutral-300 transition-all" onClick={() => exportAsPDF()}>Export as PDF</button>
           </div>
          <div className="report grid grid-cols-12 gap-2">
            <div className="video col-span-8 print:col-span-6 p-4 bg-neutral-900 rounded-xl">
            <iframe className="w-full h-full rounded-xl" src={`https://www.youtube.com/embed/${getYouTubeID(url)}?si=oz9xn41AsqkXDpaR`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
            </div>
            <Metadata data={meta}/>
            <Graph />
            <RatingGraph />
            <TopComment />
          </div>
        </div>
      }
    </div>
  )
}

export default page
