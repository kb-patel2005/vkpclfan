'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const data = [
    {
        title: "HVLS FAN",
        desc: "CENTRIFUGAL EXHAUST",
        leftone: "AIRFLOW",
        leftdata: "15,000 CFM",
        rightone: "POWER",
        rightdata: "5 HP",
        img: "/images/hvls.jpg",
        icon: (
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.91667 14.1667C7.22222 14.1667 6.63194 13.9236 6.14583 13.4375C5.65972 12.9514 5.41667 12.3611 5.41667 11.6667H7.08333C7.08333 11.9028 7.16319 12.1007 7.32292 12.2604C7.48264 12.4201 7.68056 12.5 7.91667 12.5C8.15278 12.5 8.35069 12.4201 8.51042 12.2604C8.67014 12.1007 8.75 11.9028 8.75 11.6667C8.75 11.4306 8.67014 11.2326 8.51042 11.0729C8.35069 10.9132 8.15278 10.8333 7.91667 10.8333H0V9.16667H7.91667C8.61111 9.16667 9.20139 9.40972 9.6875 9.89583C10.1736 10.3819 10.4167 10.9722 10.4167 11.6667C10.4167 12.3611 10.1736 12.9514 9.6875 13.4375C9.20139 13.9236 8.61111 14.1667 7.91667 14.1667ZM0 5.83333V4.16667H11.25C11.6111 4.16667 11.9097 4.04861 12.1458 3.8125C12.3819 3.57639 12.5 3.27778 12.5 2.91667C12.5 2.55556 12.3819 2.25694 12.1458 2.02083C11.9097 1.78472 11.6111 1.66667 11.25 1.66667C10.8889 1.66667 10.5903 1.78472 10.3542 2.02083C10.1181 2.25694 10 2.55556 10 2.91667H8.33333C8.33333 2.09722 8.61458 1.40625 9.17708 0.84375C9.73958 0.28125 10.4306 0 11.25 0C12.0694 0 12.7604 0.28125 13.3229 0.84375C13.8854 1.40625 14.1667 2.09722 14.1667 2.91667C14.1667 3.73611 13.8854 4.42708 13.3229 4.98958C12.7604 5.55208 12.0694 5.83333 11.25 5.83333H0ZM13.75 12.5V10.8333C14.1111 10.8333 14.4097 10.7153 14.6458 10.4792C14.8819 10.2431 15 9.94444 15 9.58333C15 9.22222 14.8819 8.92361 14.6458 8.6875C14.4097 8.45139 14.1111 8.33333 13.75 8.33333H0V6.66667H13.75C14.5694 6.66667 15.2604 6.94792 15.8229 7.51042C16.3854 8.07292 16.6667 8.76389 16.6667 9.58333C16.6667 10.4028 16.3854 11.0938 15.8229 11.6562C15.2604 12.2188 14.5694 12.5 13.75 12.5Z" fill="#1A1C1D" />
            </svg>
        ),
    },
    {
        title: "EXHAUST FAN",
        desc: "WAREHOUSE CEILING FAN",
        leftone: "DIAMETER",
        leftdata: "15,000 CFM",
        rightone: "COVERAGE",
        rightdata: "5 HP",
        img: "/images/exhaust-small.jpg",
        icon: (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 16.6667V13.2083L4.79167 15.875L3.625 14.7083L7.5 10.8333V9.16667H5.83333L1.95833 13.0417L0.791667 11.875L3.45833 9.16667H0V7.5H3.45833L0.791667 4.79167L1.95833 3.625L5.83333 7.5H7.5V5.83333L3.625 1.95833L4.79167 0.791667L7.5 3.45833V0H9.16667V3.45833L11.875 0.791667L13.0417 1.95833L9.16667 5.83333V7.5H10.8333L14.7083 3.625L15.875 4.79167L13.2083 7.5H16.6667V9.16667H13.2083L15.875 11.875L14.7083 13.0417L10.8333 9.16667H9.16667V10.8333L13.0417 14.7083L11.875 15.875L9.16667 13.2083V16.6667H7.5Z" fill="#1A1C1D" />
            </svg>
        ),
    },
    {
        title: "AIR CIRCULATOR",
        desc: "WAREHOUSE CEILING FAN",
        leftone: "DIAMETER",
        leftdata: "15,000 CFM",
        rightone: "COVERAGE",
        rightdata: "5 HP",
        img: "/images/mobile.jpg",
        icon: (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 16.6667V13.2083L4.79167 15.875L3.625 14.7083L7.5 10.8333V9.16667H5.83333L1.95833 13.0417L0.791667 11.875L3.45833 9.16667H0V7.5H3.45833L0.791667 4.79167L1.95833 3.625L5.83333 7.5H7.5V5.83333L3.625 1.95833L4.79167 0.791667L7.5 3.45833V0H9.16667V3.45833L11.875 0.791667L13.0417 1.95833L9.16667 5.83333V7.5H10.8333L14.7083 3.625L15.875 4.79167L13.2083 7.5H16.6667V9.16667H13.2083L15.875 11.875L14.7083 13.0417L10.8333 9.16667H9.16667V10.8333L13.0417 14.7083L11.875 15.875L9.16667 13.2083V16.6667H7.5Z" fill="#1A1C1D" />
            </svg>
        ),
    },
    {
        title: "HVLS FAN",
        desc: "CENTRIFUGAL EXHAUST",
        leftone: "AIRFLOW",
        leftdata: "15,000 CFM",
        rightone: "POWER",
        rightdata: "5 HP",
        img: "/images/hvls.jpg",
        icon: (
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.91667 14.1667C7.22222 14.1667 6.63194 13.9236 6.14583 13.4375C5.65972 12.9514 5.41667 12.3611 5.41667 11.6667H7.08333C7.08333 11.9028 7.16319 12.1007 7.32292 12.2604C7.48264 12.4201 7.68056 12.5 7.91667 12.5C8.15278 12.5 8.35069 12.4201 8.51042 12.2604C8.67014 12.1007 8.75 11.9028 8.75 11.6667C8.75 11.4306 8.67014 11.2326 8.51042 11.0729C8.35069 10.9132 8.15278 10.8333 7.91667 10.8333H0V9.16667H7.91667C8.61111 9.16667 9.20139 9.40972 9.6875 9.89583C10.1736 10.3819 10.4167 10.9722 10.4167 11.6667C10.4167 12.3611 10.1736 12.9514 9.6875 13.4375C9.20139 13.9236 8.61111 14.1667 7.91667 14.1667ZM0 5.83333V4.16667H11.25C11.6111 4.16667 11.9097 4.04861 12.1458 3.8125C12.3819 3.57639 12.5 3.27778 12.5 2.91667C12.5 2.55556 12.3819 2.25694 12.1458 2.02083C11.9097 1.78472 11.6111 1.66667 11.25 1.66667C10.8889 1.66667 10.5903 1.78472 10.3542 2.02083C10.1181 2.25694 10 2.55556 10 2.91667H8.33333C8.33333 2.09722 8.61458 1.40625 9.17708 0.84375C9.73958 0.28125 10.4306 0 11.25 0C12.0694 0 12.7604 0.28125 13.3229 0.84375C13.8854 1.40625 14.1667 2.09722 14.1667 2.91667C14.1667 3.73611 13.8854 4.42708 13.3229 4.98958C12.7604 5.55208 12.0694 5.83333 11.25 5.83333H0ZM13.75 12.5V10.8333C14.1111 10.8333 14.4097 10.7153 14.6458 10.4792C14.8819 10.2431 15 9.94444 15 9.58333C15 9.22222 14.8819 8.92361 14.6458 8.6875C14.4097 8.45139 14.1111 8.33333 13.75 8.33333H0V6.66667H13.75C14.5694 6.66667 15.2604 6.94792 15.8229 7.51042C16.3854 8.07292 16.6667 8.76389 16.6667 9.58333C16.6667 10.4028 16.3854 11.0938 15.8229 11.6562C15.2604 12.2188 14.5694 12.5 13.75 12.5Z" fill="#1A1C1D" />
            </svg>
        ),
    },
    {
        title: "EXHAUST FAN",
        desc: "WAREHOUSE CEILING FAN",
        leftone: "DIAMETER",
        leftdata: "15,000 CFM",
        rightone: "COVERAGE",
        rightdata: "5 HP",
        img: "/images/exhaust-small.jpg",
        icon: (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 16.6667V13.2083L4.79167 15.875L3.625 14.7083L7.5 10.8333V9.16667H5.83333L1.95833 13.0417L0.791667 11.875L3.45833 9.16667H0V7.5H3.45833L0.791667 4.79167L1.95833 3.625L5.83333 7.5H7.5V5.83333L3.625 1.95833L4.79167 0.791667L7.5 3.45833V0H9.16667V3.45833L11.875 0.791667L13.0417 1.95833L9.16667 5.83333V7.5H10.8333L14.7083 3.625L15.875 4.79167L13.2083 7.5H16.6667V9.16667H13.2083L15.875 11.875L14.7083 13.0417L10.8333 9.16667H9.16667V10.8333L13.0417 14.7083L11.875 15.875L9.16667 13.2083V16.6667H7.5Z" fill="#1A1C1D" />
            </svg>
        ),
    },
    {
        title: "AIR CIRCULATOR",
        desc: "WAREHOUSE CEILING FAN",
        leftone: "DIAMETER",
        leftdata: "15,000 CFM",
        rightone: "COVERAGE",
        rightdata: "5 HP",
        img: "/images/mobile.jpg",
        icon: (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 16.6667V13.2083L4.79167 15.875L3.625 14.7083L7.5 10.8333V9.16667H5.83333L1.95833 13.0417L0.791667 11.875L3.45833 9.16667H0V7.5H3.45833L0.791667 4.79167L1.95833 3.625L5.83333 7.5H7.5V5.83333L3.625 1.95833L4.79167 0.791667L7.5 3.45833V0H9.16667V3.45833L11.875 0.791667L13.0417 1.95833L9.16667 5.83333V7.5H10.8333L14.7083 3.625L15.875 4.79167L13.2083 7.5H16.6667V9.16667H13.2083L15.875 11.875L14.7083 13.0417L10.8333 9.16667H9.16667V10.8333L13.0417 14.7083L11.875 15.875L9.16667 13.2083V16.6667H7.5Z" fill="#1A1C1D" />
            </svg>
        ),
    },

];

export default function Products() {
    const [active, setActive] = useState("all-products");
    const router = useRouter()

    const [showFilters, setShowFilters] = useState(false);
    return (
        <section className='lg:mt-20 mt-10 flex flex-col lg:gap-12 gap-4'>
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-10 items-center">
                <div className="w-full bg-white">
                    <div
                        className="max-w-7xl mx-auto flex items-center gap-8 py-4 px-5 lg:px-0 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        <Link
                            href="/products"
                            onClick={() => setActive("all-products")}
                            className={`text-[12px] leading-4 tracking-[0.72px] font-bold shrink-0 ${active === "all-products" ? "border-b-2 border-[#09273A] pb-2" : ""
                                } `}
                        >
                            ALL PRODUCTS
                        </Link>

                        <Link
                            href="/products"
                            onClick={() => setActive("exhuast-fans")}
                            className={`text-[12px] leading-4 tracking-[0.72px] font-bold shrink-0 ${active === "exhuast-fans" ? "border-b-2 border-[#09273A] pb-2" : ""
                                } `}
                        >
                            EXHAUST FANS
                        </Link>

                        <Link
                            href="/products"
                            onClick={() => setActive("centrifugal-fans")}
                            className={`text-[12px] leading-4 tracking-[0.72px] font-bold shrink-0 ${active === "centrifugal-fans" ? "border-b-2 border-[#09273A] pb-2" : ""
                                } `}
                        >
                            CENTRIFUGAL FANS
                        </Link>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='w-full flex flex-col gap-4 lg:gap-12'>

                <div className="flex flex-wrap p-6 w-full max-w-7xl mx-auto items-center gap-6 bg-white">

                    {/* Mobile */}
                    <div className="flex lg:hidden w-full items-center justify-between border border-[#C3C5D980] p-3">
                        <div className="flex items-center">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path
                                    d="M8 18V12H10V14H18V16H10V18H8ZM0 16V14H6V16H0ZM4 12V10H0V8H4V6H6V12H4ZM8 10V8H18V10H8ZM12 6V0H14V2H18V4H14V6H12ZM0 4V2H10V4H0Z"
                                    fill="#09273A"
                                />
                            </svg>

                            <span className="ml-3">FIND THE RIGHT FAN</span>
                        </div>

                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="p-2"
                        >
                            ☰
                        </button>
                    </div>

                    {/* Mobile Filters */}
                    {showFilters && (
                        <div className="flex lg:hidden flex-col w-full gap-3">
                            <div className="relative border-[#C3C5D980] border">

                                <svg
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                                    width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#5D5D5D" />
                                </svg>


                                <input type="text"
                                    placeholder="Search..."
                                    className="pl-10 w-full py-2.5 outline-none" />
                            </div>

                            <div className="relative ">
                                <select className="appearance-none w-full border border-[#C3C5D980] py-2.5 pl-3 pr-10">
                                    <option>Application</option>
                                    <option>Motor Power</option>
                                    <option>Motor Power</option>
                                </select>
                                <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-width="2" d="M6 9l6 6 6-6" />
                                </svg>
                            </div>
                            <div className="relative">
                                <select className="appearance-none w-full border border-[#C3C5D980] py-2.5 pl-3 pr-10">

                                    <option>Motor Power</option>
                                    <option>Motor Power</option>
                                </select>
                                <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-width="2" d="M6 9l6 6 6-6" />
                                </svg>
                            </div>
                        </div>
                    )}

                    {/* Desktop */}
                    <div className="hidden lg:flex mx-auto w-[18%]">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M8 18V12H10V14H18V16H10V18H8ZM0 16V14H6V16H0ZM4 12V10H0V8H4V6H6V12H4ZM8 10V8H18V10H8ZM12 6V0H14V2H18V4H14V6H12ZM0 4V2H10V4H0Z"
                                fill="#09273A"
                            />
                        </svg>

                        <span className="ml-3">FIND THE RIGHT FAN</span>
                    </div>

                    <div className="hidden lg:flex w-[80%] gap-[16px] justify-between">
                        {/* <input
                            type="text"
                            placeholder="🔍 Search models or specs..."
                            className="p-2.5 border-[#C3C5D980] border w-[60%]"
                        /> */}

                        <div className="relative w-[60%] border-[#C3C5D980] border">

                            <svg
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                                width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#5D5D5D" />
                            </svg>


                            <input type="text"
                                placeholder="Search..."
                                className="pl-10 w-full py-2.5 outline-none" />
                        </div>

                        <div className="relative w-64">
                            <select className="appearance-none w-full border border-[#C3C5D980] py-2.5 pl-3 pr-10">
                                <option>Application</option>
                                <option>Motor Power</option>
                                <option>Motor Power</option>
                            </select>
                            <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="2" d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                        <div className="relative w-64">
                            <select className="appearance-none w-full border border-[#C3C5D980] py-2.5 pl-3 pr-10">

                                <option>Motor Power</option>
                                <option>Motor Power</option>
                            </select>
                            <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-width="2" d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='flex mx-auto w-full max-w-7xl items-center bg-white flex-wrap lg:px-0 px-5'>
                    <img
                        src={'/images/exhaust-main.png'}
                        alt={'Exhaust fan'}
                        className="lg:h-[435px] object-cover lg:w-[45%] transition-transform duration-500 hover:scale-105"
                    />
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative z-10 flex flex-col gap-7 lg:text-left text-center py-3 lg:p-[48px]"
                    >
                        {/* Heading */}
                        <h1 className="font-sora text-[32px] font-bold leading-[1.15] sm:text-5xl ">
                            EXHAUST FAN
                        </h1>

                        {/* Description */}
                        <p className="max-w-[600px] font-medium text-[#5D5D5D] font-inter leading-6 sm:text-base text-[16px] lg:leading-7">
                            Floent Exhaust Fans efficiently remove hot air, moisture, dust, fumes, chemicals and unpleasant odors, replacing stagnant indoor air with fresh air.
                            Designed for large industrial and commercial spaces, they help prevent overheating, moisture-related damage and poor indoor air quality creating a cleaner, cooler and more comfortable environment.
                            Powerful ventilation. Better airflow. Healthier spaces.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3 sm:flex-row sm:gap-5 lg:gap-8">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                onClick={(e) => {
                                    e.currentTarget.innerText = "EXPLORE PRODUCTS →";
                                }}
                                className="w-full font-inter bg-[#09273A] hover:bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-[#09273A] sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                            >
                                REQUEST QUOTE
                            </motion.button>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => router.push("/products/exhuast-fan")}
                                className="w-full font-inter border bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-transparent sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
                            >
                                VIEW DETAILS →
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

            </motion.div>
            <div
                className='w-full lg:px-0 px-5'>
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-between gap-6">
                    {data?.map((e, index) => (
                        <div
                            key={index}
                            className="relative w-full sm:w-[48%] lg:w-[32%] lg:min-h-[520px] rounded-sm border border-gray-200 bg-white overflow-hidden shadow-[0px_4px_12px_0px_#071B3A0D]"
                        >
                            {/* Icon */}
                            <div className="h-10 w-10 absolute top-3 left-3 rounded-md bg-white flex items-center justify-center z-10">
                                {e.icon}
                            </div>

                            {/* Image */}
                            <div className="lg:h-[300px] h-[250px] lg:h-[60%] w-full">
                                <img
                                    src={e.img}
                                    alt="Industrial Fan"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="h-auto lg:h-[40%] p-5 flex flex-col">
                                <h3 className="font-sora text-[20px] font-semibold uppercase leading-[28px] tracking-[-0.4px] text-[#071B3A]">
                                    {e.title}
                                </h3>

                                <p className="mt-2 font-inter text-[12px] font-normal uppercase leading-[18px] text-gray-600">
                                    {e.desc}
                                </p>

                                <div className="my-4 border-b border-dashed border-[#5D5D5D]" />

                                <div className="grid grid-cols-2 gap-4 pb-6">
                                    <div>
                                        <p className="font-inter text-[10px] leading-[15px] text-gray-500">
                                            {e.leftone}
                                        </p>
                                        <h4 className="mt-1 font-inter text-[14px] font-medium leading-[20px] tracking-[0.14px] text-[#071B3A]">
                                            {e.leftdata}
                                        </h4>
                                    </div>

                                    <div>
                                        <p className="font-inter text-[10px] leading-[15px] text-gray-500">
                                            {e.rightone}
                                        </p>
                                        <h4 className="mt-1 font-inter text-[14px] font-medium leading-[20px] tracking-[0.14px] text-[#071B3A]">
                                            {e.rightdata}
                                        </h4>
                                    </div>
                                </div>

                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="w-full border bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-transparent"
                                >
                                    VIEW SPECS →
                                </motion.button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
