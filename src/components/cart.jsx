import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item._id}>
            <h4>{item.name}</h4>
            <p>Price: {item.price}</p>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}