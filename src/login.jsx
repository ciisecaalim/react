import React, { useEffect, useState } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";

function Login() {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [show, setShow] = useState(false)

  const handling = (e) => {
  e.preventDefault();

  console.log(user, pass);

  localStorage.setItem("useInfo", JSON.stringify({ user, pass }));
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form className="bg-white w-[350px] p-6 rounded-xl shadow-lg" onSubmit={handling}>

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        {/* Username */}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Username</label>

          <div className="flex items-center border rounded-lg px-3 py-2">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Enter your name"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Password (no toggle function) */}
        <div className="mb-6">
          <label className="block mb-1 text-gray-700">Password</label>

          <div className="flex items-center border rounded-lg px-3 py-2">

            <Lock className="w-5 h-5 text-gray-500 mr-2" />

            <input
              type={show ? "text" : "password"}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="••••"
              className="w-full outline-none"
            />

            {/* Eye icon only (no click function) */}
            <div 
      className="cursor-pointer hover:text-blue-600 transition-colors" 
      onClick={() => setShow(!show)}
    >
      {show ? (
        <Eye className="w-5 h-5 text-gray-500" />
      ) : (
        <EyeOff className="w-5 h-5 text-gray-500" />
      )}
    </div>

          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all">
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;