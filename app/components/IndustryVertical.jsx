"use client";

import React, { useState } from "react";
import ButtonComponent from "./custom/ButtonComponent";
import ImageCard from "./custom/ImageCard";
import { motion } from "framer-motion";

const IndustryVertical = () => {
  const images = [
    {
      id: 1,
      src: "/images/Retail-Store.png",
      alt: "Retail Store",
      title: "Retail",
    },
    {
      id: 2,
      src: "/images/Construction-Site.png",
      alt: "Construction Site",
      title: "Construction",
    },
    {
      id: 3,
      src: "/images/Retail-Store.png",
      alt: "Retail Store",
      title: "Retail",
    },
    {
      id: 4,
      src: "/images/Construction-Site.png",
      alt: "Construction Site",
      title: "Construction",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handlePrev = () => {
    setFade(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const handleNext = () => {
    setFade(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      return newIndex;
    });
  };

  const handleTransitionEnd = () => {
    setFade(false);
  };

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 4; i++) {
      indices.push((currentIndex + i) % images.length);
    }
    return indices;
  };

  return (
    <div className="py-12 px-4 max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Industry Verticals</h2>
        <ButtonComponent
          text="Investments"
          onClick={() => console.log("Investments clicked")}
          className="text-lg px-8 py-4 rounded-3xl bg-black text-white transition-all duration-300 hover:bg-white hover:text-black"
        />
      </div>

      <div className="relative">
        <motion.div
          className={`flex gap-6 overflow-hidden transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          onTransitionEnd={handleTransitionEnd}
        >
          {getVisibleIndices().map((index) => (
            <motion.div
              key={images[index].id}
              initial={{ x: 100, scale: 0.9 }}
              animate={{ x: 0, scale: 1 }}
              exit={{ x: -100, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-[360px] h-[360px] flex-shrink-0 group"
            >
              <div className="relative h-full">
                <ImageCard
                  src={images[index].src}
                  alt={images[index].alt}
                  width={360}
                  height={360}
                  className="rounded-lg h-full w-full object-cover transition-all duration-300 group-hover:shadow-lg"
                />
                <p className="mt-4 text-lg font-medium text-center">
                  {images[index].title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center gap-4 mt-8">
          <ButtonComponent
            text="←"
            onClick={handlePrev}
            className="rounded-full w-12 h-12 bg-black text-white border border-black flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
          />
          <ButtonComponent
            text="→"
            onClick={handleNext}
            className="rounded-full w-12 h-12 bg-black text-white border border-black flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default IndustryVertical;
