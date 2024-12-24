"use client";

import React, { useState } from "react";
import ImageCard from "./custom/ImageCard";

const HowItWorks = () => {
  const [activeCard, setActiveCard] = useState("browse");

  const cards = {
    browse: {
      image: "/images/Getty-Images.png",
      title: "1. Browse",
      description:
        "Browse Leveled SMBs each listed after thorough due diligence and operator has been put in place.",
    },
    invest: {
      image: "/images/image2.png",
      title: "2. Invest",
      description:
        "Invest in the businesses that align with your interests and financial goals.",
    },
    earn: {
      image: "/images/image3.png",
      title: "3. Earn",
      description:
        "Earn returns as the businesses grow and succeed, contributing to your portfolio.",
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-8">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="sticky top-24">
          <ImageCard
            src={cards[activeCard].image}
            alt={cards[activeCard].title}
            width={600}
            height={400}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col space-y-4">
        {Object.entries(cards).map(([key, card]) => (
          <div
            key={key}
            className={`${
              activeCard === key
                ? "bg-blue-600 scale-105"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white p-6 rounded-lg cursor-pointer transition-all duration-300`}
            onMouseEnter={() => setActiveCard(key)}
            onClick={() => setActiveCard(key)}
          >
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <p className="text-lg">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
