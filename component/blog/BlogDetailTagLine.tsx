'use client'

import { motion } from 'framer-motion'
import React from 'react'

const tag = "Material selection becomes critical when industrial\n ventilation systems operate continuously in aggressive\n chemical environments."

export default function BlogDetailTagLine() {
    return (
        <motion.section
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='text-center py-20 lg:mx-0 mx-5'>

            <h1 className='font-semibold text-[32px] leading-10 lg:whitespace-pre-line'>"{tag}"</h1>
        </motion.section>
    )
}
