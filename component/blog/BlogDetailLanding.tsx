'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { features } from 'process'
import React from 'react'

interface features {
    title: string;
    tag: string;
}

const data = {
    title: `Mitigating Corrosive \n Fumes in\n Heavy\n Manufacturing`,
    description: "An engineering analysis of material fatigue and\n structural integrity in aggressive chemical ventilation\n environments.Examining the performance of\n advanced alloys under sustained acidic exposure.",
    features: [
        {
            title: "TYPE",
            tag: "Technical Article"
        },
        {
            title: "READ TIME",
            tag: "8 min read"
        },
        {
            title: "DISCIPLINE",
            tag: "Material & Engineering"
        },
        {
            title: "DATE",
            tag: "Published Aug 2026"
        }
    ],
    heroImage: "/blog1.jpg",
}

export default function BlogDetailLanding() {
    return (
        <section className='w-full flex flex-wrap max-w-7xl mx-auto py-20 lg:px-0 px-5'>

            <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                 className='lg:w-3/5 flex flex-col gap-8 '>
                <h1 className="text-[#09273A] font-sora text-[40px] font-semibold leading-11 lg:leading-[70.4px] trading-[-1.28px] sm:text-5xl lg:text-[64px] lg:whitespace-pre-line">
                    {data.title}
                </h1>
                <p className='text-lg text-[#44474D] lg:leading-8 lg:whitespace-pre-line'>{data.description}</p>
                <div className='flex flex-wrap gap-y-4 border-t pt-6 w-[80%]'>
                    {
                        data.features.map((e: features) => (
                            <div className='flex flex-col gap-0 w-1/2'>
                                <span className='text-[#75777E] text-xs tracking-[1.2px] font-medium'>{e.title}</span>
                                <p className='text-[#09273A] text-xs tracking-[1.2px] font-medium'>{e.tag}</p>
                            </div>
                        ))
                    }
                </div>

            </motion.div>
            <motion.div
                                initial={{ x: 0, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}>
                <Image src={data.heroImage} height={500} width={500} alt={data.title}/>
            </motion.div>
        </section>
    )
}
