'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

const galleryItems = [
    {
        id: 1,
        src: "/gallery1.png",
        alt: "Image 1",
        category: "PROJECTS",
    },
    {
        id: 2,
        src: "/images/exhaust-main.png",
        alt: "Image 2",
        category: "INSTALLATIONS",
    },
    {
        id: 3,
        src: "/gallery3.jpg",
        alt: "Image 3",
        category: "INSTALLATIONS",
    },
    {
        id: 4,
        src: "/gallery4.jpg",
        alt: "Image 4",
        category: "MANUFACTURING",
    },
]


export default function GalleryImages({ active, isAll }: { active: string, isAll: boolean }) {

    return (
        <section className="w-full bg-[#09273A] py-24 lg:px-0 px-5 flex flex-col gap-10">
            <div className={`${isAll ? " grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4":"flex flex-wrap" } max-w-7xl mx-auto gap-4 `}>
                {galleryItems.map((item) => {
                    if (item.category == active || active == "ALL") {
                        return (
                            <div
                                key={item.id}
                                className={`${(item.id === 1 || item.id === 4) && isAll ? "sm:col-span-2" : ""
                                    } lg:h-[600px]`}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    height={500}
                                    width={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>)
                    }
                })}

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
