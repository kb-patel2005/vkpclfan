'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const heading = "BUILD THE FUTURE\n OF INDUSTRIAL\n AIRFLOW."


export default function CareerLanding() {
    return (
        <section className=' w-full lg:px-0 px-5 bg-white'>
            <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }} className=' gap-6 flex flex-wrap max-w-7xl w-full mx-auto items-center justify-between lg:justify-between py-20'>
                {/* <div className = "flex w-full max-w-7xl lg:mx-auto"> */}
                <div className='w-full lg:w-[50%]'>
                    <h1 className="font-sora font-extrabold text-[40px] lg:text-[64px] lg:leading-[80px] tracking-[-1.44px] align-middle text-[rgba(9,39,58,1)] lg:whitespace-pre-line">
                        BUILD THE FUTURE OF INDUSTRIAL AIRFLOW.
                    </h1>
                    <p className="font-normal text-[18px] lg:leading-[28px] tracking-[0px] align-middle text-[rgba(93,93,93,1)] lg:whitespace-pre-line">
                        Join Aerocore Industrial and shape the next generation of precision- engineered ventilation systems. We are recruiting top engineering talent to drive innovation and performance.
                    </p>
                </div>
                <div >
                    <Image src="/career.jpg" height={400} width={500} alt="career page" />
                </div>
            </motion.div>
        </section>
    )
}
