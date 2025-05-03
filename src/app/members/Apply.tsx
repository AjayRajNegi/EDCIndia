"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ScrollLinked() {
  return (
    <>
      <main className="p-[4vw]">
        <h1 className="text-5xl font-bold text-center text-[#2E7D32]">
          How Can I Become A Member?
        </h1>
        <article className="flex">
          <div className="flex flex-col items-center w-[20%] pt-[200px]">
            <motion.p
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
              className="text-4xl md:text-5xl bg-[#C0E87D] px-8 md:px-9 py-5 font-semibold rounded-full w-fit text-[#2E7D32] mb-0"
            >
              1
            </motion.p>
            <motion.div
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
              className="w-[5px] bg-[#C0E87D] h-[550px]"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
              className="text-4xl md:text-5xl bg-[#C0E87D] px-8 md:px-9 py-5 font-semibold rounded-full w-fit text-[#2E7D32] mb-0"
            >
              2
            </motion.p>
            <motion.div
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
              className="w-[5px] bg-[#C0E87D] h-[550px]"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: "all" }}
              className="text-4xl md:text-5xl bg-[#C0E87D] px-8 md:px-9 py-5 font-semibold rounded-full w-fit text-[#2E7D32] mb-0"
            >
              3
            </motion.p>
          </div>
          <div className="w-[80%]">
            <motion.section
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.7 }}
              className="h-[600px] flex items-center justify-center gap-10"
            >
              <h2 className="text-3xl font-semibold text-center w-[20%] text-[#2E7D32]">
                Apply Though Our Membership Form, Available Online.
              </h2>
              <div className="relative h-[400px] aspect-video">
                <Image
                  src="/Images/memberGraphics1.png"
                  fill
                  objectFit="cover"
                  alt="G1"
                />
              </div>
            </motion.section>
            <motion.section
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              className="h-[600px] flex items-center justify-center gap-10"
            >
              <h2 className="text-3xl font-semibold text-center w-[20%] text-[#2E7D32]">
                Our Governing Council Will Review Your Application.
              </h2>
              <div className="relative h-[400px] aspect-video">
                <Image
                  src="/Images/memberGraphics2.png"
                  fill
                  objectFit="cover"
                  alt="G1"
                />
              </div>
            </motion.section>
            <motion.section
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.7 }}
              className="h-[600px] flex items-center justify-center gap-[20vw]"
            >
              <h2 className="text-3xl font-semibold text-center w-[25%] text-[#2E7D32]">
                If Approved, You Will Be Asked TO Sign The Membership Charter.
              </h2>
              <div className="relative h-[300px] aspect-[1/1]">
                <Image
                  src="/Images/memberGraphics3.png"
                  fill
                  objectFit="cover"
                  alt="G1"
                />
              </div>
            </motion.section>
          </div>
        </article>
      </main>
    </>
  );
}
