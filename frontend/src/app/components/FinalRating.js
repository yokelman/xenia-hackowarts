import React from 'react'
import Rating from './Rating'

const FinalRating = (props) => {
  return (
    <div className='col-span-6 p-4 rounded-xl bg-neutral-900 h-contain '>
      <div className="title text-2xl font-extrabold mt-2 border-b-2 pb-2 border-b-neutral-800 flex w-full items-center gap-2 justify-between flex-col md:flex-row">Final Rating</div>
     <div className='flex flex-col justify-center items-center p-4 gap-4'>
      <div className='text-4xl'>{props.data}</div>
      <Rating rating={props.data}/>
      </div>
    </div>
  )
}

export default FinalRating
