"use client";

import React from "react";

const ButtonComponent = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-3xl bg-black text-white hover:bg-black/90 hover:shadow-3xl transition-all duration-300 ${className}`}
      style={{ lineHeight: 1 }}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
