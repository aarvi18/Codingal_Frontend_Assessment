import { createContext, useContext, useEffect, useState } from "react";
import LogoSection from "./LogoSection";
import { Timer } from "../nav_bar/Timer";
import EndClassButton from "./EndClassButton";
import MobileMenuButton from "./MobileMenuButton";
import { LessonTitleRight } from "./LessonTitle";
import PostButton from "./PostButton";

// Creating a Timer Context
const TimerContext = createContext({ time: 600, stopTimer: () => { } });

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
          <div className="hidden md:flex items-center space-x-4">
            <LessonTitleRight />
            <Timer time={time} />
            <EndClassButton />
            <PostButton />
          </div>
          <MobileMenuButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col text-center gap-4 mt-3 bg-orange-100 p-4">
            <LessonTitleRight />
            <div className="md:hidden flex flex-row justify-between gap-4 mt-3 bg-orange-100 p-4">
              <Timer time={time} />
              <EndClassButton />
              <PostButton />
            </div>
          </div>
        )}
      </nav>
    </TimerContext.Provider>
  );
};

export default Navbar;
