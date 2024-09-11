'use client';
import React, { useState, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Lock, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '../ui/dialog';
import DungeonDetail from './DungeonDetail';

// Sample data for the gates
const gates = [
  { id: 1, level: 1, unlocked: true, image: '/assets/GateOfGarden.png', title: 'Mystic Garden', description: 'A lush forest hiding ancient secrets', rewards: '500 XP, Rare Item' },
  { id: 2, level: 5, unlocked: true, image: '/assets/GateOfSnow.png', title: 'Frozen Tundra', description: 'A cold wasteland ruled by icy beasts', rewards: '700 XP, Epic Item' },
  { id: 3, level: 10, unlocked: false, image: '/assets/locked-gate.png', title: 'Volcanic Cavern', description: 'Molten magma and fiery monsters await', rewards: '1000 XP, Legendary Item' },
  { id: 4, level: 15, unlocked: false, image: '/assets/locked-gate.png', title: 'Crystal Palace', description: 'A shimmering palace made of glass', rewards: '1500 XP, Legendary Armor' },
  { id: 5, level: 20, unlocked: false, image: '/assets/locked-gate.png', title: 'Shadow Realm', description: 'A dark world full of unknown horrors', rewards: '2000 XP, Mythic Weapon' },
];

// Extracted Gate component for clarity and reuse
const GateItem = React.memo(({ gate, onSelectGate }) => (
  <CarouselItem
    key={gate.id}
    className={`basis-2/3 relative rounded-lg overflow-hidden shadow-lg ${
      gate.unlocked ? 'bg-gradient-to-b from-blue-600 to-blue-400' : 'bg-gradient-to-b from-gray-600 to-gray-400 opacity-75'
    }`}
    style={{ backgroundImage: `url(${gate.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    onClick={() => onSelectGate(gate)}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-white font-bold text-lg">{gate.title}</h2>
        {gate.unlocked ? (
          <CheckCircle className="text-green-400 w-6 h-6" />
        ) : (
          <Lock className="text-red-400 w-6 h-6" />
        )}
      </div>

      <div className="text-white">
        {gate.unlocked ? (
          <Dialog>
            <DialogTrigger className="text-sm underline">Open</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogDescription>
                  <DungeonDetail />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ) : (
          <p className="text-sm mt-2">
            Unlocks at Level <span className="font-bold">{gate.level}</span>
          </p>
        )}
      </div>
    </div>
  </CarouselItem>
));

function DungeonList() {
  const [selectedGate, setSelectedGate] = useState(null);

  // Memoized handler to avoid unnecessary re-renders
  const handleSelectGate = useCallback(
    (gate) => {
      if (gate.id !== selectedGate?.id) {
        setSelectedGate(gate);
      }
    },
    [selectedGate]
  );

  return (
    <div className="flex flex-col gap-6 h-screen">
      <Carousel orientation="vertical">
        <CarouselContent className="h-screen gap-4">
          {gates.map((gate) => (
            <GateItem key={gate.id} gate={gate} onSelectGate={handleSelectGate} />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default React.memo(DungeonList);