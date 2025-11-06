/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function WherePlutus() {
  return (
    <section className="bg-black font-inter lg:px-4 pb-20">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-12 pt-16">
        <span className="text-white uppercase tracking-wider">
          Where you can play Plutus?
        </span>
      </h2>
      <div className="flex justify-center">
        <img
          src="/assets/wherePlutus.png"
          alt="where plutus"
          className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-[700px] object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
