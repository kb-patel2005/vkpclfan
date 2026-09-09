'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GalleryLanding({ setActives, setIsAll }: { setActives: (val: string) => void, setIsAll: (val: boolean) => void }) {


    return (

        <section className="relative flex w-full items-center px-5 sm:px-8 lg:px-12 py-15 lg:py-30">

            {/* Content */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="max-w-7xl mx-auto relative z-10 flex text-center justify-center items-center flex-col gap-6"
            >

                <div className='flex gap-2 items-center w-full mx-auto justify-center'>
                    <div className='w-8 h-1 bg-[#09273A]'></div>
                    <p
                        className="font-inter font-bold text-[12px] leading-[16px] tracking-[2.4px] text-center align-middle"
                    >
                        PROJECT SHOWCASE
                    </p>

                    <div className='w-8 h-1 bg-[#09273A]'></div>
                </div>
                {/* Heading */}
                <h1 className="font-sora text-[40px] font-bold leading-[1.15] sm:text-5xl lg:text-[64px]">
                    OUR WORK IN ACTION
                </h1>

                {/* Description */}
                <p className="max-w-2xl font-medium text-[#5D5D5D] font-inter leading-6 sm:text-base text-center text-[16px] lg:leading-7">
                    Explore our portfolio of high-performance industrial engineering projects.
                    Precision execution across installations, manufacturing facilities, and complex
                    infrastructure developments.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 justify-center mt-10">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {setActives("ALL"); setIsAll(true);}}
                        className="w-full font-bold text-xs leading-4 tracking-[1.2px] bg-[#09273A] hover:bg-black px-6 py-3 text-white transition hover:bg-[#09273A] sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                    >
                        ALL
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {setActives("INSTALLATIONS"); setIsAll(false)}}
                        className="w-full font-bold text-xs leading-4 tracking-[1.2px] border-[0.5px] border-[#09273A] bg-[#09273A1F] px-6 py-3  text-black transition hover:bg-transparent sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                    >
                        INSTALLATIONS
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {setActives("MANUFACTURING"); setIsAll(false)}}
                        className="w-full font-bold text-xs leading-4 tracking-[1.2px] border-[0.5px] border-[#09273A] bg-[#09273A1F] px-6 py-3  text-black transition hover:bg-transparent sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                    >
                        MANUFACTURING
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {setActives("PROJECTS"); setIsAll(false)}}

                        className="w-full font-bold text-xs leading-4 tracking-[1.2px] border-[0.5px] border-[#09273A] bg-[#09273A1F] px-6 py-3  text-black transition hover:bg-transparent sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                    >
                        PROJECTS
                    </motion.button>
                </div>
            </motion.div>
        </section>



    )

}
