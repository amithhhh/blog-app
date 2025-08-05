import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-16 flex items-center border-b justify-between p-3'>
        <Link href='/'><h3 className='font-mono text-2xl font-bold text-indigo-600 tracking-tight'>Blog.</h3></Link>
        <div className='flex flex-row'>
                  <Link href='/create'>
                    <p className='font-mono font-semibold cursor-pointer text-gray-600 hover:text-indigo-600 transition-colors mr-5'>create</p>
        </Link>
        <Link href='/login'>
                    <p className='font-mono font-semibold cursor-pointer text-gray-600 hover:text-indigo-600 transition-colors'>Login</p>
        </Link>
        </div>
    </div>
  )
}

export default Navbar