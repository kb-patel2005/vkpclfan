'use client'

import Image from 'next/image'
import React from 'react'
import ApplicationForm from '../common/ApplicationForm'
import { motion } from 'framer-motion'

const text = "Submit your resume for general consideration. We are always looking for\n exceptional talent to join our engineering and production teams."

export default function PerfectFit() {
    return (
        <section className='flex flex-wrap justify-center lg:justify-between w-full max-w-7xl mx-auto lg:py-20 lg:px-0 px-5'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex flex-col gap-4'>
                <h1 className="font-sora font-bold text-[32px] leading-10 tracking-[0px] align-middle text-[#121B2E]">
                    Don't see a perfect fit?
                </h1>

                <p className="font-inter font-normal text-[16px] leading-6 tracking-[0px] align-middle text-[#5D5D5D] lg:whitespace-pre-line">
                    {text}
                </p>
                <Image src="/career-progress-1.png" alt="progress with floent" height={500} width={500} />

            </motion.div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='w-[50%] min-w-[320px]'>
                <ApplicationForm />
            </motion.div>
        </section>
    )
}
