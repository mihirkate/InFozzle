"use client";

import React from "react";
import Image from "next/image";
import ButtonComponent from "./custom/ButtonComponent";
import InvestmentCounter from "./InvestmentCounter";

const MainStreet = () => {
  const images = [
    {
      id: 1,
      src: "/images/image1.png",
      alt: "Cafe Owner",
      width: 260,
      height: 368,
    },
    {
      id: 2,
      src: "/images/image2.png",
      alt: "Retail Store",
      width: 260,
      height: 280,
    },
    {
      id: 3,
      src: "/images/image3.png",
      alt: "Store Front",
      width: 260,
      height: 200,
    },
    {
      id: 4,
      src: "/images/image4.png",
      alt: "Business Owner",
      width: 260,
      height: 280,
    },
    {
      id: 5,
      src: "/images/image5.png",
      alt: "Entrepreneur",
      width: 260,
      height: 368,
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-10 py-12">
      {/* Header Section */}
      <div className="text-center mb-7">
        <h1 className="text-[48px] font-bold mb-4 max-w-[700px] mx-auto leading-tight">
          Own a piece of Main Street: Join the SMB revolution!
        </h1>
        <p className="text-gray-600 mb-10 max-w-[600px] mx-auto text-lg">
          Diversify your portfolio — unlock the attractive returns of Small -
          Medium Businesses without any of the operational burden.
        </p>
        <ButtonComponent
          text="Join the Waitlist →"
          onClick={() => console.log("Joined waitlist")}
          className="bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors"
        />
      </div>

      {/* Images Grid */}
      <div className="flex justify-between items-end gap-6 mb-16">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-[32px]"
            style={{
              width: image.width,
              height: image.height,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Investment Counter */}
      <div className="mt-16">
        <InvestmentCounter />
      </div>
    </div>
  );
};

export default MainStreet;
