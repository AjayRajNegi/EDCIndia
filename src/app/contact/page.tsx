import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

export default function contact() {
  return (
    <main className="bg-[#F6F5EB] h-auto w-full overflow-x-clip relative">
      <Navbar />

      <article className="my-[80px] w-full  flex flex-col items-center ">
        <h1 className="text-4xl md:text-5xl font-bold relative z-10">
          Connect With <span className="text-[#2E7D32] ">Us.</span>
        </h1>
        {/* Background Circle */}
        <div>
          <div className="absolute h-[200px] w-[200px] bg-[#C0E87D]/30 md:bg-[#C0E87D]/40 rounded-full top-[5%] left-[110%] md:left-[50%] -translate-x-[50%] xl:-translate-x-[0%] xl:left-[94%] flex justify-center items-center z-0">
            <div className=" h-[150px] w-[150px] bg-[#C0E87D]/40 xl:bg-[#C0E87D] rounded-full top-[10%] left-[94%] z-0"></div>
          </div>
          <div className="hidden md:block absolute h-[75px] w-[75px] bg-[#C0E87D]  rounded-full top-[9%] md:left-[58%] -translate-x-[50%] xl:-translate-x-[0%]  z-0" />
          <div className="absolute h-[150px] w-[150px] bg-[#C0E87D]  rounded-full top-[5%] md:top-[6%] left-[30%] -translate-x-[50%] xl:-translate-x-[0%]  z-0" />
          <div className="absolute h-[150px] w-[150px] bg-[#C0E87D]  rounded-full top-[-5%] left-[-3%] -translate-x-[50%] xl:-translate-x-[0%]  z-0" />
        </div>
      </article>
      <section className="min-h-[90vh] bg-[#FFFCFC] rounded-4xl mx-[2vw] shadow-2xl mb-[50px] flex flex-col md:flex-row gap-10 px-[2vw] py-[4vw] justify-around">
        {/* Contact Section */}
        <div className="w-[80%] md:w-[30%] justify-between flex flex-col mx-auto">
          <h1 className="text-5xl text-center md:text-left  md:text-6xl font-bold text-balance ">
            Let&apos;s discuss about the
            <span className="text-[#2E7D32] px-2">future</span> together
          </h1>
          <div className=" flex flex-col gap-[25px] my-10 md:my-0">
            <div className="flex items-center gap-3 font-semibold text-lg px-4">
              <Image
                src="/Icons/Envelope.png"
                width={20}
                height={20}
                alt="Facebook"
              />
              infoEDCIndia@gmail.com
            </div>
            <div className="flex items-center gap-3 font-semibold text-lg bg-[#729930]/50 border-[3px] border-[#2E7D32] py-3 px-4 rounded-lg ">
              <Image
                src="/Icons/Telephone.png"
                width={20}
                height={20}
                alt="Facebook"
              />
              +91567987243
            </div>
            <div className="flex items-center gap-3 font-semibold text-lg px-4">
              <Image
                src="/Icons/Location.png"
                width={20}
                height={20}
                alt="Facebook"
              />
              123 Street 456 House
            </div>
          </div>
          <div className="flex gap-5 items-center px-2 mx-auto md:mx-0">
            <Image
              src="/Icons/FacebookContact.png"
              width={40}
              height={40}
              alt="Facebook"
            />
            <Image
              src="/Icons/InstagramContact.png"
              width={40}
              height={40}
              alt="Facebook"
              className="ml-1 mr-3"
            />
            <Image
              src="/Icons/TwitterContact.png"
              width={25}
              height={25}
              alt="Facebook"
            />
          </div>
        </div>
        {/* Form Section */}
        <div className="w-[96%] mx-auto md:w-[50%] bg-[#F6F5EB] border-[#C2C2C2] border-2 rounded-3xl h-auto">
          <Form />
        </div>
      </section>
      <Footer />
    </main>
  );
}
