import Creators from "@/components/Creators";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GameCarousel from "@/components/GameCarousel";
import Header from "@/components/Header";
import HeaderStrip from "@/components/HeaderStrip";
import Homepage from "@/components/Homepage";
import Testinomials from "@/components/Testinomials";
import WherePlutus from "@/components/WherePlutus";
import React from "react";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Homepage />
      <HeaderStrip />
      <GameCarousel />
      <Creators />
      <Testinomials />
      <WherePlutus />
      <FAQ />
      <Footer />
    </div>
  );
}
