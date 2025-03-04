import React from "react";
import Link from "next/link";

const Users = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return (
    <div className="w-full min-h-screen p-8 bg-gray-100">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Users List</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {data.map((user) => (
          <Link key={user.id} href={`users/${user.id}`}>
            <div className="bg-white p-6 rounded-lg shadow-lg border transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
              <h3 className="text-2xl font-semibold text-gray-800">{user.name}</h3>
              <p className="text-gray-600 mt-2">{user.email}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
