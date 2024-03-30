import Link from "next/link";
import logo from "../public/logo.png"
import Image from "next/image";

function Header() {
  return (
        <div className="bg-black md:h-[10vh] w-full flex justify-between items-center min-[200px]:h-[20vh] min-[200px]:flex-col min-[700px]:flex-row">
            <div className="ml-32 rounded-md">
                <Image src={logo} alt="logo" width={65} height={65}/>
            </div>
            <ul className="w-[35%] text-gray-300 flex justify-evenly items-center sm:text-2">
                <li className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <Link href="/">
                        Home
                    </Link>
                </li>        
                <li className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <Link href="/about">
                        About
                    </Link>
                </li>        
                <li className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>        
                <li className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <Link href="/support">
                        Support
                    </Link>
                </li>        
             
            </ul>
            <div className="md:w-[15%] h-[50%] flex justify-center items-center sm:w-full">
                <button className="bg-red-500 rounded-md w-[50%] h-full text-white font-mono font-semibold flex justify-center items-center hover:bg-red-600">Log in</button>
            </div>
        </div>
  )
}

export default Header