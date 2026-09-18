import React from "react";
import { navMenu } from "../assets/asstes.js";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="fixed w-full py-4 z-50 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="text-2xl font-bold text-zinc-800">
            <span>THE-</span>
            <span className="text-teal-900 text-3xl font-orbitron">
              VIVEK PIWAL
            </span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-6 border border-gray-200 px-10 py-4 rounded-full hover:shadow-lg transition duration-300">
            {navMenu.map((item, index) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={index}
                className="relative  hover:text-purple-500 transition group"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div>
            <button onClick={() => window.open('https://drive.google.com/file/d/1g0k5r6J8Q9x2Y3Z4A5B6C7D8E9F0G1H2/view?usp=sharing', '_blank')}
              className="
                px-6 py-2
                border border-zinc-800
                rounded-full
                flex items-center gap-3
                cursor-pointer
                text-slate-500
                hover:text-slate-900
                hover:translate-y-1
                transition duration-300
              "
            >
              <span>RESUME</span>

              <FaArrowRight className="text-sm" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;

