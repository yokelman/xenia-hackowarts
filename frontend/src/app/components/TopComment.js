"use client"

import Loader from "./Loader"
import Rating from "./Rating"

const TopComment = (props) => {
  console.log(props.data)
  return (
    <div className="col-span-6 p-4 rounded-xl bg-neutral-900 h-fit">

      <div className="title text-2xl font-extrabold mt-2 border-b-2 pb-2 border-b-neutral-800 flex w-full items-center gap-2 justify-between flex-col md:flex-row">Top Comment</div>
    {props.data == null?<Loader />:
      <div className="flex py-2">
      <img src={props.data.authorProfileImageUrl} className="rounded-full w-10 h-10"/>
      <div className="flex flex-col pl-4">
        <h1 className="font-bold">{props.data.authorDisplayName}</h1>
        <h1 className="font-light">{props.data.comment}</h1>

      <div className="mt-5 flex items-center justify-between"><div className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
 {props.data.likeCount}</div><Rating rating={props.data.rating}/></div>

      </div>

    </div>}
    </div>
  )
}

export default TopComment
