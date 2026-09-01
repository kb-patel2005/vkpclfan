
import React from "react";
import {
    MapPin,
    ShieldCheck,
    Star,
    BadgeCheck,
    TrendingUp,
} from "lucide-react";

const data = [
    {
        icon: MapPin,
        title: "Made in India",
        para: "AHMEDABAD, GUJARAT",
    },
    {
        icon: ShieldCheck,
        title: "5-Year Warranty",
        para: "MOTOR & GEARBOX",
    },
    {
        icon: Star,
        title: "4.9★",
        para: "1,022 VERIFIED REVIEWS",
    },
    {
        icon: BadgeCheck,
        title: "CE Certified",
        para: "ALL MODELS",
    },
    {
        icon: TrendingUp,
        title: "4,500+ Installs",
        para: "ACROSS INDIA",
    },
];

export default function Features() {
    return (
        <section className="mt-0 px-6 py-12 w-full bg-[#F8F9FA]">
            <div className="mx-auto grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 max-w-7xl">

                {data.map((item, idx) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={idx}
                            className="flex flex-col items-center rounded-lg p-4 text-center transition hover:scale-120 cursor-pointer"
                        >

                            {/* Icon */}
                            <div className="flex h-[48px] w-[64px] mb-[16px] items-center bg-white justify-center rounded-full opacity-80">
                                <Icon
                                    size={50}
                                    strokeWidth={1.8}
                                    className="text-[#09273A] h-[20px] w-[16px]"
                                />
                            </div>

                            {/* Title */}
                            <h2 className="text-[16px] pb-1 font-inter font-semibold text-[#09273A]">
                                {item.title}
                            </h2>

                            {/* Description */}
                            <p className="text-[10px] font-medium text-[#44474D99]">
                                {item.para}
                            </p>

                        </div>
                    );
                })}

            </div>
        </section>
    );
}
