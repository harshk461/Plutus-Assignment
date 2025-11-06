/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Homepage() {
  return (
    <div className="relative w-full lg:h-screen h-[75vh] bg-black overflow-hidden font-inter">
      {/* Background Image */}
      <img
        src="/assets/homepage.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* Centered Text */}
      <div className="relative z-20 flex flex-col justify-center items-center text-white text-center leading-[1] h-[80%]">
        <h1 className="text-[70px] sm:text-[70px] font-bold">
          Play
          <span className="bg-clip-text  text-[#FF69EB]">.</span>
        </h1>
        <h1 className="text-[70px] sm:text-[70px] font-bold">
          Predict
          <span className="bg-clip-text  text-[#FF69EB]">.</span>
        </h1>
        <h1 className="text-[70px] sm:text-[70px] font-bold">Win Real</h1>
        <h1 className="text-[70px] sm:text-[70px] font-bold">
          Rewards
          <span className="bg-clip-text  text-[#FF69EB]">.</span>
        </h1>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <img
            src="/assets/apple.png"
            alt="Apple Store"
            className="w-36 sm:w-40 cursor-pointer hover:scale-105 transition-transform duration-300"
          />
          <img
            src="/assets/googlePlay.png"
            alt="Google Play Store"
            className="w-36 sm:w-40 cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Bottom Image */}
      <img
        src="/assets/homepageBottom.png"
        alt="bottom"
        className="absolute bottom-0 left-0 w-full object-cover z-10"
      />
    </div>
  );
}
