import React from "react";

export default function Header() {
  return (
    <div className="fixed-top h-full w-full">
      <div className="bg-yellow-400 flex justify-between p-4 ">
        <div className="text-black text-2xl font-bold leading-7 cursor-pointer">
          <span>My Portfolio</span>
        </div>
        <div className="flex justify-evenly gap-32 text-black mr-40 cursor-pointer">
          <span>About</span>
          <span>Project</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}
