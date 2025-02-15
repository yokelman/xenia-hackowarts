"use client"

import Image from "next/image";
import Hero from "./components/Hero";
import Toolbar from "./components/Toolbar";
import About from "./components/About";

export default function Home() {
  return (
   <div className="px-10 sm:px-40">
    {/* <Toolbar /> */}
    <Hero />
    {/* <About /> */}
   </div>
  );
}
