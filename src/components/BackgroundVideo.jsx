import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // When the component mounts, play the video
    video.play().catch(() => {
      console.warn("Autoplay blocked — user interaction required.");
    });

    // // Pause + reset video when user leaves or component unmounts
    // return () => {
    //   video.pause();
    //   video.src = "";
    //   video.load(); // release the video resource
    //   console.log("Background video stopped to save bandwidth.");
    // };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[10]"
    >
      <source src="/videos/RF_BG.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
