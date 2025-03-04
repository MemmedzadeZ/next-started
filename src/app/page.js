import React from 'react'
import { redirect } from 'next/navigation';

const token = true;

const Home = () => {
  !token && redirect("/login")
  return (
    <div className='w-fall h-screen flex justify-center items-center font-bold text-3xl'>Home</div>
  )
}

export default Home
