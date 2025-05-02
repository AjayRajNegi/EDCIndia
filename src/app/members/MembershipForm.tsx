"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

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

export default function MembershipForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState<number | "">("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked");

    if (!name.trim()) {
      alert("Name cannot be empty!");
      return;
    }

    try {
      await addDoc(collection(db, "membershipForm"), {
        name,
        email,
        number,
        city,
        state,
      });
      console.log("Success");
      router.push("/");
    } catch (e) {
      console.error("Error adding document:", e);
    }
  };

  return (
    <main className="p-4 md:p-[4vw] bg-[#F6F5EB] w-full shadow-2xl border-[1px] border-gray-300 rounded-3xl rounded-br-none rounded-tr-none">
      <p className="text-4xl font-semibold text-center">Membership Form</p>

      <form className="flex flex-col my-9 gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="border-b-2 border-[#5C6C42]/50 focus:outline-none focus:ring-0 focus:border-[#2E7D32] focus:text-black text-[#5C6C42]/50 text-lg font-semibold"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Email"
          className="border-b-2 border-[#5C6C42]/50 mt-10 focus:outline-none focus:text-black focus:ring-0 focus:border-[#2E7D32] text-[#5C6C42]/50 text-lg font-semibold"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Your Number"
          className="border-b-2 border-[#5C6C42]/50 mt-10 focus:outline-none focus:ring-0 focus:border-[#2E7D32] focus:text-black text-[#5C6C42]/50 text-lg font-semibold"
          value={number}
          onChange={(e) =>
            setNumber(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
        <input
          type="text"
          placeholder="City"
          className="border-b-2 border-[#5C6C42]/50 mt-10 focus:outline-none focus:text-black focus:ring-0 focus:border-[#2E7D32] text-[#5C6C42]/50 text-lg font-semibold"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          className="border-b-2 border-[#5C6C42]/50 mt-10 focus:outline-none focus:text-black focus:ring-0 focus:border-[#2E7D32] text-[#5C6C42]/50 text-lg font-semibold"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </form>

      <button
        className="bg-[#2E7D32] w-fit px-12 py-3 rounded-lg flex justify-center items-center gap-2 text-white mt-[100px] md:mt-[100px] mx-auto"
        onClick={handleSubmit}
      >
        <Image src="/Icons/Send.png" alt="Send" width={20} height={20} />
        Submit
      </button>
    </main>
  );
}
