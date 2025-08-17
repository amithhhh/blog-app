import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 shadow-2xl rounded-xl flex flex-col p-8 backdrop-blur-sm">
        <div className="flex items-center justify-center mb-6">
          <h2 className="font-mono text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
            Log In
          </h2>
        </div>
        <div>
          <form method="POST" className="flex flex-col gap-4 mb-6">
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-300 cursor-pointer block"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 hover:border-gray-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 cursor-pointer block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 hover:border-gray-500 mb-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold font-mono py-3 rounded-lg transition duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <p className="text-gray-400">
            Don&apos;t have an account?{" "}
            <Link href="/register">
              <span className="cursor-pointer text-blue-400 hover:text-blue-300 transition duration-200 font-medium">
                register
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
