"use client"
import { useState } from "react"
import Toolbar from "../components/Toolbar"
import { Graph } from "../components/Graph"


const page = () => {
  const [url, setUrl] = useState("")
  const [analysed, setAnalysed] = useState(true)

  const exportAsPDF = () => {
    window.print({ margin: 0})
  }

  return (
    <div className="px-10 sm:px-40 print:px-10 print:bg-black ">
      <Toolbar />
      {!analysed ?
        <div className="mt-40">
          <h1 className="text-7xl font-extralight text-center my-10">All it takes is <span className="underline decoration-purple-500">one click</span> </h1>
          <div className=" flex flex-col md:flex-row gap-2">
            <input type="text" value={url} onChange={e => setUrl(e.target.value)} className="text-lg bg-neutral-900 p-6 rounded-xl w-full" placeholder="Put the URL of the video here ...." />

            <button className="p-3 px-6 bg-white text-black font-black rounded-xl text-lg hover:bg-neutral-300 transition-all">Analyze!</button>
          </div>
        </div> :
        <div className=" py-4">
          <div className="py-2 flex justify-end gap-2 controls">
            <button className="p-3 px-6 bg-neutral-900 text-white font-black rounded-xl text-lg hover:bg-neutral-800 transition-all">Analyse another video</button>
            <button className="p-3 px-6 bg-white text-black font-black rounded-xl text-lg hover:bg-neutral-300 transition-all" onClick={() => exportAsPDF()}>Export as PDF</button>
           </div>
          <div className="report grid grid-cols-12">
            <Graph />
          </div>
        </div>
      }
    </div>
  )
}

export default page
