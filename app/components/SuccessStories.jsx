"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonComponent from "./custom/ButtonComponent";

const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      id: 1,
      quote:
        "The platform is very easy to use, and I now have a stable passive income. I really like it, highly recommended!",
      author: "David Smith",
      position: "CEO Lorem Ipsum",
      image: "/images/ceo.png",
    },
    // Add more testimonials as needed
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-[1242px] mx-auto">
        <h3 className="text-xl mb-6">Success stories</h3>

        <div className="mb-12">
          <p className="text-4xl font-medium mb-8">
            {stories[currentSlide].quote}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={stories[currentSlide].image}
                alt={stories[currentSlide].author}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{stories[currentSlide].author}</p>
                <p className="text-gray-400">
                  {stories[currentSlide].position}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ButtonComponent
                text="←"
                onClick={handlePrevSlide}
                className="!bg-transparent !p-2 rounded-full border border-white/20 hover:!bg-white/10"
              />
              <ButtonComponent
                text="→"
                onClick={handleNextSlide}
                className="!bg-transparent !p-2 rounded-full border border-white/20 hover:!bg-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
