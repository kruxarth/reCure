import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("smartcareUsers")) || [];
    const foundUser = users.find(
      (u) => u.name === username && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("smartcareUser", JSON.stringify(foundUser));
      navigate("/home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex">
      
      <div className="hidden md:flex w-1/2 bg-blue-100 items-center justify-center p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Welcome to SmartCare
          </h1>
          <p className="text-gray-700 text-lg">
            Personalized Recovery Support, One Chat at a Time.
          </p>
        </div>
      </div>

    
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-xl shadow-md p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Login
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>

          <p className="mt-6 text-center text-sm text-gray-500">
            New user?{" "}
            <Link to="/signup" className="text-blue-600 underline hover:text-blue-800">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
