"use client";

import React from "react";
import ImageCard from "./custom/ImageCard";

const Benefits = () => {
  const benefitsList = [
    {
      id: 1,
      title: "Passive income",
      description:
        "Generate cash flow without any of the management and operational burden of owning and operating a business.",
    },
    {
      id: 2,
      title: "Diversify portfolio",
      description:
        "SMBs have consistently generated healthy profits for decades without being vulnerable to volatility from financial and real estate markets. Now you get a chance to invest in a recession-resistant asset class across industries, locations, and services and truly diversify your portfolio with as low as $10,000 investment.",
    },
    {
      id: 3,
      title: "No operational headache",
      description:
        "Owning an SMB entails time and effort to operate it successfully. We take away that pain and allow you to own a piece of the SMB hassle-free.",
    },
    {
      id: 4,
      title: "Value appreciation",
      description:
        "Enjoy the appreciation of your investment while we implement best practices, utilize economies of scale, technology enablement, and marketing efforts to maximize the earning potential of the SMB.",
    },
  ];

  return (
    <div className="p-6 md:p-8">
      <h2 className="text-3xl text-center font-bold mb-8 text-gray-800">
        Benefits
      </h2>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First column: Image */}
        <div className="flex justify-center">
          <ImageCard src="/images/Benefits.png" /> {/* Updated src path */}
        </div>

        {/* Second column: Benefits list */}
        <div className="space-y-6">
          {benefitsList.map((benefit) => (
            <div
              key={benefit.id}
              className="border border-gray-200 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                <span className="text-primary font-bold">{`0${benefit.id} `}</span>
                {benefit.title}
              </h3>
              <p className="mt-3 text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
