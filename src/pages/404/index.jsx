// "use client"

import { Button } from "antd";

// import Link from "next/link";


export default function Error404() {
  return (
    <main className="relative min-h-screen flex  text-white max-h-[calc(100vh - 150px)]">
      <div className="h-[calc(100vh-202px)] w-full mt-[140px] z-10 px-[1rem] relative">
        <div className="text-left leading-[0.8] absolute top-[calc(45%-120px)] left-[5%]">
          <h1 className="text-[64px] font-[800] text-[#FFF]">ERROR 404</h1>
          <h1 className="text-[45px] font-[800] text-[#FBAA0F]">Page Not Found!</h1>
        </div>
      </div>
    </main>
  );
}
