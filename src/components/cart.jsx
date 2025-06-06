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


