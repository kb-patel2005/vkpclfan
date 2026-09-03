'use client'

import { motion } from 'framer-motion';
import React from 'react'

export default function Trust() {

    const benefits = [
        "International Quality at affordable cost.",
        "Dedicated support availability for life time.",
        "Well established sales / service network.",
        "Manufactured to international Quality standards.",
        "All models are CE Certified.",
        "Management's direct involvement ensures quality.",
    ];

    const cards = [
        {
            number: "01",
            title: "INTERNATIONAL QUALITY",
            description: "Standards and components.",
            bg: "#09273A",
            icon: (

                <svg
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.5179 26.3076L7.13843 22.2973L2.6205 21.3076L3.06152 16.6563L0 13.1538L3.06152 9.65124L2.6205 4.99998L7.13843 4.01024L9.5179 0L13.7692 1.80512L18.0204 0L20.3999 4.01024L24.9178 4.99998L24.4768 9.65124L27.5383 13.1538L24.4768 16.6563L24.9178 21.3076L20.3999 22.2973L18.0204 26.3076L13.7692 24.5024L9.5179 26.3076ZM10.3692 23.7538L13.7692 22.3128L17.2102 23.7538L19.1025 20.5538L22.7692 19.7128L22.4358 15.9538L24.9025 13.1538L22.4358 10.3128L22.7692 6.55378L19.1025 5.75378L17.1692 2.55378L13.7692 3.99481L10.3281 2.55378L8.43583 5.75378L4.76917 6.55378L5.1025 10.3128L2.63583 13.1538L5.1025 15.9538L4.76917 19.7538L8.43583 20.5538L10.3692 23.7538ZM12.3692 17.4255L19.4409 10.3538L18.0358 8.90767L12.3692 14.5743L9.5025 11.7487L8.0974 13.1538L12.3692 17.4255Z"
                        fill="#FFB800"
                    />
                </svg>
            ),
        },
        {
            number: "02",
            title: "AFFORDABLE PRICE",
            description: "Maximum value.",
            bg: "#FFFFFF",
            icon: (
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8717 10.7948C14.9401 10.7948 14.1516 10.4721 13.5063 9.82685C12.861 9.18156 12.5384 8.39311 12.5384 7.4615C12.5384 6.52989 12.861 5.74144 13.5063 5.09615C14.1516 4.45086 14.9401 4.12821 15.8717 4.12821C16.8033 4.12821 17.5917 4.45086 18.237 5.09615C18.8823 5.74144 19.205 6.52989 19.205 7.4615C19.205 8.39311 18.8823 9.18156 18.237 9.82685C17.5917 10.4721 16.8033 10.7948 15.8717 10.7948ZM7.07686 14.923C6.41404 14.923 5.84663 14.687 5.37463 14.215C4.90262 13.743 4.66662 13.1756 4.66662 12.5128V2.41024C4.66662 1.74742 4.90262 1.18001 5.37463 0.708008C5.84663 0.236003 6.41404 0 7.07686 0H24.6665C25.3293 0 25.8967 0.236003 26.3687 0.708008C26.8408 1.18001 27.0768 1.74742 27.0768 2.41024V12.5128C27.0768 13.1756 26.8408 13.743 26.3687 14.215C25.8967 14.687 25.3293 14.923 24.6665 14.923H7.07686ZM9.07681 12.923H22.6666C22.6666 12.2581 22.9026 11.6902 23.3746 11.2192C23.8466 10.7483 24.414 10.5128 25.0768 10.5128V4.41019C24.4119 4.41019 23.8439 4.17419 23.373 3.70218C22.902 3.23018 22.6666 2.66277 22.6666 1.99995H9.07681C9.07681 2.6649 8.8408 3.23285 8.3688 3.70378C7.89679 4.17472 7.32938 4.41019 6.66657 4.41019V10.5128C7.33152 10.5128 7.89947 10.7488 8.3704 11.2208C8.84134 11.6928 9.07681 12.2602 9.07681 12.923ZM23.1024 19.5896H2.41024C1.74742 19.5896 1.18001 19.3536 0.708007 18.8816C0.236002 18.4096 0 17.8422 0 17.1794V3.97436H1.99995V17.1794C1.99995 17.2819 2.04269 17.376 2.12817 17.4615C2.21364 17.5469 2.30767 17.5897 2.41024 17.5897H23.1024V19.5896ZM7.07686 12.923H6.66657C6.66657 12.923 6.66657 12.8824 6.66657 12.8012C6.66657 12.72 6.66657 12.6239 6.66657 12.5128V2.41024C6.66657 2.29912 6.66657 2.20296 6.66657 2.12175C6.66657 2.04055 6.66657 1.99995 6.66657 1.99995H7.07686C6.96574 1.99995 6.86958 2.04055 6.78837 2.12175C6.70717 2.20296 6.66657 2.29912 6.66657 2.41024V12.5128C6.66657 12.6239 6.70717 12.72 6.78837 12.8012C6.86958 12.8824 6.96574 12.923 7.07686 12.923Z" fill="#09273A" />
                </svg>
            ),
        },
        {
            number: "03",
            title: "24 x 7 SUPPORT",
            description: "Dedicated availability.",
            bg: "#FFFFFF",
            icon: (
                <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8461 22.6666V20.6666H21.5897C21.7008 20.6666 21.7969 20.6324 21.8781 20.564C21.9594 20.4957 22 20.4059 22 20.2948V10.9692C22 8.42045 21.088 6.27473 19.2641 4.532C17.4401 2.78927 15.241 1.9179 12.6666 1.9179C10.0923 1.9179 7.89312 2.78927 6.06918 4.532C4.24525 6.27473 3.33328 8.42045 3.33328 10.9692V18.8204H2.33331C1.694 18.8204 1.14529 18.5978 0.687172 18.1525C0.229058 17.7072 0 17.1649 0 16.5256V13.9358C0 13.5034 0.123077 13.1072 0.369232 12.7474C0.615387 12.3876 0.936754 12.0983 1.33333 11.8795L1.39487 10.1769C1.50427 8.72561 1.88118 7.38117 2.52562 6.14357C3.17006 4.90597 3.99656 3.82862 5.0051 2.91153C6.01364 1.99444 7.17774 1.27991 8.4974 0.767946C9.81705 0.255982 11.2068 0 12.6666 0C14.1264 0 15.5128 0.255982 16.8256 0.767946C18.1384 1.27991 19.3025 1.99102 20.3179 2.90127C21.3333 3.81153 22.1598 4.88546 22.7974 6.12306C23.435 7.36066 23.8153 8.7051 23.9384 10.1564L23.9999 11.8256C24.3879 12.0085 24.7072 12.27 24.9576 12.6102C25.208 12.9504 25.3332 13.3299 25.3332 13.7487V16.7256C25.3332 17.1444 25.208 17.5239 24.9576 17.864C24.7072 18.2042 24.3879 18.4657 23.9999 18.6486V20.2948C23.9999 20.9512 23.7644 21.5106 23.2935 21.973C22.8226 22.4354 22.2546 22.6666 21.5897 22.6666H11.8461ZM8.92305 13.6922C8.59655 13.6922 8.31835 13.5816 8.08844 13.3602C7.85853 13.1388 7.74357 12.8649 7.74357 12.5384C7.74357 12.2119 7.85853 11.9358 8.08844 11.7102C8.31835 11.4846 8.59655 11.3717 8.92305 11.3717C9.24954 11.3717 9.52774 11.4846 9.75765 11.7102C9.98757 11.9358 10.1025 12.2119 10.1025 12.5384C10.1025 12.8649 9.98757 13.1388 9.75765 13.3602C9.52774 13.5816 9.24954 13.6922 8.92305 13.6922ZM16.4102 13.6922C16.0837 13.6922 15.8055 13.5816 15.5756 13.3602C15.3457 13.1388 15.2307 12.8649 15.2307 12.5384C15.2307 12.2119 15.3457 11.9358 15.5756 11.7102C15.8055 11.4846 16.0837 11.3717 16.4102 11.3717C16.7367 11.3717 17.0149 11.4846 17.2448 11.7102C17.4747 11.9358 17.5897 12.2119 17.5897 12.5384C17.5897 12.8649 17.4747 13.1388 17.2448 13.3602C17.0149 13.5816 16.7367 13.6922 16.4102 13.6922ZM5.16152 11.5999C5.02306 9.42387 5.69998 7.56192 7.19229 6.01406C8.68459 4.46621 10.5316 3.69229 12.7333 3.69229C14.5828 3.69229 16.2149 4.2645 17.6294 5.40894C19.0439 6.55338 19.9025 8.03499 20.205 9.85378C18.311 9.83156 16.561 9.33413 14.9551 8.36149C13.3491 7.38884 12.1162 6.05552 11.2564 4.36151C10.9179 6.01962 10.2085 7.48543 9.12817 8.75892C8.04783 10.0324 6.72562 10.9794 5.16152 11.5999Z" fill="#09273A" />
                </svg>

            ),
        },
        {
            number: "04",
            title: "CE CERTIFIED",
            description: "Safety and reliability.",
            bg: "#09273A",
            icon: (
                <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.06663 14.6512L8.16919 11.0307L5.2692 8.79483H8.87688L9.99995 5.18971L11.123 8.79483H14.7307L11.8102 11.0307L12.9128 14.6512L9.99995 12.3999L7.06663 14.6512ZM2.66667 26.3076V16.764C1.82222 15.882 1.16667 14.8623 0.7 13.7051C0.233333 12.5478 0 11.3128 0 9.99995C0 7.21022 0.969226 4.84613 2.90768 2.90768C4.84613 0.969226 7.21022 0 9.99995 0C12.7897 0 15.1538 0.969226 17.0922 2.90768C19.0307 4.84613 19.9999 7.21022 19.9999 9.99995C19.9999 11.3128 19.7666 12.5478 19.2999 13.7051C18.8332 14.8623 18.1777 15.882 17.3332 16.764V26.3076L9.99995 23.9743L2.66667 26.3076ZM9.99995 18C12.2222 18 14.1111 17.2222 15.6666 15.6666C17.2222 14.1111 18 12.2222 18 9.99995C18 7.77773 17.2222 5.88884 15.6666 4.33328C14.1111 2.77773 12.2222 1.99995 9.99995 1.99995C7.77773 1.99995 5.88884 2.77773 4.33328 4.33328C2.77773 5.88884 1.99995 7.77773 1.99995 9.99995C1.99995 12.2222 2.77773 14.1111 4.33328 15.6666C5.88884 17.2222 7.77773 18 9.99995 18ZM4.66662 23.3794L9.99995 21.9487L15.3333 23.3794V18.4255C14.5726 18.9213 13.7401 19.3076 12.8358 19.5845C11.9316 19.8614 10.9863 19.9999 9.99995 19.9999C9.01363 19.9999 8.06833 19.8614 7.16405 19.5845C6.25978 19.3076 5.4273 18.9213 4.66662 18.4255V23.3794Z" fill="#FFB800" />
                </svg>

            ),
        },
    ];

    return (
        <section className="w-full lg:px-0 px-4 py-24">
            <div

                className="mx-auto flex max-w-7xl flex-wrap justify-center gap-12 sm:justify-between lg:gap-8">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex w-full flex-col gap-6 lg:w-[40%]">

                    <p className="font-space text-[11px] font-bold leading-[11px] tracking-[1.1px] text-[#09273A] uppercase">
                        WHY PEOPLE {"  "}
                        <span className="text-[#FFB800]">
                            CHOOSE US{" "}
                            <span className="ml-2 font-bold tracking-[-2px]">
                                ————————————
                            </span>
                        </span>
                    </p>

                    {/* <h1 className="font-sora text-[64px] font-extrabold leading-[70.4px] tracking-[-1.6px]">
                        Built on Quality.<br />
                        <span className="text-[#FFB800]">
                            Driven by Trust.
                        </span>
                    </h1> */}
                    <h1 className='font-sora text-[40px] font-bold leading-[70.4px] tracking-[-1.6px] sm:text-5xl lg:text-[64px] text-[#0F172A]'>
                        Built on Quality.<br />
                        <span className="text-[#FFB800]">
                            Driven by Trust.
                        </span>
                    </h1>

                    {/* <p className="font-jakarta text-[18px] font-normal leading-[29.25px] tracking-[0px] text-[#44474D]">
                        At Austar Technologies, we combine international quality
                        standards with reliable service and strong support to deliver
                        HVLS fans that our customers can depend on—every single
                        time.
                    </p> */}

                    <p className="max-w-[600px] font-medium font-inter leading-6 sm:text-base text-[16px] lg:leading-7 text-[#475569]">
                        At Austar Technologies, we combine international quality
                        standards with reliable service and strong support to deliver
                        HVLS fans that our customers can depend on—every single
                        time.
                    </p>

                    {/* <ul className="flex flex-col gap-4">
                        {benefits.map((benefit, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3"
                            >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1555E81A] text-[12px] font-bold text-black">
                                    ✓
                                </span>

                                <p className="font-jakarta text-[16px] font-normal leading-[24px] text-[#44474D]">
                                    {benefit}
                                </p>
                            </li>
                        ))}
                    </ul> */}

                    <ul className="flex flex-col gap-4">
                        {benefits.map((benefit, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3"
                            >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1555E81A] text-[12px] font-bold text-black">
                                    ✓
                                </span>

                                <p className="font-jakarta text-[15px] font-normal leading-[24px] text-[#44474D]">
                                    {benefit}
                                </p>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* RIGHT CARDS */}
                <motion.div
                    initial={{ x: 0, y: 50, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-[50%]">

                    {/* 4 CARDS */}
                    <div className="flex flex-wrap justify-center gap-6 sm:justify-between">

                        {cards.map((card) => (
                            <div
                                key={card.number}
                                className="relative h-[204.31px] w-full overflow-hidden rounded-[28px] border border-[#06245C1A] p-8 sm:w-[300px]
                                    shadow-sm
                                    transition
                                    duration-300
                                    hover:shadow-2xl
                                    hover:shadow-[#FDCD2E]/60
                                "
                                style={{
                                    backgroundColor: card.bg,
                                }}
                            >
                                {/* Number */}
                                <span
                                    className={`absolute right-[-12px] top-[-35px] font-jakarta text-[120px] font-black leading-[120px] ${card.bg === "#FFFFFF"
                                        ? "text-[#09273A]/5"
                                        : "text-white/5"
                                        }`}
                                >
                                    {card.number}
                                </span>

                                {/* Icon */}
                                <div className="relative z-10">
                                    {card.icon}
                                </div>

                                {/* Heading */}
                                <h3
                                    className={`relative z-10 mt-3 pt-3 font-jakarta text-[20px] font-bold leading-[28px] ${card.bg === "#FFFFFF"
                                        ? "text-[#09273A]"
                                        : "text-white"
                                        }`}
                                >
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className={`relative z-10 font-jakarta text-[14px] font-normal leading-[20px] ${card.bg === "#FFFFFF"
                                        ? "text-[#44474D]"
                                        : "text-white/70"
                                        }`}
                                >
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* BUSINESS NETWORK */}
                    <div className="relative mt-6 flex h-[135.67px] w-full items-center gap-6 overflow-hidden rounded-[28px] border border-[#06245C1A] p-8 lg:w-[624.8px] shadow-sm transition duration-300 hover:shadow-2xl hover:shadow-[#FDCD2E]/60">

                        {/* Icon */}
                        <div className="flex h-[69.67px] w-[63.67px] shrink-0 items-center justify-center rounded-[16px] bg-[#06245C0D] px-4 pt-4 pb-[22px]">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.8361 31.6665C13.6462 31.6665 11.5878 31.251 9.66089 30.4199C7.73399 29.5888 6.05785 28.4609 4.63247 27.0361C3.2071 25.6114 2.07867 23.936 1.2472 22.0099C0.415735 20.0839 0 18.0259 0 15.8361C0 13.6462 0.41555 11.5878 1.24665 9.66089C2.07775 7.73399 3.20567 6.05785 4.63042 4.63247C6.05516 3.2071 7.73055 2.07868 9.6566 1.24721C11.5826 0.415735 13.6406 0 15.8305 0C18.0204 0 20.0788 0.41555 22.0057 1.24665C23.9326 2.07775 25.6087 3.20567 27.0341 4.63042C28.4594 6.05516 29.5879 7.73055 30.4193 9.6566C31.2508 11.5826 31.6665 13.6406 31.6665 15.8305C31.6665 18.0204 31.251 20.0788 30.4199 22.0057C29.5888 23.9326 28.4609 25.6087 27.0361 27.0341C25.6114 28.4594 23.936 29.5879 22.0099 30.4193C20.0839 31.2508 18.0259 31.6665 15.8361 31.6665ZM14.1666 29.0833V25.8333C13.2499 25.8333 12.4652 25.5069 11.8124 24.8541C11.1597 24.2013 10.8333 23.4166 10.8333 22.4999V20.8333L2.83327 12.8333C2.74994 13.3333 2.67355 13.8333 2.60411 14.3333C2.53466 14.8333 2.49994 15.3333 2.49994 15.8333C2.49994 19.1944 3.60411 22.1388 5.81244 24.6666C8.02077 27.1944 10.8055 28.6666 14.1666 29.0833ZM25.6666 24.8333C26.8055 23.5833 27.6736 22.1874 28.2708 20.6458C28.868 19.1041 29.1666 17.4979 29.1666 15.8273C29.1666 13.0985 28.4123 10.6064 26.9038 8.351C25.3952 6.09559 23.3717 4.46789 20.8333 3.46789V4.16661C20.8333 5.08327 20.5069 5.86799 19.8541 6.52077C19.2013 7.17355 18.4166 7.49994 17.4999 7.49994H14.1666V10.8333C14.1666 11.3055 14.0069 11.7013 13.6874 12.0208C13.368 12.3402 12.9722 12.4999 12.4999 12.4999H9.16661V15.8333H19.1666C19.6388 15.8333 20.0347 15.993 20.3541 16.3124C20.6735 16.6319 20.8333 17.0277 20.8333 17.4999V22.4999H22.4999C23.2222 22.4999 23.8749 22.7152 24.4583 23.1458C25.0416 23.5763 25.4444 24.1388 25.6666 24.8333Z"
                                    fill="#09273A"
                                />
                            </svg>
                        </div>

                        {/* Middle Content */}
                        <div className="flex min-w-0 flex-col gap-1">
                            <h3 className="font-jakarta text-[24px] font-bold leading-[32px] tracking-[0px] text-[#09273A]">
                                BUSINESS NETWORK
                            </h3>

                            <p className="font-jakarta text-[16px] font-normal leading-[24px] tracking-[0px] text-[#44474D]">
                                Global sales and service reach.
                            </p>
                        </div>

                        {/* Number */}
                        <span className="absolute bottom-[-10px] right-[10px] font-jakarta text-[120px] font-black leading-[120px] tracking-[0px] text-[#09273A] opacity-5">
                            05
                        </span>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}
