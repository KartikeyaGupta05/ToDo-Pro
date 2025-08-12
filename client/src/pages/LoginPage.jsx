import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext.jsx";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token); // Store token in local storage
      alert("Login successful!");
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login to Your Account
        </h1>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Log In
          </button>
        </form>

        <Link to="/" className="text-blue-500 hover:underline">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
