import React from "react";
import ImageCard from "./custom/ImageCard";

const FeaturedIn = () => {
  const logos = [
    { id: 1, src: "/logos/gophr-logo.png", alt: "GOPHR" },
    { id: 2, src: "/logos/stuart-logo.png", alt: "Stuart" },
    { id: 3, src: "/logos/dpd-logo.png", alt: "DPD" },
    { id: 4, src: "/logos/packfleet-logo.png", alt: "PACKFLEET" },
    { id: 5, src: "/logos/pedivan-logo.png", alt: "PEDIVAN" },
    { id: 6, src: "/logos/fin-logo.png", alt: "Fin" },
  ];

  return (
    <div className="text-center py-8">
      <h2 className="text-3xl font-semibold mb-4">Featured in</h2>
      <div className="flex justify-center space-x-8">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <ImageCard
              src={logo.src}
              alt={logo.alt}
              width={130}
              height={120}
              className=" bg-transparent"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedIn;
