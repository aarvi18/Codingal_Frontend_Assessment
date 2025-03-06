import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png";

const LogoSection: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <img src={Logo} alt="Logo" className="hidden md:block w-12 h-12" />
      <img src={Logo2} alt="Logo" className="w-auto h-10 md:hidden" />
      <div className="h-12 w-px bg-gray-400 hidden lg:block"></div>
      <span className="font-medium text-lg whitespace-nowrap lg:max-w-xs truncate hidden md:block">
        Trial Lesson [Grade 1-3]
      </span>
    </div>
  );
};

export default LogoSection;