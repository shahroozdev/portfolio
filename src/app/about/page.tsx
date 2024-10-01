"use client";
import Avatar from "@/components/atoms/Avatar/Avatar";
import BottomCircle from "@/components/atoms/BottomCircle/BottomCircle";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import Icon from "@/components/icons/Icon";
import { aboutSectionList } from "@/constant/constant";
import CountUp from 'react-countup';


const AboutPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-screen h-screen bg-primary/30 text-center xl:text-left overflow-hidden flex items-center relative">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[270px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto flex flex-col items-center gap-x-6 xl:flex-row max-h-[400px] h-full">
        <div className="flex-1 flex flex-col">
          <motion.h2 variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden" className="text-[24px] md:text-[32px] leading-tight mb-4 font-semibold">
            Experienced <span className="text-accent">Web Developer</span> Ready
            to Bring Your Vision to Life
          </motion.h2>
          <motion.p variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"className="text-xs lg:text-base mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
          Twelve years ago, I earned a web development diploma and have since completed numerous freelance projects, gaining extensive expertise. In 2022, I joined various firms to enhance my skills further. My experience covers front-end and back-end development, and I stay updated with industry trends. I&apos;m eager to take on new challenges and collaborate on innovative web solutions. Let&apos;s work together to achieve your web development goals.
          </motion.p>
          <motion.div variants={fadeIn("right", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden" className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-6">
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <CountUp start={0} end={3} duration={6}/> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <CountUp start={0} end={10} duration={6}/> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisified Clients</div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <CountUp start={0} end={50} duration={6}/> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
            </div>
          </div>
          </motion.div>
        </div>
        <motion.div variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-full">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutSectionList?.map((item: any, idx: number) => (
              <div
                key={idx}
                onClick={() => setIndex(idx)}
                className={`${
                  idx === index &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer xl:text-lg relative after:w-8 after:h-[2px] after:absolute  after:-bottom-1 after:left-0 ${
                  idx !== index && "after:bg-white"
                } `}
              >
                {item?.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start text-xs lg:text-base">
            {aboutSectionList[index]?.subTitle?.map((ele: any, idx: number) => {
              return (
                <div
                  key={idx}
                  className="text-white/60 flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-xs lg:text-base"
                >
                  <div className="font-light mb-1 md:mb-0 text-xs lg:text-base">{ele?.subT}</div>
                  {ele?.insti && <div className="hidden md:block"> - </div>}
                  <div className="flex gap-2">
                  <div>{ele?.insti}</div>
                  <div className="hidden md:block"> - </div>
                  {index !== 0 &&<div className="block md:hidden">| </div>}
                  <div>{ele?.stage}</div>
                  </div>
                  <div className="flex gap-x-4 text-white flex-wrap">
                    {ele?.icon?.map((ele: string, index: number) => {
                      return <Icon key={index} name={ele} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      <BottomCircle />
    </div>
  );
};

export default AboutPage;
