"use client";
import React from "react";
import Icon from "@/components/icons/Icon";

const Contact = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-semibold mb-4">
            Let's <span className="text-accent">Connect.</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Feel free to reach out through any of these channels
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-6 gap-2 max-w-3xl mx-auto">
          {/* Email */}
          <a
            href="mailto:shahroozdeveloper@gmail.com"
            className="flex flex-col items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all group"
          >
            <div className="sm:w-16 sm:h-16 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/30 group-hover:scale-110 transition-all">
              <Icon name="contactIcon" className="sm:text-2xl text-lg" />
            </div>
            <div className="text-center">
              <div className="text-white font-semibold text-lg mb-1">Email</div>
              <div className="text-white/60 text-sm break-all">
                shahroozdeveloper@gmail.com
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+923020004969"
            className="flex flex-col items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all group"
          >
            <div className="sm:w-16 sm:h-16 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/30 group-hover:scale-110 transition-all">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-white font-semibold text-lg mb-1">Phone</div>
              <div className="text-white/60 text-sm">+92 302 0004969</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/m-shahrooz-altaf-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all group"
          >
            <div className="sm:w-16 sm:h-16 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/30 group-hover:scale-110 transition-all">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-white font-semibold text-lg mb-1">LinkedIn</div>
              <div className="text-white/60 text-sm">Let's Connect</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
