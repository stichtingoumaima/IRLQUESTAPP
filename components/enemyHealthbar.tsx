

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

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

export default EnemyHealthBar;
