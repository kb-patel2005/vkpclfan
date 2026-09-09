'use client'

import { motion } from "framer-motion";


const features = [
  {
    no: "01",
    title: "UNIFORM AIRFLOW",
    desc: "Massive 18-foot blades create a continuous, even breeze across your entire facility without dead spots.",
    icon: (
      <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 34C17.3333 34 15.9167 33.4167 14.75 32.25C13.5833 31.0833 13 29.6667 13 28H17C17 28.5667 17.1917 29.0417 17.575 29.425C17.9583 29.8083 18.4333 30 19 30C19.5667 30 20.0417 29.8083 20.425 29.425C20.8083 29.0417 21 28.5667 21 28C21 27.4333 20.8083 26.9583 20.425 26.575C20.0417 26.1917 19.5667 26 19 26H0V22H19C20.6667 22 22.0833 22.5833 23.25 23.75C24.4167 24.9167 25 26.3333 25 28C25 29.6667 24.4167 31.0833 23.25 32.25C22.0833 33.4167 20.6667 34 19 34ZM0 14V10H27C27.8667 10 28.5833 9.71667 29.15 9.15C29.7167 8.58333 30 7.86667 30 7C30 6.13333 29.7167 5.41667 29.15 4.85C28.5833 4.28333 27.8667 4 27 4C26.1333 4 25.4167 4.28333 24.85 4.85C24.2833 5.41667 24 6.13333 24 7H20C20 5.03333 20.675 3.375 22.025 2.025C23.375 0.675 25.0333 0 27 0C28.9667 0 30.625 0.675 31.975 2.025C33.325 3.375 34 5.03333 34 7C34 8.96667 33.325 10.625 31.975 11.975C30.625 13.325 28.9667 14 27 14H0ZM33 30V26C33.8667 26 34.5833 25.7167 35.15 25.15C35.7167 24.5833 36 23.8667 36 23C36 22.1333 35.7167 21.4167 35.15 20.85C34.5833 20.2833 33.8667 20 33 20H0V16H33C34.9667 16 36.625 16.675 37.975 18.025C39.325 19.375 40 21.0333 40 23C40 24.9667 39.325 26.625 37.975 27.975C36.625 29.325 34.9667 30 33 30Z" fill="#D97706" />
      </svg>
    ),
    styling: "lg:col-span-6",
    animate: "animate-float-up"
  },
  {
    no: "02",
    title: "ENERGY EFFICIENT",
    desc: "Engineered for high-volume movement at low speeds, reducing consumption.",
    icon: (<svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.825 24.3L17.5875 15H11.5875L12.675 6.4875L5.7375 16.5H10.95L9.825 24.3ZM6 30L7.5 19.5H0L13.5 0H16.5L15 12H24L9 30H6Z" fill="#000613" />
    </svg>)
    , styling: "lg:col-span-3 lg:pt-24",
    animate: "animate-float-down"
  },
  {
    no: "03",
    title: "AIR QUALITY",
    desc: "Continuous circulation dilutes contaminants and manages humidity.",
    icon: (
      <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.25 24C5.95 24 4 23.2 2.4 21.6C0.8 20 0 18.05 0 15.75C0 13.8 0.60625 12.0813 1.81875 10.5938C3.03125 9.10625 4.55 8.15 6.375 7.725C7 5.475 8.2375 3.625 10.0875 2.175C11.9375 0.725 14.075 0 16.5 0C19.475 0 21.9688 1.03125 23.9813 3.09375C25.9938 5.15625 27 7.625 27 10.5C28.875 10.7 30.3438 11.475 31.4062 12.825C32.4688 14.175 33 15.6375 33 17.2125C33 19.0875 32.3438 20.6875 31.0312 22.0125C29.7188 23.3375 28.125 24 26.25 24H8.25ZM8.25 21H26.25C27.3 21 28.1875 20.6375 28.9125 19.9125C29.6375 19.1875 30 18.3 30 17.25C30 16.2 29.6375 15.3125 28.9125 14.5875C28.1875 13.8625 27.3 13.5 26.25 13.5H24V10.5C24 8.425 23.2687 6.65625 21.8062 5.19375C20.3438 3.73125 18.575 3 16.5 3C14.925 3 13.525 3.43125 12.3 4.29375C11.075 5.15625 10.175 6.2625 9.6 7.6125C11.55 7.9375 13.1875 8.85625 14.5125 10.3687C15.8375 11.8812 16.5 13.675 16.5 15.75H13.5C13.5 14.3 12.9875 13.0625 11.9625 12.0375C10.9375 11.0125 9.7 10.5 8.25 10.5C6.8 10.5 5.5625 11.0125 4.5375 12.0375C3.5125 13.0625 3 14.3 3 15.75C3 17.2 3.5125 18.4375 4.5375 19.4625C5.5625 20.4875 6.8 21 8.25 21Z" fill="#000613" />
      </svg>
    ), styling: "lg:col-span-3",
    animate: "animate-float-up"
  },
  {
    no: "04",
    title: "QUIET OPERATION",
    desc: "Whisper-quiet geared motor design for focused industrial environments.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.6 29.7L23.0625 25.1625C22.4375 25.5625 21.775 25.9062 21.075 26.1938C20.375 26.4813 19.65 26.7125 18.9 26.8875V23.8125C19.25 23.6875 19.5938 23.5625 19.9312 23.4375C20.2687 23.3125 20.5875 23.1625 20.8875 22.9875L15.9 18V25.8L8.4 18.3H2.4V9.3H7.2L0 2.1L2.1 0L29.7 27.6L27.6 29.7ZM27.3 21L25.125 18.825C25.55 18.05 25.8687 17.2375 26.0812 16.3875C26.2937 15.5375 26.4 14.6625 26.4 13.7625C26.4 11.4125 25.7125 9.3125 24.3375 7.4625C22.9625 5.6125 21.15 4.3625 18.9 3.7125V0.6375C22 1.3375 24.525 2.90625 26.475 5.34375C28.425 7.78125 29.4 10.5875 29.4 13.7625C29.4 15.0875 29.2188 16.3625 28.8563 17.5875C28.4938 18.8125 27.975 19.95 27.3 21ZM22.275 15.975L18.9 12.6V7.725C20.075 8.275 20.9937 9.1 21.6562 10.2C22.3188 11.3 22.65 12.5 22.65 13.8C22.65 14.175 22.6187 14.5437 22.5562 14.9062C22.4937 15.2688 22.4 15.625 22.275 15.975ZM15.9 9.6L12 5.7L15.9 1.8V9.6ZM12.9 18.525V15L10.2 12.3H5.4V15.3H9.675L12.9 18.525Z" fill="#000613" />
      </svg>
    ), styling: "lg:col-span-4 lg:pt-12",
     animate: "animate-float-up"
  },
  {
    no: "05",
    title: "REDUCED COSTS",
    desc: "Perceived cooling of 10°F allows significant HVAC adjustments.",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12V9H22.5V12H15ZM15 6V3H27V6H15ZM7.5 27C5.425 27 3.65625 26.2687 2.19375 24.8062C0.73125 23.3438 0 21.575 0 19.5C0 18.3 0.2625 17.1812 0.7875 16.1437C1.3125 15.1062 2.05 14.225 3 13.5V4.5C3 3.25 3.4375 2.1875 4.3125 1.3125C5.1875 0.4375 6.25 0 7.5 0C8.75 0 9.8125 0.4375 10.6875 1.3125C11.5625 2.1875 12 3.25 12 4.5V13.5C12.95 14.225 13.6875 15.1062 14.2125 16.1437C14.7375 17.1812 15 18.3 15 19.5C15 21.575 14.2687 23.3438 12.8062 24.8062C11.3438 26.2687 9.575 27 7.5 27ZM3 19.5H12C12 18.775 11.8438 18.1 11.5312 17.475C11.2188 16.85 10.775 16.325 10.2 15.9L9 15V4.5C9 4.075 8.85625 3.71875 8.56875 3.43125C8.28125 3.14375 7.925 3 7.5 3C7.075 3 6.71875 3.14375 6.43125 3.43125C6.14375 3.71875 6 4.075 6 4.5V15L4.8 15.9C4.225 16.325 3.78125 16.85 3.46875 17.475C3.15625 18.1 3 18.775 3 19.5Z" fill="#D97706" />
      </svg>
    ), styling: "lg:col-span-4 lg:pt-32",
     animate: "animate-float-down"
  },
  {
    no: "06",
    title: "BUILT FOR SCALE",
    desc: "One fan covers areas that would require dozens of smaller units.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 30V11.9625L10.5 7.5V10.5L18 7.5V12H30V30H0ZM3 27H27V15H15V11.925L7.5 14.925V12L3 13.9875V27ZM13.5 24H16.5V18H13.5V24ZM7.5 24H10.5V18H7.5V24ZM19.5 24H22.5V18H19.5V24ZM30 12H22.5L24 0H28.5L30 12ZM3 27H7.5H15H27H3Z" fill="#000613" />
      </svg>
    ), styling: "lg:col-span-4 lg:pt-12",
     animate: "animate-float-up"
  },
];

export default function WhyChooseHVLS() {
  return (
    <section className="bg-[#F8F9FA] pb-8 lg:pb-15 lg:pt-16 px-5">
      <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}  className="max-w-7xl mx-auto text-center">
        <span className="text-[12px] text-[#09273A] leading-4 font-semibold tracking-[1.2px] bg-[#09273A1A] px-4 py-1.5 rounded-full">
          WHY CHOOSE HVLS
        </span>

        <h2 className="mt-5 font-sora font-bold lg:leading-14 tracking-[-0.96px] text-5xl text-[#09273A]">
          Big Smart <span className="text-[#FDCD2E]">Energy</span>
        </h2>

        <p className="mt-5 text-[#5D5D5D] leading-6 text-lg">
          Powerful airflow. Intelligent engineering. Lower energy consumption.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-24 gap-y-12 mt-14 relative">
          <center className="absolute align-middle w-full opacity-10 top-14 hidden lg:block">
            <svg
              width="804"
              height="448"
              viewBox="0 0 804 448"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-dash z-5"
            >
              <path
                d="M0.143188 4.29887C182.643 -32.2011 255.643 223.299 401.643 223.299C547.643 223.299 620.643 4.29887 803.143 40.7989M0.143188 442.299C255.643 478.799 401.643 259.799 547.643 259.799C693.643 259.799 766.643 478.799 803.143 442.299"
                stroke="#000613"
                strokeWidth="1.46"
                strokeDasharray="5.84 5.84"
              />
            </svg>

          </center>
          
            <h1 className="top-14 font-extrabold absolute align-middle w-full hidden lg:block text-[240px] text-[#1A1C1E] opacity-[3%] z-10">MORE. US</h1>
          {features.map((item) => (
            <div key={item.no} className={`text-left relative z-20 ${item.styling} ${item.animate}`}>

              <div className="relative z-10">
                <span className="absolute -top-5 left-0 text-6xl text-[#000613]/5 leading-[60px]">
                  {item.no}
                </span>
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="leading-6 text-[16px] text-[#000613]">{item.title}</h3>
                <p className="leading-6 text-[16px] text-[#43474E] max-w-[445px] w-full">{item.desc}</p>
              </div>
            </div>

          ))}
        </div>
      </motion.div>
    </section>
  );
}