"use client";
import Image from "next/image";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faq: FAQ[] = [
  {
    question: "How Does Uttarakhand Angels Network(UAN) work ?",
    answer:
      "Uttarakhand Angels Network facilitates investment into early stage ventures and startups where the interest of our investors is closely inclined. uAN investors mostly are business professionals with their experience of building and running successful businesses.",
  },
  {
    question: "How do I apply for a pitch?",
    answer:
      "Simply fill out the “Apply to Pitch” form on our website with details about your startup, funding requirements, and business model or send us your investor deck on [email] , Our team will review your application and get back to you.",
  },
  {
    question: "How long does a review process take?",
    answer:
      "Our team typically takes 7-14 days to review your application. If shortlisted, you will be invited to pitch in front of our investors.",
  },
  {
    question: "What all information am I required to share with UAN team?",
    answer:
      "We require your presentation with summary of your startup covering the aspects like problem statement, your solution, value proposition, traction with proof, product stage, amount of funding needed, use of funding, projection plan, team details etc.",
  },
  {
    question: "How does a typical deal flow look like?",
    answer:
      "If you are able to catch enough eyeballs from your presentation at UAN, you will be called for a separate meeting with our investors where they will look deeper into the deal flow and question you on various aspects before taking their decision to invest. Through this meeting you shall also get clarity on whether or not we will pursue the deal. If decided to proceed further with mutual consent, we shall conduct due diligence on your business.",
  },
  {
    question: "What is the investment range of UAN Angles?",
    answer:
      "Our angels collectively invest on a range of Rs. 10 lakhs to Rs. 2 Crore depending on the stage of the startup.",
  },
  {
    question: "What does UAN typically look for in a startup?",
    answer: `Below is the gist of some important things we give consideration.
Team's capability and background, 
Startup's Traction,
Product Stage and validation,
Statistics/ traction proof,
Competition Analysis,
Go to Market Strategy,
Projection Plan,
Funding Needs,
Use of Funding,
Previous startup experience.`,
  },
  {
    question: "What if I want UAN to sign a NDA with me?",
    answer: `Well, we don't sign non-disclosure agreements (NDAs) with the presenters. But we make sure that it is only our network members with whom your presentation/ plans are shared. We have an internal NDA signup with all the network and secretariat members, which protects your interest.`,
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(-1);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex justify-center w-full">
      <section className="py-10 bg-[#FFFFFF]  rounded-3xl rounded-bl-none rounded-tl-none shadow-2xl">
        <div className="mx-auto max-w-5xl ">
          <div className="mb-5">
            <h2 className="text-5xl font-manrope text-center font-semibold text-gray-900 leading-[3.25rem]">
              FAQ
            </h2>
          </div>
          <div className="space-y-0">
            {faq.map((item, index) => (
              <div
                key={index}
                className={`accordion py-3 px-4 border-b border-gray-200 transition-all duration-500 rounded-2xl hover:bg-green-50 ${
                  activeIndex === index ? "bg-green-50" : ""
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h5
                    className={`leading-8 transition duration-500 font-medium group-hover:text-[#2E7D32] ${
                      activeIndex === index ? "text-[#2E7D32]" : "text-gray-900"
                    }`}
                  >
                    {item.question}
                  </h5>
                  <Image
                    src="/Icons/down.png"
                    width={25}
                    height={25}
                    alt="Down"
                    className={`${
                      activeIndex === index ? "rotate-180 " : ""
                    } transition-transform duration-300`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out mt-4 ${
                    activeIndex === index ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <p className="text-base text-gray-900 leading-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
