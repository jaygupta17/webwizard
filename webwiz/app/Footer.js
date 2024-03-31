import Image from "next/image";
import linkedin from "../public/linkedin.svg";
import github from "../public/gtihub.svg";
import twitter from "../public/twitter.svg";
import insta from "../public/insta.svg";
import bottomBg from "../public/bottom_bg.svg";

export default function Footer() {
    return (
      <div className="flex h-60 bg-cover bg-center mt-[10%]" style={{ backgroundImage: `url(${bottomBg})` }}>
        <div className="ml-40 w-130 ">
          <h2 className="text-[25px] text-white mt-8">Need Help?</h2>
          <div className="w-[55%] text-white">örem psum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Dinat teling. Berån pott. Benade pres yn. Sor kvasikilig i trav. Lan kvasilögisk</div>
          <div className="mt-3 flex gap-3.5">
            <Image src={linkedin} alt="insta_logo" height={30} width={30}/>
            <Image src={github} alt="insta_logo" height={30} width={30}/>
            <Image src={twitter} alt="insta_logo" height={30} width={30}/>
            <Image src={insta} alt="insta_logo" height={30} width={30}/>
          </div>
        </div>
        <div className="mr-[14%] mt-8">
          <ul className="w-[35%] text-white text-[20px] text-black flex items-center sm:text-2 gap-x-10">  
            <li className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
              About
            </li>
            <li className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
              Services
            </li>
            <li className="font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-red-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
              Other
            </li>
          </ul>
        </div>
      </div>
    );
  }
  