'use client'

import { motion } from 'framer-motion';
import React from 'react'

const heading = "Need a ventilation solution engineered for your\n environment?"

const desc = "Consult with our structural engineering team to specify the exact alloys and composites\n required for your facility's atmospheric conditions."

export default function EngineeringEnvironment() {
    return (
        <section className='my-20 lg:px-0 px-5 w-full'>
            <motion.div initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}

                className=' relative flex flex-col gap-4 w-full justify-center max-w-5xl mx-auto py-12 bg-[linear-gradient(180deg,#D9E0E7_4.17%,rgba(217,224,231,0)_4.17%),linear-gradient(90deg,#D9E0E7_4.17%,rgba(217,224,231,0)_4.17%)]'>

                <h2 className='text-[32px] font-semibold leading-[38.4px] lg:whitespace-pre-line  text-center align-middle'>{heading}</h2>
                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] text-center align-middle text-[#44474D] lg:whitespace-pre-line">
                    {desc}
                </p>
                <div className='text-center align-middle flex justify-center'>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}

                        className="flex items-center gap-3 font-inter bg-[#09273A] hover:bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-[#09273A] sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                    >GET IN TOUCH
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.10208 5.25H0V4.08333H7.10208L3.83542 0.816667L4.66667 0L9.33333 4.66667L4.66667 9.33333L3.83542 8.51667L7.10208 5.25Z" fill="white" />
                        </svg>

                    </motion.button>
                </div>
            </motion.div>
        </section >
    )
}
