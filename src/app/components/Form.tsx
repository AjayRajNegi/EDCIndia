"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";

interface optionsType {
  id: number;
  option: string;
}

const options: optionsType[] = [
  {
    id: 1,
    option: "An Entrepreneur",
  },
  {
    id: 2,
    option: "An Angel Investor",
  },
  { id: 3, option: "Someone Else?" },
  {
    id: 4,
    option: "Just Exploring",
  },
  { id: 5, option: "Other" },
];
export default function Form() {
  const [option, setOption] = useState("An Entrepreneur");
  return (
    <>
      <main className="p-4 md:p-[2vw]">
        <div>
          <p className="font-semibold">I&apos;m interested in / I&apos;m a..</p>
          <div className="flex flex-wrap gap-3 mt-3">
            {options.map((item, index) => (
              <div
                key={index}
                className={`px-2 py-1 rounded-sm cursor-pointer text-nowrap ${
                  option === item.option
                    ? " bg-[#2E7D32] text-[#fff] border-2 border-[#2E7D32]"
                    : " text-[#2E0249]/30 border-2 border-[#2E0249]/30"
                }`}
                onClick={() => setOption(item.option)}
              >
                {item.option}
              </div>
            ))}
          </div>
        </div>

        <form className="flex flex-col my-10">
          <input
            type="text"
            placeholder="Your Name"
            className="border-b-2 border-[#5C6C42]/50 focus:outline-none focus:ring-0 focus:border-[#2E7D32] focus:text-[#000] text-[#5C6C42]/50"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="border-b-2 border-[#5C6C42]/50 mt-10 focus:outline-none focus:text-[#000] focus:ring-0 focus:border-[#2E7D32] text-[#5C6C42]/50"
          />
          <input
            type="number"
            placeholder="Your Number"
            className="border-b-2 border-[#5C6C42]/50 mt-10 focus:outline-none  focus:ring-0 focus:border-[#2E7D32] focus:text-[#000] text-[#5C6C42]/50"
          />
        </form>
        <button className="bg-[#2E7D32] w-fit px-12 py-3 rounded-lg flex justify-center items-center gap-2 text-[#fff] mt-[100px] md:mt-[200px] ">
          <Image src="/Icons/Send.png" alt="Send" width={20} height={20} />
          Send Message
        </button>
      </main>
    </>
  );
}
