"use client";

import { useState } from "react";
import { BsPersonExclamation } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/Shop" },
    { name: "Blog", href: "/Blog" },
    { name: "Contact", href: "/Contact" },
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
                className="text-gray-700 hover:text-white font-semibold transition-all"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 lg:space-x-8">
          <Link href="/MyAccount">
            <button className="text-gray-700 hover:text-white transition-all">
              <BsPersonExclamation size={28} />
            </button>
          </Link>
          <button className="text-gray-700 hover:text-white transition-all">
            <FiSearch size={28} />
          </button>
          <button className="text-gray-700 hover:text-white transition-all">
            <IoMdHeartEmpty size={28} />
          </button>
          <Link href="/Cart">
            <button className="text-gray-700 hover:text-white transition-all relative">
              <IoCartOutline size={28} />
            </button>
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden ml-4">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RxHamburgerMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center space-y-3 mt-4 bg-white p-4 rounded shadow">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-700 font-semibold text-lg"
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