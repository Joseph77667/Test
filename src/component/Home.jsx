import React from "react";
import { Link } from "react-router-dom";
import m4pro from "../assets/m4pro.avif";
import lenovo from "../assets/lenovo-thinkpad-t490.jpg";
import samsung from "../assets/samsungs24.webp";

function Home() {
  return (
    <>
      <div className="mt-32">
        {/* Hero Section */}
        <div className="bg-blue-500 text-white py-20 px-10 text-center">
          <h1 className="text-5xl font-bold">Welcome to DreamShop</h1>
          <p className="mt-4 text-lg">
            Discover the best products at unbeatable prices.
          </p>
          <Link to="/product">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded mt-6">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Categories Section */}
        <div className="py-10 px-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/category/electronics"
              className="bg-blue-300 p-5 rounded-lg shadow-lg hover:bg-blue-400"
            >
              <h3 className="text-xl font-bold text-center">Electronics</h3>
            </Link>
            <Link
              to="/category/clothing"
              className="bg-blue-300 p-5 rounded-lg shadow-lg hover:bg-blue-400"
            >
              <h3 className="text-xl font-bold text-center">Clothing</h3>
            </Link>
            <Link
              to="/category/home-decor"
              className="bg-blue-300 p-5 rounded-lg shadow-lg hover:bg-blue-400"
            >
              <h3 className="text-xl font-bold text-center">Home Decor</h3>
            </Link>
            <Link
              to="/category/sports"
              className="bg-blue-300 p-5 rounded-lg shadow-lg hover:bg-blue-400"
            >
              <h3 className="text-xl font-bold text-center">Sports</h3>
            </Link>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="py-10 px-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Product 1 */}
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <img
                src={lenovo}
                alt="Lenovo Thinkpad T490"
                className="h-40 w-full object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mt-4">Lenovo Thinkpad T490</h3>
              <p className="text-gray-600">Price: $3500</p>
              <Link to="/product/3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  View Details
                </button>
              </Link>
            </div>

            {/* Example Product 2 */}
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <img
                src={samsung}
                alt="Samsung Galaxy S24"
                className="h-40 w-full object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mt-4">Samsung Galaxy S24</h3>
              <p className="text-gray-600">Price: $3800</p>
              <Link to="/product/4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  View Details
                </button>
              </Link>
            </div>

            {/* Example Product 3 */}
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <img
                src={m4pro}
                alt="Macbook Pro M4"
                className="h-40 w-full object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mt-4">Macbook Pro M4</h3>
              <p className="text-gray-600">Price: $4500</p>
              <Link to="/product/2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-green-500 text-white py-10 text-center">
          <h2 className="text-3xl font-bold">
            Don't miss out on our exclusive offers!
          </h2>
          <Link to="/product">
            <button className="bg-white text-green-500 font-bold py-3 px-6 rounded mt-6">
              Browse All Products
            </button>
          </Link>
        </div>
      </div>
      
    </>
  );
}

export default Home;
