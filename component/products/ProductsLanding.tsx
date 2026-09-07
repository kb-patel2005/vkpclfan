'use client'

import { motion } from 'framer-motion';
import React from 'react'
import CountUp from 'react-countup';

const data = [
    { num: 20, suffix: "+", title: "YEARS EXPERIENCE" },
    { num: 5000, suffix: "+", title: "INSTALLATIONS" }
];

function Card1({
    num,
    suffix,
    title,
}: {
    num: number | string;
    suffix: string;
    title: string;
}) {
    return (
        <div className="flex flex-col gap-2 px-4 justify-center items-center hover:scale-105 transition">
            {typeof num === "string" ? (
                // <h2 className="font-jakarta text-[56px] lg:w-[250px] font-extrabold leading-[56px] tracking-[-1.68px] text-center">
                <h2 className="font-jakarta text-[45px] lg:w-[250px] font-extrabold leading-[56px] tracking-[-1.68px] text-center">
                    {num}
                </h2>
            ) : (
                // <h2 className="font-jakarta text-[56px] w-[250px] font-extrabold leading-[56px] tracking-[-1.68px] text-center">
                <h2 className="font-jakarta text-[45px] font-extrabold leading-[56px] tracking-[-1.68px] text-center">
                    <CountUp end={num} duration={2} />
                    {suffix}
                </h2>
            )}

            <p className="font-space text-[11px] text-[#75777E] pt-2 font-medium leading-[11px] tracking-[1.1px] text-center uppercase">
                {title}
            </p>
        </div>
    );
}

export default function ProductsLanding() {
    return (
        <section className='w-full min-h-fit py-20 content-center bg-white lg:px-0 px-5'>
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className='m-auto max-w-3xl flex flex-col items-center justify-center text-center gap-7'>
                <h1 className='font-sora text-[40px] font-bold leading-[1.15] sm:text-5xl lg:text-[64px]'>INDUSTRIAL FANS ENGINEERED FOR PERFORMANCE</h1>
                <p className='font-medium font-inter leading-6 sm:text-base text-[16px] lg:leading-7 text-[#475569]'>High-performance exhaust solutions engineered for efficient ventilation, reliable airflow, and demanding industrial environments</p>
                <div className='flex w-fit'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                        >
                            <Card1
                                key={index}
                                num={item.num}
                                suffix={item.suffix}
                                title={item.title}
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
