import React from 'react'
import Loader from './Loader'

const Suggestion = (props) => {
  return (
<div className="p-4 bg-neutral-900 col-span-12 md:col-span-6 rounded-xl print:col-span-6">
        <div className="title text-2xl font-extrabold m-2 border-b-2  border-b-neutral-800 flex w-full items-center justify-between"><div>AI Suggestions</div></div>
{props.data == null?<Loader /> : <p>{props.data}</p>}
      
    </div>
  )
}

export default Suggestion
