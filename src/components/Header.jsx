import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App"; // only import the context, NOT App itself

export default function Header() {
  const { user } = useContext(AppContext);

  return (
    <div>
      <h1>My Online Shop</h1>
      <Link to="/">Home</Link> - <Link to="/cart">Cart</Link> -{" "}
      {user?.token ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <hr />
    </div>
  );
}
