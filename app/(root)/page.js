'use client';

import BlogBox from "@/components/BlogBox";

export default function Home() {
  return (
    <div className="font-mono min-h-screen p-4 pb-16 gap-16 sm:p-20 lg:items-center lg:justify-items-center shadow-lg items-center">
      <h2 className="font-mono font-bold text-4xl text-gray-700 mb-7">Blog Posts</h2>
      <form method="GET" className="mb-5 flex flex-row">
        <input type="text" className='border-2 border-gray-400 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 w-50' name="query" />
        <button type="submit" className="ml-4 bg-indigo-700 px-6 py-2 rounded-lg text-white font-mono font-sm cursor-pointer hover:bg-indigo-800" onClick={(e) => e.preventDefault()}>Search</button>
      </form>
      <div className="flex flex-row flex-wrap gap-9">
        {
          [1, 2, 3, 4].map((item, index) => (
            <BlogBox key={item} id={item} />
          ))
        }
      </div>
    </div>
  );
}
