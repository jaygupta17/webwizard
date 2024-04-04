'use client'
import React from 'react'
import { useEffect, useState } from 'react';

const page = () => {
  const [data, setData] = useState('');
  const [response, setResponse] = useState('')

  //   const callLLm = async () => {
  //       const response = await fetch(
  //         "http://localhost:5000/get-response",
  //         {
  //           method: "POST",
  //           mode: "no-cors",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             user_input: "Tell me about Science!",
  //           }),
  //         }
  //       );

  //       // const data = await reponse.json();
  //       console.log(response)
  //   }

  // useEffect(() => {
  // callLLm()
  // }, [])

  const callLLm = async () => {
    const response = await fetch(`http://localhost:5000/get-response?user_input=${data}`)
    .then(response => response.text())
    .then(data => setResponse(data))

    console.log(response)
}

useEffect(() => {
callLLm()
}, [])
  return (
    <div>
      <input type="text" value={data} onChange={e => setData(e.target.value)} />
      <button onClick={callLLm}>Fetch</button>
      <div>
        {response}
      </div>
    </div>
  )
}

export default page
