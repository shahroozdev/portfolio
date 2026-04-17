"use client";
import React from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { testimonials } from "@/constant/constant";

import Icon from "@/components/icons/Icon";

const TestimonialSlider = () => {
  return (
    <div className="w-full container mx-auto mt-12">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="h-auto pb-12 w-full mx-5"
      >
        {testimonials?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="backdrop-blur-sm rounded-lg p-6 h-full m-full flex flex-col gap-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl max-w-sm mx-auto hover:border-accent/50 transition-all">
              <div className="flex-1">
                <Icon
                  name="testimonials"
                  className="text-4xl text-accent/80 italic mb-2"
                />
                <p className="sm:text-2xl text-lg italic font-semibold text-white/80 leading-relaxed">
                  {item.message}
                </p>
                <Icon
                  name="testimonials"
                  className="text-4xl text-accent/80 ml-auto italic mb-2"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-xl font-bold text-accent flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-base">{item.name}</div>
                  <div className="text-white/60 text-xs">{item.position}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
