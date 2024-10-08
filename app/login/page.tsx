"use client";
import { useEffect, useState } from 'react';
import BgVideo from '@/components/BgVideo';
import LoadingScreen from '@/components/Loadingscreen';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Separator } from '@radix-ui/react-dropdown-menu';

export default function LoginPage() {
    const { data: session } = useSession();
    const [isLoading, setLoading] = useState(true);
    
    const [showLogin, setShowLogin] = useState(false); // New state to control login screen visibility

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
        setTimeout(() => setShowLogin(true), 500); // Slight delay before showing login for smoother transition
      }, 5000); // 5 seconds for demo, adjust as needed
  
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) {
      return <LoadingScreen />;
    }
  
    if (session) {
      
      // User is logged in, show the start game screen
      return (
        <> <video
        autoPlay
        loop
        muted
        className="h-screen  w-screen object-fill absolute -z-10"
        src="./assets/loginscreen2.mp4"
      >
        <source src="./assets/loginscreen2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video><StartGameScreen /></>
      );
    }
  
    // User is not logged in, show the login form
    return (
      <>    <video
      autoPlay
      loop
      muted
      className="h-screen  w-screen object-fill absolute -z-10"
      src="./assets/loginscreen2.mp4"
    >
      <source src="./assets/loginscreen2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video><LoginForm showLogin={showLogin} /></>
    );
  };
  const StartGameScreen = () => {
        const router = useRouter(); // Initialize useRouter hook
        const handleStartGameClick = () => {
          router.push('/chat'); // Navigate to /chat
      };
  
    const { data: session } = useSession();

    
    return (
      <div className="cursor-custom flex justify-center items-center h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/your-background-image.jpg)' }}>
        <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 onClick={handleStartGameClick} className="text-white text-6xl font-bold mb-4 animate-move-up-and-down hover:text-purple-100">Start Game</h1>
          <hr className="border-t border-gray-300 my-4 w-16 mx-auto" />
          <p className="text-white mt-2">Click to Begin</p>
        </div>
      </div>
    );
  };
  interface LoginFormProps {
    showLogin: boolean;
  }
  
  const LoginForm = ({ showLogin }: LoginFormProps) => {

  return (
    <section className="relative flex justify-center items-center h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-5 "></div>
        <Card className={`transform transition-all duration-700 ease-out bg-slate-800 w-full p-5 bg-opacity-70 shadow-[inset_1px_1px_40px_#0000FF73]
       border-2 border-cyan-500  ${showLogin ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ maxWidth: '600px' }}>
          <CardHeader className="text-center space-y-4">
            <CardTitle>Link Account</CardTitle>
            
            <div className="flex flex-col  gap-2">
              <Button onClick={() => signIn("google", { callbackUrl: "/login" })} className="hover:cursor-custom bg-white hover:bg-gray-300 text-black shadow-md  h-14 ">
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Gmail
              </Button>
              <Button onClick={() => signIn("google", { callbackUrl: "/login" })} className="hover:cursor-custom bg-white hover:bg-gray-300 text-black shadow-md   h-14 ">
                <EnvelopeOpenIcon  className="mr-2 h-4 w-4" /> Login with Appel
              </Button>
              <Button onClick={() => signIn("google", { callbackUrl: "/login" })} className="hover:cursor-custom bg-white hover:bg-gray-300 text-black shadow-md  h-14 ">
                <EnvelopeOpenIcon  className="mr-2 h-4 w-4" /> Login with Email
              </Button>
            </div>
            <Separator />
          </CardHeader>
        </Card>
    </section>
  );
}