import React from 'react'
import Image from 'next/image'

export default function Landing() {
    return (
        <section className="relative flex flex-col justify-center h-[80vh] lg:h-[100vh] px-6 lg:px-12">
            {/* Background Image */}
            <Image
                src="/HomePage.png"
                alt="home page"
                fill
                className="object-cover w-full h-full absolute top-0 left-0 z-0"
                priority
            />

            {/* Content */}
            <div className="relative z-10 w-full lg:w-[60%] min-w-[300px] flex flex-col gap-6">
                <h1 className="text-[28px] md:text-4xl lg:text-[64px] font-bold leading-snug">
                    Powerful Airflow Engineered for Modern
                    <span className="text-[#FDCD2E]"> Industries.</span>
                </h1>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] max-w-[600px]">
                    High-performance exhaust solutions engineered for efficient ventilation, reliable airflow, and demanding industrial environments
                </p>
                <div className="flex flex-wrap gap-4 md:gap-10">
                    <button className="lg:py-4 lg:px-8 py-3 px-6 text-sm lg:text-lg text-white bg-black">
                        EXPLORE PRODUCTS
                    </button>
                    <button className="lg:py-4 lg:px-8 py-3 px-6 text-sm lg:text-lg text-black bg-white border">
                        TALK TO AN ENGINEER
                    </button>
                </div>
            </div>
        </section>
    )
}
