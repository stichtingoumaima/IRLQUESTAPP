"use client";

import React, { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BatteryCharging, Heart, Shield, Sword } from "lucide-react";
import "./app.css";

// Type definitions for bubbles and sword positions
interface RotatingObject {
  id: number;
  imgSrc: string;
  x?: number;
  y?: number;
  zIndex?: number;
  scale?: number;
}

// Data for bubbles and sword
const bubbles: RotatingObject[] = [
  { id: 1, imgSrc: "/assets/bubble.png" },
  { id: 2, imgSrc: "/assets/bubble2.png" },
  { id: 3, imgSrc: "/assets/bubble.png" },
  { id: 4, imgSrc: "/assets/bubble.png" },
  { id: 5, imgSrc: "/assets/bubble2.png" },
  { id: 6, imgSrc: "/assets/bubble.png" },
];

const sword: RotatingObject = { id: 1, imgSrc: "/assets/sword2.png" };

// Data for carousel videos
const videos = [
  { id: 1, src: "/assets/sunjin.webm", type: "video/mp4" },
  { id: 2, src: "/assets/tank.webm", type: "video/mp4" },
  { id: 3, src: "/assets/sunjin.webm", type: "video/mp4" },
];

// Component to render a stat bar
const StatBar: React.FC<{
  label: string;
  value: number;
  maxValue: number;
  color: string;
}> = ({ label, value, maxValue, color }) => (
  <div className="w-full bg-gray-700 rounded-full h-4">
    <div
      className={`h-full text-xs font-medium text-center p-0.5 leading-none rounded-full ${color}`}
      style={{ width: `${(value / maxValue) * 100}%` }}
    >
      {label}
    </div>
  </div>
);

const App: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [positions, setPositions] = useState<RotatingObject[]>(bubbles);
  const [activeBubble, setActiveBubble] = useState<number | null>(null);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [activeView, setActiveView] = useState<"artifacts" | "weapon">(
    "artifacts"
  );

  // Handle carousel API and current item selection
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  // Update positions to rotate objects (bubbles or sword)
  useEffect(() => {
    if (!isRotating) return;

    const updatePositions = () => {
      setPositions((prev) => {
        const totalItems = activeView === "artifacts" ? bubbles.length : 1;
        return prev.map((item, index) => {
          const angle =
            ((index / totalItems) * 360 + (Date.now() / 1000) * 30) % 360;
          const radiusX = 150;
          const radiusY = 80;
          const x = Math.cos((angle * Math.PI) / 180) * radiusX;
          const y = Math.sin((angle * Math.PI) / 180) * radiusY;
          const scale = y < 0 ? 0.8 : 1;
          const zIndex = y < 0 ? -50 : 50;

          return { ...item, x, y, zIndex, scale };
        });
      });
    };

    const interval = setInterval(updatePositions, 1000 / 60); // 60 FPS
    return () => clearInterval(interval);
  }, [isRotating, activeView]);

  // Handle bubble click and rotation state
  const handleBubbleClick = (bubbleId: number) => {
    setActiveBubble(bubbleId);
    setIsRotating(false);
  };

  // Reset rotation state when clicking outside of bubbles
  const handleClickAway = () => {
    setActiveBubble(null);
    setIsRotating(true);
  };

  // Toggle between 'artifacts' and 'weapon'
  const handleViewChange = (view: "artifacts" | "weapon") => {
    setActiveView(view);
    setIsRotating(true);
    setPositions(view === "artifacts" ? bubbles : [sword]);
  };

  return (
    <div
      className="flex justify-center h-screen w-full"
      onClick={handleClickAway}
    >
      <div
        className="w-full max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] h-screen flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toggle Buttons for Artifacts and Weapon */}
        <div className="flex justify-center mb-4 z-50">
          <button
            className={`px-4 py-2 ${
              activeView === "artifacts" ? "bg-blue-500" : "bg-gray-500"
            } text-white rounded-md mx-2`}
            onClick={() => handleViewChange("artifacts")}
          >
            Artifacts
          </button>
          <button
            className={`px-4 py-2 ${
              activeView === "weapon" ? "bg-blue-500" : "bg-gray-500"
            } text-white rounded-md mx-2`}
            onClick={() => handleViewChange("weapon")}
          >
            Weapon
          </button>
        </div>

        {/* Carousel Component */}
        <Carousel setApi={setApi}>
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem key={video.id}>
                <div className="relative h-[80vh] sm:h-[85vh] lg:h-[90vh] w-full">
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-[60vh] sm:h-[70vh] object-cover"
                  >
                    <source src={video.src} type={video.type} />
                    Your browser does not support the video tag.
                  </video>

                  {/* Stats UI */}
                  <div className="absolute -bottom-2 left-0 right-0 p-4 bg-gray-900 bg-opacity-0 rounded-t-lg text-white space-y-3 w-full">
                    <div className="flex items-center justify-center space-x-2 text-lg sm:text-xl font-bold">
                      <span>Level: 7</span>
                      <span className="text-yellow-400">⭐️</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Heart className="text-red-500" />
                      <StatBar
                        label="HP"
                        value={1225}
                        maxValue={2000}
                        color="bg-red-500"
                      />
                      <span>1225/2000</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <BatteryCharging className="text-yellow-200" />
                      <StatBar
                        label="Energy"
                        value={800}
                        maxValue={1000}
                        color="bg-yellow-200"
                      />
                      <span>800/1000</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <Sword className="mx-auto text-yellow-400" />
                        <div>
                          Attack: <span className="text-yellow-400">769</span>
                        </div>
                      </div>
                      <div>
                        <Shield className="mx-auto text-blue-400" />
                        <div>
                          Defense: <span className="text-blue-400">708</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-purple-400 font-bold">Power</span>
                        <div>
                          Total: <span className="text-purple-400">3104</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Rotating Objects: Bubbles or Sword */}
        {activeView === "artifacts" ? (
          positions.map((bubble) => (
            <div
              key={bubble.id}
              className={`absolute bubble ${
                activeBubble === bubble.id ? "active" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleBubbleClick(bubble.id);
              }}
              style={{
                transform:
                  activeBubble === bubble.id
                    ? `translate(-50%, -50%) scale(1.5)`
                    : `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.scale})`,
                zIndex: activeBubble === bubble.id ? 100 : bubble.zIndex,
                backgroundImage: `url(${bubble.imgSrc})`,
                top: "28%",
                left: "50%",
              }}
            />
          ))
        ) : (
          <div
            className="absolute sword"
            style={{
              transform: `translate(${positions[0].x}px, ${positions[0].y}px) scale(${positions[0].scale})`,
              zIndex: positions[0].zIndex,
              top: "28%",
              left: "50%",
            }}
          >
            <img src={positions[0].imgSrc} alt="Sword" className="h-72" />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
