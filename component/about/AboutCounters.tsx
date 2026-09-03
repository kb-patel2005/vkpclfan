'use client'

import React from 'react'
import CountUp from 'react-countup';

const data = [
  { num: 2017, suffix: "", title: "FOUNDED" },
  { num: 20, suffix: "K+", title: "SQ. FT. FACILITY" },
  { num: 300, suffix: "+", title: "SYSTEM UPTIME" },
  { num: "HVLS", suffix: "%", title: "ENERGY SAVINGS" },
];

function Card1({
  num,
  suffix,
  title,
}: {
  num: number | string;
  suffix: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2 px-4 justify-center items-center hover:scale-105 transition">
      {typeof num === "string" ? (
        // <h2 className="font-jakarta text-[56px] lg:w-[250px] font-extrabold leading-[56px] tracking-[-1.68px] text-center">
        <h2 className="font-jakarta text-[45px] lg:w-[250px] font-extrabold leading-[56px] tracking-[-1.68px] text-center">
          {num}
        </h2>
      ) : (
        // <h2 className="font-jakarta text-[56px] w-[250px] font-extrabold leading-[56px] tracking-[-1.68px] text-center">
        <h2 className="font-jakarta text-[45px] w-[250px] font-extrabold leading-[56px] tracking-[-1.68px] text-center">
          <CountUp end={num} duration={2} />
          {suffix}
        </h2>
      )}


      <div className="w-12 h-0.5 bg-[#0058BE]"></div>

      <p className="font-space text-[11px] text-[#75777E] pt-2 font-medium leading-[11px] tracking-[1.1px] text-center uppercase">
        {title}
      </p>
    </div>
  );
}

export default function AboutCounters() {
  return (
    <section className="w-full border border-[#C5C6CD] bg-white py-16 max-lg:px-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-y-8 lg:justify-between lg:gap-y-0">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex justify-center w-full sm:w-1/2 lg:w-auto ${index !== 0 ? "lg:border-l border-[#C5C6CD]" : ""
                }`}
            >
              <Card1
                num={item.num}
                suffix={item.suffix}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
