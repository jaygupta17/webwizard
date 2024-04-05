'use client'
import { useState } from 'react';
import Link from "next/link";
import logo from "../public/logo.png";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import bot from '../public/bot.png'
import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {sessionId} = useAuth()
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="md:h-[13vh] h-[20vh] w-full flex justify-center items-center">
      <div className="bg-white/10 md:h-[10vh] w-[98%] rounded-[20px] flex justify-center items-center min-[200px]:h-[20vh] min-[200px]:flex-row min-[700px]:flex-row relative">
        <div className="rounded-md">
          <Image src={logo} alt="logo" width={65} height={65} />
        </div>
        <button
          className="md:hidden absolute top-4 right-4 text-gray-300 h-full flex justify-center items-center"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <ul
          className={`${menuOpen ? 'flex' : 'hidden'}
          md:flex w-[65%] h-[100%] min-[700px]:h-[50vh] md:flex-row flex-col md:flex-no-wrap flex-wrap  text-gray-300 justify-evenly items-center sm:text-2`}
        >
          <li className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:drop-shadow-[0_0_4px_#9834c7]">
            <Link href="/">Home</Link>
          </li>
          <li className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:drop-shadow-[0_0_4px_#9834c7]">
            <Link href="/about">About</Link>
          </li>
          <li className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:drop-shadow-[0_0_4px_#9834c7]">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:drop-shadow-[0_0_4px_#9834c7]">
            <Link href="/">Wiz brewery</Link>
          </li>
          <div className="md:w-[30%] h-[100%] flex justify-center items-center sm:w-full gap-2">
          <UserButton/>
          <Link href="/support">
              <Image src={bot} alt="bot" width={50} height={50} />
          </Link>
          <button className="bg-[#9834c7] rounded-md w-[50%] aspect-[3] text-white font-mono font-semibold flex justify-center items-center hover:bg-[#9834c7be]">
            <Link href="/sign-up">
              {sessionId? <SignOutButton signOutOptions={{ sessionId }} /> : <SignInButton />}
            </Link>
          </button>
        </div>
        </ul>
        
      </div>
    </div>
  );
}

export default Header;