'use client'
import React from "react";
import { useState } from "react";
import { MaskContainer } from "../components/MaskContainer"; 

function MyComponent() {
  const textColor = "red";
  const [email , setEmail] = useState('');
  const [uname , setUname] = useState('');
  const [passw , setPassw] = useState('');

  const login = async () => {
    try {
      await account.createEmailSession(email, passw);
    setEmail('')
    setPassw('')
    setUname('')
    } catch (error) {
      console.log(error);
    }
    
  }

  const register = async () => {
    try {
      await account.create(ID.unique(), email, passw);
      login()
    } catch (error) {
      console.log(error);
    }
   
  }

  return (

    <>
     <MaskContainer
        children={
          <>
            Welcome To{" "}
            <span style={{ color: textColor }}>5 Leaf</span>
            {" "}Grimoire Project
          </>
        }
        revealText="The Grimoire Project"
      />
    <div className="h-[90vh] w-full flex justify-center items-center">
      <form className="h-[55vh] w-[30%] flex gap-y-6 justify-center items-center flex-col bg-white/5">
        <h1 className="text-white text-xl font-semibold">Sign Up / Sign In</h1>
        <div className="flex w-[100%] justify-center items-center flex-col gap-y-3">
          <input
            type="text"
            placeholder="Name"
            className="rounded-sm py-2 px-2 w-[70%] bg-black/30 text-white/90 outline-none focus:border-purple-400 focus:border-2"
            onChange={(e)=>setUname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-sm py-2 px-2 w-[70%] bg-black/30  text-white/90 outline-none focus:border-purple-400 focus:border-2"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-sm py-2 px-2 w-[70%] bg-black/30  text-white/90 outline-none focus:border-purple-400 focus:border-2"
            onChange={(e)=>setPassw(e.target.value)}
          />
        </div>
        <div className="w-[70%] flex gap-x-2">
          <button className="bg-[#9834c7] py-2 rounded-md w-[50%] h-full text-white font-mono font-semibold flex justify-center items-center hover:bg-[#9834c7be]" onClick={register}>
            Sign Up
          </button>
          <button className="bg-[#9834c730] rounded-md w-[50%] h-full text-white font-mono font-semibold flex justify-center items-center hover:bg-[#9834c761]" onClick={login}>
            Sign In
          </button>
        </div>
      </form>
    </div>
    
    
    </>
     
  );
}

export default MyComponent;


