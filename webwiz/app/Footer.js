import Image from "next/image";
import linkedin from "../public/linkedin.svg";
import github from "../public/gtihub.svg";
import twitter from "../public/twitter.svg";
import insta from "../public/insta.svg";

export default function Footer() {
  return (
    <div
      className="flex md:h-[40vh] h-[70vh] max-[700px]:flex-col w-full justify-center items-center bg-cover bg-center mt-[5%]"
      style={{ backgroundImage: `url('/bottomBg.png')` }}
    >
      <div className="ml-40 w-[60%] max-[700px]:flex max-[700px]:justify-center max-[700px]:items-center">
        <h2 className="text-[25px] text-white mt-8 max-[700px]:hidden">Need Help?</h2>
        <div className="w-[55%] text-white max-[700px]:hidden">
          örem psum mer ultrask hyposk, miska än tranerade. Diling monohönera
          pora bebinera, pack. Dinat teling. Berån pott. Benade pres yn. Sor
          kvasikilig i trav. Lan kvasilögisk
        </div>
        <div className="mt-3 flex gap-3.5">
          <Image src={linkedin} alt="insta_logo" height={30} width={30} />
          <Image src={github} alt="insta_logo" height={30} width={30} />
          <Image src={twitter} alt="insta_logo" height={30} width={30} />
          <Image src={insta} alt="insta_logo" height={30} width={30} />
        </div>
      </div>
      <div className="mr-[14%]">
        <div className="w-[35%] text-white text-[20px] max-[700px]:flex-col  flex items-center sm:text-2 gap-x-10 mt-3">
          <div className="font-semibold relative w-fit block">
            About
              <ul className="text-[18px] font-extralight">
                <li className="">Our Staff</li>
                <li>Brand Kit</li>
                <li>Spellbooks</li>
                <li>TImeline</li>
            </ul>
          </div>
          <div className="font-semibold relative block w-[70%]">
            Services
            <ul className="text-[16.3px] font-extralight mt-2.5">
                <li>Sign In/Out</li>
                <li>Text-to-Image</li>
                <li>Brewery</li>
            </ul>
          </div>
          <div className="font-semibold relative w-fit block">
            Other
            <ul className="text-[17.5px] font-extralight">
                <li>Our Staff</li>
                <li>Brand Kit</li>
                <li>Spellbooks</li>
                <li>TImeline</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
