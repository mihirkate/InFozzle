import React from "react";
import Image from "next/image";

const ImageCard = ({ src, alt = "Image Card", width = 360, height = 360 }) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt} // Default alt text if none provided
        width={width} // Default width if none provided
        height={height} // Default height if none provided
        className="w-full h-full object-cover object-center rounded-3xl"
        priority
      />
    </div>
  );
};

export default ImageCard;
