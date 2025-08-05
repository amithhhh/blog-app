import Link from 'next/link'
import React from 'react'

const BlogBox = () => {
  return (
    <div className='w-[400px] h-[250px] rounded-md border-1 border-gray-600 p-4 gap-4 relative'>
        <div className='flex flex-row items-center justify-items-center'>
            <h2 className='font-bold text-2xl font-mono tracking-tighter mr-30 mb-3 truncate'>First Blog</h2>
            <Link href='/edit'><p className='font-mono text-indigo-700'>Edit</p></Link>
        </div>
        <p className='break-words overflow-hidden'>Torvalds was born in Helsinki, Finland, on 28 December 1969, the son of journalists Anna and Nils Torvalds,[7] the grandson of statistician Leo Törnqvist and of poet Ole Torvalds, and the great-grandson of journalist and soldier Toivo Karanko.</p>
        <Link href='/profile'><p className='absolute bottom-2 right-2 text-gray-700'>Adolf Hitler</p></Link>
    </div>
  )
}

export default BlogBox