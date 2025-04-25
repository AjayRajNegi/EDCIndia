import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-[70vh] bg-[#fff] text-[#000000] w-full">
      <div className="h-[75%] flex flex-col justify-center items-center">
        <h4 className="tracking-[0.11em] text-sm font-semibold text-[#696d77]">
          UPSKILL FOR A BETTER FUTURE
        </h4>
        <h1 className="text-5xl mt-5 text-center">Request More Information</h1>
        <p className="w-[50%] md:w-[30%] text-center text-wrap mt-5 text-[#0A142F]">
          Empowering startups with funding, mentoring, and strategic growth
          opportunites.
        </p>
        <div className="px-10 mt-5 py-3 rounded-full bg-[#2E7D32] text-sm text-[#fff]">
          Contact Us
        </div>
        <p className="text-sm text-[#0A142F] mt-5">2025 @ EDCIndia</p>
      </div>
      <div className="h-[25%] border-2 border-b-0 border-x-0 border-t-gray-100 content-center">
        <div className="flex justify-center gap-3 md:gap-0 md:justify-around flex-col md:flex-row mx-[4vw] py-[2vw] md:py-0">
          <Image
            src="/Icons/EDCIndiaLogo.png"
            width={200}
            height={100}
            alt="logo"
            className=""
          />

          <div className="flex flex-row gap-10 md:ml-10">
            <span>Team</span>
            <span>Case Studies</span>
            <span>Publications</span>
          </div>
          <div className="flex gap-5">
            <a href="www.google.com" className=" ">
              <Image
                src="/Icons/Linkedin.png"
                width={50}
                height={50}
                alt="Linkedin"
              />
            </a>
            <a href="www.google.com" className=" ">
              <Image
                src="/Icons/Facebook.png"
                width={50}
                height={50}
                alt="Facebook"
              />
            </a>
            <a href="www.google.com" className=" ">
              <Image
                src="/Icons/Instagram.png"
                width={50}
                height={50}
                alt="Instagram"
              />
            </a>
            <a href="www.google.com" className=" ">
              <Image
                src="/Icons/Youtube.png"
                width={50}
                height={50}
                alt="Youtube"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
