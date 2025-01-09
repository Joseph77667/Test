import React from 'react'
import { useLocation, useParams } from "react-router-dom";

const SingleProduct = () => {
    const { id } = useParams();
    const location = useLocation();
    const product = location.state?.product;
  
    if (!product) {
      return <h2 className="text-center text-red-500">Product not found</h2>;
    }
  
    return (
      <div className="p-10 bg-blue-200 rounded-lg shadow-lg max-w-2xl mx-auto mt-32">
        <img
          src={product.imageUrl}
          alt={`Image of ${product.name}`}
          className="h-64 w-full rounded-md object-cover"
        />
        <h2 className="text-2xl font-bold text-blue-800 mt-5">{product.name}</h2>
        <p className="text-lg text-gray-700 mt-2">Available colors: {product.color}</p>
        <p className="text-lg text-gray-700 mt-2">Price: {product.price}</p>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold mt-5 py-2 px-4 rounded"
          onClick={() => alert(`Purchased: ${product.name} for ${product.price}`)}
        >
          Confirm Purchase
        </button>
      </div>
    );
}

export default SingleProduct
