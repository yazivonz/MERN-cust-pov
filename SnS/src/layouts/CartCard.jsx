import React, { useState } from "react";
import { FaCoffee, FaMugHot, FaGlassWhiskey } from "react-icons/fa";
import menuImage from "../assets/img/menu1.jpg"; // Updated path

const CartCard = ({ isOpen, onClose, title }) => {
  const [temperature, setTemperature] = useState("hot");
  const [size, setSize] = useState("small");
  const [toppings, setToppings] = useState({
    whippedCream: false,
    chocolateSyrup: false,
    caramelDrizzle: false,
    extraShot: false,
  });

  const handleToppingChange = (e) => {
    const { name, checked } = e.target;
    setToppings((prev) => ({ ...prev, [name]: checked }));
  };

  const handleAddToOrder = () => {
    const selectedToppings = Object.entries(toppings)
      .filter(([_, checked]) => checked)
      .map(([name]) => name)
      .join(", ");

    alert(
      `Order Details:\nTitle: ${title}\nTemperature: ${temperature}\nSize: ${size}\nToppings: ${selectedToppings}`
    );
    onClose(); // Close modal after adding to order
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg w-128 flex"> {/* Increased width */}
        {/* Left Side: Image */}
        <div className="flex-none mr-4">
          <img
            src={menuImage}
            alt={title}
            className="w-48 h-48 object-cover rounded-lg" // Increased size
          />
        </div>

        {/* Right Side: Customization */}
        <div className="flex-1">
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="mt-4">
            {/* Select Temperature */}
            <label className="block mb-2">Select Temperature:</label>
            <div className="flex">
              <button
                onClick={() => setTemperature("hot")}
                className={`px-4 py-2 rounded-lg ${temperature === "hot" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                Hot
              </button>
              <button
                onClick={() => setTemperature("cold")}
                className={`px-4 py-2 rounded-lg ${temperature === "cold" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                Cold
              </button>
            </div>

            {/* Select Size */}
            <label className="block mb-2 mt-4">Select Size:</label>
            <div className="flex gap-2 flex-wrap"> {/* Added flex-wrap */}
              <button
                onClick={() => setSize("small")}
                className={`flex items-center px-4 py-2 border rounded-lg ${size === "small" ? "bg-green-500 text-white" : "border-gray-300"}`}
              >
                <FaMugHot size={24} />
                Small
              </button>
              <button
                onClick={() => setSize("medium")}
                className={`flex items-center px-4 py-2 border rounded-lg ${size === "medium" ? "bg-green-500 text-white" : "border-gray-300"}`}
              >
                <FaCoffee size={24} />
                Medium
              </button>
              <button
                onClick={() => setSize("large")}
                className={`flex items-center px-4 py-2 border rounded-lg ${size === "large" ? "bg-green-500 text-white" : "border-gray-300"}`}
              >
                <FaGlassWhiskey size={24} />
                Large
              </button>
            </div>

            {/* Add Toppings */}
            <label className="block mb-2 mt-4">Add Toppings:</label>
            <div className="flex flex-col mb-4">
              <label>
                <input
                  type="checkbox"
                  name="whippedCream"
                  checked={toppings.whippedCream}
                  onChange={handleToppingChange}
                />{" "}
                Whipped Cream
              </label>
              <label>
                <input
                  type="checkbox"
                  name="chocolateSyrup"
                  checked={toppings.chocolateSyrup}
                  onChange={handleToppingChange}
                />{" "}
                Chocolate Syrup
              </label>
              <label>
                <input
                  type="checkbox"
                  name="caramelDrizzle"
                  checked={toppings.caramelDrizzle}
                  onChange={handleToppingChange}
                />{" "}
                Caramel Drizzle
              </label>
              <label>
                <input
                  type="checkbox"
                  name="extraShot"
                  checked={toppings.extraShot}
                  onChange={handleToppingChange}
                />{" "}
                Extra Shot
              </label>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Close
            </button>
            <button
              onClick={handleAddToOrder}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Add to Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
