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
        <h2 className="font-jakarta text-[56px] w-[100px] lg:w-[250px] font-extrabold leading-[56px] tracking-[-1.68px] text-center">
          {num}
        </h2>
      ) : (
        <h2 className="font-jakarta text-[56px] w-[250px] font-extrabold leading-[56px] tracking-[-1.68px] text-center">
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
    <section className='w-full py-16 border border-[#C5C6CD]'>
      <div className='mx-auto max-w-7xl'>
          <div className="flex flex-wrap justify-center lg:justify-between gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className={index !== 0 ? "border-0 lg:border-l border-[#C5C6CD]" : ""}
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
