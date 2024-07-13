"use client";
import TestimonialSlider from "@/components/molecules/testimonialSlider/TestimonialSlider";

const Testimonials = () => {
  return (
    <div className="h-full bf-primary/30 py-32 text-center">
        <div className=" container mx-auto h-full flex flex-col justify-center">
        <h2 className="h2 mb-8 xl:mb-0">
            What Clients <span className="text-accent">say.</span>
        </h2>
        </div>
      <TestimonialSlider/>
    </div>
  );
};

export default Testimonials