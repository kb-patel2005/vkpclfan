'use client'

import { useSlug } from '@/context/SlugContext';
import { benefits } from '@/Mockdata/Mockdata'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function BenefitFan() {


  const { newSlug } = useSlug();

  return (
    <section className="w-full bg-[#F8F9FA] py-5 lg:py-0 px-5 lg:px-0">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-4 lg:gap-6">

        {/* Left Content */}
        <div className="w-full lg:w-[65%] flex flex-col gap-4 lg:gap-6">
          <h2 className="font-sora font-bold text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px]">
            Advantages of Industrial{" "}
            <span className="text-[#FDCD2E]">{newSlug.split("-").join(" ")}</span>
          </h2>
          {benefits.get(newSlug) && Object.entries(benefits.get(newSlug)).map(([key, value], idx) => {
            if (key === "paragraph" && Array.isArray(value)) {
              // Render paragraphs
              return (
                <div key={idx} className="space-y-2">
                  {value.map((line, i) => (
                    <p
                      key={i}
                      className="font-sora text-[16px] leading-6 text-[#475569]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              );
            }

            if (key === "list" && Array.isArray(value)) {
              // Split list into two columns for large screens
              const mid = Math.ceil(value.length / 2);
              const left = value.slice(0, mid);
              const right = value.slice(mid);

              return (
                <div key={idx} className="mt-6">
                  <h3 className="text-lg font-semibold mb-4 capitalize">Key Benefits</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <ul className="list-disc list-inside space-y-2">
                      {left.map((item, i) => (
                        <li
                          key={i}
                          className="font-sora text-[16px] leading-6 text-[#475569]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                      {right.map((item, i) => (
                        <li
                          key={i}
                          className="font-sora text-[16px] leading-6 text-[#475569]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Right Image */}
        <Image
          src="/manufacuring.png"
          height={600}
          width={400}
          alt="benefit of exhaust fan"
          className="w-full object-cover lg:object-fill"
        />
      </motion.div>
    </section>
  )
}
