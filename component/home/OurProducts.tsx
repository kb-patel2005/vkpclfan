
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
        <section className="bg-white py-5">
            <div className="mx-auto max-w-7xl px-4">

                {/* ================= HEADING ================= */}
                <div className="text-center">
                    <span className="rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-widest text-gray-600">
                        Our Products
                    </span>

                    <h2 className="mt-4 text-3xl font-bold text-[#14324A] md:text-5xl">
                        Industrial Precision Solutions
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm font-normal text-gray-500">
                        Optimized air movement tailored for every structural requirement.
                    </p>
                </div>

                {/* ================= PRODUCT GRID ================= */}
                <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">

                    {/* ================= LARGE CARD ================= */}
                    <div className="relative  overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">

                        {/* Image */}
                        <img
                            src={products[0].img}
                            alt={products[0].title}
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        {/* Bottom Content */}
                        <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/30 p-4 backdrop-blur-md">

                            <h3 className="text-[20px] font-semibold text-gray-800">
                                {products[0].title}
                            </h3>

                            <p className="mt-2 text-sm font-normal text-[#5D5D5D]">
                                {products[0].desc}
                            </p>

                            {/* Desktop Button */}
                            <button className="mt-3 hidden rounded-xl font-semibold text-white lg:block">
                                EXPLORE SOLUTION →
                            </button>

                            {/* Mobile / Tablet Button */}
                            <button className="mt-3 rounded-xl bg-[#EDEEF0] px-2.5 py-2 font-bold lg:hidden">
                                →
                            </button>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                        {products.slice(1).map((item, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
                            >

                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-[185px] w-full object-cover"
                                />

                                {/* Content */}
                                <div className="p-4 flex flex-col justify-between">

                                    <h3 className="text-[20px] font-semibold text-gray-800">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm font-normal text-[#5D5D5D]">
                                        {item.desc}
                                    </p>
                                    <div className="w-full flex justify-end">
                                        <button className="w-[50px] flex-end mt-3 font-bold rounded-xl bg-[#EDEEF0] py-1 px-3">
                                            →
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
