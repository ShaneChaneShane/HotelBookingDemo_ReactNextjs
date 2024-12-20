import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-red-600 text-white p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide">HotelFinder</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Hotels
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
