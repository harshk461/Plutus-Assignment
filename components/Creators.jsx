/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const CreatorCard = ({ title, imagePlaceholderUrl }) => {
  return (
    <div className="relative w-[300px] h-[500px] rounded-2xl overflow-hidden border border-[#FFFFFF1F] mr-4">
      <img
        src={imagePlaceholderUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

      <div className="absolute bottom-4 left-0 w-full px-4 flex flex-col text-white">
        <span className="text-xs text-gray-300 font-semibold uppercase tracking-wide">
          #SPORTS
        </span>
        <h2 className="text-lg font-semibold mt-1">
          Messi’s MLS team to win their season opener?
        </h2>

        <p className="text-xs text-gray-300 mt-2">Ends in 0D 0hrs 0mins</p>

        <div className="flex justify-between mt-4">
          <button className="flex-1 mr-2 border-[1px] border-[#07F93C] rounded-lg text-[14px] bg-[#004012] py-[2px]">
            Yes
          </button>
          <button className="flex-1 mr-2 border-[1px] border-[#FD5C5C] rounded-lg text-[14px] bg-[#450404] py-[2px]">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Creators() {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const games = [
    {
      title: "8 Ball Pool",
      icon: "/assets/towerTwistIcon.png",
      url: "/assets/f1.png",
    },
    {
      title: "8 Ball Pool",
      icon: "/assets/towerTwistIcon.png",
      url: "/assets/messi.png",
    },
    {
      title: "8 Ball Pool",
      icon: "/assets/towerTwistIcon.png",
      url: "/assets/mrBeast.png",
    },
    {
      title: "8 Ball Pool",
      icon: "/assets/towerTwistIcon.png",
      url: "/assets/aersanl.png",
    },
  ];

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setScrollPosition(el.scrollLeft);
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2; // Scroll half the container width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative bg-black font-inter">
      <img
        src="/assets/plutusLogo.png"
        alt="plutus logo"
        className="absolute right-0 -scale-x-100 w-[250px] h-[250px]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-12 pt-16">
          <span className="text-white uppercase tracking-wider">
            PREDICT NOW ON
          </span>{" "}
          <span className="text bg-clip-text text-[#FF69EB]">PLUTUS</span>
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scrollable Game Cards */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-scroll no-scrollbar py-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {games.map((game, index) => (
              <div key={index} style={{ scrollSnapAlign: "start" }}>
                <CreatorCard
                  title={game.title}
                  icon={game.icon}
                  imagePlaceholderUrl={game.url}
                />
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/40 text-white transition-opacity duration-300 z-10 ${
              canScrollLeft ? "opacity-100" : "opacity-0 cursor-default"
            } hidden sm:block`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/40 text-white transition-opacity duration-300 z-10 ${
              canScrollRight ? "opacity-100" : "opacity-0 cursor-default"
            } hidden sm:block`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Scroll Indicator (optional, but helpful) */}
        <p className="text-center text-gray-500 text-sm mt-4 sm:hidden">
          &larr; Scroll to see more games &rarr;
        </p>
      </div>
      {/* Custom CSS to hide the scrollbar for the carousel */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
