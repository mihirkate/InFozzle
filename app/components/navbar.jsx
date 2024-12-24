"use client";

import React, { useState } from "react";
import Image from "next/image";
import ButtonComponent from "./custom/ButtonComponent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    console.log("clicked On LOGIN");
  };

  const handleSignup = () => {
    console.log("clicked On Signup");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      <div className="text-2xl font-bold text-black">
        <a href="/">
          <Image
            src="/images/LEVELED-Navbar.png"
            alt="Leveled Logo"
            width={120}
            height={40}
          />
        </a>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <ul
        className={`md:flex space-x-8 ${isOpen ? "block" : "hidden"} md:block`}
      >
        <li>
          <a href="#" className="text-black hover:underline">
            Investments
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:underline">
            Owners/Brokers
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:underline">
            Lorem Ipsum
          </a>
        </li>
      </ul>
      <div className="flex space-x-2">
        <ButtonComponent
          text="Login"
          onClick={handleLogin}
          className="!bg-white !text-black border border-black hover:!bg-gray-50"
        />
        <ButtonComponent text="Signup" onClick={handleSignup} />
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a href="#" className="text-black hover:underline">
                Investments
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Owners/Brokers
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
