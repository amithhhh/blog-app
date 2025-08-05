'use client';

import BlogBox from "@/components/BlogBox";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20 lg:items-center lg:justify-items-center shadow-lg">
      <h2 className="font-mono font-bold text-4xl text-gray-700 mb-7">Blog Posts</h2>
      <form method="GET" className="mb-5">
        <input type="text" className='border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-non focus:ring-2 focus:ring-purple-500 transition duration-200' name="query" />
        <button type="submit" className="ml-4 bg-indigo-700 px-8 py-2 rounded-lg text-white font-mono cursor-pointer hover:bg-indigo-800" onClick={(e) => e.preventDefault()}>Search</button>
      </form>
      <BlogBox />
    </div>
  );
}
