"use client"
import React from 'react'
import { useRouter } from 'next/navigation' //hook

export default function Client() {

    const router = useRouter()

  return (
      <div>
          
          <button onClick={() => {
              router.push("/client/details")
          }}>Go to details</button>
    </div>
  )
}
