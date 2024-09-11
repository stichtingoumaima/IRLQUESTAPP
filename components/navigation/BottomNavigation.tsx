import {
  BarChart,
  Swords,
  Fan,
  ScrollIcon,
  CalendarCheck2,
  DollarSignIcon,
} from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import UserAvatar from "../UserAvatar";

async function TopNavigation() {
  const session = await getServerSession(authOptions);

  // Dummy progress value, replace with actual data
  const progress = 70; // This could be your energy percentage

  return (
    <div
      className="fixed w-full bottom-0 bg-[#7c910629] backdrop-blur z-50 flex items-center justify-center h-10"
    >
      <div className="flex items-center">
        {/* Add content here if needed */}
      </div>
      <div className="flex items-center gap-8">
        <BarChart className="text-white border-gray-500 h-8 w-8 neon-glow rounded-full overflow-hidden shadow-md transform transition duration-500 ease-in-out hover:border-white hover:border-4 hover:scale-[2] hover:avatar-inner-glow hover:-translate-y-8 hover:bg-slate-950 hover:shadow-[inset_1px_1px_40px_#0000FF73]" />
        <Swords className="text-white border-gray-500 h-8 w-8 neon-glow rounded-full overflow-hidden shadow-md transform transition duration-500 ease-in-out hover:border-white hover:border-4 hover:scale-[2] hover:avatar-inner-glow hover:-translate-y-8 hover:bg-slate-950 hover:shadow-[inset_1px_1px_40px_#0000FF73]" />
        <Fan className="text-white border-gray-500 h-8 w-8 neon-glow rounded-full overflow-hidden shadow-md transform transition duration-500 ease-in-out hover:border-white hover:border-4 hover:scale-[2] hover:avatar-inner-glow hover:-translate-y-8 hover:bg-slate-950 hover:shadow-[inset_1px_1px_40px_#0000FF73]" />

        {/* Circular Progress Bar around UserAvatar */}
        <div className="relative flex items-center justify-center h-16 w-16 -translate-y-6 scale-[1.5]">
          <svg className="absolute inset-0 w-full h-full">
            <circle
              className="text-gray-700"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              r="26"
              cx="32"
              cy="32"
            />
            <circle
              className="text-yellow-400"
              strokeWidth="3"
              strokeDasharray="164"
              strokeDashoffset={164 - (164 * progress) / 100}
              strokeLinecap="round"
              stroke="url(#gradient)"
              fill="transparent"
              r="26"
              cx="32"
              cy="32"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FFEA00" />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute text-white text-xs font-semibold">
            {progress}%
          </span>
          <UserAvatar
            name={session?.user?.name}
            image={session?.user?.image}
            className="text-white border-white h-12 w-12 rounded-full overflow-hidden transform transition duration-500 ease-in-out bg-slate-950"
          />
        </div>

        <ScrollIcon className="text-white border-gray-500 h-8 w-8 neon-glow rounded-full overflow-hidden shadow-md transform transition duration-500 ease-in-out hover:border-white hover:border-4 hover:scale-[2] hover:avatar-inner-glow hover:-translate-y-8 hover:bg-slate-950 hover:shadow-[inset_1px_1px_40px_#0000FF73]" />
        <CalendarCheck2 className="text-white border-gray-500 h-8 w-8 neon-glow rounded-full overflow-hidden shadow-md transform transition duration-500 ease-in-out hover:border-white hover:border-4 hover:scale-[2] hover:avatar-inner-glow hover:-translate-y-8 hover:bg-slate-950 hover:shadow-[inset_1px_1px_40px_#0000FF73]" />
        <DollarSignIcon className="text-white border-gray-500 h-8 w-8 neon-glow rounded-full overflow-hidden shadow-md transform transition duration-500 ease-in-out hover:border-white hover:border-4 hover:scale-[2] hover:avatar-inner-glow hover:-translate-y-8 hover:bg-slate-950 hover:shadow-[inset_1px_1px_40px_#0000FF73]" />
      </div>
    </div>
  );
}

export default TopNavigation;
