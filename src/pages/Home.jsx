import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 overflow-hidden relative transition-all duration-700 ease-in-out">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-16 w-52 h-52 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-200"></div>
      <div className="absolute bottom-20 left-24 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-500"></div>

      {/* Main Container */}
      <div className="flex items-center justify-center min-h-screen px-6 py-12 z-10 relative">
        <div className="w-full max-w-md text-center">
          {/* Icon Area */}
          <div
            className={`mb-14 transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-28 h-28 mx-auto bg-gradient-to-tr from-purple-600 to-blue-500 rounded-[30%] shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full backdrop-blur-md" />
            </div>
          </div>

          {/* Heading */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Dive into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
                VortexX
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-10">
              Where design meets innovation. <br className="hidden sm:block" />
              Start your journey with us.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-5">
            <button
              onClick={() => navigate("/register")}
              className={`w-full py-4 px-6 font-semibold text-white rounded-xl bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700 shadow-lg transform transition duration-300 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Join the Revolution
            </button>
            <button
              onClick={() => navigate("/login")}
              className={`w-full py-4 px-6 font-semibold text-purple-700 bg-purple-100 hover:bg-purple-200 rounded-xl shadow-md transform transition duration-300 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Already with us? Log In
            </button>
          </div>

          {/* Dots Animation */}
          <div
            className={`mt-10 flex justify-center gap-3 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200" />
            <span className="w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
