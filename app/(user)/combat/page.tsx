'use client'

import { motion } from 'framer-motion';
import { FlaskRound, HeartPulse, Plus, ZapIcon } from 'lucide-react'
import React, { useState } from 'react'
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

const EnemyHealthBar = () => {
  const [health, setHealth] = useState(78.43); // Start with the example health percentage
  const maxHealth = 100;
  const level = 29;
  const enemyName = "Shadow of Trials Leader";
  const enemyCount = 16;

  return (
    <div className="flex flex-col items-center">
      {/* Enemy Name and Level */}
      <div className="text-center text-red-600 font-bold text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
        LV. {level} {enemyName}
      </div>

      <div className="relative flex items-center ">
        {/* Health Bar */}
        <div className="relative w-[300px] sm:w-[300px] md:w-[600px] lg:w-[700px] xl:w-[800px]  h-[10px] bg-gray-700 rounded-[20px] flex items-center">
          {/* Health Gradient */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-red-500 to-red-600 shadow-[0_0_10px_rgba(255,0,0,0.7)]"
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

function page() {
  return (
    <div className="flex flex-col w-screen h-screen justify-between align-middle">
    <div className="flex items-center justify-center align-top">
      <EnemyHealthBar /> {/* Integrate the HealthBar component */}
    </div>
    <div className="flex items-center justify-center mb-28 gap-2">
      <HealthBar /> {/* Integrate the HealthBar component */}
      <div className='flex flex-col gap-2 '>
      <FlaskRound
        className="text-red-600 border-2 border-gray-500 w-10 h-10"
      />
            <ZapIcon
        className="text-yellow-200 border-2 border-gray-500 w-10 h-10"
      />
      </div>
    </div>
    
  </div>
  )
}

export default page