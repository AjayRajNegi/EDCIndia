import Image from "next/image";
import Navbar from "./components/Navbar";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Milestone from "./components/Milestone";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F6F5EB] h-auto w-full">
      <Navbar />
      {/* First Section */}
      <section className="h-auto xl:h-[80vh] px-[4vw] flex flex-col items-center overflow-hidden relative pb-[50px] md:pb-0">
        <div className="font-bold text-3xl  md:text-6xl text-gray-950 mt-[70px] md:mt-[80px] flex flex-col items-center justify-center">
          <p>
            From <span className="text-[#2E7D32]">Idea to Launch,</span>
          </p>
          <p className="text-center">We Fuel Startups and Ignite Your Growth</p>
        </div>
        <div className="text-gray-400 text-base text-center md:text-xl font-bold mt-[30px] md:mt-[60px]">
          <p>
            Empowering startups with funding, membership, and startegic growth
            opportunities.
          </p>
        </div>
        <div className="mt-[40px] md:mt-[60px] flex flex-col md:flex-row w-full items-center justify-center">
          <div className="flex gap-5 items-center ">
            <Image
              src="/Images/GroupProfile.png"
              width={150}
              height={10}
              alt="GP"
            />
            <p className="font-semibold text-gray-950">Trusted by many</p>
          </div>
          <div className="h-10 w-1 bg-green-800 mx-15  rotate-90 md:rotate-0" />
          {/*  */}
          <Milestone />
        </div>
        <div className="mt-[40px] md:mt-[60px] text-[3vh] md:text-4xl font-bold flex flex-col items-center justify-center">
          <p>Welcome to</p>
          <div className="flex items-center gap-2 w-full -mt-5 md:mt-0">
            <div className="text-[#2E7D32] flex flex-col  items-center mt-4">
              Uttarakhand
              <Image
                src="/Images/GreenStroke.png"
                width={200}
                height={20}
                alt="stroke"
                className="hidden md:block"
              />
              <Image
                src="/Images/GreenStroke.png"
                width={150}
                height={20}
                alt="stroke"
                className="md:hidden"
              />
            </div>
            <p className="text-nowrap">Angels Network</p>
          </div>
        </div>
        <div className="absolute h-[100px] w-[100px] bg-[#C0E87D] rounded-full  top-[30%] left-[94%] md:left-[96%] "></div>

        <div className="absolute h-[200px] w-[200px] bg-[#C0E87D] rounded-full top-[55%] md:top-[65%] right-[90%] md:right-[94%] "></div>
      </section>
      {/* Second Section */}
      <section className="h-auto bg-[#FFFCFC]/60 w-full rounded-[40px] md:rounded-[70px] px-[4vw] overflow-hidden relative pb-[100px]">
        <div className="absolute h-[200px] w-[200px] bg-[#C0E87D]/30 md:bg-[#C0E87D]/40  rounded-full top-[11%] xl:top-[10%] left-[50%] -translate-x-[50%] xl:-translate-x-[0%] xl:left-[94%] flex justify-center items-center z-0">
          <div className=" h-[150px] w-[150px] bg-[#C0E87D]/40 xl:bg-[#C0E87D] rounded-full top-[10%] left-[94%] z-0"></div>
        </div>
        <article className="pt-[40px] flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold py-[20px] ">
            Why do we <span className="text-[#2E7D32]">exist?</span>
          </h1>
          <p className="text-xl font-semibold pr-0 md:pr-[6vw] text-justify">
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
        <article className="flex flex-col justify-center text-center items-center mt-[100px]">
          <h1 className="font-bold uppercase text-5xl">
            startups funded by our
            <span className="uppercase text-[#2E7D32] pl-4">members.</span>
          </h1>
          {/* Member Cards */}
          <div className="mt-[70px] flex flex-col md:flex-row gap-[5vw] ">
            <div className="group h-[260px] w-[250px] bg-[#2E7D32] hover:scale-110 hover:bg-[#C0E87D] transition-transform transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-white  transition-colors rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/Logos/Bakefit.webp"
                  width={150}
                  height={150}
                  alt="Bakefit"
                />
                <p className="font-semibold">BakeFit</p>
              </div>
            </div>
            <div className="group h-[260px] w-[250px] bg-[#2E7D32] hover:scale-110 hover:bg-[#C0E87D] transition-transform transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-white  transition-colors rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/Logos/Nivedhya.webp"
                  width={150}
                  height={150}
                  alt="Nivedhya"
                />
                <p className="font-semibold">Nivedhya11</p>
              </div>
            </div>
            <div className="group h-[260px] w-[250px] bg-[#2E7D32] hover:scale-110 hover:bg-[#C0E87D] transition-transform transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-white  transition-colors rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/Logos/SureSolar.webp"
                  width={100}
                  height={100}
                  alt="SureSolar"
                />
                <p className="font-semibold">SureSolar</p>
              </div>
            </div>
            <div className="group h-[260px] w-[250px] bg-[#2E7D32] hover:scale-110 hover:bg-[#C0E87D] transition-transform transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-white  transition-colors rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/Logos/ShreeKitchen.webp"
                  width={100}
                  height={100}
                  alt="ShreeKitchen"
                />
                <p className="font-semibold">ShreeKitchen</p>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* Third Section */}
      <section className="h-auto w-full rounded-[40px] md:rounded-[70px] px-[4vw] py-[4vw] overflow-hidden bg-[#FFF] shadow-2xl mt-[50px]">
        {/*  */}
        <article className="flex flex-col md:flex-row justify-between items-center mb-[50px]">
          <div className="w-full md:w-[48%] h-auto flex flex-col gap-3 mb-10 mt-5 md:mb-0 md:mt-0">
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
            <div className="px-4 w-fit py-2 border-2 border-[#2E7D32] text-[#2E7D32] rounded-md">
              Become A Member
            </div>
          </div>
          <div className="w-full md:w-[42%] h-[250px] relative overflow-hidden rounded-2xl">
            <Image
              src="/Images/Growth.png"
              fill
              objectFit="cover"
              alt="Growth"
            />
          </div>
        </article>
        {/*  */}
        <article className="flex flex-col-reverse md:flex-row justify-between items-center ">
          <div
            className="w-full md:w-[42%] h-[250px] relative rounded-2xl overflow-hidden mt-10 md:mt-10"
            style={{
              backgroundImage: `url('/Images/Success.png')`,
              backgroundPositionY: "top",
              backgroundSize: "cover",
            }}
          ></div>
          <div className=" w-full md:w-[48%] h-auto  flex flex-col gap-3">
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
              <Link
                href="/contact"
                className="px-4 w-fit py-2 border-2 border-[#2E7D32] text-[#2E7D32] rounded-md cursor-pointer"
              >
                Apply To Pitch
              </Link>
            </div>
          </div>
        </article>
      </section>
      {/* Fourth Section */}
      <section className="h-auto px-[4vw] py-[4vw] rounded-[40px] md:rounded-[70px] overflow-hidden bg-[#f4f3f3] mt-[50px]">
        {/* Testimonials */}
        <article className="">
          <div>
            <h1 className="text-5xl font-bold">Build.Serve.Scale</h1>
            <h3 className="text-2xl font-bold mt-5 mb-10">
              We&apos;re here to help you make the right decision. Explore our
              frequently asked questions and find answers below.
            </h3>
          </div>
          <div className="flex px-[4vw] justify-around items-center md:items-end flex-col md:flex-row gap-5 md:gap-0">
            <div className="w-[330px] h-[290px] bg-[#F9FFF9] border-2 border-[#898989]/30 rounded-3xl p-4 hover:bg-[#FFF] hover:shadow-xl transition-colors transition-shadow duration-200">
              <Image
                src="/Icons/QuoteIcon.png"
                width={40}
                height={30}
                alt="quote"
              />
              <p className="pt-5 text-lg">
                &quot;Investor connections! Found the perfect match, thanks for
                simplifying the search&quot;
              </p>
              <div className="flex gap-2 items-center pt-10">
                <Image src="/Images/T1.png" width={40} height={40} alt="T1" />
                <div className="text-[#2B2B2B]">
                  <p>Sarah Jones,</p>
                  <p className="-mt-1">GreenTech Solutions</p>
                </div>
              </div>
            </div>
            <div className="w-[350px] h-[300px] bg-[#F9FFF9] border-2 border-[#898989]/30 rounded-3xl p-4 hover:bg-[#FFF] hover:shadow-xl transition-colors transition-shadow duration-200">
              <Image
                src="/Icons/QuoteIcon.png"
                width={40}
                height={30}
                alt="quote"
              />
              <p className="pt-5 text-lg">
                &quot;High-quality startups, curated perfectly. Saves me time &
                keeps me ahead of the innovation curve&quot;
              </p>
              <div className="flex gap-2 items-center pt-10">
                <Image src="/Images/T2.png" width={40} height={40} alt="T2" />
                <div className="text-[#2B2B2B]">
                  <p>David Lee,</p>
                  <p className="-mt-1">Spark Ventures</p>
                </div>
              </div>
            </div>
            <div className="w-[330px] h-[290px] bg-[#F9FFF9] border-2 border-[#898989]/30 rounded-3xl p-4 hover:bg-[#FFF] hover:shadow-xl transition-colors transition-shadow duration-200">
              <Image
                src="/Icons/QuoteIcon.png"
                width={40}
                height={30}
                alt="quote"
              />
              <p className="pt-5 text-lg">
                &quot;More than just a directory. Found resources, advice, and
                even co-founders here!&quot;
              </p>
              <div className="flex gap-2 items-center pt-10">
                <Image src="/Images/T3.png" width={40} height={40} alt="T3" />
                <div className="text-[#2B2B2B]">
                  <p>Marai Pernez,</p>
                  <p className="-mt-1">Social Impact Agency</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="mt-[100px]">
          <FAQSection />
        </article>
      </section>
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
