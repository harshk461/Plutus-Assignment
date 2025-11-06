/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Blend,
  ChevronLeft,
  ChevronRight,
  PenTool,
  TowerControl,
} from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const GameCard = ({ title, icon, imagePlaceholderUrl }) => (
  <div className="flex flex-col items-center w-64 sm:w-60 mr-4">
    <div className="relative w-full h-80">
      <img
        src={imagePlaceholderUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />
      <img
        src={icon}
        alt={`${title} icon`}
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-2xl"
      />
    </div>
    <p className="text-lg font-bold text-white tracking-wider mt-12">{title}</p>
  </div>
);

// Main Game Carousel Component
export default function GameCarousel() {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const games = [
    {
      title: "8 Ball Pool",
      url: "/assets/8Ball.png",
      icon: "/assets/8BallLogo.png",
    },
    {
      title: "Tower Twist",
      icon: "/assets/towerTwistIcon.png",
      url: "/assets/towerTwist.png",
    },
    {
      title: "Blazing Blades",
      icon: "/assets/blazingIcon.png",
      url: "/assets/blazing.png",
    },
    {
      title: "Boulder Blast",
      icon: "/assets/blastIcon.png",
      url: "/assets/blast.png",
    },
    {
      title: "Blazing Blades",
      icon: "/assets/blazingIcon.png",
      url: "/assets/blazing.png",
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
      <img src="/assets/plutusLogo.png" alt="" className="absolute left-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-12">
          <span className="text-white uppercase tracking-wider">
            TOP GAMES ON
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
                <GameCard
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
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-3 rounded-full bg-white/60 hover:bg-white/40 text-white transition-opacity duration-300 z-10 ${
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
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-3 rounded-full bg-white/60 hover:bg-white/40 text-white transition-opacity duration-300 z-10 ${
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
