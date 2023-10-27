import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="p-4 bottom-0 h-full w-ful bg-gray-200">
      <div className=" flex justify-center  ">
        <div className="cursor-pointer flex justify-between gap-10 ">
          <Image src="/asset/icon/instagram.png" width={40} height={40} />
          <Image src="/asset/icon/linkedin.png" width={40} height={40} />
          <Image src="/asset/icon/email.png" width={48} height={40} />
        </div>
      </div>
      <div className="flex justify-center text-black mt-2">
        <span>Munawir Sajali</span>
      </div>
    </div>
  );
}
