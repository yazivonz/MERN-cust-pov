import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import { Link as RouterLink } from "react-router-dom";
import Button from './Button';
import { AiOutlineClose, AiOutlineMenuUnfold, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to show/hide search bar

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search bar visibility
  };

  return (
    <div className="fixed w-full z-10">
      <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-[#e9e6de] to-[#0c3a6d]">
        <div className="flex flex-row items-center cursor-pointer gap-2">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <h1 className="text-xl font-semibold">Sip & Scripts</h1>
        </div>

        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <RouterLink
            to="/"
            className="group relative inline-block hover:text-blue-200 transition-all cursor-pointer"
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </RouterLink>

          <RouterLink
            to="/menu"
            className="group relative inline-block hover:text-blue-200 transition-all cursor-pointer"
          >
            Menu
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </RouterLink>

          <RouterLink
            to="/products"
            className="group relative inline-block cursor-pointer hover:text-brightColor"
          >
            Products
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </RouterLink>

          <RouterLink
            to="/feedbacks"
            className="group relative inline-block hover:text-blue-200 transition-all cursor-pointer"
          >
            Feedbacks
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-200 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </RouterLink>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <RouterLink to="/cart" className="hover:text-blue-200 transition-all cursor-pointer">
            <AiOutlineShoppingCart size={30} />
          </RouterLink>

          {/* Search Icon */}
          <AiOutlineSearch size={30} className="cursor-pointer hover:text-blue-200" onClick={toggleSearchBar} />

          <RouterLink to="/Auth/Login">
            <Button title="Login" />
          </RouterLink>
        </div>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="flex justify-center mt-2">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button type="submit" className="ml-2 px-4 py-2 border-2 border-white bg-[#0c3a6d] text-white rounded-lg hover:text-[#8b98a7]">
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <RouterLink
          to="/"
          className="group relative inline-block cursor-pointer hover:text-brightColor"
        >
          Home
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </RouterLink>

        <RouterLink
          to="/menu"
          className="group relative inline-block cursor-pointer hover:text-brightColor"
        >
          Menu
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </RouterLink>

        <RouterLink
          to="/products" // This should be the correct link
          className="group relative inline-block cursor-pointer hover:text-brightColor"
        >
          Products
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </RouterLink>



        <RouterLink
          to="/feedbacks"
          className="group relative inline-block cursor-pointer hover:text-brightColor"
        >
          Feedbacks
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </RouterLink>

        <RouterLink to="/Auth/Login">
          <Button title="Login" />
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;
