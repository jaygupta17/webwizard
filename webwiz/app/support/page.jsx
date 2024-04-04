'use client'
import React from 'react'
import { useEffect, useState } from 'react';

const page = () => {
  const [data, setData] = useState('');
  const [response, setResponse] = useState('')

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
    <div className='h-[80%]'>
    <div className='flex  justify-center items-center h-[50%] ml-[3%]'>
      <input className="h-[10%] w-[51.5%] " type="text" value={data} onChange={e => setData(e.target.value)} />
      <button className="w-[8%] h-[12%] rounded-md bg-cyan-500 shadow-lg shadow-indigo-500/40 p-1 ml-6" onClick={callLLm}>Generate</button>
      </div>
      <div className='bg-[#9834c7] flex justify-center items-center h-[60%] w-[50%] mt-[-5%] ml-[22%] rounded-md'>
      <div className=''>
        {response}
      </div>
      </div>
    </div>
  )
}

export default page
