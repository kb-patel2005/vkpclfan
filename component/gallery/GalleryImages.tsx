'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function GalleryImages() {
    return (
        <section className="w-full bg-[#09273A] py-24 lg:px-0 px-5 flex flex-col gap-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="sm:col-span-2 lg:h-[600px]">
                    <img
                        src="/gallery1.png"
                        alt="Image 1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="lg:h-[600px]">
                    <img
                        src="/images/exhaust-main.png"
                        alt="Image 2"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="lg:h-[600px]">
                    <img
                        src="/gallery3.jpg"
                        alt="Image 3"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="sm:col-span-2 lg:h-[600px]">
                    <img
                        src="/gallery4.jpg"
                        alt="Image 4"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="mx-auto font-inter border tracking-[1.2px]  px-8 py-4 leading-4 text-xs font-medium text-white transition hover:bg-transparent"
            >
                LOAD MORE PROJECTS
            </motion.button>
        </section>


    )
}
