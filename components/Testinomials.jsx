/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Apple, ChevronLeft, ChevronRight, Star } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const cardData = [
    {
      summary: "Its extremely engaging",
      reviewText:
        "It's real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers",
      rating: 5,
      date: "AUG 22",
      author: "Tonstersir",
    },
    {
      summary: "Amazing experience",
      reviewText:
        "It's real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers",
      rating: 5,
      date: "AUG 22",
      author: "GameMaster",
    },
    {
      summary: "Highly recommended",
      reviewText:
        "It's real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers",
      rating: 5,
      date: "AUG 22",
      author: "ProPlayer",
    },
    {
      summary: "Best game ever",
      reviewText:
        "It's real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers",
      rating: 5,
      date: "AUG 22",
      author: "CoinCollector",
    },
    {
      summary: "Highly recommended",
      reviewText:
        "It's real bets being placed and if you don't have coins you're allowed to grind xp in the free games and you're not as on edge as you are when playing for coins obviously and yes the coins can actually be converted great game overall no sore losers",
      rating: 5,
      date: "AUG 22",
      author: "ProPlayer",
    },
  ];

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    if (isPaused) return;

    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = 450 + 16; // card width + gap
    const interval = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        // Reset to start smoothly
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 450 + 16;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-black font-inter">
      <img
        src="/assets/plutusLogo.png"
        alt=""
        className="absolute left-0 w-[70px] h-[70px]"
      />
      <div className="relative flex items-center justify-center max-w-6xl mx-auto px-4 mb-12 pt-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center">
          <span className="text-white uppercase tracking-wider">
            Testimonials
          </span>
        </h2>

        {/* Image on the right */}
        <img
          src="/assets/testimonials.png"
          alt="testimonials"
          className="absolute right-10 lg:right-0 w-28 object-cover rounded-2xl"
        />
      </div>

      <div className="relative max-w-full mx-auto px-4">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed p-2 rounded-full transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed p-2 rounded-full transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cardData.map((item, index) => (
            <TestimonialCard
              key={index}
              summary={item.summary}
              reviewText={item.reviewText}
              author={item.author}
              rating={item.rating}
              date={item.date}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({
  summary,
  reviewText,
  rating,
  date,
  author,
  index,
}) => {
  const fullStars = Math.min(5, Math.floor(rating));

  return (
    <div
      className="relative flex flex-col gap-4 min-w-[450px] w-[450px] p-4 rounded-lg border-[1px] border-[#FFFFFF1F]
    bg-[linear-gradient(90deg,_rgba(135,0,117,0.63)_-76.84%,_rgba(16,1,52,0.63)_110.8%)]"
    >
      <img
        src="/assets/plutusLogo.png"
        alt=""
        className={
          index % 2 == 0
            ? `absolute top-0 left-0 w-[250px]`
            : `absolute bottom-0 right-0 w-[250px] -scale-x-100`
        }
      />
      <div className="flex justify-between items-start">
        <div>
          <p className="text-lg text-white font-semibold">{summary}</p>
          <div className="flex gap-2">
            <div className="flex gap-1">
              {[...Array(fullStars)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill="yellow"
                  strokeWidth={0}
                  color="yellow"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white items-end font-thin text-[14px]">
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
      <div>
        <p className="text-[12px] text-white mt-6">{reviewText}</p>
      </div>
      <div className="flex items-end justify-end">
        {/* <Apple color="white" /> */}
        <img src="/assets/appleLogo.svg" alt="" />
      </div>
    </div>
  );
};
