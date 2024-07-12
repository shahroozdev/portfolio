'use client'
import BottomCircle from '@/components/atoms/BottomCircle/BottomCircle'
import BulbAnime from '@/components/atoms/BulbAnime/BulbAnime'
import ServiceSlider from '@/components/molecules/ServiceSlider/ServiceSlider'
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center xl:overflow-hidden overflow-y-auto'>
       <BottomCircle />
       <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 mx-12 xl:mb-0 xl:mx-0'>
                <motion.h2 variants={fadeIn('up', 0.3)} initial={"hidden"} animate={"show"} exit={"hidden"} className='h2 mt-52 xl:mt-8'>My Services<span className='text-accent'>.</span></motion.h2>
                <motion.em variants={fadeIn('up', 0.4)} initial={"hidden"} animate={"show"} exit={"hidden"} >
                Hello! I&apos;m a seasoned full-stack developer with a passion for crafting high-quality, responsive web applications. With extensive experience in both front-end and back-end technologies, I can bring your project to life with a seamless user experience and robust functionality.
                </motion.em>
            </div>
            <motion.div variants={fadeIn('down', 0.6)} initial={"hidden"} animate={"show"} exit={"hidden"}  className='w-full xl:max-w-[65%]'>
            <ServiceSlider/>
            </motion.div>
        </div>
       </div>
       <BulbAnime/>
    </div>
  )
}

export default Services