import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";

const TopNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#4F46E5] text-white flex justify-between items-center w-full h-[101.62px] px-[40px] lg:px-[80px] py-[26px] relative">
      {/* Logo Section */}
      <div className="flex items-center gap-[14px]">
        <img src={logo} alt="Logo" className="h-10 md:h-12" />
      </div>

      {/* Desktop Menu (visible at 768px and above) */}
      <div className="hidden sm:flex items-center">
        <div className="flex gap-[22px] font-inter font-medium text-[14px]">
          <a href="#" className="hover:underline">HOME</a>
          <a href="#" className="hover:underline">SERVICES</a>
          <a href="#" className="hover:underline">ABOUT US</a>
          <a href="#" className="hover:underline">CONTACT US</a>
          <a href="#" className="hover:underline">CAREERS</a>
        </div>
      </div>

      {/* Mobile Menu Button (only appears below 768px) */}
      <button
        className="sm:hidden flex items-center z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={32} color="black" /> : <Menu size={32} />}
      </button>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-start pt-10 px-8 text-black z-40">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6"
            onClick={() => setMenuOpen(false)}
          >
            
          </button>

          {/* Mobile Nav Items */}
          <nav className="flex flex-col gap-6 text-[18px] font-medium">
            <a href="#" className="hover:underline" onClick={() => setMenuOpen(false)}>HOME</a>
            <a href="#" className="hover:underline" onClick={() => setMenuOpen(false)}>SERVICES</a>
            <a href="#" className="hover:underline" onClick={() => setMenuOpen(false)}>ABOUT US</a>
            <a href="#" className="hover:underline" onClick={() => setMenuOpen(false)}>CONTACT US</a>
            <a href="#" className="hover:underline" onClick={() => setMenuOpen(false)}>CAREERS</a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default TopNavigation;
