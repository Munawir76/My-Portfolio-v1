import React from "react";
import LayoutMain from "./components/layout/layoutMain";
import Image from "next/image";

export default function Home() {
  return (
    <LayoutMain>
     <div className="h-screen w-full bg-white">
      <div className="absolute top-0 right-0">
      <Image src="/asset/yellow-bg.png" width={777} height={877}/>
      </div>
      <div className="flex ">
        <span className="w-[486px] h-[408px] text-black bg-red-500">ajbdkiab</span>
      </div>
     </div>
     
    </LayoutMain>
  );
}
