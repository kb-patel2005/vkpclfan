
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
        <div className="bg-[#09273A] w-[285px] p-8 rounded-3xl">
            <h2 className="text-[40px] font-bold text-[#DCE2F6]">
                {num}
            </h2>

            <p className="text-[12px] font-semibold text-[#C5C5D9]">
                {title}
            </p>
        </div>
    );
}

export default function Industryworkspace() {
    return (
        <section className="w-full flex flex-col gap-10">

            {/* ================= STATS ================= */}
            <div className="flex flex-wrap gap-11 mx-auto max-w-7xl justify-between">
                {data.map((data1, index) => (
                    <Card1
                        key={index}
                        num={data1.num}
                        title={data1.title}
                    />
                ))}
            </div>

            {/* ================= CTA ================= */}
            <div className="flex flex-col gap-5 bg-[#09273A] p-10 lg:p-24 max-w-7xl mx-auto justify-center items-center rounded-[40px] text-center">

                <h1 className="text-[40px] font-bold leading-tight text-white lg:text-[64px]">
                    Ready to Optimize Your{" "}
                    <span className="text-[#FDCD2E]">
                        Industrial Workspace?
                    </span>
                </h1>

                <p className="mt-5 text-lg font-normal text-white">
                    Our specialists are ready to provide a custom air-flow
                    audit for your facility.
                </p>

                <button className="mt-8 w-fit border-2 border-white bg-transparent px-12 py-5 rounded-full text-white transition hover:bg-white hover:text-[#09273A]">
                    Talk to an Expert
                </button>

            </div>
        </section>
    );
}
