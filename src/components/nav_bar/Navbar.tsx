import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white text-black p-3 shadow-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo and Title with Vertical Line */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="hidden md:block w-12 h-12" />
          <img src={Logo2} alt="Logo" className="w-auto h-10 md:hidden" />
          <div className="h-12 w-px bg-gray-400 hidden lg:block"></div>
          <span className="font-medium text-lg whitespace-nowrap lg:max-w-xs truncate hidden md:block">
            Trial Lesson [Grade 1-3]
          </span>
        </div>
        
        {/* Right Side Content */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <span className="text-gray-600 font-medium text-lg hidden md:block">34:40</span>
          <button className="bg-[#ff5a43] text-white px-4 py-2 rounded-sm text-sm hover:bg-[#ff5a43] hidden md:block">
            End class
          </button>
          
          {/* Hamburger Menu for Mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;