import React from 'react';
import { motion } from 'framer-motion';

interface DungeonDetailProps {
  imageUrl?: string;
  enemyName?: string;
  enemyLevel?: number;
  currentPower?: number;
  rewards?: {
    reputation: number;
    experience: number;
    gold: string;
  };
  activeRules?: number;
}

const DungeonDetail: React.FC<DungeonDetailProps> = ({
  imageUrl = '/assets/GateOfGarden.png',
  enemyName = 'Wild Werewolf',
  enemyLevel = 1,
  currentPower = 7213,
  rewards = {
    reputation: 1,
    experience: 45,
    gold: '470 ~ 575',
  },
  activeRules = 0,
}) => {
  return (
    <motion.div
      className="text-white rounded-lg shadow-lg w-full max-w-lg mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Enemy Section */}
      <motion.div
        className="flex justify-between items-center p-2 h-32"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center">
          <motion.img
            src="/assets/werewolf-icon.png"
            alt={enemyName}
            className="w-16 h-16 border-2 border-gray-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{enemyName}</h2>
            <p className="text-green-400">Lv. {enemyLevel}</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-yellow-400 text-sm">Current Total Power</p>
          <p className="text-teal-400 text-xl flex items-center">
            <img src="/assets/swords-icon.png" alt="Swords" className="w-5 h-5 mr-1" />
            {currentPower.toLocaleString()}
          </p>
        </motion.div>
      </motion.div>

      {/* Status Icons Section */}
      <motion.div
        className="mt-6 flex justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex items-center space-x-2">
          {[
            { src: '/assets/poison-icon.png', alt: 'Poison', label: 'Poison', color: 'text-purple-400' },
            { src: '/assets/fire-icon.png', alt: 'Fire', label: 'Fire', color: 'text-red-400' },
            { src: '/assets/shield-icon.png', alt: 'Defense', label: 'Defense', color: 'text-yellow-400' },
          ].map((icon, index) => (
            <div key={index} className="text-center">
              <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
              <p className={`${icon.color} text-xs`}>{icon.label}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <img src="/assets/moon-icon.png" alt="Moon" className="w-8 h-8" />
          <p className="text-purple-400 ml-2">Dark</p>
        </div>
      </motion.div>

      {/* Active Rules Section */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <p className="text-white text-sm">Number of Rules Currently Active</p>
          <p className="text-teal-400">{activeRules}</p>
        </div>
      </motion.div>

      {/* Reward Section */}
      <motion.div
        className="mt-6 flex items-center justify-center bg-gray-800 p-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="text-left flex flex-col w-full">
          <p className="text-white text-lg text-center bg-[#273546]">Reward</p>
          <div className="mt-2 flex items-center bg-[#212733] align-middle justify-center">
            <img src="/assets/potion-icon.png" alt="Potion" className="w-12 h-12" />
            <div className="ml-4">
              <p>
                Reputation: <span className="text-teal-400">{rewards.reputation}</span>
              </p>
              <p>
                Experience: <span className="text-teal-400">{rewards.experience}</span>
              </p>
              <p>
                Gold: <span className="text-teal-400">{rewards.gold}</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Action Button with hover effect */}
      <motion.div
        className="mt-4 flex justify-center pb-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.button
          className="flex flex-row px-6 py-3 bg-yellow-400 text-blue-950 font-bold shadow justify-between items-center hover:bg-yellow-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          <img src="/assets/key-icon.png" alt="Key" className="w-20 mr-2" />
          <h2 className="text-xl">Enter Gate</h2>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DungeonDetail;
