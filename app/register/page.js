import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='flex items-center justify-center bg-gray-50 h-150'>
            <div className='w-full max-w-md shadow-lg rounded-lg flex flex-col p-2'>
                <div className='flex items-center justify-center'>
                    <h2 className='font-mono text-4xl font-bold text-indigo-600 tracking-tight'>Sign Up</h2>
                </div>
                <div>
                    <form method='POST' className='flex flex-col gap-2 mb-4 px-4 py-2'>
                        <label htmlFor='username' className='text-sm font-medium text-gray-700b cursor-pointer'>Username</label>
                        <input type='text' id='username' className='border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-non focus:ring-2 focus:ring-purple-500 transition duration-200' />
                        <label htmlFor='password' className='text-sm font-medium text-gray-700b cursor-pointer'>Password</label>
                        <input type='password' id='password' className='border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-non focus:ring-2 focus:ring-purple-500 transition duration-200 mb-2' />
                        <label htmlFor='password2' className='text-sm font-medium text-gray-700b cursor-pointer'>Confirm Password</label>
                        <input type='password' id='password2' className='border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-non focus:ring-2 focus:ring-purple-500 transition duration-200 mb-2' />
                        <button type='submit' className='bg-indigo-700 h-9 rounded-md text-white font-semibold font-mono hover:bg-indigo-800 transition duration-200 cursor-pointer'>Sign Up</button>
                    </form>
                </div>
                <div className='flex justify-center'>
                    <p>Already have an account? <Link href="/login"><span className='cursor-pointer text-indigo-700'>login</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default page