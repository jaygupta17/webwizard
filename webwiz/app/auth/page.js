import React from "react";

function Form() {
  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <form className="h-[55vh] w-[30%] flex gap-y-6 justify-center items-center flex-col bg-white/5">
        <h1 className="text-white text-xl font-semibold">Sign Up / Sign In</h1>
        <div className="flex w-[100%] justify-center items-center flex-col gap-y-3">
          <input
            type="text"
            placeholder="Name"
            className="rounded-sm py-2 px-2 w-[70%] bg-black/30 text-white/90 outline-none focus:border-purple-400 focus:border-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-sm py-2 px-2 w-[70%] bg-black/30  text-white/90 outline-none focus:border-purple-400 focus:border-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-sm py-2 px-2 w-[70%] bg-black/30  text-white/90 outline-none focus:border-purple-400 focus:border-2"
          />
        </div>
        <div className="w-[70%] flex gap-x-2">
          <button className="bg-[#9834c7] py-2 rounded-md w-[50%] h-full text-white font-mono font-semibold flex justify-center items-center hover:bg-[#9834c7be]">
            Sign Up
          </button>
          <button className="bg-[#9834c730] rounded-md w-[50%] h-full text-white font-mono font-semibold flex justify-center items-center hover:bg-[#9834c761]">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
