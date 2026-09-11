'use client'

import { motion } from 'framer-motion';
import React from 'react'

interface CardDetail {
    icon: any;
    title: string;
    description: string;
}

const desc = "We don't just build fans; we engineer high-performance systems. Our culture is built on\n precision, innovation, and a commitment to quality. Discover what drives us forward."

const cards: CardDetail[] = [
    {
        icon: (
            <svg width="36" height="18" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 18V15.6375C0 14.5625 0.55 13.6875 1.65 13.0125C2.75 12.3375 4.2 12 6 12C6.325 12 6.6375 12.0063 6.9375 12.0188C7.2375 12.0312 7.525 12.0625 7.8 12.1125C7.45 12.6375 7.1875 13.1875 7.0125 13.7625C6.8375 14.3375 6.75 14.9375 6.75 15.5625V18H0ZM9 18V15.5625C9 14.7625 9.21875 14.0312 9.65625 13.3687C10.0938 12.7062 10.7125 12.125 11.5125 11.625C12.3125 11.125 13.2688 10.75 14.3813 10.5C15.4938 10.25 16.7 10.125 18 10.125C19.325 10.125 20.5438 10.25 21.6562 10.5C22.7687 10.75 23.725 11.125 24.525 11.625C25.325 12.125 25.9375 12.7062 26.3625 13.3687C26.7875 14.0312 27 14.7625 27 15.5625V18H9ZM29.25 18V15.5625C29.25 14.9125 29.1688 14.3 29.0063 13.725C28.8438 13.15 28.6 12.6125 28.275 12.1125C28.55 12.0625 28.8312 12.0312 29.1187 12.0188C29.4062 12.0063 29.7 12 30 12C31.8 12 33.25 12.3312 34.35 12.9937C35.45 13.6562 36 14.5375 36 15.6375V18H29.25ZM6 10.5C5.175 10.5 4.46875 10.2062 3.88125 9.61875C3.29375 9.03125 3 8.325 3 7.5C3 6.65 3.29375 5.9375 3.88125 5.3625C4.46875 4.7875 5.175 4.5 6 4.5C6.85 4.5 7.5625 4.7875 8.1375 5.3625C8.7125 5.9375 9 6.65 9 7.5C9 8.325 8.7125 9.03125 8.1375 9.61875C7.5625 10.2062 6.85 10.5 6 10.5ZM30 10.5C29.175 10.5 28.4688 10.2062 27.8813 9.61875C27.2938 9.03125 27 8.325 27 7.5C27 6.65 27.2938 5.9375 27.8813 5.3625C28.4688 4.7875 29.175 4.5 30 4.5C30.85 4.5 31.5625 4.7875 32.1375 5.3625C32.7125 5.9375 33 6.65 33 7.5C33 8.325 32.7125 9.03125 32.1375 9.61875C31.5625 10.2062 30.85 10.5 30 10.5ZM18 9C16.75 9 15.6875 8.5625 14.8125 7.6875C13.9375 6.8125 13.5 5.75 13.5 4.5C13.5 3.225 13.9375 2.15625 14.8125 1.29375C15.6875 0.43125 16.75 0 18 0C19.275 0 20.3438 0.43125 21.2062 1.29375C22.0687 2.15625 22.5 3.225 22.5 4.5C22.5 5.75 22.0687 6.8125 21.2062 7.6875C20.3438 8.5625 19.275 9 18 9Z" fill="#09273A" />
            </svg>
        ),
        title: "Culture",
        description: "A collaborative environment where technical excellence meets creative problem-solving. We value rigorous analysis and open dialogue."
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 27.7588V23.2588H6.15L2.325 10.7338C1.65 10.3588 1.09375 9.80882 0.65625 9.08382C0.21875 8.35882 0 7.58382 0 6.75882C0 5.50882 0.4375 4.44632 1.3125 3.57132C2.1875 2.69632 3.25 2.25882 4.5 2.25882C5.475 2.25882 6.34375 2.54007 7.10625 3.10257C7.86875 3.66507 8.4 4.38382 8.7 5.25882H13.5V3.75882C13.5 3.33382 13.6437 2.97757 13.9312 2.69007C14.2188 2.40257 14.575 2.25882 15 2.25882C15.225 2.25882 15.4438 2.30882 15.6562 2.40882C15.8687 2.50882 16.05 2.65882 16.2 2.85882L18.75 0.458824C18.975 0.233824 19.2437 0.0900735 19.5562 0.0275735C19.8687 -0.0349265 20.175 0.00882353 20.475 0.158824L26.325 2.85882C26.625 3.00882 26.8313 3.22757 26.9438 3.51507C27.0562 3.80257 27.05 4.08382 26.925 4.35882C26.775 4.65882 26.5562 4.85257 26.2687 4.94007C25.9812 5.02757 25.7 5.00882 25.425 4.88382L20.025 2.40882L16.5 5.70882V7.80882L20.025 11.0338L25.425 8.55882C25.7 8.43382 25.9875 8.42132 26.2875 8.52132C26.5875 8.62132 26.8 8.80882 26.925 9.08382C27.075 9.38382 27.0875 9.67132 26.9625 9.94632C26.8375 10.2213 26.625 10.4338 26.325 10.5838L20.475 13.3588C20.175 13.5088 19.8687 13.5526 19.5562 13.4901C19.2437 13.4276 18.975 13.2838 18.75 13.0588L16.2 10.6588C16.05 10.8088 15.8687 10.9463 15.6562 11.0713C15.4438 11.1963 15.225 11.2588 15 11.2588C14.575 11.2588 14.2188 11.1151 13.9312 10.8276C13.6437 10.5401 13.5 10.1838 13.5 9.75882V8.25882H8.7C8.625 8.45882 8.54375 8.64632 8.45625 8.82132C8.36875 8.99632 8.25 9.18382 8.1 9.38382L15.6 23.2588H21V27.7588H1.5ZM4.5 8.25882C4.925 8.25882 5.28125 8.11507 5.56875 7.82757C5.85625 7.54007 6 7.18382 6 6.75882C6 6.33382 5.85625 5.97757 5.56875 5.69007C5.28125 5.40257 4.925 5.25882 4.5 5.25882C4.075 5.25882 3.71875 5.40257 3.43125 5.69007C3.14375 5.97757 3 6.33382 3 6.75882C3 7.18382 3.14375 7.54007 3.43125 7.82757C3.71875 8.11507 4.075 8.25882 4.5 8.25882Z" fill="#09273A" />
            </svg>
        ),
        title: "Tech",
        description: "Work with cutting-edge fluid dynamics simulation, advanced materials, and precision manufacturing techniques."
    },
    {
        icon: (
            <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.1 18L0 15.9L11.1 4.725L17.1 10.725L24.9 3H21V0H30V9H27V5.1L17.1 15L11.1 9L2.1 18Z" fill="#09273A" />
            </svg>
        ),
        title: "Growth",
        description: "Continuous learning opportunities, structured career progression, and the chance to lead complex industrial projects."
    }
];

const Card = ({ data }: { data: CardDetail }) => {
    return (
        <div className='p-8 border-l-4 border-[#09273A] flex flex-col gap-3 bg-white min-w-[320px] w-[32%]'>
            <span>{data.icon}</span>
            <h1 className="font-manrope pt-3 font-bold text-[24px] leading-[32px] tracking-[0px] align-middle text-[rgba(9,39,58,1)]">
                {data.title}
            </h1>
            <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[rgba(93,93,93,1)]">
                {data.description}
            </p>

        </div>
    )
}

export default function WhyAeroCore() {
    return (
        <section className='w-full max-w-7xl mx-auto lg:px-0 px-5 mt-5 lg:mt-20'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex flex-col gap-4 pb-12'>
                <h1 className="font-sora font-semibold text-[48px] leading-[56px] tracking-[-0.48px] align-middle text-[rgba(9,39,58,1)]">
                    Why AeroCore?
                </h1>
                <p className="font-inter font-normal text-[18px] leading-[28px] tracking-[0px] align-middle text-[rgba(93,93,93,1)] lg:whitespace-pre-line">
                    {desc}
                </p>
            </motion.div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex flex-wrap justify-center gap-3 lg:justify-between'>
                {cards.map((e: CardDetail, idx: number) => (
                    <Card data={e} />
                ))}
            </motion.div>
        </section>
    )
}
