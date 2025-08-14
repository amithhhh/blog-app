'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

function ProfilePage() {
  const { id } = useParams();

  return (
    <div className='flex justify-center bg-gray-50 p-20'>
      <div className='w-full max-w-md lg:shadow-lg rounded-lg flex flex-col p-4 items-center gap-6 bg-white'>
        <Image
          src='/istockphoto-2171382633-170667a.jpg'
          alt='Profile picture'
          width={100}
          height={100}
          className='rounded-full'
        />

        <h2 className='text-2xl font-mono font-bold text-indigo-700'>Adolf Hitler</h2>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
          <div className='w-50 h-50 bg-indigo-700 rounded-lg shadow-xl text-white'>
            <h2 className='text-4xl font-bold font-sans '>50</h2>
            <p className='text-2xl font-mono'>No of Blogs</p>
          </div>
          <div className='w-20 h-20 bg-indigo-700 flex items-center justify-center rounded-lg shadow-xl text-white'>
            2
          </div>
          <div className='w-20 h-20 bg-indigo-700 flex items-center justify-center rounded-lg shadow-xl text-white'>
            3
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
