'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function Manufacturer() {
    return (
        <section className='lg:px-0 px-5 w-full lg:py-20 pt-5 bg-[#F8F9FA]'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}  className='max-w-7xl mx-auto flex flex-col gap-5 lg:gap-10'>
                <h1 className="font-sora font-bold text-4xl lg:text-[48px] lg:leading-[56px] tracking-[-0.96px] text-center align-middle">
                    Floent{" "}
                    <span className="text-[#FDCD2E]">Exhaust Fan</span>{" "}

                    Manufacturer
                </h1>
                <p className="lg:text-center text-[#5D5D5D] font-inter leading-6 text-[16px] lg:text-[19px] lg:leading-7">
                    <span className='font-bold'>Floent Technologies</span> is a leading manufacturer of high-performance industrial exhaust fans, designed to provide powerful air extraction and efficient ventilation for factories, warehouses, agricultural facilities, commercial spaces, and other large environments. Our exhaust fans are engineered for effective removal of heat, humidity, fumes, dust, and stale air, helping create a cooler, cleaner, and more comfortable workspace.
                    <br />
                    Built with durable materials, aerodynamic fan blades, robust construction, and efficient motors, Floent Exhaust Fans deliver consistent airflow with reliable long-term performance. Designed for demanding industrial applications, they offer low maintenance, energy-efficient operation, and dependable ventilation, making Floent an ideal choice for efficient air extraction and improved indoor air quality.
                </p>
            </motion.div>
        </section>
    )
}
