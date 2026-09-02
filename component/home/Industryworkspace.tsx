
import React from "react";

const data = [
    {
        num: "15+",
        title: "YEARS OF EXPERIENCE",
    },
    {
        num: "5000+",
        title: "INSTALLATIONS",
    },
    {
        num: "99.9%",
        title: "SYSTEM UPTIME",
    },
    {
        num: "45%",
        title: "ENERGY SAVINGS",
    },
];

function Card1({
    num,
    title,
}: {
    num: string;
    title: string;
}) {
    return (
        <div className="w-full rounded-3xl bg-[#09273A] p-7 sm:w-[285px] lg:p-8 hover:scale-105 transition">
            <h2 className="text-[40px] font-sora font-bold leading-none text-[#DCE2F6]">
                {num}
            </h2>

            <p className="mt-2 text-[12px] font-semibold tracking-wide text-[#C5C5D9]" style={{letterSpacing:"1.2px"}}>
                {title}
            </p>
        </div>
    );
}

export default function Industryworkspace() {
    return (
        <section className="flex w-full flex-col items-center bg-[#F8F9FA] gap-3 justify-center md:gap-5 px-4 py-6 sm:px-6 lg:gap-14 lg:py-20">

            {/* ================= STATS ================= */}
            <div className="flex w-full flex-wrap lg:gap-10 gap-8 sm:justify-around justify-center max-w-7xl">

                {data.map((data1, index) => (
                    <Card1
                        key={index}
                        num={data1.num}
                        title={data1.title}
                    />
                ))}

            </div>


            {/* ================= CTA ================= */}
            <div className="flex w-full max-w-7xl flex-col gap-8 items-center justify-center rounded-[30px] bg-[#09273A] px-6 py-12 text-center sm:px-10 sm:py-16 lg:rounded-[40px] lg:px-24 lg:py-24">

                {/* Heading */}
                <h1 className="text-[36px] font-bold leading-[1.1] font-sora text-white sm:text-[46px] lg:text-[64px]">

                    Ready to Optimize Your{" "}

                    <span className="text-[#FDCD2E]">
                        Industrial Workspace?
                    </span>

                </h1>


                {/* Description */}
                <p className=" max-w-2xl text-base font-normal leading-6 text-white sm:text-lg">
                    Our specialists are ready to provide a custom air-flow
                    audit for your facility.
                </p>


                {/* Button */}
                <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#09273A] sm:px-12 sm:py-5 sm:text-base">
                    Talk to an Expert
                </button>

            </div>

        </section>
    );
}
