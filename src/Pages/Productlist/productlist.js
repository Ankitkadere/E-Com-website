import React from "react";
import "../Productlist/Productlist.css";
import Data from "../../Database/Data.json";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PopularProducts = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProductClick = (product) => {
    navigate("/ProductDetailsPage", { state: { product } }); // Send product data to details page
  };

  return (
    <div className="gridbox">
      <div className="popularproducts">
        {Object.keys(Data).map((userID) => (
          <div key={userID}>
            <h2 className="d-none">{userID}</h2>
            <div className="product-list">
              {Data[userID].map((product, index) => (
                <div className="card" key={index}>
                  <span className="badge badge-hot">Rent</span>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="product-image" 
                    onClick={() => handleProductClick(product)} // Pass product data on click
                    style={{ cursor: "pointer" }} // Make it clickable
                  />
                  <div className="text-sm text-gray-500">{product.category}</div>
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-gray-600">({product.rating})</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-[-5px] mt-[-5px] additional">
                    By {product.brand}
                  </div>
                  <div className="flex items-center justify-between adddown">
                    <div className="flex">
                      <div className="text-lg font-bold text-green-600">${product.price}</div>
                      <div className="text-sm text-gray-500 line-through oldpeice">${product.oldPrice}</div>
                    </div>
                    <button className="button"><FaShoppingCart /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
