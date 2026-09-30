'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import { hover, motion } from 'framer-motion';
import { useGallery } from '@/context/GalleryContext';
import { useRouter } from 'next/navigation';

export default function GalleryLanding() {

    const { active, setActive, isAll, setIsAll } = useGallery();
    const router = useRouter();

    const activeCss = "w-[48%] font-bold text-[10px] leading-4 tracking-[1.2px] bg-[#09273A] hover:bg-black px-3 text-center py-3 text-white transition hover:bg-[#09273A] sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
    const unactive = "w-[48%] font-bold text-[10px] text-center leading-4 tracking-[1.2px] border-[0.5px] border-[#09273A] bg-[#09273A1F] px-3 py-3  text-black transition hover:bg-[#FDCD2E] sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"

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
                <div className="flex flex-wrap gap-2 lg:gap-4 justify-center mt-10">
                    <button
                        onClick={() => {
                            setActive("ALL");
                            setIsAll(true);

                            // Scroll to the element in another component
                            const galleryEl = document.getElementById("gallery");
                            if (galleryEl) {
                                galleryEl.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        // className={`w-full font-bold text-xs leading-4 tracking-[1.2px] bg-[#09273A] hover:bg-black px-6 py-3 text-white transition hover:bg-[#09273A] sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]`}
                        className={`${active ==  "ALL" ? activeCss : unactive} hover:scale-105 transition`}
                    >
                        ALL
                    </button>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                            setActive("INSTALLATIONS");
                            setIsAll(false);
                            const galleryEl = document.getElementById("gallery");
                            if (galleryEl) {
                                galleryEl.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className={`${active ==  "INSTALLATIONS" ? activeCss : unactive}`}
                        // className="w-full font-bold text-xs leading-4 tracking-[1.2px] border-[0.5px] border-[#09273A] bg-[#09273A1F] px-6 py-3  text-black transition hover:bg-transparent sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                    >
                        INSTALLATIONS
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                            setActive("MANUFACTURING");
                            setIsAll(false)
                            const galleryEl = document.getElementById("gallery");
                            if (galleryEl) {
                                galleryEl.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className={`${active ==  "MANUFACTURING" ? activeCss : unactive}`}
                        //className="w-full font-bold text-xs leading-4 tracking-[1.2px] border-[0.5px] border-[#09273A] bg-[#09273A1F] px-6 py-3  text-black transition hover:bg-transparent sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                    >
                        MANUFACTURING
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                            setActive("PROJECTS");
                            setIsAll(false);
                            const galleryEl = document.getElementById("gallery");
                            if (galleryEl) {
                                galleryEl.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className={`${active ==  "PROJECTS" ? activeCss : unactive}`}

                        // className="w-full font-bold text-xs leading-4 tracking-[1.2px] border-[0.5px] border-[#09273A] bg-[#09273A1F] px-6 py-3  text-black transition hover:bg-transparent sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                    >
                        PROJECTS
                    </motion.button>
                </div>
            </motion.div>
        </section>



    )

}
