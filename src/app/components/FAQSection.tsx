"use client";
import Image from "next/image";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I update my billing information?",
    answer:
      "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
  },
  {
    question: "How do I update my profile information?",
    answer:
      "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
  },
  {
    question: "How do I find my purchase history?",
    answer:
      "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(-1);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-10 bg-[#FFFFFF] w-[90%] md:w-[80%] mx-auto  rounded-3xl shadow-xl">
      <div className="mx-auto max-w-5xl ">
        <div className="mb-5">
          <h2 className="text-5xl font-manrope text-center font-semibold text-gray-900 leading-[3.25rem]">
            FAQ
          </h2>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`accordion py-5 px-4 border-b border-gray-200 transition-all duration-500 rounded-2xl hover:bg-green-50 ${
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
                {/* <ChevronDown
                  className={`transition-transform duration-500 text-gray-500 group-hover:text-indigo-600 ${
                    activeIndex === index ? "rotate-180 text-indigo-600" : ""
                  }`}
                  size={22}
                /> */}
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
  );
}
