import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Apply from "../members/Apply";
import MembershipForm from "../members/MembershipForm";
import FAQ from "../members/FAQ";
export default function Entrepreneurs() {
  return (
    <div className="bg-[#F6F5EB] h-auto w-full relative overflow-x-clip">
      <Navbar />
      <main>
        {/* Heading And Image */}
        <section className="mt-[80px] mb-[20px] w-full  flex flex-col items-center ">
          <h1 className="text-4xl md:text-5xl font-bold relative z-10">
            Connect With <span className="text-[#2E7D32] ">Us.</span>
          </h1>
          <div className="relative z-[10] aspect-video w-[96%] max-w-[2000px] bg-red-200 mt-[40px]">
            <Image
              src="/Images/memberBanner.png"
              fill
              objectFit="cover"
              alt="memberBanner"
            />
          </div>
          {/* Background Circle */}
          <div>
            <div className="absolute h-[200px] w-[200px] bg-[#C0E87D]/30 md:bg-[#C0E87D]/40 rounded-full top-[0%] left-[110%] md:left-[50%] -translate-x-[50%] xl:-translate-x-[0%] xl:left-[94%] flex justify-center items-center z-0">
              <div className=" h-[150px] w-[150px] bg-[#C0E87D]/40 xl:bg-[#C0E87D] rounded-full top-[10%] left-[94%] z-0"></div>
            </div>
            <div className="hidden md:block absolute h-[75px] w-[75px] bg-[#C0E87D]  rounded-full top-[0%] md:left-[58%] -translate-x-[50%] xl:-translate-x-[0%]  z-0" />
            <div className="absolute h-[150px] w-[150px] bg-[#C0E87D]  rounded-full top-[0%] md:top-[0%] left-[30%] -translate-x-[50%] xl:-translate-x-[0%]  z-0" />
            <div className="absolute h-[150px] w-[150px] bg-[#C0E87D]  rounded-full top-[0%] left-[-3%] -translate-x-[50%] xl:-translate-x-[0%]  z-0" />
          </div>
        </section>
        {/* Graphic Cards */}
        <section className="flex items-center flex-col mb-[40px]">
          <div className="h-[40px] md:h-[140px] w-[100vw] relative">
            <Image
              src="/Images/entrepreneurs/scribble.png"
              fill
              objectFit="cover"
              alt="scribble"
            />
          </div>
          <div className="mt-[70px] flex flex-col md:flex-row gap-[5vw] ">
            <div className="group h-[260px] w-[250px] bg-[#2E7D32] hover:scale-110 hover:bg-[#C0E87D] transition-transform transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-white  transition-colors rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/Images/entrepreneurs/unique.png"
                  width={100}
                  height={100}
                  alt="unique"
                />
                <p className="font-semibold">BakeFit</p>
              </div>
            </div>
            <div className="group h-[260px] w-[250px] bg-[#2E7D32] hover:scale-110 hover:bg-[#C0E87D] transition-transform transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-white  transition-colors rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/Images/entrepreneurs/customer.png"
                  width={100}
                  height={100}
                  alt="customer"
                />
                <p className="font-semibold">Nivedhya11</p>
              </div>
            </div>
            <div className="group h-[260px] w-[250px] bg-[#2E7D32] hover:scale-110 hover:bg-[#C0E87D] transition-transform transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-white  transition-colors rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/Images/entrepreneurs/market.png"
                  width={100}
                  height={100}
                  alt="market"
                />
                <p className="font-semibold">SureSolar</p>
              </div>
            </div>
            <div className="group h-[260px] w-[250px] bg-[#2E7D32] hover:scale-110 hover:bg-[#C0E87D] transition-transform transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-white  transition-colors rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/Images/entrepreneurs/team.png"
                  width={100}
                  height={100}
                  alt="team"
                />
                <p className="font-semibold">ShreeKitchen</p>
              </div>
            </div>
          </div>
        </section>
        {/* Member/Product Section */}
        <section>
          <Apply />
        </section>
        {/* Form-FAQ Section */}
        <section className="flex flex-col md:flex-row justify-center w-full bg-[#FFFCFC] py-[100px] items-center gap-[20px] md:gap-0">
          <article className="w-[90%] md:w-[45%]">
            <MembershipForm />
          </article>
          <article className="w-[90%] md:w-[45%]">
            <FAQ />
          </article>
        </section>
        {/* Demo Days Section */}
        <section className="bg-[#2E7D36] h-auto py-[100px]">
          <h1 className="text-6xl font-semibold text-[#C0E87D] text-center">
            More About Our Demo Days?
          </h1>
          <div className="flex flex-wrap gap-5 justify-center mt-[50px]">
            {/* Demo Cards */}
            <div
              className="h-[300px] w-[300px] md:h-[360px] md:w-[360px] border-2 border-[#C0E87D] rounded-xl flex justify-center flex-col items-center gap-[25px] hover:scale-110 md:hover:scale-125 transition transform-600"
              style={{
                backgroundColor: `#2E7D36`,
                background: `linear-gradient(48deg,rgba(46, 125, 54, 1) 0%, rgba(46, 125, 54, 1) 83%, rgba(192, 232, 125, 1) 100%)`,
              }}
            >
              <p className="text-5xl bg-[#C0E87D] px-9 py-5 font-semibold rounded-full w-fit text-[#2E7D32] mb-0">
                1
              </p>
              <p className="text-3xl font-semibold text-[#C0E87D] text-center mx-[2vw]">
                Pre-screened, Sector Agnostic Startups Presented.
              </p>
            </div>
            <div
              className="h-[300px] w-[300px] md:h-[360px] md:w-[360px] border-2 border-[#C0E87D] rounded-xl flex justify-center flex-col items-center gap-[25px] hover:scale-110 md:hover:scale-125 transition transform-600"
              style={{
                backgroundColor: `#2E7D36`,
                background: `linear-gradient(48deg,rgba(46, 125, 54, 1) 0%, rgba(46, 125, 54, 1) 83%, rgba(192, 232, 125, 1) 100%)`,
              }}
            >
              <p className="text-5xl bg-[#C0E87D] px-8 py-5 font-semibold rounded-full w-fit text-[#2E7D32] mb-0">
                2
              </p>
              <p className="text-3xl font-semibold text-[#C0E87D] text-center mx-[2vw]">
                Held Physically or Virtually Monthly for Members.
              </p>
            </div>
            <div
              className="h-[300px] w-[300px] md:h-[360px] md:w-[360px] border-2 border-[#C0E87D] rounded-xl flex justify-center flex-col items-center gap-[25px] hover:scale-110 md:hover:scale-125 transition transform-600"
              style={{
                backgroundColor: `#2E7D36`,
                background: `linear-gradient(48deg,rgba(46, 125, 54, 1) 0%, rgba(46, 125, 54, 1) 83%, rgba(192, 232, 125, 1) 100%)`,
              }}
            >
              <p className="text-5xl bg-[#C0E87D] px-8 py-5 font-semibold rounded-full w-fit text-[#2E7D32] mb-0">
                3
              </p>
              <p className="text-3xl font-semibold text-[#C0E87D] text-center mx-[2vw]">
                Members are Free to Share their Interests & Proceed.
              </p>
            </div>
          </div>
        </section>
        {/*  Empowering Startup Growth */}
        <section className="flex flex-col md:flex-row justify-between items-center mb-[50px] p-[4vw]">
          <div className="w-full md:w-[48%] h-auto flex flex-col gap-3 mb-10 mt-5 md:mb-0 md:mt-0">
            <h3 className="text-5xl font-semibold">
              Empowering Startup Growth
            </h3>
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
        </section>
        {/* Members Contribute Section */}
        <section className="bg-[#2E7D32] pb-[80px]">
          <h1 className="text-5xl font-bold text-[#C0E87D] text-center py-[70px]">
            How Do Our Members Contribute?
          </h1>
          <div className="flex justify-around">
            <div className="w-[30%] md:w-[25%] flex flex-col items-center gap-[25px]">
              <p className="text-4xl md:text-5xl bg-[#C0E87D] px-8 md:px-9 py-5 font-semibold rounded-full w-fit text-[#2E7D32] mb-0">
                1
              </p>
              <p className="text-lg md:text-2xl font-semibold text-[#C0E87D] text-center mx-0 md:mx-[4vw]">
                Fund Early Stage Startups.
              </p>
            </div>
            <div className="w-[30%] md:w-[28%] flex flex-col items-center gap-[25px]">
              <p className="text-4xl md:text-5xl bg-[#C0E87D] px-8 py-5 font-semibold rounded-full w-fit text-[#2E7D32] mb-0">
                2
              </p>
              <p className="text-lg md:text-2xl font-semibold text-[#C0E87D] text-center mx-0 md:mx-[4vw]">
                Guiding Entrepreneurs, Powering Startups!
              </p>
            </div>
            <div className="w-[30%] md:w-[25%] flex flex-col items-center gap-[25px]">
              <p className="text-4xl md:text-5xl bg-[#C0E87D] px-8 py-5 font-semibold rounded-full w-fit text-[#2E7D32] mb-0">
                3
              </p>
              <p className="text-lg md:text-2xl font-semibold text-[#C0E87D] text-center mx-0 md:mx-[4vw]">
                Events To Promote <br />
                <span className="text-base sm:text-lg md:text-2xl">
                  Entrepreneurship.
                </span>
              </p>
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="bg-[#C0E87D] text-[#2E7D32] flex flex-col items-center p-[4vw] gap-10 pb-[40px] ">
          <h1 className="text-5xl font-bold">Our Process</h1>
          <div className="flex flex-wrap justify-center mb-[20px] gap-[32px]">
            <div className="group h-[220px] w-[220px]   transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-[#2E7D32]  transition-colors rounded-lg flex flex-col justify-center items-center ">
                <Image
                  src="/Images/entrepreneurs/pitch.png"
                  width={100}
                  height={100}
                  alt="Pitch"
                />
                <p className="w-full h-[20%] text-xl mt-5 font-semibold text-[#C0E87D] text-center">
                  Apply For Pitching
                </p>
              </div>
            </div>
            <div className="group h-[220px] w-[220px]   transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-[#2E7D32]  transition-colors rounded-lg flex flex-col items-center justify-end">
                <Image
                  src="/Images/entrepreneurs/screening.png"
                  width={100}
                  height={100}
                  alt="screening"
                />
                <p className="w-full h-[30%] text-xl mt-5 font-semibold text-[#C0E87D] text-center">
                  Application Screening
                </p>
              </div>
            </div>
            <div className="group h-[220px] w-[220px]   transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-[#2E7D32]  transition-colors rounded-lg flex flex-col justify-end items-center ">
                <Image
                  src="/Images/entrepreneurs/investors.png"
                  width={100}
                  height={100}
                  alt="Investors"
                />
                <p className="w-full h-[30%] text-xl mt-5 font-semibold text-[#C0E87D] text-center">
                  Pitch To Investors
                </p>
              </div>
            </div>
            <div className="group h-[220px] w-[220px]   transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-[#2E7D32]  transition-colors rounded-lg flex flex-col justify-end items-center ">
                <Image
                  src="/Images/entrepreneurs/interest.png"
                  width={100}
                  height={100}
                  alt="interest"
                />
                <p className="w-full h-[30%] text-xl mt-5 font-semibold text-[#C0E87D] text-center">
                  Investor Interest & Due Dilligance
                </p>
              </div>
            </div>
            <div className="group h-[220px] w-[220px]   transition-colors duration-300 rounded-lg">
              <div className="h-[250px] w-[250px] bg-[#2E7D32]  transition-colors rounded-lg flex flex-col justify-end items-center ">
                <Image
                  src="/Images/entrepreneurs/support.png"
                  width={100}
                  height={100}
                  alt="support"
                />
                <p className="w-full h-[30%] text-xl mt-5 font-semibold text-[#C0E87D] text-center px-0.5">
                  Funding & Growth Support
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold">Do We sign NDA's?</h2>
          <p className="text-2xl font-semibold px-[4vw] text-center">
            We at UAN , Don't Sign Non Disclosure Agreements (NDAs) with
            Startups. However as a Professional Organisation , We Ensure that
            Startup Details are Only Shared Within our Network. Your Interest is
            Further Protected By an Internal NDAs Signed By All Members.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
