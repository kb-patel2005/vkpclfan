'use client'

import { manufacturer } from '@/Mockdata/Mockdata'
import { motion } from 'framer-motion'
import React from 'react'

export default function Manufacturer({ title }: { title: string }) {
    return (
        <section className='lg:px-0 px-5 w-full lg:py-20 pt-5 bg-[#F8F9FA]'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className='max-w-7xl mx-auto flex flex-col gap-5 lg:gap-10'>
                <h2 className="font-sora font-bold text-4xl lg:text-[48px] lg:leading-[56px] tracking-[-0.96px] text-center align-middle">
                    Floent{" "}
                    <span className="text-[#FDCD2E]">{title
                        .split("-")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each
                        .join(" ")}</span>{" "}

                    Manufacturer
                </h2>
                {manufacturer.get(title).map((e: string, idx: number) => (
                    <p
                        key={idx}
                        className="lg:text-center text-[#5D5D5D] font-inter leading-6 text-[16px] lg:text-[19px] lg:leading-7">{e}</p>
                ))}

            </motion.div>
        </section>
    )
}
