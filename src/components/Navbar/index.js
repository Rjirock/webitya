"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Drawer from "@/components/DrawerEl";

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isOpen) {
        setIsOpen(false); // Close drawer on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]); // Re-run effect if `isOpen` changes

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white py-3 px-6 flex items-center justify-between transition-all duration-300 z-[1000] ${
        isScrolled ? "shadow-lg backdrop-blur-lg" : "shadow-md"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">WEBITYA</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center space-x-6">
        {menuLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/demo"
          className="text-white bg-black hover:bg-gray-900 px-4 py-2 rounded-lg transition"
        >
          Learn
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={toggleMenu}>
        <Menu size={28} />
      </button>

      {/* Mobile Drawer Component */}
      <Drawer isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
