import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
//import { Link } from 'react-scroll';
import { Link as RouterLink } from "react-router-dom";
import Button from '../layouts/Button';
import { AiOutlineClose, AiOutlineMenuUnfold, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
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
            className="group relative inline-block hover:text-blue-200 transition-all cursor-pointer"
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
        

        <div className="hidden lg:flex items-center gap-4">
          <RouterLink to="/cart" className="hover:text-blue-200 transition-all cursor-pointer">
            <AiOutlineShoppingCart size={30} />
          </RouterLink>
          <Button title="Login" />
        </div>

        </nav>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>

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
          to="/products"
          className="group relative inline-block cursor-pointer hover:text-brightColor"
        >
          Products
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </RouterLink>

        <RouterLink
          to="/feedbacks"
          className="group relative inline-block cursor-pointer hover:text-brightColor"
        >
          feedbacks
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </RouterLink>


        <Button title="Login" />
      </div>
    </div>
  );
};

export default Navbar;
