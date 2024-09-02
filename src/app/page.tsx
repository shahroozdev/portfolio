"use client";
import ProjectBtn from "@/components/atoms/ProjectBtn/ProjectBtn";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import Avatar from "@/components/atoms/Avatar/Avatar";
import ParticlesContainer from "@/components/molecules/ParticlesContainer/ParticlesContainer";
export default function Home() {
  return (
    <div className="h-screen bg-primary/60 relative w-screen">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto ">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Turning Concepts <br />
            into <span className="text-accent">Digital Innovations.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4"
          >
            Transforming ideas into digital reality means converting abstract
            concepts into tangible digital solutions. This process combines
            creativity, technology, and strategic execution to bring innovative
            visions to life.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <ParticlesContainer/>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{duration:1, ease:'easeInOut'}}
          className="w-full h-full max-w-[500px] max-h[400px] absolute -bottom-[22%] right-[10%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
}
