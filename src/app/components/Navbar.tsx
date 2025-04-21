import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <div className="sticky top-[20px] flex justify-center z-50">
      {/* For Bigger Screens */}
      <nav className="md:w-[80%] xl:w-[65%] h-[80px] bg-white text-black md:flex items-center justify-center px-4 rounded-md shadow-lg hidden ">
        <div className="w-[30%]">
          <Image
            src="/Icons/EDCIndiaLogo.png"
            width={200}
            height={50}
            alt="logo"
          />
        </div>
        <div className="flex w-[70%] md:gap-[1vw] xl:gap-[3vw] justify-end items-center ">
          <Link href="/" className="text-gray-950 text-lg font-semibold">
            Home
          </Link>
          <Link href="/" className="text-gray-950 text-lg font-semibold">
            Members
          </Link>
          <Link href="/" className="text-gray-950 text-lg font-semibold">
            Entrepreneurs
          </Link>
          <div className="bg-[#E8FFC2] px-6 text-[#2E7D32] py-3 rounded-md w-auto ">
            <Link href="/" className="font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      {/* For Smaller Screens */}
      <nav className="w-[85%] relative h-[80px] bg-white text-black flex items-center justify-center px-4 rounded-md shadow-lg md:hidden">
        <div className=" w-full ">
          <Image
            src="/Icons/EDCIndiaLogo.png"
            width={200}
            height={50}
            alt="logo"
          />
        </div>
        <div className="absolute left-[80%] top-[50%] -translate-y-[50%] z-[999] flex w-full max-w-full flex-1 items-center justify-start text-white md:hidden">
          <div className="w-[42%]">
            <Nav />
          </div>
        </div>
      </nav>
    </div>
  );
}
