import { CloudLightning, Gamepad2Icon, ShieldCheckIcon } from "lucide-react";
import React from "react";

const FeatureItem = ({ icon: Icon, playerCount, description }) => (
  <div className="flex flex-col items-center text-center">
    <h3 className="text-2xl font-bold text-white uppercase mb-4 tracking-wide">
      {playerCount}
    </h3>
    <div className="flex items-center gap-4 justify-center">
      <div className="flex items-center justify-center rounded-full bg-pink-600 text-white p-4">
        <Icon />
      </div>
      <p className="text-sm sm:text-base font-semibold text-gray-200 uppercase tracking-wider">
        {description}
      </p>
    </div>
  </div>
);

export default function HeaderStrip() {
  const featuresData = [
    {
      playerCount: "500K+ PLAYERS",
      description: "100% SKILL-BASED GAMEPLAY",
      icon: Gamepad2Icon,
    },
    {
      playerCount: "500K+ PLAYERS",
      description: "INSTANT WITHDRAWALS",
      icon: CloudLightning,
    },
    {
      playerCount: "500K+ PLAYERS",
      description: "LICENSED & COMPLIANT",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <section className="bg-[linear-gradient(90deg,_#870075_-76.84%,_#100134_110.8%)] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-16 flex-wrap">
          {featuresData.map((feature, index) => (
            <React.Fragment key={index}>
              <FeatureItem
                icon={feature.icon}
                playerCount={feature.playerCount}
                description={feature.description}
              />
              {/* Divider */}
              {index < featuresData.length - 1 && (
                <>
                  {/* Vertical divider for tablet/desktop */}
                  <div className="hidden md:block w-px h-24 bg-[#FF69EB]" />
                  {/* Horizontal divider for mobile */}
                  <div className="block md:hidden w-1/2 h-px bg-[#FF69EB] my-4" />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
