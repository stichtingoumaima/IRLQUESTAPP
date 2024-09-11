"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import {
  Fan,
  FlameIcon,
  MessageCircle,
  PocketKnife,
  Snowflake,
  ZapIcon,
} from "lucide-react";
import { EyeClosedIcon, HobbyKnifeIcon } from "@radix-ui/react-icons";

const HealthBar = () => {
  const [health, setHealth] = useState(100);
  const maxHealth = 255;
  const level = 3;

  // Function to handle taking damage
  const takeDamage = () => {
    setHealth((prev) => Math.max(prev - 20, 0)); // Decrease health by 20, but not below 0
  };

  // Function to handle healing
  const heal = () => {
    setHealth((prev) => Math.min(prev + 20, maxHealth)); // Increase health by 20, but not above maxHealth
  };

  return (
    <div className=" flex flex-col gap-4">
  
      <div className="flex justify-center gap-2 mt-4  ">
      <img
  onClick={takeDamage}
    src="/assets/spell1.png" // Replace with your image URL
    alt="Hexagon Image"
    className="w-full  h-full object-cover text-white bg-gray-500 overflow-hidden shadow-md transform transition duration-500 ease-in-out avatar-inner-glow hover:-translate-y-1 hover:shadow-[inset_1px_1px_40px_#0000FF73]"
    style={{
      width: '3.5rem', // Size of the hexagon
      height: '4rem', // Size of the hexagon
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    }}
  />
       <img
  onClick={takeDamage}
    src="/assets/spell1.png" // Replace with your image URL
    alt="Hexagon Image"
    className="w-full  h-full object-cover text-white bg-gray-500 overflow-hidden shadow-md transform transition duration-500 ease-in-out avatar-inner-glow hover:-translate-y-1 hover:shadow-[inset_1px_1px_40px_#0000FF73]"
    style={{
      width: '3.5rem', // Size of the hexagon
      height: '4rem', // Size of the hexagon
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    }}
  />
        <img
  onClick={heal}
    src="/assets/spell2.png" // Replace with your image URL
    alt="Hexagon Image"
    className="w-full  h-full object-cover text-white bg-gray-500 overflow-hidden shadow-md transform transition duration-500 ease-in-out avatar-inner-glow hover:-translate-y-1 hover:shadow-[inset_1px_1px_40px_#0000FF73]"
    style={{
      width: '3.5rem', // Size of the hexagon
      height: '4rem', // Size of the hexagon
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    }}
  />
          <img
  onClick={takeDamage}
    src="/assets/spell3.png" // Replace with your image URL
    alt="Hexagon Image"
    className="w-full  h-full object-cover text-white bg-gray-500 overflow-hidden shadow-md transform transition duration-500 ease-in-out avatar-inner-glow hover:-translate-y-1 hover:shadow-[inset_1px_1px_40px_#0000FF73]"
    style={{
      width: '3.5rem', // Size of the hexagon
      height: '4rem', // Size of the hexagon
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    }}
  />



      </div>
      <div className="relative flex items-center ">
        {/* Health Bar */}
        <div className="relative w-[350px]  sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]  h-[10px] bg-gray-700 rounded-[20px] flex items-center">
          {/* Health Gradient */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-green-500 to-green-400 shadow-[0_0_10px_rgba(0,255,59,0.7)]"
            initial={{ width: `${health}%` }}
            animate={{ width: `${health}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Health Percentage Text */}
          <div className="absolute w-full flex justify-center text-white font-bold text-xs">
            {health.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthBar;
