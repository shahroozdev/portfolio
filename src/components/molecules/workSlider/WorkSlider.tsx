"use client";
import React, { useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { workImages, projects } from "@/constant/constant";

import Image from "next/image";
import CustomModal from "../modal";
import Icon from "@/components/icons/Icon";

// Tech stack icon mapping
const techIconMap: Record<string, string> = {
  "React": "reactIcon",
  "Next.js": "nextJsIcon",
  "Vue.js": "vueJsIcon",
  "Node.js": "nodeJsIcon",
  "Express": "expressJsIcon",
  "Nest.js": "nestJs",
  "MongoDB": "mongoDBIcon",
  "PostgreSQL": "postgreSqlIcon",
  "Prisma": "prismaIcon",
  "Prisma ORM": "prismaIcon",
  "Redux": "reduxIcon",
  "TypeScript": "jsIcon",
  "JavaScript": "jsIcon",
  "TailwindCSS": "cssIcon",
  "JWT": "nodeJsIcon",
  "JWT Authentication": "nodeJsIcon",
  "Socket.io": "nodeJsIcon",
  "Redis": "nodeJsIcon",
  "WebSocket": "nodeJsIcon",
  "Docker": "nodeJsIcon",
  "Stripe": "nodeJsIcon",
  "AWS": "nodeJsIcon",
  "AWS S3": "nodeJsIcon",
  "OpenAI API": "nodeJsIcon",
  "WebRTC": "nodeJsIcon",
  "Chart.js": "jsIcon",
  "D3.js": "jsIcon",
  "Vimeo API": "nodeJsIcon",
  "Cloudinary": "nodeJsIcon",
  "Google Maps API": "nodeJsIcon",
  "Vercel": "nextJsIcon",
  "SendGrid": "nodeJsIcon",
  "SEO optimization": "htmlIcon",
  "Google Analytics": "jsIcon"
};

const ReadMoreText = ({ text, maxLength = 200 }: { text: string; maxLength?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = text.length > maxLength;

  return (
    <div>
      <p className="text-gray-300 leading-relaxed">
        {shouldTruncate && !isExpanded ? `${text.substring(0, maxLength)}...` : text}
      </p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors duration-200"
        >
          {isExpanded ? "Read Less ↑" : "Read More →"}
        </button>
      )}
    </div>
  );
};

const WorkSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        modules={[Pagination, Navigation]}
        pagination={false}
        navigation={true}
        freeMode={true}
        className="sm:h-[400px] sm-max:h-[400px]"
      >
          {workImages?.map((item: { imgs: string[], projectIndexes: number[] }, idx: number) => {
              return item.imgs.map((ele: string, index: number) => {
                const project = projects[item.projectIndexes[index]];
                return (
                  <SwiperSlide key={`${idx}-${index}`}>
                    <div className="relative w-full h-full group cursor-pointer rounded-2xl border overflow-hidden">
                      <Image src={ele} width={1000} height={1000} alt={project.title} className="w-full h-full object-cover object-top"/>
                      <div className="absolute bottom-0 left-0 right-0 z-20">
                        <h3 className="text-3xl md:text-4xl font-bold bg-black/10 backdrop-blur-md px-6 py-3 drop-shadow-2xl border-t border-white/20 whitespace-nowrap overflow-hidden text-ellipsis">
                          <span className="text-white">{project.title.split(' ').slice(0, -1).join(' ')}</span>{' '}
                          <span className="text-accent">{project.title.split(' ').slice(-1)}</span>
                        </h3>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 pointer-events-none"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                        <div className="pointer-events-auto">
                          <CustomModal
                            title={project.title}
                            Button={
                              <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all">
                                <div className="cursor-pointer text-white font-semibold">View Project Details</div>
                              </div>
                            }>
                                <div className="text-white">
                                  {/* Description */}
                                  <div className="mb-8 animate-fadeIn">
                                    <ReadMoreText text={project.description} maxLength={150} />
                                  </div>

                                  {/* Overview Card */}
                                  <div className="mb-6 p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30 backdrop-blur-sm hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 animate-slideUp">
                                    <h3 className="text-2xl font-semibold mb-3 text-purple-300">📋 Overview</h3>
                                    <ReadMoreText text={project.overview} maxLength={250} />
                                  </div>

                                  {/* Stats Grid */}
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 animate-slideUp" style={{animationDelay: '0.1s'}}>
                                      <div className="text-3xl mb-2">⏱️</div>
                                      <div className="text-sm text-gray-400">Duration</div>
                                      <div className="text-lg font-semibold text-blue-300">{project.duration}</div>
                                    </div>
                                    <div className="p-4 bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300 hover:scale-105 animate-slideUp" style={{animationDelay: '0.2s'}}>
                                      <div className="text-3xl mb-2">🎯</div>
                                      <div className="text-sm text-gray-400">Role</div>
                                      <div className="text-lg font-semibold text-pink-300">{project.role}</div>
                                    </div>
                                  </div>

                                  {/* Tech Stack Card */}
                                  <div className="mb-6 p-6 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30 backdrop-blur-sm hover:border-indigo-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 animate-slideUp" style={{animationDelay: '0.4s'}}>
                                    <h3 className="text-2xl font-semibold mb-4 text-indigo-300">🛠️ Tech Stack</h3>
                                    <div className="flex flex-wrap gap-3">
                                      {project.techStack.split(', ').map((tech, idx) => {
                                        const iconName = techIconMap[tech] || "nodeJsIcon";
                                        return (
                                          <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-indigo-500/20 rounded-full border border-indigo-500/40 hover:bg-indigo-500/30 hover:scale-105 transition-all duration-200 group">
                                            <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
                                              <Icon name={iconName} />
                                            </div>
                                            <span className="text-sm font-medium">{tech}</span>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {/* Problem Card */}
                                  <div className="mb-6 p-6 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-500/30 backdrop-blur-sm hover:border-red-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 animate-slideUp" style={{animationDelay: '0.5s'}}>
                                    <h3 className="text-2xl font-semibold mb-3 text-red-300">🎯 Problem Statement</h3>
                                    <ReadMoreText text={project.problemSolved} maxLength={100} />
                                  </div>

                                  {/* Features Card */}
                                  <div className="mb-6 p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 animate-slideUp" style={{animationDelay: '0.7s'}}>
                                    <h3 className="text-2xl font-semibold mb-3 text-cyan-300">✨ Key Features</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                      {project.features.split(', ').map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                                          <span className="text-cyan-400 mt-1">▸</span>
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Challenges Card */}
                                  <div className="mb-6 p-6 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl border border-orange-500/30 backdrop-blur-sm hover:border-orange-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 animate-slideUp" style={{animationDelay: '0.8s'}}>
                                    <h3 className="text-2xl font-semibold mb-3 text-orange-300">⚡ Challenges & Solutions</h3>
                                    <div className="space-y-4">
                                      {project.challenges.split(' | ').map((challenge, idx) => {
                                        const solution = project.solution.split(' | ')[idx];
                                        return (
                                          <div key={idx} className="p-4 bg-black/20 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-200">
                                            <div className="flex items-start gap-2 mb-2">
                                              <span className="text-orange-400 mt-1 text-lg">⚠️</span>
                                              <div>
                                                <p className="text-orange-200 font-semibold mb-2">{challenge}</p>
                                                <div className="flex items-start gap-2">
                                                  <span className="text-green-400 mt-1">✓</span>
                                                  <p className="text-gray-300 text-sm">{solution}</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {/* Impact Card */}
                                  <div className="mb-6 p-6 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl border border-yellow-500/30 backdrop-blur-sm hover:border-yellow-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 animate-slideUp" style={{animationDelay: '0.9s'}}>
                                    <h3 className="text-2xl font-semibold mb-3 text-yellow-300">🚀 Impact & Results</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                      {project.impact.split(', ').map((impact, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                                          <span className="text-yellow-400 mt-1">🎯</span>
                                          <span>{impact}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Screenshots Section */}
                                  <div className="mb-4 animate-slideUp" style={{animationDelay: '1s'}}>
                                    <h3 className="text-2xl font-semibold mb-4 text-purple-300">📸 Project Screenshots</h3>
                                    <div className="grid grid-cols-1 gap-6">
                                      {project.screenshots.map((screenshot, idx) => (
                                        <div key={idx} className="group relative overflow-hidden rounded-xl border border-purple-500/30  transition-all duration-300 ">
                                          <Image
                                            src={screenshot}
                                            width={2000}
                                            height={1200}
                                            alt={`${project.title} screenshot ${idx + 1}`}
                                            className="w-full h-auto rounded-xl transform transition-transform duration-500"
                                          />
                                          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <span className="text-white font-semibold">Screenshot {idx + 1}</span>
                                          </div> */}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </CustomModal>
                          </div>
                        </div>
                    </div>
                  </SwiperSlide>
                );
              });
          })}
      </Swiper>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default WorkSlider;
