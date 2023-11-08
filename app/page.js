import React from "react";
import LayoutMain from "./components/layout/layoutMain";
import Image from "next/image";

export default function Home() {
  return (
    <LayoutMain>
      <div className="h-screen w-full bg-white">
        <div className="absolute top-0 right-0">
          <Image src="/asset/yellow-bg.png" width={777} height={877} />
        </div>
        <div className="absolute top-[110px] left-[104px] ">
          <div className="w-[400px] h-[408px] text-black flex flex-col content-between">
            <span className="text-[#FDC435] font-bold text-[20px]">
              Frontend Web Developer
            </span>
            <span className="text-black font-bold text-[44px]">
              Hello, my name is Madelyn Torff
            </span>
            <span className="text-black font-light text-[24px] mt-6">
              Short text with details about you, what you do or your
              professional career. You can add more information on the about
              page.
            </span>
            <div className="flex justify-start gap-5 mt-6">
              <button className="cursor-pointer p-2 w-max bg-[#FDC435] rounded-md font-medium">
                Projects
              </button>
              <button className="cursor-pointer p-2 w-max outline outline-2 rounded-md font-medium">
                Linkedin
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
}
