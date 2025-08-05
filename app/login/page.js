import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='flex-col gap-20 p-2'>
            <div className='flex items-center justify-center pt-20'>
                <h2 className='font-mono text-4xl font-bold text-indigo-600 tracking-tight'>Log In</h2>
            </div>
            <div>
                <form method='POST'>
                    <label>Username</label>
                    <input type='text' />
                    <label>Username</label>
                    <input type='text' />
                    <button>Login</button>
                </form>
            </div>
            <div>
                <p>Don't have an account? <Link href="/register"><span>register</span></Link></p>
            </div>
        </div>
    )
}

export default page