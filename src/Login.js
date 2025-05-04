import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 login-container">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign-In</h2>
        <form>
          <label className="block text-sm font-medium mb-1">
            Email or mobile phone number
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 mb-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded"
          >
            Continue
          </button>
        </form>

        <p className="text-xs mt-4 text-gray-600">
          By continuing, you agree to the E-commerce site’s Conditions of Use
          and Privacy Notice.
        </p>

        <hr className="my-6" />
        <p className="text-sm mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-yellow-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
