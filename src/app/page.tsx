import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#F6F5EB] h-auto w-full">
      <Navbar />
      {/* First Section */}
      <section className="h-[80vh] px-[4vw] flex flex-col items-center overflow-hidden relative">
        <div className="font-bold text-6xl text-gray-950 mt-[80px] flex flex-col items-center">
          <p>
            From <span className="text-[#2E7D32]">Idea to Launch,</span>
          </p>
          <p>We Fuel Startups and Ignite Your Growth</p>
        </div>
        <div className="text-gray-400 text-xl font-bold mt-[60px]">
          <p>
            Empowering startups with funding, membership, and startegic growth
            opportunities.
          </p>
        </div>
        <div className="mt-[60px] flex w-full items-center justify-center">
          <div className="flex gap-5 items-center ">
            <Image
              src="/Images/GroupProfile.png"
              width={150}
              height={10}
              alt="GP"
            />
            <p className="font-semibold text-gray-950">Trusted by many</p>
          </div>
          <div className="h-10 w-1 bg-green-800 mx-15" />
          <div>
            <p>6000+ Entrepreneurs Mentored</p>
          </div>
        </div>
        <div className="mt-[60px] text-4xl font-bold flex flex-col items-center">
          <p>Welcome to</p>
          <div className="flex items-center gap-2">
            <div className="text-[#2E7D32] flex flex-col  items-center mt-4">
              Uttarakhand
              <Image
                src="/Images/GreenStroke.png"
                width={200}
                height={20}
                alt="stroke"
              />
            </div>
            <p>Angels Network</p>
          </div>
        </div>
        <div className="absolute h-[100px] w-[100px] bg-[#C0E87D] rounded-full top-[30%] left-[96%] "></div>

        <div className="absolute h-[200px] w-[200px] bg-[#C0E87D] rounded-full top-[65%] right-[94%] "></div>
      </section>
      {/* Second Section */}
      <section className="h-auto bg-[#FFFCFC]/60 w-full rounded-[70px] px-[4vw] overflow-hidden relative pb-[100px]">
        <div className="absolute h-[200px] w-[200px] bg-[#C0E87D]/40  rounded-full top-[10%] left-[94%] flex justify-center items-center">
          <div className=" h-[150px] w-[150px] bg-[#C0E87D] rounded-full top-[10%] left-[94%] "></div>
        </div>
        <article className="pt-[40px]">
          <h1 className="text-5xl font-bold py-[20px]">
            Why do we <span className="text-[#2E7D32]">exist?</span>
          </h1>
          <p className="text-xl font-semibold pr-[6vw]">
            India&apos;s startup ecosystem is thriving, fueled by ambitious
            entrepreneurs turning their dreams into reality. The vibrant state
            of Uttarakhand is becoming a key part of this growth journey.
            Inspired by seasoned entrepreneurs of the region, we founded
            Uttaranchal Angel Network to create a strong support system for
            startups. Our mission is to empower visionary founders, provide
            strategic mentorship, and fuel innovations that make a meaningful
            impact on society. We exist to be the driving force behind startup
            success in Uttarakhand and beyond!
          </p>
        </article>
        <article className="flex flex-col justify-center items-center mt-[100px]">
          <h1 className="font-bold uppercase text-5xl">
            startups funded by our
            <span className="uppercase text-[#2E7D32] pl-4">members.</span>
          </h1>
          {/* Member Cards */}
          <div className="mt-[70px] flex gap-[5vw] ">
            <div className="group h-[260px] w-[250px] bg-[#2E7D32] hover:scale-110 hover:bg-[#C0E87D] transition-transform transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-white  transition-colors rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/Icons/Invision.png"
                  width={150}
                  height={150}
                  alt="Invision"
                />
                <p className="font-semibold">Invision</p>
              </div>
            </div>
            <div className="group h-[260px] w-[250px] bg-[#2E7D32] hover:scale-110 hover:bg-[#C0E87D] transition-transform transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-white  transition-colors rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/Icons/Telepat.png"
                  width={150}
                  height={150}
                  alt="Telepat"
                />
                <p className="font-semibold">Telepat.io</p>
              </div>
            </div>
            <div className="group h-[260px] w-[250px] bg-[#2E7D32] hover:scale-110 hover:bg-[#C0E87D] transition-transform transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-white  transition-colors rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/Icons/Evernote.png"
                  width={100}
                  height={100}
                  alt="Invi"
                />
                <p className="font-semibold">Evernote</p>
              </div>
            </div>
            <div className="group h-[260px] w-[250px] bg-[#2E7D32] hover:scale-110 hover:bg-[#C0E87D] transition-transform transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-white  transition-colors rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/Icons/node.png"
                  width={100}
                  height={100}
                  alt="Invision"
                />
                <p className="font-semibold">node.js</p>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* Third Section */}
      <section className="h-screen w-full rounded-[70px] px-[4vw] py-[4vw] overflow-hidden bg-[#FFF] shadow-2xl mt-[50px]">
        {/*  */}
        <article className="flex justify-between items-center mb-[50px]">
          <div className="w-[48%] h-[300px] flex flex-col gap-3">
            <h3 className="text-5xl font-semibold">
              Empowering Startup Growth
            </h3>
            <h4 className="text-3xl ">
              A Community of Entrepreneurs & Investors
            </h4>
            <p className="font-semibold text-lg text-justify">
              A Community of Entrepreneurs Empowering Startups, Uttarakhand
              Angel Network is a dynamic group of experienced entrepreneurs and
              investors committed to supporting promising startups and helping
              them scale new heights. We focus on early-stage and growth-stage
              startups, providing them with strategic mentorship, funding, and
              industry expertise to refine and validate their business models.
            </p>
            <div className="px-4 w-fit py-2 border-2 border-green-300 text-green-300 rounded-md">
              Become A Member
            </div>
          </div>
          <div className="w-[42%] h-[250px] relative">
            <Image
              src="/Images/Growth.png"
              fill
              objectFit="cover"
              alt="Growth"
            />
          </div>
        </article>
        {/*  */}
        <article className="flex justify-between items-center ">
          <div
            className="w-[42%] h-[250px] relative"
            style={{
              backgroundImage: `url('/Images/Success.png')`,
              backgroundPositionY: "-20px",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="w-[48%] h-[300px] flex flex-col gap-3">
            <h3 className="text-5xl font-semibold">
              Collaborative Startup Success
            </h3>
            <h4 className="text-3xl ">
              Fueling Startup Growth Through Expertise
            </h4>
            <p className="font-semibold text-lg text-justify">
              As the startup ecosystem rapidly evolves, we actively contribute
              by offering tailored guidance, hands-on mentoring, and valuable
              networking opportunities. Our mission is to empower innovative
              businesses and drive entrepreneurial success through collaborative
              growth and strategic investments.
            </p>
            <div className="flex items-center justify-end gap-4">
              <div className="text-sm px-2 py-2 bg-[#EAF0DD] rounded-sm text-[#575656]">
                More Info
              </div>
              <div className="px-4 w-fit py-2 border-2 border-green-300 text-green-300 rounded-md">
                Apply To Pitch
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* Fourth Section */}
      <section></section>
    </main>
  );
}
