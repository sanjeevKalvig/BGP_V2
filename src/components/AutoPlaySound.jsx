import React, { useRef, useState } from "react";
import "./AutoPlaySound.css";

export default function AutoPlaySound() {
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch((err) => {
        console.warn("Unmuted play blocked:", err);
      });

      // Stop audio after 4 seconds
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }, 4000);
    }

    // Trigger fade-out animation
    setFadeOut(true);

    // Remove loading screen after animation
    setTimeout(() => {
      setLoading(false);
    }, 800); // match with animation duration
  };

  return (
    <>
      {loading && (
        <div
          onClick={handleStart}
          className={`overlay fixed inset-0 flex flex-col  items-center bg-black text-white transition-all duration-700 ease-out ${
            fadeOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
          }`}
        >
          <div className=" logo-container flex flex-col justify-end  items-center   ">
            <div className="flex flex-col  items-center mb-[15%] gap-10">
              <img
                src="/logo.png"
                alt="Logo"
                className="logo bounce lg:w-1/2 lg:1/2 bg-transparent"
              />
              <h1 className="font-ethnocentric italic lg:text-[38px]">
                INDIA'S PREMIER MOTORSPORT <br /> CHAMPIONSHIP
              </h1>
            </div>

            <p className="click-text lg:text-[30px]">Click to Start</p>
          </div>
        </div>
      )}
      <audio ref={audioRef} src="/music.mp3" preload="auto" />
    </>
  );
}
