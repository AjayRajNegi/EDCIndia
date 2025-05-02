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
          <Link href="/members" className="text-gray-950 text-lg font-semibold">
            Members
          </Link>
          <Link href="/" className="text-gray-950 text-lg font-semibold">
            Entrepreneurs
          </Link>
          <div className="bg-[#E8FFC2] px-6 text-[#2E7D32] py-3 rounded-md w-auto ">
            <Link href="/contact" className="font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      {/* For Smaller Screens */}
      <nav className="w-[85%] relative h-[70px] bg-white text-black flex items-center justify-between px-4 rounded-md shadow-lg md:hidden">
        {/* Logo on the left */}
        <div className="w-auto z-[9999] relative">
          <Image
            src="/Icons/EDCIndiaLogo.png"
            width={200}
            height={50}
            alt="logo"
          />
        </div>

        {/* Nav Toggle Button on the right */}
        <div className="z-[999]">
          <Nav />
        </div>
      </nav>
    </div>
  );
}
