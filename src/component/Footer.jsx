import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-20 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm">
            Welcome to DreamShop, your one-stop destination for quality products
            at unbeatable prices. We strive to provide the best shopping
            experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/product" className="hover:text-blue-400">
                Products
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm">Email: buynow@dreamshop.com</p>
          <p className="text-sm">Phone: 09 799 184 199</p>
          <p className="text-sm">Address: 173 Mingalar St, Sule, Yangon</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center border-t border-gray-700 pt-5">
        <p className="text-sm">
          © {new Date().getFullYear()} DreamShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;