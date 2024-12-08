"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUser,
  faSearch,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"; 

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/Shop" },
    { name: "Blog", href: "/Blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#FBEBB5] shadow-md py-6 px-12">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Center Menu */}
        <ul className="hidden lg:flex space-x-10 mx-auto">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-white transition-all"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-8 ">
        <Link href="/MyAccount">
      <button className="text-gray-700 hover:text-white transition-all">
        <FontAwesomeIcon icon={faUser} size="lg" />
      </button>
    </Link>
    
          <button className="text-gray-700 hover:text-white transition-all">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
          <button className="text-gray-700 hover:text-white transition-all">
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </button>
          <Link href="/Cart">
          <button className="text-gray-700 hover:text-white transition-all relative">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              1
            </span>
          </button>
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 px-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-red-500 transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
