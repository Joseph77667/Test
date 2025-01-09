import React from "react";
import { Link } from "react-router-dom";
import iphone16pro from "../assets/iphone16promax.webp";
import m4pro from "../assets/m4pro.avif";
import lenovo from "../assets/lenovo-thinkpad-t490.jpg";
import samsung from "../assets/samsungs24.webp";
import Pagination from "./Pagination";

function Product() {
  const products = [
    {
      id: 1,
      name: "Iphone 13 Pro Max",
      color: "Black, Silver, Grey",
      price: "$2000",
      imageUrl: iphone16pro,
    },
    {
      id: 2,
      name: "M4 Pro",
      color: "Color = Grey",
      price: "$4500",
      imageUrl: m4pro,
    },
    {
      id: 3,
      name: "Lenovo Thinkpad T490",
      color: "Black",
      price: "$3500",
      imageUrl:   lenovo },
    {
      id: 4,
      name: "Samsung Galaxy S24",
      color: "Black",
      price: "$3800",
      imageUrl:samsung
    },
  ];
  return (
    <div className="py-10">
      <div className="flex justify-between my-10 mt-20">
        <h1 className="text-3xl max-w-3xl font-bold">
          Products for sale
        </h1>
        <input
          className="px-3 py-2 border border-gray-300 rounded-md w-96"
          type="text"
          placeholder="Search by ..."
        />
      </div>
      <div className="grid p-10 bg-blue-400 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-9 h-auto mx-5 mt-5 rounded-lg bg-blue-300 shadow-lg"
          >
            <div className="group relative">
              <img
                src={product.imageUrl}
                alt={`Front of ${product.name} in ${product.color}.`}
                className="h-40 w-50 rounded-md bg-gray-500 object-cover group-hover:opacity-75"
              />
              <div className="mt-2 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white">Availabel color = {product.color}</p>
                </div>
                <p className="text-sm font-medium text-white">
                  {product.price}
                </p>
              </div>
            </div>
            <Link to={`/product/${product.id}`}
            state={{ product }}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded"
              type="button"
            >
              Buy now
            </button>
          </Link>
          </div>
          
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Product;
