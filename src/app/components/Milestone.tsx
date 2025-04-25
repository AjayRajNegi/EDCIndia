"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Milestone() {
  const ent = useRef(null);
  const inv = useRef(null);
  const job = useRef(null);
  const port = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      repeat: -1,
      yoyo: false,
    });

    timeline
      .to(ent.current, { y: -50, duration: 0.8, delay: 0.5 })
      .to(inv.current, { y: -52, duration: 0.8 })
      .to(inv.current, { y: -100, duration: 0.8, delay: 0.3 })
      .to(job.current, { y: -105, duration: 0.75 })
      .to(job.current, { y: -150, duration: 0.75, delay: 0.3 })
      .to(port.current, { y: -155, duration: 0.7 })
      .to(port.current, { y: -100, duration: 0.3, delay: 0.3 })
      .to(job.current, { y: -50, duration: 0.3 })
      .to(inv.current, { y: 0, duration: 0.3 })
      .to(ent.current, { y: 0, duration: 0.3 });
  }, []);

  return (
    <>
      <div className="overflow-hidden max-h-[50px] flex flex-col gap-5 pt-2 items-center">
        <p ref={ent} className="flex items-center">
          <span className="text-[#000] text-2xl font-bold mr-5">6000+</span>
          <span className="text-[#2E7D32] font-semibold">
            Entrepreneurs Mentored
          </span>
        </p>
        <p ref={inv} className="flex items-center">
          <span className="text-[#000] text-2xl font-bold mr-5">80+</span>
          <span className="text-[#2E7D32] font-semibold">
            Investors Onboarded
          </span>
        </p>
        <p ref={job} className="flex items-center">
          <span className="text-[#000] text-2xl font-bold mr-5">1200+</span>
          <span className="text-[#2E7D32] font-semibold">
            Jobs Created By Portfolio
          </span>
        </p>
        <p ref={port} className="flex items-center">
          <span className="text-[#000] text-2xl font-bold mr-5">35</span>
          <span className="text-[#2E7D32] font-semibold">
            Portfolio Startups
          </span>
        </p>
      </div>
    </>
  );
}
