import React, { useState } from 'react'

const Metadata = () => {
    let [meta, setMeta] = useState({
        duration:100,
        channelId:100,
        channelTitle:"title of channel",
        title:"title",
        commentCount:100,
        likeCount:"20k",
        viewCount:"30k"
    })
  return (
    <div className="p-4 bg-neutral-900 col-span-4 rounded-xl print:col-span-6">
        <div className="title text-2xl font-extrabold mt-2 border-b-2 pb-2 border-b-neutral-800 flex w-full items-center justify-between"><div>Meta Data</div></div>

        <ul className="py-5">
        {Object.entries(meta).map(([key, value]) => (
          <li key={key}>
            <span className="font-bold capitalize">{key.replace(/([A-Z])/g, " $1")}:</span> {value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Metadata
