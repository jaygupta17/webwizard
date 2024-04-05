'use client'
import React from 'react'
import { useEffect, useState } from 'react';

const page = () => {
  const [data, setData] = useState('');
  const [response, setResponse] = useState('')

  const callLLm = async () => {
    const response = await fetch(`https://flaskapp-gik3.onrender.com=${data}`)
    .then(response => response.text())
    .then(data => setResponse(data))

    console.log(response)
}

useEffect(() => {
callLLm()
}, [])
  return (
    <div className='md:h-[90vh] h-[80vh] w-full flex justify-center items-center '>
      <div className='w-[70%] h-[98%] flex justify-center items-center flex-col'>
      <div className='flex justify-center gap-x-2 items-center h-[7vh] w-[70%]'>
        <input className="h-[50%] w-[100%] " type="text" value={data} onChange={e => setData(e.target.value)} />
        <button className="w-[30%] h-[100%%] rounded-md bg-cyan-500 shadow-lg shadow-indigo-500/40 p-1 ml-6" onClick={callLLm}>Generate</button>
      </div>
      <div className='flex justify-center items-center rounded-md bg-white/10 h-[50vh] w-[70%]'>
       <div className=''>
        {response}
        </div>
      </div>
      </div>
    </div>
  )
}

export default page
