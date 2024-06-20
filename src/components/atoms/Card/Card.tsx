"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

const CardPage = () => {
  return (
    <div className="text-center relative group">
      <div className="relative w-[400px] max-h-[400px] overflow-hidden rounded-xl  cursor-pointer">
        <Image
          src={"/fad.png"}
          width={400}
          height={400}
          alt="fad"
          objectFit="cover"
        />
      </div>
      <div className="absolute bottom-0 bg-black/80 shadow-2xl rounded-b-xl width-[300px] text-center left-0 right-0 py-6 hidden group-hover:block group-hover:animate-[heightAnimation 3s_ease-in-out_forwards]"><p className="text-white font-medium">FAD | foralldoctors.com</p></div>
    </div>
  );
};

export default CardPage;
