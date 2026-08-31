import React from "react";

import {
    Plane,
    Warehouse,
    Building2,
    Dumbbell,
    Factory,
    TrainFront,
    Church,
    Car,
} from "lucide-react";

const data = [
    {
        title: "Airport",
        logo: Plane,
    },
    {
        title: "Warehouse",
        logo: Warehouse,
    },
    {
        title: "Community Hall",
        logo: Building2,
    },
    {
        title: "Gym",
        logo: Dumbbell,
    },
    {
        title: "Industry",
        logo: Factory,
    },
    {
        title: "Railway / Bus Station",
        logo: TrainFront,
    },
    {
        title: "Temple",
        logo: Church,
    },
    {
        title: "Automobile",
        logo: Car,
    },
];

export default function Floentfan() {
    return (
        <section className="my-16 flex flex-col items-center gap-10 px-4">

            {/* ================= HEADING ================= */}
            <div className="max-w-4xl">
                <h1 className="text-center text-4xl font-bold leading-tight sm:text-5xl">

                    <span className="text-[#FFC727]">
                        Floent Fans
                    </span>{" "}
                    for Every Large Space

                </h1>

                <p className="mt-5 text-center text-base font-normal text-[#43474E] sm:text-lg">
                    Engineered for powerful air circulation across diverse
                    large-scale environments.
                </p>
            </div>


            {/* ================= CATEGORIES ================= */}
            <div className="w-full max-w-7xl">

                {/* Mobile Horizontal Scroll */}
                <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide sm:hidden">

                    {data.map((item, index) => {
                        const Icon = item.logo;

                        return (
                            <div
                                key={index}
                                className="flex h-[100px] min-w-[100px] shrink-0 flex-col items-center justify-center rounded-2xl bg-[#5D5D5D1A] p-3"
                            >
                                <Icon
                                    size={32}
                                    strokeWidth={1.8}
                                    className="text-[#09273A]"
                                />

                                <p className="mt-2 text-center text-[12px] font-semibold leading-tight text-[#09273A]">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}

                </div>


                {/* Tablet + Desktop */}
                <div className="hidden flex-wrap justify-center gap-4 sm:flex lg:flex-nowrap lg:justify-between">

                    {data.map((item, index) => {
                        const Icon = item.logo;

                        return (
                            <div
                                key={index}
                                className="flex h-[100px] w-[100px] shrink-0 flex-col items-center justify-center rounded-2xl bg-[#5D5D5D1A] p-3"
                            >
                                <Icon
                                    size={32}
                                    strokeWidth={1.8}
                                    className="text-[#09273A]"
                                />

                                <p className="mt-2 text-center text-[12px] font-semibold leading-tight text-[#09273A]">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
