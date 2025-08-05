import Link from 'next/link'
import React from 'react'

const BlogBox = () => {
  return (
    <div className='w-[390px] h-[220px] rounded-md border-1 border-gray-600 p-4 gap-4'>
        <div className='flex items-center'>
            <h2 className='font-bold text-2xl font-mono tracking-tighter mr-30'>First Blog Post</h2>
            <Link href='/edit'><p className='font-mono font-medium text-indigo-700'>Edit</p></Link>
        </div>
        <p>Torvalds was born in Helsinki, Finland, on 28 December 1969, the son of journalists Anna and Nils Torvalds,[7] the grandson of statistician Leo Törnqvist and of poet Ole Torvalds, and the great-grandson of journalist and soldier Toivo Karanko.</p>
    </div>
  )
}

export default BlogBox