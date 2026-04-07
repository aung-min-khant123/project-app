import React from "react";

function Header() {
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
          <button className="text-2xl">☰</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
