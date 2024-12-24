import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="w-[605px] h-[552px] top-[2402px] left-[100px] rounded-[20px] bg-blue-100 p-4 shadow-lg">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-base text-justify">{content}</p>
    </div>
  );
};

export default Card;
