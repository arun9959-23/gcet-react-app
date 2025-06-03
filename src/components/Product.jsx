import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL || "http://localhost:8080";

    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API}/products`);
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            {prod.name} - ${prod.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Product;