"use client"
import React from 'react'
import Rating from './Rating'
import Loader from './Loader'
const ToxicComments = (props) => {
  return (
    <div className='col-span-12 print:col-span-6 md:col-span-6 p-4 rounded-xl bg-neutral-900 h-full  '>

     {props.data == null ? <Loader /> :<div className='flex flex-col justify-center items-center h-full p-4 gap-4'>
        <div className="title text-2xl font-extrabold mt-2 pb-2 w-full text-center text-4xl underline decoration-8 decoration-purple-500">Number of toxic comments</div>
      <div className='text-6xl mt-5'>{(props.data)}</div>
      </div>}
    </div>
  )
}

export default ToxicComments
