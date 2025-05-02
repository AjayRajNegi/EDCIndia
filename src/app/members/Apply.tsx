"use client";
import { motion, useScroll } from "framer-motion";
export default function Apply() {
  const { scrollYProgress } = useScroll();
  return (
    <main className="h-[300vh] w-full bg-red-200 flex ">
      <div className="w-[30%] h-auto bg-red-300 flex flex-col items-center">
        <div className="text-5xl bg-[#C0E87D] px-9 py-5 font-semibold rounded-full w-fit text-[#2E7D32] mb-0">
          1
        </div>
        <motion.div
          className=" w-2 bg-[#C0E87D] origin-top z-[]"
          style={{ scaleX: scrollYProgress }}
        ></motion.div>
        <div className="text-5xl bg-[#C0E87D] px-8 py-5 font-semibold rounded-full w-fit text-[#2E7D32] mb-0">
          2
        </div>
        <div className="h-[400px] w-2 bg-[#C0E87D]"></div>
        <div className="text-5xl bg-[#C0E87D] px-8 py-5 font-semibold rounded-full w-fit text-[#2E7D32] mb-0">
          3
        </div>
      </div>
      <div className="w-[70%] h-auto bg-red-400">Right</div>
    </main>
  );
}
