"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const NavLink = ({ children }) => (
  <a
    href="#"
    className="px-4 py-2 text-sm font-medium transition duration-300 rounded-lg text-gray-300 hover:text-pink-400 hover:bg-white/10"
  >
    {children}
  </a>
);

// Main Application Component
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Games", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Support", href: "#" },
    { name: "About", href: "#" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#0A071E] shadow-xl w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 md:w-40">
            <a
              href="#"
              className="flex items-center space-x-2 text-white text-xl font-extrabold tracking-wider"
            >
              <img src="/assets/logo.png" className="w-[40px] h-[40px]" />

              <span className="text-2xl italic">Plutus</span>
            </a>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <NavLink key={item.name}>{item.name}</NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end md:w-40">
            <button
              onClick={toggleMenu}
              type="button"
              className="md:hidden p-2 text-gray-400 rounded-lg hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 transition duration-150 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
            {/* Invisible Spacer: ensures the nav links are perfectly centered on desktop. */}
            <div className="hidden md:block w-full h-px"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Collapsible) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0E0B25] text-gray-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
              onClick={toggleMenu} // Close menu when an item is clicked
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
