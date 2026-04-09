import { faArrowRightToBracket, faBars, faCartArrowDown, faCheck, faCircleInfo, faHouse, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="shadow-md">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="">
          <img
            src="/images/Logo .svg"
            alt="Little Lemon Logo"
            className="w-50 h-15"
          />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-md">
          <li>
            <a href="#" className="hover:text-green-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition">
              Reservations
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition">
              Order Online
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition">
              Login
            </a>
          </li>
        </ul>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-2xl">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        {/* Mobile Sidebar */}
<div
  className={`fixed top-0 right-0 h-auto w-65 bg-white shadow-lg transform transition-transform duration-300 z-50 
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
>
  {/* Close Button */}
  <div className="flex justify-end p-4">
    <button
      className="text-2xl"
      onClick={() => setIsOpen(false)}
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>
  </div>

  {/* Links */}
  <ul className="flex flex-col gap-6 p-6 font-medium text-lg tracking-widest">
    <li><FontAwesomeIcon icon={faHouse}/> <a href="#">Home</a></li>
    <li><FontAwesomeIcon icon={faCircleInfo}/> <a href="#">About</a></li>
    <li><FontAwesomeIcon icon={faCartArrowDown} /> <a href="#">Cart</a></li>
    <li><FontAwesomeIcon icon={faCheck} /> <a href="#">Reservations</a></li>
    <li><FontAwesomeIcon icon={faPhone} /> <a href="#">Order Online</a></li>
    <li><FontAwesomeIcon icon={faArrowRightToBracket} /> <a href="#">Login</a></li>
  </ul>
</div>
      </nav>
    </header>
  );
}

export default Header;
