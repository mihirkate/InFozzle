"use client";

import React from "react";
import Image from "next/image";
import ButtonComponent from "./custom/ButtonComponent";

const Navbar = () => {
  const handleLogin = () => {
    console.log("clicked On LOGIN");
  };

  const handleSignup = () => {
    console.log("clicked On Signup");
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
      <ul className="flex space-x-8">
        <li>
          <a href="#" className="text-black hover:">
            Investments
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:">
            Owners/Brokers
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:">
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
    </nav>
  );
};

export default Navbar;
