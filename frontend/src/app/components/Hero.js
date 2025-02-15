"use client"

import Toolbar from "./Toolbar"

const Hero = () => {
    return (
        <>
        <Toolbar />
            <div className="flex flex-col h-screen items-center mt-40 ">
                <h1 className="text-7xl font-extralight text-center"><span className="underline decoration-purple-500">AI-Powered</span> Sentiment Analysis for YouTube Content</h1>
                <div className="buttons mt-10 flex gap-2">
                    <button className="p-3 px-6 bg-white text-black font-black rounded-full text-lg hover:bg-neutral-300 transition-all">Try it!</button>
                    <button className="p-3 px-6 bg-neutral-900 text-black font-black rounded-full text-lg hover:bg-neutral-800 transition-all text-white">View code on Github</button>
                </div>
            </div>
        </>
    )
}

export default Hero
