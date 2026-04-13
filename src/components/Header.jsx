import {
  faArrowRightToBracket,
  faBars,
  faCartArrowDown,
  faCheck,
  faCircleInfo,
  faHouse,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="shadow-md">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-3 py-1">
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
            <Link to="/" className="hover:text-green-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-green-600 transition">
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/reservations"
              className="hover:text-green-600 transition"
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order" className="hover:text-green-600 transition">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-green-600 transition">
              Login
            </Link>
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
          className={`fixed top-0 right-0 h-auto w-65 bg-white shadow-lg transform transition-transform duration-300 z-50 md:hidden 
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close Button */}
          <div className="flex justify-between p-2">
            <img src="/images/Logo .svg"/>
            <button className="text-2xl" onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-6 p-6 font-medium text-lg tracking-widest">
            <li>
              <FontAwesomeIcon icon={faHouse} />{" "}
              <Link to="/" className="hover:text-green-600 transition">
                Home
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleInfo} />{" "}
              <Link to="/about" className="hover:text-green-600 transition">
                About
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faCartArrowDown} />{" "}
              <Link to="/cart" className="hover:text-green-600 transition">
                Cart
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />{" "}
              <Link
                to="/reservations"
                className="hover:text-green-600 transition"
              >
                Resvervations
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />{" "}
              <Link to="/order" className="hover:text-green-600 transition">
                Order Online
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRightToBracket} />{" "}
              <Link to="/login" className="hover:text-green-600 transition">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
