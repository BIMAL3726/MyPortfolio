import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
      <nav className="flex justify-between items-center">
        {/* Logo with Image */}
        <div className="flex items-center space-x-4">
          
          <h1 className="text-3xl font-bold text-yellow-400">BIMAL MAITY</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="text-lg font-medium hover:text-yellow-300">Home</a></li>
          <li><a href="#about" className="text-lg font-medium hover:text-yellow-300">About</a></li>
          <li><a href="#skills" className="text-lg font-medium hover:text-yellow-300">Skills</a></li>
          <li><a href="#project" className="text-lg font-medium hover:text-yellow-300">Projects</a></li>
          <li><a href="#experience" className="text-lg font-medium hover:text-yellow-300">Experience</a></li>
          <li><a href="#education" className="text-lg font-medium hover:text-yellow-300">Education</a></li>
          <li><a href="#contact" className="text-lg font-medium hover:text-yellow-300">Contact</a></li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden z-20 cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Menu */}
        <ul className={`absolute top-16 left-0 w-full bg-indigo-700 text-center space-y-6 py-6 md:hidden transition-all duration-300 z-[999] ${isOpen ? 'block' : 'hidden'}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#project" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#education" onClick={toggleMenu}>Education</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
