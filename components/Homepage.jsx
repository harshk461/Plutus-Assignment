/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Homepage() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-inter bg-[linear-gradient(180deg,rgba(19,1,57,0)_0%,#130139_66.33%)]">
      {/* Background Image */}
      <img
        src="/assets/homeBackground.png"
        alt="background"
        className="hidden sm:block sm:absolute sm:inset-0 sm:w-full sm:h-full sm:object-cover sm:z-0"
      />

      {/* Centered Text */}
      <div className="relative z-20 flex flex-col justify-center items-center text-white text-center leading-[1] h-full">
        <h1 className="text-[70px] sm:text-[80px] font-bold flex items-end uppercase">
          Play
          <div className="w-[10px] h-[10px] bg-[#FF69EB] mb-[6px]"></div>
        </h1>
        <h1 className="text-[70px] sm:text-[80px] font-bold flex items-end uppercase">
          Predict
          <div className="w-[10px] h-[10px] bg-[#FF69EB] mb-[6px]"></div>
        </h1>
        <h1 className="text-[70px] sm:text-[80px] font-bold uppercase">
          Win Real
        </h1>
        <h1 className="text-[70px] sm:text-[80px] font-bold flex items-end uppercase">
          Rewards
          <div className="w-[10px] h-[10px] bg-[#FF69EB] mb-[6px]"></div>
        </h1>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex gap-3 items-center bg-[#FFFFFF33] px-4 py-[14px] border-[1px] border-[#FFFFFF33] rounded-[10px] cursor-pointer">
            <div>
              <img
                src="/assets/appleLogo.svg"
                alt=""
                className="w-[28px] h-[36px]"
              />
            </div>
            <div>
              <p className="text-sm leading-none text-start font-thin">
                Download on the
              </p>
              <p className="text-2xl leading-none text-start font-medium">
                App Store
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-center bg-[#FFFFFF33] px-4 py-[14px] border-[1px] border-[#FFFFFF33] rounded-[10px] cursor-pointer">
            <div>
              <img
                src="/assets/playLogo.png"
                alt=""
                className="w-[28px] h-[36px]"
              />
            </div>
            <div>
              <p className="text-sm leading-none text-start font-thin">
                Get it on
              </p>
              <p className="text-2xl leading-none text-start font-medium">
                Play Store
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="relative w-full">
        {/* Main image (on top) */}
        <img
          src="/assets/homepageBottom.png"
          alt="bottom"
          className="absolute bottom-0 left-0 w-full object-cover z-10"
        />

        {/* Flipped image (behind) */}
        <img
          src="/assets/homepageBottom.png"
          alt="bottom flipped"
          className="absolute bottom-0 left-0 w-full object-cover z-[9] scale-x-[-1] mb-[-100px]"
        />
      </div>
    </div>
  );
}
