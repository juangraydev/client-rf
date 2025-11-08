import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative min-h-screen flex  text-white max-h-[calc(100vh - 150px)]">
      <div className="h-[calc(100vh-202px)] w-full mt-[140px] z-10 px-[1rem] relative">
        <div className="text-left leading-[0.8] absolute top-[calc(45%-120px)] left-[5%]">
          <h1 className="text-[64px] font-[800] text-[#FFF]">MID RATE</h1>
          <h1 className="text-[45px] font-[800] text-[#FBAA0F]">HYBRID SERVER</h1>
          <p className="pl-[2px] text-[20px] text-[#fff]">Legends Aren’t Born, They’re Forged in RF.</p>
        </div>
        <div className="absolute top-[calc(50%+32px)] left-[5%]">
            <Button
                type="default"
                className="!h-[64px] !w-[200px] !text-[20px] !bg-[#FBAA0F] !text-[#FFF] !font-[800] !rounded-[10px] !border-none hover:!bg-[#fff] hover:!text-[#FBAA0F] transition-all duration-300"
            >
              <Link to="/download">DOWNLOAD NOW</Link>
            </Button>
        </div>
      </div>
    </main>
  );
}
