"use client";
import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
    src: "/Icons/home.png",
  },
  {
    id: 2,
    title: "Members",
    href: "/members",
    src: "/Icons/member.png",
  },
  {
    id: 3,
    title: "Entrepreneurs",
    href: "/entrepreneurs",
    src: "/Icons/entrepreneur.png",
  },
  {
    id: 4,
    title: "Contact Us",
    href: "/contact",
    src: "/Icons/contact.png",
  },
];
export default function Nav() {
  const pathName = usePathname();
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="sticky inset-x-0 top-0 bg-transparent px-4">
      <nav className="container mx-auto">
        <motion.button
          id="al"
          aria-label="Name"
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="relative z-10 flex flex-col space-y-1 bg-green-800 rounded-sm px-2 py-2"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 5,
              },
            }}
            className={`w-4 ${
              mobileNav ? "bg-white" : "bg-white"
            } block h-[0.8px]`}
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className={`w-4 ${
              mobileNav ? "bg-white" : "bg-white"
            } block h-[0.8px]`}
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -5,
              },
            }}
            className={`w-4 ${
              mobileNav ? "bg-white" : "bg-white"
            } block h-[0.8px]`}
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "-100%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "afterChildren",
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 flex flex-col justify-center space-y-10 bg-white p-6 lg:hidden"
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-3"
                >
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`font-semibold ${
                        pathName === link.href
                          ? "text-3xl text-[#2E7D32] md:text-6xl"
                          : "text-2xl text-[#7A7A7A] md:text-5xl"
                      } flex items-center tracking-tight gap-2`}
                    >
                      <img
                        src={link.src}
                        alt="logo"
                        className={`${
                          pathName === link.href
                            ? "h-[40px] w-[40px] filter"
                            : "h-[30px] w-[30px]"
                        }`}
                        style={{ aspectRatio: 0.72 }}
                      />

                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </motion.ul>
                <motion.div
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="h-px w-full bg-black"
                ></motion.div>
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="flex list-none justify-center gap-x-4"
                >
                  <a
                    href="https://www.instagram.com/edcindia.in?igsh=MTQ3cHpicGFoOTVrcA=="
                    target="_blank"
                  >
                    <div className="relative h-12 w-12 rounded-lg">
                      <Image
                        src="/Icons/Instagram.png"
                        fill
                        objectFit="cover"
                        alt="Insta"
                      />
                    </div>
                  </a>
                  <a href="https://google.com">
                    <div className="relative h-12 w-12 rounded-lg">
                      <Image
                        src="/Icons/Youtube.png"
                        fill
                        objectFit="cover"
                        alt="Insta"
                      />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/31220335/admin/dashboard/">
                    <div className="relative h-12 w-12 rounded-lg">
                      <Image
                        src="/Icons/Linkedin.png"
                        fill
                        objectFit="cover"
                        alt="Insta"
                      />
                    </div>
                  </a>
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
