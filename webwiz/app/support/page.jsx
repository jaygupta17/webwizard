'use client'
import React from 'react'
import { useEffect } from 'react';

const page = () => {
    const callLLm = async () => {
        const response = await fetch(
          "http://localhost:5000/get-response",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_input: "Tell me about Science!",
            }),
          }
        );

        // const data = await reponse.json();
        console.log(response)
    }
  useEffect(() => {
  callLLm()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default page
