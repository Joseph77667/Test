import React from "react";
import iphone13pro from "../assets/iphone13promax.jpg";
import m4pro from "../assets/m4pro.avif";
import Pagination from "./Pagination";

function Product() {
  const products = [
    {
      id: 1,
      name: "Iphone 13 Pro Max",
      color: "Color = Black, Silver, Grey",
      price: "$2000",
      imageUrl: iphone13pro,
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
      name: "Basic Tee3",
      color: "Black",
      price: "$35",
      imageUrl:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    },
    {
      id: 4,
      name: "Basic Tee4",
      color: "Black",
      price: "$35",
      imageUrl:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    },
  ];
  return (
    <div className="py-10">
      <div className="flex justify-between my-10">
        <h1 className="text-3xl max-w-3xl font-bold">
          Products for sale
        </h1>
        <input
          className="px-3 py-2 border border-gray-300 rounded-md w-96"
          type="text"
          placeholder="Search by ..."
        />
      </div>
      <div className="grid p-10 bg-blue-400 grid-cols-1 gap-32 sm:grid-cols-2 lg:grid-cols-2">
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
                  <p className="mt-1 text-sm text-white">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-white">
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Product;
