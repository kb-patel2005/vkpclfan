'use client'

import { benefits } from '@/Mockdata/Mockdata'
import { motion } from 'framer-motion'
import React from 'react'

export default function BenefitFan({ title}: { title: string }) {
  return (
    <section className="w-full bg-[#F8F9FA] py-10 lg:py-0 px-5 lg:px-0">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-8 lg:gap-6">

        {/* Left Content */}
        <div className="w-full lg:w-[35%] flex flex-col gap-4 lg:gap-6">
          <h2 className="font-sora font-bold text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px]">
            Benefits of Industrial{" "}
            <span className="text-[#FDCD2E]">{title.split("-").join(" ")}</span>
          </h2>

          {benefits.get(title).map((e: string, idx: number) => (
            <p className="font-sora text-[16px] leading-6 text-[#475569]" key={idx}>
              {e}
            </p>

          ))}
       
        </div>

        {/* Right Image */}
        <img
          src="/manufacuring.png"
          alt="benefit of exhaust fan"
          className="w-full h-[280px] object-cover lg:object-fill lg:w-[60%] lg:h-[670px]"
        />
      </motion.div>
    </section>
  )
}
