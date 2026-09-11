'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'

interface Job {
    tag: string;
    location: string;
    role: string;
    responsibilities: Array<string>,
    requirements: Array<string>
}

const jobs: Job[] = [
    {
        tag: "ENGINEERING",
        location: "Headquarters",
        role: "Mechanical Engineer",
        responsibilities: [
            "1. Supplier & Product Pipeline：Source, onboard, and manage new suppliers/products to expand portfolio;", "2. Go-to-Market Execution：Lead product launches, market research, and promotional campaigns; ensure real-time market intelligence updates;", "3. Commercial Strategy：Adapt sales approaches to industry shifts, support key account management, and drive client engagement."
        ],
        requirements: [
            "1. Bachelor's degree or above in pharmaceuticals, biology, or related fields;", "2. More than 3 years of experience in the pharmaceutical industry with strong market sensitivity;", "3. Proficient in English as a working language; Willing to travel internationally."
        ]
    },
    {
        tag: "MANUFACTURING",
        location: "Facility Alpha",
        role: "Production Head",
        responsibilities: [
            "1. Supplier & Product Pipeline：Source, onboard, and manage new suppliers/products to expand portfolio;", "2. Go-to-Market Execution：Lead product launches, market research, and promotional campaigns; ensure real-time market intelligence updates;", "3. Commercial Strategy：Adapt sales approaches to industry shifts, support key account management, and drive client engagement."
        ],
        requirements: [
            "1. Bachelor's degree or above in pharmaceuticals, biology, or related fields;", "2. More than 3 years of experience in the pharmaceutical industry with strong market sensitivity;", "3. Proficient in English as a working language; Willing to travel internationally."
        ]
    },
    {
        tag: "SALES",
        location: "Regional Office",
        role: "Sales Engineer",
        responsibilities: [
            "1. Supplier & Product Pipeline：Source, onboard, and manage new suppliers/products to expand portfolio;", "2. Go-to-Market Execution：Lead product launches, market research, and promotional campaigns; ensure real-time market intelligence updates;", "3. Commercial Strategy：Adapt sales approaches to industry shifts, support key account management, and drive client engagement."
        ],
        requirements: [
            "1. Bachelor's degree or above in pharmaceuticals, biology, or related fields;", "2. More than 3 years of experience in the pharmaceutical industry with strong market sensitivity;", "3. Proficient in English as a working language; Willing to travel internationally."
        ]
    }
]

const JobCard = ({ job, active, setActive }: { job: Job, active: string, setActive: (e: string) => void }) => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='bg-white p-4 lg:p-8 flex flex-col gap-5 border-l-4 border-l-[#E1E8FF]'>
            <div className='flex flex-wrap gap-5 justify-between items-center'>
                <div>
                    <div className='flex items-center'>
                        <span className="font-inter bg-[#09273A1F] py-1 px-2 text-[#09273A] font-bold text-[12px] leading-4 tracking-[0.72px] align-middle">
                            {job.tag}
                        </span>
                        <span className="pl-2 w-fit flex gap-1 items-center font-inter font-medium text-[14px] leading-5 tracking-[0.14px] align-middle text-[#5D5D5D]">
                            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.33333 6.66667C5.7 6.66667 6.01389 6.53611 6.275 6.275C6.53611 6.01389 6.66667 5.7 6.66667 5.33333C6.66667 4.96667 6.53611 4.65278 6.275 4.39167C6.01389 4.13056 5.7 4 5.33333 4C4.96667 4 4.65278 4.13056 4.39167 4.39167C4.13056 4.65278 4 4.96667 4 5.33333C4 5.7 4.13056 6.01389 4.39167 6.275C4.65278 6.53611 4.96667 6.66667 5.33333 6.66667ZM5.33333 11.5667C6.68889 10.3222 7.69444 9.19167 8.35 8.175C9.00556 7.15833 9.33333 6.25556 9.33333 5.46667C9.33333 4.25556 8.94722 3.26389 8.175 2.49167C7.40278 1.71944 6.45556 1.33333 5.33333 1.33333C4.21111 1.33333 3.26389 1.71944 2.49167 2.49167C1.71944 3.26389 1.33333 4.25556 1.33333 5.46667C1.33333 6.25556 1.66111 7.15833 2.31667 8.175C2.97222 9.19167 3.97778 10.3222 5.33333 11.5667ZM5.33333 13.3333C3.54444 11.8111 2.20833 10.3972 1.325 9.09167C0.441667 7.78611 0 6.57778 0 5.46667C0 3.8 0.536111 2.47222 1.60833 1.48333C2.68056 0.494444 3.92222 0 5.33333 0C6.74444 0 7.98611 0.494444 9.05833 1.48333C10.1306 2.47222 10.6667 3.8 10.6667 5.46667C10.6667 6.57778 10.225 7.78611 9.34167 9.09167C8.45833 10.3972 7.12222 11.8111 5.33333 13.3333Z" fill="#5D5D5D" />
                            </svg>
                            {" "}{job.location}
                        </span>

                    </div>
                    <h3 className="font-sora mt-2 font-semibold text-[24px] leading-8 tracking-[0px] align-middle text-[#09273A]">
                        {job.role}
                    </h3>

                </div>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => { active == job.role ? setActive("") : setActive(job.role) }}
                    className="w-full font-inter border border-[#09273A] bg-white px-6 py-2 text-sm font-medium text-[#09273A] transition hover:bg-transparent sm:w-auto lg:text-[14px]"
                >
                    VIEW POSITION
                </motion.button>
            </div>
            <div className={`${active == job.role ? "block" : "hidden"}`}>
                <h3 className="text-[#09273A] font-inter font-bold text-[14px] leading-8 tracking-[0px] align-middle"> Job Responsibilities </h3>
                <ul>
                    {job.responsibilities.map((e) => (
                        <li className="font-inter font-normal text-[14px] leading-8 tracking-[0px] align-middle text-[#09273A]">{e}</li>
                    ))}
                </ul>
            </div>
            <div className={`${active == job.role ? "block" : "hidden"}`}>
                <h3 className="text-[#09273A] font-inter font-bold text-[14px] leading-8 tracking-[0px] align-middle">
                    Job Requirements
                </h3>
                <ul>
                    {job.requirements.map((e) => (
                        <li className="font-inter font-normal text-[14px] leading-8 tracking-[0px] align-middle text-[#09273A]">{e}</li>
                    ))}
                </ul>
            </div>
            <Link href={'/contact/#applicationform'} className={`${active == job.role ? "block" : "hidden"} w-[150px] font-bold text-[16px] leading-5 bg-[#FFC727] py-2 px-6`}>Apply</Link>
        </motion.div>
    )
}

export default function JobPositions() {

    const [active, setActive] = useState("");

    return (
        <section className='w-full py-20 lg:px-0 px-5'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex flex-wrap justify-between items-center px-2 w-full max-w-7xl mx-auto my-8 bg-white py-4'>
                <h1 className='font-sora font-bold text-[32px] leading-10 text-[#09273A]'> Open Positions</h1>
                <span className='font-medium text-sm leading-5 tracking-[0.14px] text-[#5D5D5D]'>3 POSITIONS AVAILABLE</span>
            </motion.div>
            <div className='flex flex-col gap-3 justify-between w-full max-w-7xl mx-auto'>
                {jobs.map((e) =>
                    (<JobCard job={e} active={active} setActive={(e) => setActive(e)} />)
                )}
            </div>
        </section>
    )
}
