"use client"
import React, { useState } from 'react'

const Metadata = (props) => {

  function capitalizeFirstLetter(str) {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  }
  
  return (
    <div className="p-4 bg-neutral-900 col-span-12 md:col-span-4 rounded-xl print:col-span-6 min-h-[450px]">
        <div className="title text-2xl font-extrabold m-2 border-b-2  border-b-neutral-800 flex w-full items-center justify-between"><div>Meta Data</div></div>

        <ul className="flex flex-col justify-center h-full">
        {Object.entries(props.data).map(([key, value]) => (
          <li key={key}>
            <span className="font-black text-xl first-letter:uppercase">{capitalizeFirstLetter(key)}:</span> <span className='text-xl font-light text-neutral-500'>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Metadata
