import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#0b1c2d]/95 to-[#0b1c2d]/70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-white hover:text-blue-400 transition"
        >
          MovieHub
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-300 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-500 text-white pb-1"
                : "border-b-2 border-transparent hover:border-blue-500 hover:text-white pb-1 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tv"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-500 text-white pb-1"
                : "border-b-2 border-transparent hover:border-blue-500 hover:text-white pb-1 transition"
            }
          >
            TV Shows
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-500 text-white pb-1"
                : "border-b-2 border-transparent hover:border-blue-500 hover:text-white pb-1 transition"
            }
          >
            Movies
          </NavLink>

          {/* My List Link */}
          <NavLink
            to="/my-list"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-500 text-white pb-1"
                : "border-b-2 border-transparent hover:border-blue-500 hover:text-white pb-1 transition"
            }
          >
            My List
          </NavLink>

          {/* Search */}
          <div className="ml-4">
            <SearchBar />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b1c2d] w-full px-4 pb-4 pt-2 absolute top-full left-0 shadow-lg flex flex-col space-y-2">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-l-4 border-blue-500 pl-2"
                : "text-gray-300 hover:text-white hover:border-l-4 hover:border-blue-500 pl-2 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tv"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-l-4 border-blue-500 pl-2"
                : "text-gray-300 hover:text-white hover:border-l-4 hover:border-blue-500 pl-2 transition"
            }
          >
            TV Shows
          </NavLink>

          <NavLink
            to="/movies"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-l-4 border-blue-500 pl-2"
                : "text-gray-300 hover:text-white hover:border-l-4 hover:border-blue-500 pl-2 transition"
            }
          >
            Movies
          </NavLink>

          <NavLink
            to="/my-list"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-l-4 border-blue-500 pl-2"
                : "text-gray-300 hover:text-white hover:border-l-4 hover:border-blue-500 pl-2 transition"
            }
          >
            My List
          </NavLink>

          
          <div className="mt-2">
            <SearchBar />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
