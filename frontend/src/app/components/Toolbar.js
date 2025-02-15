"use client"
import Link from "next/link"

const Toolbar = () => {
  return (
    <div className="py-4 flex items-center justify-between toolbar">
      <Link href={'/'} className="logo text-3xl"><img src="/logo.svg" className="w-12"></img></Link>
      <div className="flex items-center">
        <div className="flex items-center hidden md:block">
      {/* <Link href={`/`} className="mr-10 border-b-4 border-b-transparent hover:border-b-purple-500 transition-all ">Home</Link>
        <Link href={`/`} className="mr-10 border-b-4 border-b-transparent hover:border-b-purple-500 transition-all ">About</Link> */}
       </div>
        <Link href="/analysis" className="p-3 px-6 bg-white text-black font-black rounded-full text-lg hover:bg-neutral-300 transition-all">Try it!</Link>
      </div>
    </div>
  )
}

export default Toolbar
