'use client'
import React, { ReactNode } from 'react'


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
;
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
// import {Swiper} from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { services } from '@/constant/constant';
import Icon from '@/components/icons/Icon';

const ServiceSlider = () => {
  return (<>
    <Swiper 
        breakpoints={{
            320:{
                slidesPerView:1,
                spaceBetween:15
            },
            640:{
                slidesPerView:3,
                spaceBetween:15
            }
        }}
        modules={[FreeMode, Pagination]}
        pagination={{ clickable: true }}
        freeMode={true}
        className='h-[240px] sm:h-[340px]'
      >
        {services?.map((item:{name:string, description:string, icon:ReactNode},idx:number)=>{
            return(
                <SwiperSlide key={idx}>
                <div className='bg-[rgba(65,47,123,0.15)] h-[300px] rounded-lg p-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300] relative'>
                    <div className='text-4xl '>{item?.icon}</div>
                <div className='my-2'>
                    <div className='mb-2 text-md'>{item?.name}</div>
                    <p className='max-w-[350px] leading-normal text-sm text'>{item?.description}</p>
                </div>
                <div className='text-3xl absolute bottom-2'>
                    <i className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'><Icon name={"rightArrowIcon"}/></i>
                </div>
                </div>
            </SwiperSlide>
            )
        })
        }

      </Swiper>
  </>
  )
}

export default ServiceSlider