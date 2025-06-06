import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const { users, setUsers } = useContext(AppContext);
  const [user, setUser] = useState({ name: "", email: "", pass: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async () => {
    if (!user.name || !user.email || !user.pass) {
      setMsg("All fields are required");
      return;
    }

    try {
      const url = `${API}/users/register`; // ✅ Correct path
      const response = await axios.post(url, user);
      console.log("Register success:", response.data);
      setMsg("Registration successful. Redirecting...");
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      console.error("Register failed:", err.response?.data || err.message);
      setMsg(
        err.response?.data?.message ||
          "Registration failed. Please check server or input."
      );
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <h3>Register</h3>
      {msg && <p style={{ color: "red" }}>{msg}</p>}
      <p>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Email address"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="New Password"
          value={user.pass}
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      {users &&
        users.map((value, index) => (
          <li key={index}>
            {value.name} - {value.email} - {value.pass}
          </li>
        ))}
    </div>
  );
}
