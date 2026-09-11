'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function CaseStudy() {
    return (
        <section className='w-full lg:py-32 py-12 bg-white my-20 lg:px-0 px-5'>
            <motion.div initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='w-full max-w-7xl mx-auto flex flex-col gap-6 border-l-[16px] pl-4 lg:pl-16 border-l-[#FDCD2E]'>
                <span className='text-[13px] font-medium leading-4'>ENGINEERING NOTE // 001</span>
                <h1 className=" font-sora text-[40px] leading-11 font-extrabold lg:leading-[90px] trading-[-3.36px] sm:text-5xl lg:text-[64px] text-[#09273A]">
                    FAN SIZE ISN'T <br />
                    THE WHOLE STORY.
                </h1>

                {/* Description */}
                <p className="font-normal max-w-xl text-[#5D5D5D] font-inter leading-6 sm:text-base text-lg lg:leading-7">
                    While diameter dictates coverage area, it is the precise camber and pitch of
                    the airfoil that determines actual downward velocity. An inefficient large fan
                    simply churns air; a technically optimized smaller fan drives it exactly where
                    needed.
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-5 lg:gap-8">

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        className="w-full font-inter border border-[#00132C] bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-transparent sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                    >
                        READ THE FULL BRIEF
                    </motion.button>
                </div>
            </motion.div>
        </section>
    )
}
