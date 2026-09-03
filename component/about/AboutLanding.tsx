'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

export default function AboutLanding() {
    return (
        <section className='w-full h-auto py-20 lg:px-0 px-4'>
            <div className='max-w-7xl flex flex-wrap lg:gap-[48px] gap-3 mx-auto justify-between items-center'>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className='flex flex-col lg:w-[50%] gap-16'>
                    <div className='flex flex-col gap-3'>
                        <p className='font-sora text-[16px] tracking-[3.2px] font-normal leading-6 '> — ENGINEERED FOR PERFORMANCE</p>
                        {/* <h1 className='font-sora font-extrabold text-[64px] leading-[70.4px] tracking-[-1.28px] text-[#0F172A]'>Powering
                            Industries.
                            <br />
                            <span> Built to Perform.</span>

                        </h1> */}
                        <h1 className='font-sora text-[40px] font-bold leading-[1.15] sm:text-5xl lg:text-[64px] text-[#0F172A]'>Powering
                            Industries.
                            <br />
                            <span> Built to Perform.</span>

                        </h1>
                        {/* <p className="font-sora text-[18px] font-normal leading-[28.8px] tracking-normal text-[#475569]">
                            We design and manufacture heavy-duty industrial fans
                            that keep critical operations running. Precision
                            engineering meets unstoppable reliability.
                        </p> */}
                        <p className="max-w-[600px] font-medium font-inter leading-6 sm:text-base text-[16px] lg:leading-7 text-[#475569]">
                            We design and manufacture heavy-duty industrial fans
                            that keep critical operations running. Precision
                            engineering meets unstoppable reliability.
                        </p>
                    </div>
                    {/* <div className="font-sora flex flex-wrap items-center justify-center gap-2 lg:justify-normal">
                        <button className='py-4 px-8 lg:w-auto w-[300px] bg-[#09273A] text-white text-[16px] tracking-[0.8px] leading-[24px] rounded-sm'>EXPLORE OUR STORY →</button>
                        <button className='py-4 px-8 lg:w-auto w-[300px] bg-white text-[#0F172A] border border-[#0F172A] text-[16px] tracking-[0.8px] leading-[24px] rounded-sm'>VIEW PRODUCTS</button>
                    </div> */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-5 lg:gap-8">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}

                            className="w-full font-inter bg-[#09273A] hover:bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-[#09273A] sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                        >EXPLORE OUR STORY →</motion.button>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}

                            className="w-full font-inter border bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-transparent sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                        >VIEW PRODUCTS</motion.button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full lg:w-[560px] lg:h-[560px]">
                    <Image
                        src="/aboutlanding.png"
                        alt="About Fluent"
                        width={800}
                        height={600}
                        className="w-full h-auto
                        transition
                duration-300
                hover:shadow-2xl
                hover:shadow-[#FDCD2E]/60
                hover:scale-105
                        "
                        priority
                    />
                </motion.div>
            </div>
        </section>
    )
}
