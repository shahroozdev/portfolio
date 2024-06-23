"use client";
import Avatar from "@/components/atoms/Avatar/Avatar";
import BottomCircle from "@/components/atoms/BottomCircle/BottomCircle";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import Icon from "@/components/icons/Icon";
import { aboutSectionList } from "@/constant/constant";

const AboutPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <BottomCircle />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[270px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center mb-40 gap-x-6 xl:flex-row">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[32px] leading-tight mb-4 font-semibold">
            Experienced <span className="text-accent">Web Developer</span> Ready
            to Bring Your Vision to Life
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Twelve years ago, I earned a diploma in web development and
            discovered my passion for the field. Since then, I&apos;ve completed
            numerous freelance projects, gaining extensive expertise. In 2022, I
            joined various firms to further develop my skills. My experience
            spans front-end and back-end development, and I stay updated with
            industry trends. I am eager to take on new challenges and
            collaborate on innovative web solutions. Let&apos;s work together to
            achieve your web development goals.
          </p>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
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
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutSectionList[index]?.subTitle?.map((ele: any, idx: number) => {
              return (
                <div
                  key={idx}
                  className="text-white/60 flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center"
                >
                  <div className="font-light mb-2 md:mb-0">{ele?.subT}</div>
                  {ele?.insti && <div className="hidden md:block"> - </div>}
                  <div>{ele?.insti}</div>
                  <div className="hidden md:block"> - </div>
                  <div>{ele?.stage}</div>
                  <div className="flex gap-x-4 text-white flex-wrap">
                    {ele?.icon?.map((ele: string, index: number) => {
                      return <Icon key={index} name={ele} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
