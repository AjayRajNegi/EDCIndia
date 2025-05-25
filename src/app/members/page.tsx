import FAQ from "./FAQ";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MembershipForm from "./MembershipForm";
import Apply from "./Apply";

export default function members() {
  return (
    <div className="bg-[#F6F5EB] h-auto w-full relative overflow-x-clip">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="text-4xl md:text-5xl font-bold flex flex-col items-center ">
          <h1 className="my-[50px] md:my-[80px] relative z-[10]">
            Become Our <span className="text-[#2E7D32]">Member.</span>
          </h1>
          <div className="relative z-[10] aspect-video w-[96%] max-w-[2000px]">
            <Image
              src="/Images/memberBanner.png"
              fill
              objectFit="cover"
              alt="memberBanner"
            />
          </div>
          {/* Background Circles */}
          <div>
            <div className="absolute h-[200px] w-[200px] bg-[#C0E87D]/30 md:bg-[#C0E87D]/40 rounded-full top-[1%] left-[110%] md:left-[94%] -translate-x-[50%] xl:-translate-x-[0%] hidden justify-center items-center z-0  md:flex">
              <div className=" h-[150px] w-[150px] bg-[#C0E87D]/40 xl:bg-[#C0E87D] rounded-full top-[10%] left-[94%] z-0"></div>
            </div>
            <div className="hidden md:block absolute h-[75px] w-[75px] bg-[#C0E87D]  rounded-full top-[2.5%] md:left-[58%] -translate-x-[50%] xl:-translate-x-[0%]  z-0" />
            <div className="absolute h-[150px] w-[150px] bg-[#C0E87D]  rounded-full top-[1.5%]  left-[30%] -translate-x-[50%] xl:-translate-x-[0%]  z-0" />
            <div className="absolute h-[150px] w-[150px] bg-[#C0E87D]  rounded-full top-[-1%] left-[-3%] -translate-x-[50%] xl:-translate-x-[0%]  z-0" />
          </div>
        </section>
        {/* Features Section */}
        <section className="w-full h-auto bg-[linear-gradient(to_top,_#2E7D32_50%,_#FFFCFC_50%)] p-[4vw]">
          {/* Headings For Features Section */}
          <div className="flex flex-col items-center mt-[10px]">
            <h1 className="text-4xl md:text-5xl font-bold text-[#107D15]">
              Membership Benefits
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold px-[10%] md:px-[20%] text-center pt-[20px] md:pt-[60px]">
              Empowering Connections, Mitigating Risks, Unlocking Growth
            </h2>
          </div>
          {/* Feature Cards Section */}
          <div className="flex gap-5 justify-center flex-wrap mt-[60px]">
            {/* First Card */}
            <div className="h-[420px] w-[380px] bg-[linear-gradient(to_top,_rgba(169,241,49,0.5)_50%,_#FFFCFC_50%)] rounded-2xl">
              <div className="h-[380px] w-full bg-[#FFFFFF] rounded-2xl hover:translate-y-[40px] p-6 flex flex-col gap-6 transition-transform border-[1px] border-gray-400">
                <div className="relative h-[50%] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/Images/memberCard1.png"
                    fill
                    objectFit="cover"
                    alt="StartupExcess"
                  />
                </div>

                <h2 className="text-xl font-bold">Startup Excess</h2>
                <p className="text-lg">
                  Gain exclusive entry to vetted startups, carefully screened by
                  our team to ensure quality and potential.
                </p>
              </div>
            </div>
            {/* Second Card */}
            <div className="h-[420px] w-[380px] bg-[linear-gradient(to_top,_rgba(169,241,49,0.5)_50%,_#FFFCFC_50%)] rounded-2xl">
              <div className="h-[380px] w-full bg-[#FFFFFF] rounded-2xl hover:translate-y-[40px] p-6 flex flex-col gap-6 transition-transform border-[1px] border-gray-400">
                <div className="relative h-[50%] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/Images/memberCard2.png"
                    fill
                    objectFit="cover"
                    alt="RiskProtection"
                  />
                </div>

                <h2 className="text-xl font-bold">Risk Protection</h2>
                <p className="text-lg">
                  Risk Protection Minimize uncertainty with scalable support and
                  internal risk mitigation strategies designed for stability.
                </p>
              </div>
            </div>
            {/* Third Card */}
            <div className="h-[420px] w-[380px] bg-[linear-gradient(to_top,_rgba(169,241,49,0.5)_50%,_#FFFCFC_50%)] rounded-2xl">
              <div className="h-[380px] w-full bg-[#FFFFFF] rounded-2xl hover:translate-y-[40px] p-6 flex flex-col gap-6 transition-transform border-[1px] border-gray-400">
                <div className="relative h-[50%] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/Images/memberCard3.png"
                    fill
                    objectFit="cover"
                    alt="knowledgeExchange"
                  />
                </div>

                <h2 className="text-xl font-bold">Knowledge Exchange</h2>
                <p className="text-lg">
                  Knowledge Exchange Connect with a diverse community, fostering
                  shared insights and valuable learning opportunities.
                </p>
              </div>
            </div>
          </div>
          {/* Members Contribute Section */}
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
        {/* Member Images */}
        <section></section>
      </main>
      <Footer />
    </div>
  );
}
