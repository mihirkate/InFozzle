import React from "react";

const GridComponent = () => {
  return (
    <div
      className="flex justify-between mt-8"
      style={{
        width: "1240px",
        height: "368px",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/image1.png"
        alt="Business 1"
        className="rounded-lg"
        style={{
          width: "260px",
          height: "368px",
          borderRadius: "20px",
        }}
      />
      <img
        src="/images/image2.png"
        alt="Business 2"
        className="rounded-lg"
        style={{
          width: "220px",
          height: "250px",
          borderRadius: "20px",
          marginTop: "20px", // Adjusting top margin for alignment
        }}
      />
      <img
        src="/images/image3.png"
        alt="Business 3"
        className="rounded-lg"
        style={{
          width: "220px",
          height: "156px",
          borderRadius: "20px",
          marginTop: "20px", // Adjusting top margin for alignment
        }}
      />
      <img
        src="/images/image4.png"
        alt="Business 4"
        className="rounded-lg"
        style={{
          width: "220px",
          height: "250px",
          borderRadius: "20px",
          marginTop: "20px", // Adjusting top margin for alignment
        }}
      />
      <img
        src="/images/image5.png"
        alt="Business 5"
        className="rounded-lg"
        style={{
          width: "260px",
          height: "368px",
          borderRadius: "20px",
        }}
      />
    </div>
  );
};

export default GridComponent;
