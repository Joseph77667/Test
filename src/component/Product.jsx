import React from "react";

function Product() {
  const products = [
    {
      id: 1,
      name: "Basic Tee1",
      color: "Black",
      price: "$35",
      imageUrl:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    },
    {
      id: 2,
      name: "Basic Tee2",
      color: "Black",
      price: "$35",
      imageUrl:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
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
    {
      id: 5,
      name: "Basic Tee5",
      color: "Black",
      price: "$35",
      imageUrl:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    },
  ];  
  return (
    <div>
      <h1 className="text-3xl max-w-3xl py-10 font-bold">Products for sale</h1>
      <div className="grid bg-blue-600 grid-cols-1 gap-32 sm:grid-cols-2 lg:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-9 h-auto mx-5 mt-5 rounded-lg shadow-lg"
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
                  <p className="mt-1 text-sm text-white">
                    {product.color}
                  </p>
                </div>
                <p className="text-sm font-medium text-white">
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product;
