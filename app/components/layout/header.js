import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="fixed h-full w-full">
      <div className="bg-yellow-400 flex justify-between ">
        <div className="text-black text-2xl font-bold leading-7 cursor-pointer p-5">
         <Link href="/">
         <span>My Portfolio</span>
         </Link>
        </div>
        <div className="flex justify-evenly mr-10">
          <div className="p-5 hover:bg-white cursor-pointer">
            <Link href="/about">
              <span className=" text-black">About</span>
            </Link>
          </div>
          <div className="p-5 hover:bg-white cursor-pointer">
            <Link href="/project">
              <span className=" text-black">Project</span>
            </Link>
          </div>
          <div className="p-5 hover:bg-white cursor-pointer">
            <Link href="/contact">
              <span className=" text-black">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
