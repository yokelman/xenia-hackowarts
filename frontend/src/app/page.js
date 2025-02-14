import Image from "next/image";
import Hero from "./components/Hero";
import Toolbar from "./components/Toolbar";

export default function Home() {
  return (
   <div className="px-10 sm:px-40 bg-[url('/bg.png')] h-screen bg-cover bg-extend bg-center">
    <Toolbar />
    <Hero />
   </div>
  );
}
