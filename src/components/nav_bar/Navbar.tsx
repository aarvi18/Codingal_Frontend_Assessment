import { createContext, useContext, useEffect, useState } from "react";
import LogoSection from "./LogoSection";
import { Timer } from "../nav_bar/Timer";
import EndClassButton from "./EndClassButton";
import MobileMenuButton from "./MobileMenuButton";

// Creating a Timer Context
const TimerContext = createContext({ time: 600, stopTimer: () => {} });

export const useTimer = () => useContext(TimerContext);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [time, setTime] = useState(600);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  const stopTimer = () => setIsRunning(false);

  return (
    <TimerContext.Provider value={{ time, stopTimer }}>
      <nav className="bg-white text-black p-3 shadow-md border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <LogoSection />
          <div className="flex items-center space-x-4 md:space-x-6">
            <Timer time={time} />
            <EndClassButton />
            <MobileMenuButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </nav>
    </TimerContext.Provider>
  );
};

export default Navbar;