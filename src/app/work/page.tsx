'use client'
import BottomCircle from '@/components/atoms/BottomCircle/BottomCircle'
import BulbAnime from '@/components/atoms/BulbAnime/BulbAnime'
import ServiceSlider from '@/components/molecules/ServiceSlider/ServiceSlider'
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import WorkSlider from '@/components/molecules/workSlider/WorkSlider'

const WorkPage = () => {
  return (
    <div className='h-screen w-screen bg-primary/30 py-36 flex items-center justify-center overflow-hidden relative'>
       <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
            <div className='text-center flex xl:w-[30vw] w-full flex-col lg:text-left mb-4 mx-auto xl:mb-0 xl:mx-0'>
                <motion.h2 variants={fadeIn('up', 0.3)} initial={"hidden"} animate={"show"} exit={"hidden"} className='h2 xl:mt-8 mb-0'>My Work<span className='text-accent'>.</span></motion.h2>
                <motion.em variants={fadeIn('up', 0.4)} initial={"hidden"} animate={"show"} exit={"hidden"} className='text-xs lg:text-base' >
                Hello! I&apos;m a seasoned full-stack developer with a passion for crafting high-quality, responsive web applications. With extensive experience in both front-end and back-end technologies, I can bring your project to life with a seamless user experience and robust functionality.
                </motion.em>
            </div>
            <motion.div variants={fadeIn('down', 0.6)} initial={"hidden"} animate={"show"} exit={"hidden"}  className='w-full xl:max-w-[65%]'>
            <WorkSlider/>
            </motion.div>
        </div>
       </div>
       <BulbAnime/>
        <BottomCircle />
    </div>
  )
}

export default WorkPage

