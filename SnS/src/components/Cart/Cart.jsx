import React, { useState } from "react";

const Cart = () => {
    // Sample items in the cart
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Espresso", price: 3.5, quantity: 1 },
        { id: 2, name: "Cappuccino", price: 4.0, quantity: 2 },
        { id: 3, name: "Latte", price: 4.5, quantity: 1 },
    ]);

    // Calculate the total price of items in the cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#e9e6de] to-[#0c3a6d]">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-5 text-center">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="text-center">Your cart is empty.</p>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between py-3 border-b border-gray-300"
                            >
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <div className="flex justify-between mt-5 font-bold text-lg">
                            <h3>Total:</h3>
                            <h3>${calculateTotal()}</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
