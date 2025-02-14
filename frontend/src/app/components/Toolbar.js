import Link from "next/link"

const Toolbar = () => {
  return (
    <div className="py-4 flex items-center justify-between">
      <div className="logo text-3xl">LOGO</div>
      <div className="flex items-center">
        <div className="flex items-center hidden md:block">
      <Link href={`/`} className="mr-10 border-b-4 border-b-transparent hover:border-b-purple-500 transition-all ">Home</Link>
        <Link href={`/`} className="mr-10 border-b-4 border-b-transparent hover:border-b-purple-500 transition-all ">About</Link>
       </div>
        <button className="p-3 px-6 bg-white text-black font-black rounded-full text-lg hover:bg-neutral-300 transition-all">Try it!</button>
      </div>
    </div>
  )
}

export default Toolbar
