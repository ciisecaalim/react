import React from "react";
import { User, Lock } from "lucide-react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-[350px] p-6 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        {/* Username */}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Username</label>

          <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="mohamed123"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 text-gray-700">Password</label>

          <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="••••"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all">
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;