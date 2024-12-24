import React from "react";
import FeaturedIn from "./FeaturedIn";

const ImpactAchievements = () => {
  const achievements = [
    {
      value: "120",
      label: "Assets under management",
    },
    {
      value: "500$",
      label: "Of cash flow distributed",
    },
    {
      value: "10-40%",
      label: "Return on investment",
    },
    {
      value: "500",
      label: "Existing investors",
    },
  ];

  return (
    <div className="px-10 py-4 mx-20">
      {" "}
      {/* Adjusted padding for alignment */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-7">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8">
          <h2 className="text-4xl font-bold mb-6">
            Our impact and achievements
          </h2>
          <p className="text-lg text-gray-700 text-justify mr-4">
            Our mission is to democratize SMB ownership, enabling people to
            invest fractionally in local businesses. We aim to foster
            sustainable growth, create jobs, and fuel local economies, all while
            providing an opportunity for building passive income and
            generational wealth.
          </p>
        </div>

        {/* Right Section - Grid */}
        <div className="md:w-1/2 mt-4 md:mt-0">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center px-2">
                <h3 className="text-4xl font-bold mb-3">{item.value}</h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactAchievements;
