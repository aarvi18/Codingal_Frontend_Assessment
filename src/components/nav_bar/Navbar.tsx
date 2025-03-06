import { useState } from "react";
import LogoSection from "./LogoSection";
import Timer from "./Timer";
import EndClassButton from "./EndClassButton";
import MobileMenuButton from "./MobileMenuButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white text-black p-3 shadow-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <LogoSection />
        <div className="flex items-center space-x-4 md:space-x-6">
          <Timer />
          <EndClassButton />
          <MobileMenuButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;