'use client'
import Avatar from '@/components/atoms/Avatar/Avatar'
import BottomCircle from '@/components/atoms/BottomCircle/BottomCircle'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

const list =['Skills', 'Awards','Experience','Crenectials']
const listAbout =['Web Developer', 'Virtual univeristy Certified software Engineer','7 Years in feild','shahroozdev@gmail.com']
const AboutPage = () => {
    const [index , setIndex] =useState(0)
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
        <BottomCircle/>
        <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute bottom-0 -left-[70px]'>
        <Avatar />
        </motion.div>
        <div className='p-[15px] mx-auto h-full flex flex-col items-center gap-x-6 xl:flex-row'>
            <div className='flex-1 flex flex-col justify-center'>text</div>
            <div className='flex flex-col w-full xl:max-w-[48%] h-[48%]'>
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                {list?.map((item:string,idx:number)=>(
                    <div key={idx} onClick={()=> setIndex(idx)} className={`${idx===index && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 `}>
                        {item}
                    </div>
                ))}
            </div>
            <div>
                {listAbout[index]}
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage