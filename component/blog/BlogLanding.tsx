'use client'

import { motion } from 'framer-motion';
import React from 'react'

export default function BlogLanding() {
    return (
        <section className='w-full mx-auto text-center flex flex-col justify-center gap-[30px] py-20 bg-white'>
            <h1 className=" font-sora text-[40px] font-extrabold leading-[79px] trading-[-1.44px] sm:text-5xl lg:text-[64px]">
                THE SCIENCE <br />
                BEHIND BETTER <br />
                <span className="text-[#FDCD2E]">AIRFLOW</span>.
            </h1>

            {/* Description */}
            <p className="font-normal text-[#5D5D5D] font-inter leading-6 sm:text-base text-lg lg:leading-7">
                Engineering insights, industrial intelligence and real-world
                <br/>
                knowledge shaping the future of ventilation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-5 lg:gap-8 justify-center">

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full font-inter border border-[#00132C] bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-transparent sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                >
                    EXPLORE INSIGHTS ↓
                </motion.button>
            </div>
        </section>
    )
}
