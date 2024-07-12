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

const WorkSlider = () => {
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
                <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-max mx-auto">
                {item?.imgs?.map((ele:string, index:number)=>{
                    return(
                        <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                            <div className="flex items-center justify-center relative overflow-hidden group">
                                <Image src={ele} width={500} height={300} alt='' className="min-w-[300px] min-h-[200px] w-[300px] h-[200px]"/>
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-20 group-hover:xl:-translate-y-20 transition-all duration-300">
                                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                    <div className="delay-100">Live</div>
                                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">Project</div>    
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
              </SwiperSlide>)})}
      </Swiper>
    </>
  );
};

export default WorkSlider;
