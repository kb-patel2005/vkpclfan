import React from 'react'
import Image from 'next/image'

export default function Landing() {
    return (
        <section className=" relative flex h-[80vh] items-center px-5 sm:px-8 lg:h-[90vh] lg:px-12">

            {/* ================= BACKGROUND IMAGE ================= */}
            <Image
                src="/HomePage.png"
                alt="Industrial ventilation solutions"
                fill
                priority
                className="absolute inset-0 -z-10 h-full w-full object-fill"
            />


            {/* ================= CONTENT ================= */}
            <div className="relative z-10 flex w-full max-w-4xl flex-col gap-7 lg:w-[50%] lg:ml-18">

                {/* Heading */}
                <h1 className="font-sora text-[32px] font-bold leading-[1.15] sm:text-5xl lg:text-[64px]">

                    Powerful Airflow Engineered for Modern{" "}

                    <span className="text-[#FDCD2E]">
                        Industries
                    </span>
                    .
                </h1>


                {/* Description */}
                <p className="max-w-[600px] font-medium text-sm text-[#5D5D5D] font-inter leading-6 sm:text-base lg:text-[16px] lg:leading-7">
                    High-performance exhaust solutions engineered for efficient
                    ventilation, reliable airflow, and demanding industrial
                    environments.
                </p>


                {/* Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-5 lg:gap-8">

                    <button className="w-full font-inter bg-[#09273A] hover:bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-[#09273A] sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]">
                        EXPLORE PRODUCTS
                    </button>

                    <button className="w-full font-inter border bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-transparent sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]">
                        TALK TO AN ENGINEER
                    </button>

                </div>

            </div>

        </section>


    )
}
