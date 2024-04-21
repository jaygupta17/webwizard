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
    <div className='md:h-[90vh] h-[80vh] w-full flex justify-center items-center '>
      <div className='md:w-[70%] w-[90%] h-[98%] flex justify-center items-center flex-col'>
      <div className='flex justify-center gap-x-2 items-center h-[7vh] w-[90%] md:w-[70%]'>
        <input className="h-[70%] rounded-md bg-white/20 px-3 py-2 text-white/90 w-[70%] " type="text" value={data} onChange={e => setData(e.target.value)} />
        <button className="w-[30%] h-[70%] text-white font-bold rounded-md bg-cyan-500 shadow-lg shadow-indigo-500/40 p-1" onClick={callLLm}>Generate</button>
      </div>
      <div className='flex justify-center items-center rounded-md bg-white/10 h-[50vh] w-[90%] md:w-[70%]'>
       <div className=''>
        {response}
        </div>
      </div>
      </div>
    </div>
  )
}

export default page
