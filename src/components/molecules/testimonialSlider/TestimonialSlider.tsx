"use client";
import React, { ReactNode } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import {Swiper} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { workImages } from "@/constant/constant";

import Image from "next/image";
import Icon from "@/components/icons/Icon";

const TestimonialSlider = () => {
    return (
        <>
          <Swiper
            spaceBetween={10}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            freeMode={true}
            className="h-[280px] sm:h-[480px]"
          >
              {workImages?.map((item: { imgs: string[] }, idx: number) => {
                  return(
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col items-center md:flex-row gag-x-8 h-full px-16">
                   <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                    <div className="flex flex-col justify-center text-center">
                        
                        <div>image</div>
                        <div>name</div>
                        <div>image</div>
                    </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                        <div className="mb-4">
                            <Icon name="" className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
                        </div>
                        <div className="xl:text-lg text-center md:text-left">message</div>
                    </div>
                   </div>
                  </SwiperSlide>)})}
          </Swiper>
        </>
      );
    };

export default TestimonialSlider