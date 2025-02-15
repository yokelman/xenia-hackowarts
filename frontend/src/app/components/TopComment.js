"use client"

import Rating from "./Rating"

const TopComment = () => {
  return (
    <div className="col-span-12 p-4 rounded-xl bg-neutral-900">
        <div className="title text-2xl font-extrabold mt-2 border-b-2 pb-2 border-b-neutral-800 flex w-full items-center justify-between"><div>Top Comment</div> <Rating rating={5.5}/></div>
      <div className="flex py-2">
      <img src="https://xsgames.co/randomusers/assets/avatars/male/46.jpg" className="rounded-full w-10 h-10"/>
      <div className="flex flex-col pl-4">
        <h1 className="font-bold">@Username</h1>
        <h1 className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non fermentum lacus, a tempor enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque purus justo, aliquet ac diam in, ultrices consectetur turpis. Ut tincidunt semper lacus, vel ornare est finibus id. Suspendisse rhoncus eleifend magna, a congue orci facilisis nec. Morbi ac tempor quam, a pretium risus. Etiam eget finibus velit. Aliquam pharetra nisl nec lectus finibus semper. Maecenas et sollicitudin neque. Curabitur eleifend dolor tortor, sed euismod felis bibendum quis. Quisque id malesuada arcu, tincidunt fermentum justo.</h1>
      </div>
    </div>
    </div>
  )
}

export default TopComment
