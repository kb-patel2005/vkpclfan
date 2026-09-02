'use client'

import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import React from "react";

const products = [
    {
        title: "Exhaust Fan",
        desc: "Exhaust Fan draws out polluted air from the premises and replaces it with fresh air.",
        img: "/images/exhaust-main.png",
    },
    {
        title: "HVLS Fan",
        desc: "German Geared Motors, 5 Aero Blades & Die-Cast Hub.",
        img: "/images/hvls.jpg",
    },
    {
        title: "Exhaust Fan",
        desc: "Portable cooling for flexible workstations.",
        img: "/images/exhaust-small.jpg",
    },
    {
        title: "Industrial Air Cooler",
        desc: "Powerful Cooling for Enhanced Worker Comfort in High-Temperature Regions.",
        img: "/images/cooler.jpg",
    },
    {
        title: "Mobile Fan",
        desc: "Evaporative cooling technology delivers refreshing relief in sweltering temperatures.",
        img: "/images/mobile.jpg",
    },
];

export default function IndustrialSolutions() {
    return (
        <section className="w-full bg-white pt-5 px-6 lg:px-6 mt-5 lg:mt-6">
            <div className="mx-auto max-w-7xl">

                {/* ================= HEADING ================= */}
                <div className="text-center">
                    <span
                        className="rounded-full bg-[#09273A1A] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#09273A]"
                        style={{ lineHeight: "16px", letterSpacing: "1.2px" }}
                    >
                        Our Products
                    </span>

                    <h1 className="mt-[15px] font-sora lg:text-[42px] text-[33px] font-bold leading-tight text-[#14324A] lg:text-[64px] lg:leading-[70.4px]">
                        Industrial Precision Solutions
                    </h1>

                    <p
                        className="mx-auto mt-[15px] max-w-2xl font-inter text-lg font-normal text-[#5D5D5D]"
                        style={{ lineHeight: "28px" }}
                    >
                        Optimized air movement tailored for every structural requirement.
                    </p>
                </div>

                {/* ================= PRODUCT GRID ================= */}
                <div className="mt-10 flex flex-col gap-4 lg:flex-row">

                    {/* ========== LEFT 40% ========== */}
                    <motion.div
                        initial={{ x: -80, opacity: 0.5 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:basis-2/5 transition
                duration-300
                hover:shadow-2xl
                hover:shadow-[#FDCD2E]/60"
                    >
                        {/* Left card content */}
                        <div className="relative h-full overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
                            <div className="h-full overflow-hidden">
                                <img
                                    src={products[0].img}
                                    alt={products[0].title}
                                    className="h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="absolute top-5 left-4 z-10 flex items-center justify-center bg-white px-3 py-1">
                                <span className="text-xs font-medium text-[#09273A]">• Best Seller</span>
                            </div>
                            <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/20 bg-white/70 p-4 backdrop-blur-[20px]">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-sora text-[20px] lg:text-[32px] font-semibold text-[#14324A]">
                                        {products[0].title}
                                    </h3>
                                    <div className="flex justify-end">
                                        <button className="rounded-xl bg-[#EDEEF0] lg:p-2 p-1.5">
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                                <p className=" mt-1 lg:mt-2 font-inter text-[14px] leading-normal text-[#5D5D5D]">
                                    {products[0].desc}
                                </p>
                                <button className="mt-2 lg:mt-3 font-semibold text-[#09273A] text-[12px] lg:block">
                                    EXPLORE SOLUTION →
                                </button>
                                
                            </div>
                        </div>
                    </motion.div>

                    {/* ========== RIGHT 60% ========== */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:basis-3/5"
                    >
                        <div className="grid grid-cols-1 gap-2 lg:gap-4 sm:grid-cols-2">
                            {products.slice(1).map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-2xl hover:shadow-[#FDCD2E]/60 hover:shadow-xl align-middle">
                                    <div className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow backdrop-blur-sm">
                                        <Building2 size={22} className="text-[#09273A]" />
                                    </div>
                                    <div className="h-[260px] w-full overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="h-[260px] w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between p-4">
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-sora text-[20px] font-semibold text-[#14324A]">
                                            {item.title}
                                        </h3>
                                            <button className="rounded-xl bg-[#EDEEF0] p-2">
                                                <ArrowRight size={20} />
                                            </button>
                                        </div>
                                        
                                        <p className="mt-1 lg:mt-2 font-inter text-[14px] leading-normal text-[#5D5D5D]">
                                            {item.desc}
                                        </p>
                                        
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ================= BOTTOM IMAGE ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="overflow-hidden"
                >
                    <img
                        src="/images/factory2.png"
                        alt="Factory"
                        className="mx-auto w-full max-w-6xl object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}