import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div>
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item._id}>
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => decrementQuantity(item._id)}>-</button>
            <button onClick={() => incrementQuantity(item._id)}>+</button>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
/*import React, { useContext } from "react";
import CartContext from "./CartContext";
import "./Cart.css";
import {CartContext,CartProvider} from"/components/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useContext(CartContext);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const placeOrder = async () => {
    const orderData = {
      items: cart,
      totalAmount,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) throw new Error("Order failed");

      alert("Order placed successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to place order");
    }
  };

  return (
    <div>
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => decrementQuantity(item._id)}>-</button>
              <button onClick={() => incrementQuantity(item._id)}>+</button>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
              <hr />
            </div>
          ))}
          <h3>Total: ${totalAmount}</h3>
          <button onClick={placeOrder} style={{ padding: "10px", backgroundColor: "green", color: "white" }}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}*/
