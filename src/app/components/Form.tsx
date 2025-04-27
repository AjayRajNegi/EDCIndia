"use client";
import Image from "next/image";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyDZhxuZ9qw18-e7WqIHrfnTfc-3Hy2GAro",
  authDomain: "edcindia-45ed7.firebaseapp.com",
  projectId: "edcindia-45ed7",
  storageBucket: "edcindia-45ed7.appspot.com",
  messagingSenderId: "461448776393",
  appId: "1:461448776393:web:5a7fbd6e9dd32886a61b18",
  measurementId: "G-MPJEWL0TV2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface optionsType {
  id: number;
  option: string;
}

const options: optionsType[] = [
  { id: 1, option: "An Entrepreneur" },
  { id: 2, option: "An Angel Investor" },
  { id: 3, option: "Someone Else?" },
  { id: 4, option: "Just Exploring" },
  { id: 5, option: "Other" },
];

export default function Form() {
  const router = useRouter();

  const [option, setOption] = useState("An Entrepreneur");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState<number | "">("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked");

    if (!name.trim()) {
      alert("Name cannot be empty!");
      return;
    }

    try {
      await addDoc(collection(db, "query"), {
        name,
        email,
        number,
        option,
      });
      console.log("Success");
      router.push("/");
    } catch (e) {
      console.error("Error adding document:", e);
    }
  };

  return (
    <main className="p-4 md:p-[2vw]">
      <div>
        <p className="font-semibold">I&apos;m interested in / I&apos;m a..</p>
        <div className="flex flex-wrap gap-3 mt-3">
          {options.map((item, index) => (
            <div
              key={index}
              className={`px-2 py-1 rounded-sm cursor-pointer text-nowrap ${
                option === item.option
                  ? "bg-[#2E7D32] text-white border-2 border-[#2E7D32]"
                  : "text-[#2E0249]/30 border-2 border-[#2E0249]/30"
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
          className="border-b-2 border-[#5C6C42]/50 focus:outline-none focus:ring-0 focus:border-[#2E7D32] focus:text-black text-[#5C6C42]/50"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Email"
          className="border-b-2 border-[#5C6C42]/50 mt-10 focus:outline-none focus:text-black focus:ring-0 focus:border-[#2E7D32] text-[#5C6C42]/50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Your Number"
          className="border-b-2 border-[#5C6C42]/50 mt-10 focus:outline-none focus:ring-0 focus:border-[#2E7D32] focus:text-black text-[#5C6C42]/50"
          value={number}
          onChange={(e) =>
            setNumber(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </form>

      <button
        className="bg-[#2E7D32] w-fit px-12 py-3 rounded-lg flex justify-center items-center gap-2 text-white mt-[100px] md:mt-[200px]"
        onClick={handleSubmit}
      >
        <Image src="/Icons/Send.png" alt="Send" width={20} height={20} />
        Send Message
      </button>
    </main>
  );
}
