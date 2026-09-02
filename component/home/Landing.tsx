"use client";

import React from 'react'
import Image from 'next/image'

import { motion } from "framer-motion";
export default function Landing() {
    return (

        <section className="relative flex h-[90vh] items-center px-5 sm:px-8 lg:px-12">
            {/* Background Image */}
            <Image
                src="/HomePage.png"
                alt="Industrial ventilation solutions"
                fill
                priority
                className="absolute inset-0 -z-10 h-full w-full lg:w-full lg:object-fill"
            />

            {/* Content */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 flex w-full max-w-4xl flex-col gap-7 lg:w-[50%] lg:ml-18"
            >
                {/* Heading */}
                <h1 className="font-sora text-[40px] font-bold leading-[1.15] sm:text-5xl lg:text-[64px]">
                    Powerful Airflow Engineered for Modern{" "}
                    <span className="text-[#FDCD2E]">Industries</span>.
                </h1>

                {/* Description */}
                <p className="max-w-[600px] font-medium text-[#5D5D5D] font-inter leading-6 sm:text-base text-[16px] lg:leading-7">
                    High-performance exhaust solutions engineered for efficient
                    ventilation, reliable airflow, and demanding industrial
                    environments.
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-5 lg:gap-8">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={(e) => {
                            e.currentTarget.innerText = "EXPLORE PRODUCTS →";
                        }}
                        className="w-full font-inter bg-[#09273A] hover:bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-[#09273A] sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                    >
                        EXPLORE PRODUCTS
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        className="w-full font-inter border bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-transparent sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                    >
                        TALK TO AN ENGINEER
                    </motion.button>
                </div>
            </motion.div>
        </section>



    )
}
