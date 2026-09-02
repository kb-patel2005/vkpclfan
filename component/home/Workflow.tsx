"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
} from "lucide-react";

const steps = [
  {
    no: "01",
    title: "Connection",
    desc: "Connect with us to solve your ventilation challenges in the most economical way.",
    property: "top-[20px] lg:top-[48px] bottom-[16px]",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 24C7.075 24 6.71875 23.8563 6.43125 23.5688C6.14375 23.2812 6 22.925 6 22.5V19.5H25.5V6H28.5C28.925 6 29.2812 6.14375 29.5688 6.43125C29.8563 6.71875 30 7.075 30 7.5V30L24 24H7.5ZM0 22.5V1.5C0 1.075 0.14375 0.71875 0.43125 0.43125C0.71875 0.14375 1.075 0 1.5 0H21C21.425 0 21.7812 0.14375 22.0688 0.43125C22.3563 0.71875 22.5 1.075 22.5 1.5V15C22.5 15.425 22.3563 15.7812 22.0688 16.0688C21.7812 16.3563 21.425 16.5 21 16.5H6L0 22.5Z"
          fill="#09273A"
        />
      </svg>
    ),
  },

  {
    no: "02",
    title: "Site Examination",
    desc: "Our engineers visit your site, inspect the premises, and collect technical data.",
    property: "top-[48px] lg:-top-[32px] bottom-[96px]",
    icon: (
      <svg
        width="17"
        height="27"
        viewBox="0 0 17 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.375 27L0 23.7L4.275 11.925C4.65 12.275 5.05625 12.5687 5.49375 12.8062C5.93125 13.0437 6.4 13.225 6.9 13.35L2.775 24.675L0.375 27ZM16.125 27L13.725 24.675L9.6 13.35C10.1 13.225 10.5688 13.0437 11.0063 12.8062C11.4438 12.5687 11.85 12.275 12.225 11.925L16.5 23.7L16.125 27ZM8.25 12C7 12 5.9375 11.5625 5.0625 10.6875C4.1875 9.8125 3.75 8.75 3.75 7.5C3.75 6.525 4.03125 5.65625 4.59375 4.89375C5.15625 4.13125 5.875 3.6 6.75 3.3V0H9.75V3.3C10.625 3.6 11.3438 4.13125 11.9062 4.89375C12.4688 5.65625 12.75 6.525 12.75 7.5C12.75 8.75 12.3125 9.8125 11.4375 10.6875C10.5625 11.5625 9.5 12 8.25 12ZM8.25 9C8.675 9 9.03125 8.85625 9.31875 8.56875C9.60625 8.28125 9.75 7.925 9.75 7.5C9.75 7.075 9.60625 6.71875 9.31875 6.43125C9.03125 6.14375 8.675 6 8.25 6C7.825 6 7.46875 6.14375 7.18125 6.43125C6.89375 6.71875 6.75 7.075 6.75 7.5C6.75 7.925 6.89375 8.28125 7.18125 8.56875C7.46875 8.85625 7.825 9 8.25 9Z"
          fill="#09273A"
        />
      </svg>
    ),
  },

  {
    no: "03",
    title: "Analyze",
    desc: "Our engineering team studies the collected data and prepares the optimal ventilation solution.",
    property: "bottom-[48px] top-[70px] lg:top-[16px]",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 21H9V13.5H6V21ZM18 21H21V6H18V21ZM12 21H15V16.5H12V21ZM12 13.5H15V10.5H12V13.5ZM3 27C2.175 27 1.46875 26.7062 0.88125 26.1187C0.29375 25.5312 0 24.825 0 24V3C0 2.175 0.29375 1.46875 0.88125 0.88125C1.46875 0.29375 2.175 0 3 0H24C24.825 0 25.5312 0.29375 26.1187 0.88125C26.7062 1.46875 27 2.175 27 3V24C27 24.825 26.7062 25.5312 26.1187 26.1187C25.5312 26.7062 24.825 27 24 27H3Z"
          fill="#09273A"
        />
      </svg>
    ),
  },

  {
    no: "04",
    title: "Client Validation",
    desc: "Detailed proposal discussion, approvals, and final confirmation.",
    property: "lg:top-[64px] top-[100px]",
    icon: (
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4 31.5L8.55 26.7L3.15 25.5L3.675 19.95L0 15.75L3.675 11.55L3.15 6L8.55 4.8L11.4 0L16.5 2.175L21.6 0L24.45 4.8L29.85 6L29.325 11.55L33 15.75L29.325 19.95L29.85 25.5L24.45 26.7L21.6 31.5L16.5 29.325L11.4 31.5ZM14.925 21.075L23.4 12.6L21.3 10.425L14.925 16.8L11.7 13.65L9.6 15.75L14.925 21.075Z"
          fill="#09273A"
        />
      </svg>
    ),
  },
];

export default function Workflow() {
  return (
    <section className="bg-[#F8F9FA] lg:py-16 py-8 lg:px-0 px-5">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center flex flex-col items-center gap-[15px]">
          <span className="rounded-full bg-[#09273A1A] px-4 py-1 text-xs font-semibold uppercase tracking-[1.2px] text-[#09273A]">
            Our Workflow
          </span>

          <h2 className="font-sora text-3xl md:text-5xl font-bold text-[#0B2B45]">
            Our Workflow
          </h2>

          <p className="text-lg text-[#5D5D5D] font-inter">
            Accurate solution proposition. The reason why people choose us.
          </p>
        </div>

        {/* Workflow */}
        <motion.div
          initial={{ x: -80, opacity: 0.5 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }} className="relative lg:mt-42 md:mt-20 mt-10">
          {/* Animated SVG line */}
          <div className="absolute left-0 right-0 ml-25 top-0 hidden md:block animate-curve-jump">
            <svg
              width="1030"
              height="160"
              viewBox="0 0 1081 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-dash"
            >
              <path
                d="M0.522278 99.2755C0.522278 99.2755 509.363 -89.723 731.943 57.8154C954.522 205.354 1079.52 86.854 1079.52 86.854"
                stroke="black"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
            </svg>



          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, i) => {
              return (
                <div
                  key={i}
                  className={`relative flex flex-col items-center justify-center text-center ${step.property} workflow-card`}
                  style={{ animationDelay: `${i * 0.35}s` }}
                >
                  <span className="absolute -top-10 font-manrope font-bold -translate-y-1/3 text-[120px] text-[#E0E3E566] max-sm:scale-[0.7]">
                    {step.no}
                  </span>

                  <div className="relative z-10 lg:mb-8 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg max-sm:scale-[0.7] transition duration-300 hover:shadow-2xl hover:shadow-[#FDCD2E]/60">
                    {step.icon}
                  </div>


                  <div className="w-[255px] rounded-2xl bg-white p-6 flex flex-col gap-3 border-[#E2E8F0CC] border shadow-sm transition duration-300 hover:shadow-2xl hover:shadow-[#FDCD2E]/60">
                    <h3 className="font-semibold font-manrope text-xl leading-8 text-[#191C1E]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-5 text-[#5D5D5D]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mx-auto mt-32 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-3xl lg:rounded-full bg-white py-6 px-10 shadow-[#09273A1A] shadow-xl md:flex-row">
          <div className="flex items-center gap-4">
            <Lightbulb className="text-[#09273A]" />
            <p className="text-lg font-semibold text-[#191C1E] lg:text-[22px]">
              Do you like our workflow?
            </p>
          </div>

          <button className="rounded-full bg-[#062C49] px-8 py-3 text-white hover:bg-[#0B3C63] transition w-full md:w-auto">
            Let's Talk →
          </button>
        </div>

      </div>

      <style jsx>{`
        .workflow-card {
          animation: float 3s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  );
}