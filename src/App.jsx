
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/Product";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import {CartProvider} from "./CartContext";
export const AppContext = createContext();
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  return (
    <div>
      <CartProvider>
      <AppContext.Provider value={{ users, setUsers, user, setUser }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Product />} />
            <Route path="/" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
      </CartProvider>
    </div>
  );
}
export default App;
