'use client'

import { useSlug } from '@/context/SlugContext'
import { manufacturer } from '@/Mockdata/Mockdata'
import { motion } from 'framer-motion'
import React from 'react'

export default function Manufacturer() {

    const { newSlug } = useSlug();

    return (
        <section className='lg:px-0 px-5 w-full lg:py-20 pt-5 bg-[#F8F9FA]'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className='max-w-7xl mx-auto flex flex-col gap-4 lg:gap-10'>
                <h2 className="font-sora font-bold text-4xl lg:text-[48px] lg:leading-[56px] tracking-[-0.96px] text-center align-middle">
                    Floent{" "}
                    <span className="text-[#FDCD2E]">{newSlug
                        .split("-")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each
                        .join(" ")}</span>{" "}

                    Manufacturer
                </h2>
                <div className='flex flex-col gap-4'>
                    {manufacturer.get(newSlug)?.map((e: string, idx: number) => (
                        <p
                            key={idx}
                            className="lg:text-center text-[#5D5D5D] font-inter leading-6 text-[16px] lg:text-[19px] lg:leading-7">{e}</p>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
