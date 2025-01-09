import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="py-5 px-20 bg-black text-white fixed top-0 left-0 w-full z-10 shadow-white-lg">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-3xl hover:text-blue-400">
            <Link to="/">Dreamshop</Link>
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="pr-40">
            <ul className="flex space-x-5 list-none">
              <li>
                <Link
                  to="/"
                  className="list-none text-lg hover:text-blue-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="list-none text-lg hover:text-blue-400"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="list-none text-lg hover:text-blue-400"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button>
              <Link
                to="/login"
                className="text-lg text-white rounded-sm mr-5 px-3 py-1 bg-blue-400 hover:bg-blue-200 hover:text-black"
              >
                Login
              </Link>
            </button>
            <button>
              <Link
                Link
                to="/contact"
                className="text-lg text-white rounded-sm mr-5 px-3 py-1 bg-blue-400 hover:bg-blue-200 hover:text-black"
              >
                Contact
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
