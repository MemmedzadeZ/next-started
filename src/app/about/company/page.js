import React from 'react'

const Company = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data)
  return (
      <div className='w-fall h-screen flex justify-center items-center font-bold text-3xl'>{data[0].name}</div>
  )
}

export default Company