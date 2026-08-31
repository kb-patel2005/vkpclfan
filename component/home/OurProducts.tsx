
import { ArrowRight, Building2 } from "lucide-react";
import React from "react";

const products = [
    {
        title: "Exhaust Fan",
        desc: "Exhaust Fan draws out polluted air from the premises and replaces it with fresh air.",
        img: "/images/exhaust-main.png",
        large: true,
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
        <section className="bg-white py-5 lg:px-0 px-5">
            <div className="mx-auto max-w-7xl">

                {/* ================= HEADING ================= */}
                <div className="text-center">
                    <span className="rounded-full bg-[#09273A1A] px-3 py-1 font-semibold text-xs uppercase tracking-widest text-[#09273A]">
                        Our Products
                    </span>

                    <h2 className="mt-4 text-3xl font-sora font-bold text-[#14324A] md:text-5xl">
                        Industrial Precision Solutions
                    </h2>

                    <p className="mx-auto mt-3 font-inter max-w-2xl text-sm font-normal text-gray-500">
                        Optimized air movement tailored for every structural requirement.
                    </p>
                </div>

                {/* ================= PRODUCT GRID ================= */}
                <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">

                    {/* ================= LARGE CARD ================= */}
                    <div className="relative  overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">

                        {/* Image */}
                        <div className="hoverflow-hidden rounded-t-2xl">
                            <img
                                src={products[0].img}
                                alt={products[0].title}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>

                        {/* Bottom Content */}
                        <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/20 bg-white/70 p-4 backdrop-blur-[20px]">
                            <h3 className="font-sora text-[32px] font-semibold text-gray-800">
                                {products[0].title}
                            </h3>

                            <p className="mt-2 font-inter text-[16px] font-normal text-[#5D5D5D]">
                                {products[0].desc}
                            </p>

                            {/* Desktop Button */}
                            <button className="mt-3 hidden font-semibold text-[#09273A] lg:block">
                                EXPLORE SOLUTION →
                            </button>

                            {/* Mobile Button */}
                            <button className="mt-3 rounded-xl bg-white/60 px-2.5 py-2 lg:hidden">
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                        {products.slice(1).map((item, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
                            >
                                {/* Top Left Icon */}
                                <div className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow">
                                    <Building2 size={22} className="text-[#09273A]" />
                                </div>

                                {/* Image */}
                                <div className="h-[185px] overflow-hidden rounded-t-2xl">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-between p-4">
                                    <h3 className="text-[20px] font-semibold text-gray-800">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-[16px] font-normal text-[#5D5D5D]">
                                        {item.desc}
                                    </p>

                                    <div className="flex w-full justify-end">
                                        <button className="mt-3 rounded-xl bg-[#EDEEF0] p-2 font-bold">
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* ================= BOTTOM IMAGE ================= */}
                <div className="mt-12">
                    <img
                        src="/images/factory.png"
                        alt="Factory"
                        className="mx-auto w-full max-w-6xl object-contain"
                    />
                </div>

            </div>
        </section>
    );
}
