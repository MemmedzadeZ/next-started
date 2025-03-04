import React from "react";


const Details = async ({ params }) => {
  const { id } = await params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{cache:'no-cache'});
    const data = await response.json();

  return (
    <>
    
    <div className="flex flex-col justify-center items-center h-screen text-3xl font-bold">
      <h1>"Name:" {data.name}</h1>
      <h1>"Email:" {data.email}</h1>
      <h2>"Username:" {data.username}</h2>

      </div>
    </>
  )
}

export default Details