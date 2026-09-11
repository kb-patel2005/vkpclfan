'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const sections = [
    {
        icon: (
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 14.25V12.75H9V14.25H0ZM4.2375 10.6125L0 6.375L1.575 4.7625L5.85 9L4.2375 10.6125ZM9 5.85L4.7625 1.575L6.375 0L10.6125 4.2375L9 5.85ZM12.45 13.5L2.6625 3.7125L3.7125 2.6625L13.5 12.45L12.45 13.5Z" fill="black" />
            </svg>

        )
        , title: "Overview"
    },
    {
        icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75 13.5C4.8625 13.5 3.26562 13.2094 1.95938 12.6281C0.653125 12.0469 0 11.3375 0 10.5V3C0 2.175 0.659375 1.46875 1.97812 0.88125C3.29688 0.29375 4.8875 0 6.75 0C8.6125 0 10.2031 0.29375 11.5219 0.88125C12.8406 1.46875 13.5 2.175 13.5 3V10.5C13.5 11.3375 12.8469 12.0469 11.5406 12.6281C10.2344 13.2094 8.6375 13.5 6.75 13.5ZM6.75 4.51875C7.8625 4.51875 8.98125 4.35938 10.1062 4.04063C11.2312 3.72188 11.8625 3.38125 12 3.01875C11.8625 2.65625 11.2344 2.3125 10.1156 1.9875C8.99688 1.6625 7.875 1.5 6.75 1.5C5.6125 1.5 4.49687 1.65937 3.40313 1.97812C2.30938 2.29688 1.675 2.64375 1.5 3.01875C1.675 3.39375 2.30938 3.7375 3.40313 4.05C4.49687 4.3625 5.6125 4.51875 6.75 4.51875ZM6.75 8.25C7.275 8.25 7.78125 8.225 8.26875 8.175C8.75625 8.125 9.22187 8.05313 9.66562 7.95937C10.1094 7.86562 10.5281 7.75 10.9219 7.6125C11.3156 7.475 11.675 7.31875 12 7.14375V4.89375C11.675 5.06875 11.3156 5.225 10.9219 5.3625C10.5281 5.5 10.1094 5.61562 9.66562 5.70937C9.22187 5.80312 8.75625 5.875 8.26875 5.925C7.78125 5.975 7.275 6 6.75 6C6.225 6 5.7125 5.975 5.2125 5.925C4.7125 5.875 4.24062 5.80312 3.79688 5.70937C3.35313 5.61562 2.9375 5.5 2.55 5.3625C2.1625 5.225 1.8125 5.06875 1.5 4.89375V7.14375C1.8125 7.31875 2.1625 7.475 2.55 7.6125C2.9375 7.75 3.35313 7.86562 3.79688 7.95937C4.24062 8.05313 4.7125 8.125 5.2125 8.175C5.7125 8.225 6.225 8.25 6.75 8.25ZM6.75 12C7.325 12 7.90938 11.9562 8.50313 11.8687C9.09688 11.7812 9.64375 11.6656 10.1438 11.5219C10.6438 11.3781 11.0625 11.2156 11.4 11.0344C11.7375 10.8531 11.9375 10.6687 12 10.4812V8.64375C11.675 8.81875 11.3156 8.975 10.9219 9.1125C10.5281 9.25 10.1094 9.36563 9.66562 9.45938C9.22187 9.55313 8.75625 9.625 8.26875 9.675C7.78125 9.725 7.275 9.75 6.75 9.75C6.225 9.75 5.7125 9.725 5.2125 9.675C4.7125 9.625 4.24062 9.55313 3.79688 9.45938C3.35313 9.36563 2.9375 9.25 2.55 9.1125C2.1625 8.975 1.8125 8.81875 1.5 8.64375V10.5C1.5625 10.6875 1.75938 10.8687 2.09063 11.0437C2.42188 11.2188 2.8375 11.3781 3.3375 11.5219C3.8375 11.6656 4.3875 11.7812 4.9875 11.8687C5.5875 11.9562 6.175 12 6.75 12Z" fill="#44474D" />
            </svg>

        )
        , title: "Data Collection"
    },
    {
        icon: (
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6C5.175 6 4.46875 5.70625 3.88125 5.11875C3.29375 4.53125 3 3.825 3 3C3 2.175 3.29375 1.46875 3.88125 0.88125C4.46875 0.29375 5.175 0 6 0C6.825 0 7.53125 0.29375 8.11875 0.88125C8.70625 1.46875 9 2.175 9 3C9 3.825 8.70625 4.53125 8.11875 5.11875C7.53125 5.70625 6.825 6 6 6ZM6 4.5C6.4125 4.5 6.76562 4.35312 7.05937 4.05937C7.35312 3.76562 7.5 3.4125 7.5 3C7.5 2.5875 7.35312 2.23438 7.05937 1.94062C6.76562 1.64687 6.4125 1.5 6 1.5C5.5875 1.5 5.23438 1.64687 4.94063 1.94062C4.64688 2.23438 4.5 2.5875 4.5 3C4.5 3.4125 4.64688 3.76562 4.94063 4.05937C5.23438 4.35312 5.5875 4.5 6 4.5ZM14.325 14.625L11.925 12.225C11.6625 12.375 11.3813 12.5 11.0813 12.6C10.7812 12.7 10.4625 12.75 10.125 12.75C9.1875 12.75 8.39062 12.4219 7.73438 11.7656C7.07812 11.1094 6.75 10.3125 6.75 9.375C6.75 8.4375 7.07812 7.64062 7.73438 6.98438C8.39062 6.32812 9.1875 6 10.125 6C11.0625 6 11.8594 6.32812 12.5156 6.98438C13.1719 7.64062 13.5 8.4375 13.5 9.375C13.5 9.7125 13.45 10.0312 13.35 10.3313C13.25 10.6313 13.125 10.9125 12.975 11.175L15.375 13.575L14.325 14.625ZM10.125 11.25C10.65 11.25 11.0938 11.0688 11.4563 10.7063C11.8188 10.3438 12 9.9 12 9.375C12 8.85 11.8188 8.40625 11.4563 8.04375C11.0938 7.68125 10.65 7.5 10.125 7.5C9.6 7.5 9.15625 7.68125 8.79375 8.04375C8.43125 8.40625 8.25 8.85 8.25 9.375C8.25 9.9 8.43125 10.3438 8.79375 10.7063C9.15625 11.0688 9.6 11.25 10.125 11.25ZM0 12V9.91875C0 9.49375 0.10625 9.1 0.31875 8.7375C0.53125 8.375 0.825 8.1 1.2 7.9125C1.8375 7.5875 2.55625 7.3125 3.35625 7.0875C4.15625 6.8625 5.04375 6.75 6.01875 6.75C5.86875 6.975 5.74062 7.21563 5.63438 7.47188C5.52813 7.72813 5.44375 7.99375 5.38125 8.26875C4.63125 8.33125 3.9625 8.45937 3.375 8.65312C2.7875 8.84688 2.29375 9.05 1.89375 9.2625C1.76875 9.325 1.67188 9.41563 1.60312 9.53438C1.53437 9.65312 1.5 9.78125 1.5 9.91875V10.5H5.38125C5.44375 10.775 5.52813 11.0375 5.63438 11.2875C5.74062 11.5375 5.86875 11.775 6.01875 12H0Z" fill="#44474D" />
            </svg>

        )
        , title: "User Rights"
    },
    {
        icon: (
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 15C10.625 15 10.0938 14.7812 9.65625 14.3438C9.21875 13.9062 9 13.375 9 12.75C9 12.675 9.01875 12.5 9.05625 12.225L3.7875 9.15C3.5875 9.3375 3.35625 9.48438 3.09375 9.59062C2.83125 9.69687 2.55 9.75 2.25 9.75C1.625 9.75 1.09375 9.53125 0.65625 9.09375C0.21875 8.65625 0 8.125 0 7.5C0 6.875 0.21875 6.34375 0.65625 5.90625C1.09375 5.46875 1.625 5.25 2.25 5.25C2.55 5.25 2.83125 5.30313 3.09375 5.40938C3.35625 5.51562 3.5875 5.6625 3.7875 5.85L9.05625 2.775C9.03125 2.6875 9.01562 2.60312 9.00937 2.52187C9.00312 2.44062 9 2.35 9 2.25C9 1.625 9.21875 1.09375 9.65625 0.65625C10.0938 0.21875 10.625 0 11.25 0C11.875 0 12.4062 0.21875 12.8438 0.65625C13.2812 1.09375 13.5 1.625 13.5 2.25C13.5 2.875 13.2812 3.40625 12.8438 3.84375C12.4062 4.28125 11.875 4.5 11.25 4.5C10.95 4.5 10.6687 4.44687 10.4062 4.34062C10.1438 4.23438 9.9125 4.0875 9.7125 3.9L4.44375 6.975C4.46875 7.0625 4.48438 7.14687 4.49062 7.22813C4.49687 7.30938 4.5 7.4 4.5 7.5C4.5 7.6 4.49687 7.69062 4.49062 7.77187C4.48438 7.85313 4.46875 7.9375 4.44375 8.025L9.7125 11.1C9.9125 10.9125 10.1438 10.7656 10.4062 10.6594C10.6687 10.5531 10.95 10.5 11.25 10.5C11.875 10.5 12.4062 10.7188 12.8438 11.1562C13.2812 11.5938 13.5 12.125 13.5 12.75C13.5 13.375 13.2812 13.9062 12.8438 14.3438C12.4062 14.7812 11.875 15 11.25 15ZM11.25 13.5C11.4625 13.5 11.6406 13.4281 11.7844 13.2844C11.9281 13.1406 12 12.9625 12 12.75C12 12.5375 11.9281 12.3594 11.7844 12.2156C11.6406 12.0719 11.4625 12 11.25 12C11.0375 12 10.8594 12.0719 10.7156 12.2156C10.5719 12.3594 10.5 12.5375 10.5 12.75C10.5 12.9625 10.5719 13.1406 10.7156 13.2844C10.8594 13.4281 11.0375 13.5 11.25 13.5ZM2.25 8.25C2.4625 8.25 2.64062 8.17813 2.78437 8.03438C2.92812 7.89062 3 7.7125 3 7.5C3 7.2875 2.92812 7.10938 2.78437 6.96562C2.64062 6.82187 2.4625 6.75 2.25 6.75C2.0375 6.75 1.85938 6.82187 1.71563 6.96562C1.57188 7.10938 1.5 7.2875 1.5 7.5C1.5 7.7125 1.57188 7.89062 1.71563 8.03438C1.85938 8.17813 2.0375 8.25 2.25 8.25ZM11.25 3C11.4625 3 11.6406 2.92812 11.7844 2.78437C11.9281 2.64062 12 2.4625 12 2.25C12 2.0375 11.9281 1.85938 11.7844 1.71563C11.6406 1.57188 11.4625 1.5 11.25 1.5C11.0375 1.5 10.8594 1.57188 10.7156 1.71563C10.5719 1.85938 10.5 2.0375 10.5 2.25C10.5 2.4625 10.5719 2.64062 10.7156 2.78437C10.8594 2.92812 11.0375 3 11.25 3Z" fill="#44474D" />
            </svg>

        )
        , title: "Third Parties"
    },
    {
        icon: (
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15.0188C6.4625 15.0188 5.4875 14.8219 4.575 14.4281C3.6625 14.0344 2.86875 13.5 2.19375 12.825C1.51875 12.15 0.984375 11.3563 0.590625 10.4438C0.196875 9.53125 0 8.55625 0 7.51875C0 6.58125 0.18125 5.6625 0.54375 4.7625C0.90625 3.8625 1.4125 3.05938 2.0625 2.35313C2.7125 1.64688 3.49375 1.07812 4.40625 0.646875C5.31875 0.215625 6.31875 0 7.40625 0C7.66875 0 7.9375 0.0125 8.2125 0.0375C8.4875 0.0625 8.76875 0.10625 9.05625 0.16875C8.94375 0.73125 8.98125 1.2625 9.16875 1.7625C9.35625 2.2625 9.6375 2.67813 10.0125 3.00938C10.3875 3.34063 10.8344 3.56875 11.3531 3.69375C11.8719 3.81875 12.4062 3.7875 12.9563 3.6C12.6313 4.3375 12.6781 5.04375 13.0969 5.71875C13.5156 6.39375 14.1375 6.74375 14.9625 6.76875C14.975 6.90625 14.9844 7.03437 14.9906 7.15312C14.9969 7.27187 15 7.4 15 7.5375C15 8.5625 14.8031 9.52812 14.4094 10.4344C14.0156 11.3406 13.4812 12.1344 12.8062 12.8156C12.1312 13.4969 11.3375 14.0344 10.425 14.4281C9.5125 14.8219 8.5375 15.0188 7.5 15.0188ZM6.375 6.01875C6.6875 6.01875 6.95312 5.90938 7.17188 5.69063C7.39062 5.47188 7.5 5.20625 7.5 4.89375C7.5 4.58125 7.39062 4.31563 7.17188 4.09688C6.95312 3.87813 6.6875 3.76875 6.375 3.76875C6.0625 3.76875 5.79688 3.87813 5.57812 4.09688C5.35938 4.31563 5.25 4.58125 5.25 4.89375C5.25 5.20625 5.35938 5.47188 5.57812 5.69063C5.79688 5.90938 6.0625 6.01875 6.375 6.01875ZM4.875 9.76875C5.1875 9.76875 5.45312 9.65938 5.67188 9.44063C5.89062 9.22188 6 8.95625 6 8.64375C6 8.33125 5.89062 8.06563 5.67188 7.84688C5.45312 7.62813 5.1875 7.51875 4.875 7.51875C4.5625 7.51875 4.29688 7.62813 4.07812 7.84688C3.85938 8.06563 3.75 8.33125 3.75 8.64375C3.75 8.95625 3.85938 9.22188 4.07812 9.44063C4.29688 9.65938 4.5625 9.76875 4.875 9.76875ZM9.75 10.5188C9.9625 10.5188 10.1406 10.4469 10.2844 10.3031C10.4281 10.1594 10.5 9.98125 10.5 9.76875C10.5 9.55625 10.4281 9.37813 10.2844 9.23438C10.1406 9.09062 9.9625 9.01875 9.75 9.01875C9.5375 9.01875 9.35938 9.09062 9.21562 9.23438C9.07187 9.37813 9 9.55625 9 9.76875C9 9.98125 9.07187 10.1594 9.21562 10.3031C9.35938 10.4469 9.5375 10.5188 9.75 10.5188ZM7.5 13.5188C9.025 13.5188 10.3781 12.9938 11.5594 11.9438C12.7406 10.8938 13.3875 9.55625 13.5 7.93125C12.875 7.65625 12.3844 7.28125 12.0281 6.80625C11.6719 6.33125 11.4312 5.8 11.3062 5.2125C10.3438 5.075 9.51875 4.6625 8.83125 3.975C8.14375 3.2875 7.71875 2.4625 7.55625 1.5C6.55625 1.475 5.67812 1.65625 4.92188 2.04375C4.16563 2.43125 3.53438 2.92812 3.02813 3.53437C2.52187 4.14062 2.14062 4.8 1.88437 5.5125C1.62812 6.225 1.5 6.89375 1.5 7.51875C1.5 9.18125 2.08437 10.5969 3.25312 11.7656C4.42188 12.9344 5.8375 13.5188 7.5 13.5188Z" fill="#44474D" />
            </svg>

        ), title: "Cookies"
    }
];

const para = "This privacy report details the strict protocols and transparent methodologies\n Austar Technologies employs to safeguard digital assets and personal data\n architecture."

const darkSecuritt = "We deploy enterprise-grade cryptographic standards and continuous network\n surveillance to defend against unauthorized extraction or structural\n compromise of your data assets."

// export default function Policy() {
//     const [active, setActive] = useState("Overview")

//     return (
//         <section className="bg-[#F8F9FA]">
//             <div className="max-w-7xl mx-auto flex">

//                 <aside className="max-w-[300px] w-full border-l-2 h-fit border-[#C5C6CE] pt-4">

//                     <h3 className="pl-4 font-inter font-bold text-[28px] leading-[36px] tracking-[0px] align-middle text-[#44474D]">
//                         Policy Sections
//                     </h3>

//                     <p className="pl-4 font-inter font-medium mb-4 text-[12px] leading-[16px] tracking-[0.6px] align-middle text-[#44474D]">
//                         Last updated Oct 2023
//                     </p>

//                     <nav className="space-y-4">
//                         {sections.map((item, idx) => (
//                             <a
//                                 key={idx}
//                                 href={`#${item.title}`}
//                                 className={`${active == item.title ? "border-l-2 border-black" : ""} flex items-center pl-4 py-2 ml-0 gap-3 text-xs leading-4 font-medium tracking-[0.6px] text-[#44474D] hover:text-[#FDB913]`}
//                             >
//                                 {item.icon}
//                                 {item.title}
//                             </a>
//                         ))}
//                     </nav>
//                 </aside>

//                 <main className="flex flex-col gap-16 w-full">

//                     <section id="Overview" className="px-8 lg:px-14 py-14">
//                         <p className="font-jetBrainsMono font-medium text-[12px] bg-[#EEF2F6] py-1 px-3 w-fit leading-[16px] tracking-[0.6px] align-middle text-[#415F8C]">
//                             CONFIDENTIAL & PROPRIETARY
//                         </p>
//                         <div className="flex flex-wrap items-center justify-between gap-10">
//                             <div>
//                                 <div className="flex items-center">
//                                     <h1 className="font-sora font-bold text-[96px] leading-[120px] tracking-[-4.8px] align-middle text-[#44474D]">
//                                         PRIVACY <span className="text-[#FDCD2E]">POLICY</span>
//                                     </h1>
//                                     <Image
//                                         src="/privacy-policy.png"
//                                         alt="Privacy Illustration"
//                                         width={800}
//                                         height={300}
//                                         className=""
//                                     />
//                                 </div>
//                                 <p className="font-jakarata font-normal text-[16px] leading-[32px] tracking-[0px] align-middle text-[#44474D] lg:whitespace-pre-line">
//                                     {para}
//                                 </p>
//                             </div>

//                         </div>
//                     </section>


//                     <section
//                         id="Data Collection"
//                         className="border-t border-gray-300 px-8 lg:px-14 py-12"
//                     >
//                         <div className="grid lg:grid-cols-12 gap-8">
//                             <div className="lg:col-span-3 flex flex-col gap-4">
//                                 <span className="font-jakarata opacity-20 font-bold text-[80px] leading-[80px] tracking-[0px] align-middle text-[#1267B1]">
//                                     01
//                                 </span>

//                                 <h3 className="font-inter font-bold text-[28px] leading-[36px] tracking-[0px] align-middle text-[#071A33]">
//                                     Information <br />
//                                     We Collect
//                                 </h3>

//                             </div>

//                             <div className="lg:col-span-9 p-12 flex flex-col gap-6 bg-white border border-[#5D5D5D]">

//                                 <p className="font-normal text-[16px] leading-[28px] tracking-[0px] align-middle text-[#1B1B1D]">
//                                     We systematically index specific data points to optimize our infrastructure
//                                     and service delivery.
//                                 </p>


//                                 <div className="space-y-4">
//                                     <div className="relative  pl-4">
//                                         <div className="absolute h-6 w-1 top-0 left-0 bg-[#2C7BE5]"></div>

//                                         <p className="font-inter text-[16px] leading-[28px] tracking-[0px] align-middle text-[#071A33]">
//                                             <span className="font-bold">Direct Identifiers: </span>{" "}Name, professional email address, phone number, and
//                                             architectural billing details when you engage our services.
//                                         </p>

//                                     </div>

//                                     <div className="relative  pl-4">
//                                         <div className="absolute h-6 w-1 top-0 left-0 bg-[#2C7BE5]"></div>

//                                         <p className="font-inter text-[16px] leading-[28px] tracking-[0px] align-middle text-[#071A33]">
//                                             <span className="font-bold">Technical Telemetry: </span>{" "} IP address, browser architecture, operating system configuration, and navigational patterns across our domains.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>


//                     <section
//                         id=""
//                         className="py-16 border-y border-[#5D5D5D] lg:px-14 flex flex-col gap-8"
//                     >
//                         <div className="border-2 border-[#071A33] py-4 px-8 text-center">
//                             <h2 className="font-jakarata font-bold text-[36px] leading-[44px] tracking-[-0.36px] text-center align-middle uppercase text-[#071A33]">
//                                 WE DO NOT SELL YOUR PERSONAL
//                                 INFORMATION
//                             </h2>
//                         </div>
//                         <p className="font-normal text-[16px] leading-[28px] tracking-[0px] align-middle text-[#44474D]">
//                             Austar Technologies strictly prohibits the monetization of user data. Information is only distributed to
//                             authorized service providers bound by strict confidentiality agreements, or when legally compelled by authoritative bodies.
//                         </p>

//                     </section>


//                     <section id="Third Parties" className="">
//                         <div className="relative bg-[#07263A] lg:p-[64px]">
//                             <div className="flex flex-col gap-4">
//                                 <span className="font-jakarata opacity-30 font-bold text-[80px] leading-[80px] tracking-[0px] align-middle text-[#EAF3FA]">
//                                     O5
//                                 </span>


//                                 <h2 className="font-bold text-[36px] leading-[44px] tracking-[-0.36px] align-middle text-white">
//                                     Data Security Protocols
//                                 </h2>


//                                 <p className="font-normal opacity-80 text-[18px] leading-[32px] align-middle text-[#EAF3FA] lg:whitespace-pre-line">{darkSecuritt}</p>

//                             </div>
//                             <div className="absolute right-10 -top-2 opacity-10">
//                                 <svg width="234" height="290" viewBox="0 0 234 290" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M116.667 289.077C83.1838 279.141 55.3686 258.858 33.2212 228.228C11.0737 197.597 0 163.094 0 124.718V34.5898L116.667 -9L233.334 34.5898V124.718C233.334 163.094 222.26 197.597 200.112 228.228C177.965 258.858 150.15 279.141 116.667 289.077ZM116.667 271.385C145.556 262.218 169.445 243.885 188.333 216.385C207.222 188.885 216.667 158.329 216.667 124.718V45.9681L116.667 8.78857L16.6668 45.9681V124.718C16.6668 158.329 26.1112 188.885 45.0001 216.385C63.889 243.885 87.7779 262.218 116.667 271.385ZM83.9745 200.616H149.359C153.173 200.616 156.37 199.325 158.95 196.745C161.531 194.165 162.821 190.968 162.821 187.154V138.436C162.821 134.622 161.531 131.425 158.95 128.845C156.37 126.265 153.173 124.974 149.359 124.974H146.474V108.308C146.474 99.9958 143.638 93.0033 137.965 87.3302C132.292 81.6571 125.299 78.8206 116.987 78.8206C108.675 78.8206 101.683 81.6571 96.0097 87.3302C90.3366 93.0033 87.5001 99.9958 87.5001 108.308V124.974H83.9745C80.1604 124.974 76.9632 126.265 74.3831 128.845C71.803 131.425 70.5129 134.622 70.5129 138.436V187.154C70.5129 190.968 71.803 194.165 74.3831 196.745C76.9632 199.325 80.1604 200.616 83.9745 200.616ZM100.321 124.974V108.308C100.321 103.586 101.918 99.6272 105.112 96.4328C108.307 93.2383 112.265 91.6411 116.987 91.6411C121.71 91.6411 125.668 93.2383 128.862 96.4328C132.057 99.6272 133.654 103.586 133.654 108.308V124.974H100.321Z" fill="white" />
//                                 </svg>

//                             </div>
//                             {/* 
//                             <div className="lg:col-span-4 flex justify-center">
//                                 <div className="w-40 h-40 rounded-full border border-[#1E4C67] flex items-center justify-center">
//                                     <svg
//                                         width="56"
//                                         height="56"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         stroke="#7DB7DD"
//                                         strokeWidth="1.7"
//                                     >
//                                         <rect x="5" y="11" width="14" height="9" rx="2" />
//                                         <path d="M8 11V8a4 4 0 118 0v3" />
//                                     </svg>
//                                 </div>
//                             </div> */}
//                         </div>
//                     </section>


//                     <section
//                         id="User Rights"
//                         className=""
//                     >
//                         <span className="font-jakarata opacity-30 font-bold text-[80px] leading-[80px] tracking-[0px] align-middle text-[#1267B1]">
//                             O6
//                         </span>

//                         <h2 className="font-bold text-[28px] leading-9 text-[#071A33] mt-4">
//                             User Rights
//                         </h2>

//                         <div className="flex flex-col gap-4">
//                             {[
//                                 [(<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z" fill="#1267B1" />
//                                 </svg>
//                                 ), "Access", "Request a comprehensive manifest of all data currently held in our systems."],
//                                 [(
//                                     <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M10 20V16.925L15.525 11.425C15.675 11.275 15.8417 11.1667 16.025 11.1C16.2083 11.0333 16.3917 11 16.575 11C16.775 11 16.9667 11.0375 17.15 11.1125C17.3333 11.1875 17.5 11.3 17.65 11.45L18.575 12.375C18.7083 12.525 18.8125 12.6917 18.8875 12.875C18.9625 13.0583 19 13.2417 19 13.425C19 13.6083 18.9667 13.7958 18.9 13.9875C18.8333 14.1792 18.725 14.35 18.575 14.5L13.075 20H10ZM17.5 13.425L16.575 12.5L17.5 13.425ZM11.5 18.5H12.45L15.475 15.45L15.025 14.975L14.55 14.525L11.5 17.55V18.5ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V9H14V7H9V2H2V18H8V20H2ZM15.025 14.975L14.55 14.525L15.475 15.45L15.025 14.975Z" fill="#1267B1" />
//                                     </svg>
//                                 ), "Correction", "Demand rectification of inaccurate or structurally flawed data profiles."],
//                                 [(
//                                     <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M5.4 13.5L8 10.9L10.6 13.5L12 12.1L9.4 9.5L12 6.9L10.6 5.5L8 8.1L5.4 5.5L4 6.9L6.6 9.5L4 12.1L5.4 13.5ZM3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM13 3H3V16H13V3ZM3 3V16V3Z" fill="#1267B1" />
//                                     </svg>
//                                 ), "Deletion", "Instruct the permanent erasure of your personal data architecture from our servers."],
//                             ].map(([icon, title, desc], idx) => (
//                                 <div key={idx} className="p-6 bg-white">
//                                     <h3 className="font-bold text-[18px] leading-[32px] tracking-[0px] align-middle text-[#071A33] flex items-center gap-3">
//                                         {icon} {title}
//                                     </h3>

//                                     <p className="font-normal mt-2 text-[16px] leading-[28px] tracking-[0px] align-middle text-[#44474D]">
//                                         {desc}
//                                     </p>

//                                 </div>
//                             ))}
//                         </div>
//                     </section>


//                     <section
//                         id="Cookies"
//                         className="border-t-4 pt-16 border-[#071A33]"
//                     >
//                         <div className="flex justify-between">
//                             <div className="flex flex-col gap-4 w-[50%] min-w-[250px]">
//                                 <span className="font-jakarata opacity-30 font-bold text-[80px] leading-[80px] tracking-[0px] align-middle text-[#1267B1]">
//                                     10
//                                 </span>

//                                 <h2 className="font-bold text-[36px] leading-[44px] tracking-[-0.36px] align-middle text-[#071A33]">
//                                     Contact Us
//                                 </h2>


//                                 <p className="font-normal text-[16px] leading-[28px] tracking-[0px] align-middle text-[#44474D]">
//                                     For architectural inquiries regarding this policy or data management practices, our compliance team is available.
//                                 </p>

//                             </div>

//                             <div className="lg:col-span-5 border border-gray-300 p-6 w-[50%] min-w-[250px]">
//                                 <p className="font-medium text-[12px] leading-[16px] tracking-[0.6px] align-middle text-[#415F8C] pb-2">
//                                     DIRECT LINE
//                                 </p>


//                                 <h3 className="font-bold text-[32px] leading-[48px] tracking-[0px] align-middle text-[#071A33]">
//                                     +91 785795757
//                                 </h3>


//                                 <p className="font-medium mt-8 text-[12px] leading-[16px] tracking-[0.6px] align-middle text-[#415F8C] pb-2">
//                                     COMPLIANCE EMAIL
//                                 </p>

//                                 <p className="font-bold text-[18px] leading-[32px] tracking-[0px] align-middle text-[#071A33]">
//                                     privacy@floent.com →
//                                 </p>

//                             </div>
//                         </div>
//                     </section>
//                 </main>
//             </div>
//         </section>
//     );
// }


export default function Policy() {
    const [active, setActive] = useState("Overview")

    return (
        <section className="bg-[#F8F9FA] lg:px-0 px-5">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-7xl mx-auto flex flex-col lg:flex-row">
                {/* LEFT SIDEBAR */}
                <aside className="w-full lg:max-w-[300px] border-b lg:border-b-0 lg:border-l-2 h-fit border-[#C5C6CE] pt-4 pb-4 lg:pb-0 sticky lg:top-24 bg-[#F8F9FA] z-20">

                    <h3 className="pl-4 font-inter font-bold text-[28px] leading-[36px] tracking-[0px] align-middle text-[#44474D]">
                        Policy Sections
                    </h3>

                    <p className="pl-4 font-inter font-medium mb-4 text-[12px] leading-[16px] tracking-[0.6px] align-middle text-[#44474D]">
                        Last updated Oct 2023
                    </p>

                    <nav className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:space-y-4 px-4 lg:px-0 scrollbar-hide">
                        {sections.map((item, idx) => (
                            <a
                                key={idx}
                                href={`#${item.title}`}
                                onClick={() => setActive(item.title)}
                                className={`${active == item.title ? "border-l-2 border-black" : ""} flex items-center pl-4 py-2 ml-0 gap-3 text-xs leading-4 font-medium tracking-[0.6px] text-[#44474D] hover:text-[#FDB913]`}
                            >
                                {item.icon}
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* RIGHT CONTENT */}
                <main className="flex flex-col gap-4 lg:gap-16 w-full mb-20">
                    {/* HERO */}
                    <section
                        id="Overview"
                        className="scroll-mt-28 lg:scroll-mt-32 px-5 sm:px-6 lg:px-14 py-10 lg:py-14 bg-white border border-[#5D5D5D]"
                    >
                        <p className="font-jetBrainsMono font-medium text-[12px] bg-[#EEF2F6] py-1 px-3 w-fit leading-[16px] tracking-[0.6px] align-middle text-[#415F8C]">
                            CONFIDENTIAL & PROPRIETARY
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-10">
                            <div>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                                    <h1 className="font-sora font-bold text-[42px] sm:text-[56px] lg:text-[96px] leading-[1.05] lg:leading-[120px] tracking-[-1px] lg:tracking-[-4.8px] align-middle text-[#44474D]">
                                        PRIVACY <span className="text-[#FDCD2E]">POLICY</span>
                                    </h1>
                                    <Image
                                        src="/privacy-policy.png"
                                        alt="Privacy Illustration"
                                        width={800}
                                        height={300}
                                        className="w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] h-auto"
                                    />
                                </div>
                                <p className="font-jakarata font-normal text-[15px] lg:text-[16px] leading-7 lg:leading-8 tracking-[0px] align-middle text-[#44474D] lg:whitespace-pre-line">
                                    {para}
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* SECTION 02 */}
                    <section
                        id="Data Collection"
                        className="scroll-mt-28 lg:scroll-mt-32"
                    >
                        <div className="grid lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-3 flex flex-col gap-4">
                                <span className="font-jakarata opacity-20 font-bold text-[80px] leading-[80px] tracking-[0px] align-middle text-[#1267B1]">
                                    01
                                </span>

                                <h3 className="font-inter font-bold text-[28px] leading-[36px] tracking-[0px] align-middle text-[#071A33]">
                                    Information <br />
                                    We Collect
                                </h3>

                            </div>

                            <div className="lg:col-span-9 p-6 sm:p-8 lg:p-12 flex flex-col gap-6 bg-white border border-[#5D5D5D]">

                                <p className="font-normal text-[16px] leading-[28px] tracking-[0px] text-[#1B1B1D]">
                                    We systematically index specific data points to optimize our infrastructure
                                    and service delivery.
                                </p>


                                <div className="space-y-4">
                                    <div className="relative  pl-4">
                                        <div className="absolute h-6 w-1 top-0 left-0 bg-[#2C7BE5]"></div>

                                        <p className="font-inter text-[16px] leading-[28px] tracking-[0px] align-middle text-[#071A33]">
                                            <span className="font-bold">Direct Identifiers: </span>{" "}Name, professional email address, phone number, and
                                            architectural billing details when you engage our services.
                                        </p>

                                    </div>

                                    <div className="relative  pl-4">
                                        <div className="absolute h-6 w-1 top-0 left-0 bg-[#2C7BE5]"></div>

                                        <p className="font-inter text-[16px] leading-[28px] tracking-[0px] align-middle text-[#071A33]">
                                            <span className="font-bold">Technical Telemetry: </span>{" "} IP address, browser architecture, operating system configuration, and navigational patterns across our domains.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 04 */}
                    <section
                        id=""
                        className="py-12 lg:py-16 border-y border-[#5D5D5D] px-5 sm:px-6 lg:px-[76px] flex flex-col gap-6 lg:gap-8"
                    >
                        <div className="border-2 border-[#071A33] py-4 px-8 text-center">
                            <h2 className="font-jakarata font-bold text-[24px] sm:text-[30px] lg:text-[36px] leading-tight tracking-[-0.36px] text-center align-middle uppercase text-[#071A33]">
                                WE DO NOT SELL YOUR PERSONAL
                                INFORMATION
                            </h2>
                        </div>
                        <p className="font-normal text-[16px] leading-[28px] tracking-[0px] align-middle text-[#44474D]">
                            Austar Technologies strictly prohibits the monetization of user data. Information is only distributed to authorized service providers bound by strict confidentiality agreements, or when legally compelled by authoritative bodies.
                        </p>

                    </section>

                    {/* DARK SECURITY */}
                    <section
                        id="Third Parties"
                        className="scroll-mt-28 lg:scroll-mt-32"
                    >
                        <div className="relative bg-[#07263A] p-6 sm:p-8 lg:p-[64px] overflow-hidden">
                            <div className="flex flex-col gap-4">
                                <span className="font-jakarata opacity-30 font-bold text-[80px] leading-[80px] tracking-[0px] align-middle text-[#EAF3FA]">
                                    O5
                                </span>


                                <h2 className="font-bold text-[36px] leading-[44px] tracking-[-0.36px] align-middle text-white">
                                    Data Security Protocols
                                </h2>


                                <p className="font-normal opacity-80 text-[18px] leading-[32px] align-middle text-[#EAF3FA] lg:whitespace-pre-line">{darkSecuritt}</p>

                            </div>
                            <div className="absolute right-10 -top-2 opacity-10 hidden lg:block">
                                <svg width="234" height="290" viewBox="0 0 234 290" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M116.667 289.077C83.1838 279.141 55.3686 258.858 33.2212 228.228C11.0737 197.597 0 163.094 0 124.718V34.5898L116.667 -9L233.334 34.5898V124.718C233.334 163.094 222.26 197.597 200.112 228.228C177.965 258.858 150.15 279.141 116.667 289.077ZM116.667 271.385C145.556 262.218 169.445 243.885 188.333 216.385C207.222 188.885 216.667 158.329 216.667 124.718V45.9681L116.667 8.78857L16.6668 45.9681V124.718C16.6668 158.329 26.1112 188.885 45.0001 216.385C63.889 243.885 87.7779 262.218 116.667 271.385ZM83.9745 200.616H149.359C153.173 200.616 156.37 199.325 158.95 196.745C161.531 194.165 162.821 190.968 162.821 187.154V138.436C162.821 134.622 161.531 131.425 158.95 128.845C156.37 126.265 153.173 124.974 149.359 124.974H146.474V108.308C146.474 99.9958 143.638 93.0033 137.965 87.3302C132.292 81.6571 125.299 78.8206 116.987 78.8206C108.675 78.8206 101.683 81.6571 96.0097 87.3302C90.3366 93.0033 87.5001 99.9958 87.5001 108.308V124.974H83.9745C80.1604 124.974 76.9632 126.265 74.3831 128.845C71.803 131.425 70.5129 134.622 70.5129 138.436V187.154C70.5129 190.968 71.803 194.165 74.3831 196.745C76.9632 199.325 80.1604 200.616 83.9745 200.616ZM100.321 124.974V108.308C100.321 103.586 101.918 99.6272 105.112 96.4328C108.307 93.2383 112.265 91.6411 116.987 91.6411C121.71 91.6411 125.668 93.2383 128.862 96.4328C132.057 99.6272 133.654 103.586 133.654 108.308V124.974H100.321Z" fill="white" />
                                </svg>

                            </div>
                            {/* 
                            <div className="lg:col-span-4 flex justify-center">
                                <div className="w-40 h-40 rounded-full border border-[#1E4C67] flex items-center justify-center">
                                    <svg
                                        width="56"
                                        height="56"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#7DB7DD"
                                        strokeWidth="1.7"
                                    >
                                        <rect x="5" y="11" width="14" height="9" rx="2" />
                                        <path d="M8 11V8a4 4 0 118 0v3" />
                                    </svg>
                                </div>
                            </div> */}
                        </div>
                    </section>

                    {/* RIGHTS */}
                    <section
                        id="User Rights"
                        className="scroll-mt-28 lg:scroll-mt-32"
                    >
                        <span className="font-jakarata opacity-30 font-bold text-[80px] leading-[80px] tracking-[0px] align-middle text-[#1267B1]">
                            O6
                        </span>

                        <h2 className="font-bold text-[28px] leading-9 pt-4 text-[#071A33] mt-4">
                            User Rights
                        </h2>

                        <div className="flex flex-col gap-4 pt-8">
                            {[
                                [(<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z" fill="#1267B1" />
                                </svg>
                                ), "Access", "Request a comprehensive manifest of all data currently held in our systems."],
                                [(
                                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20V16.925L15.525 11.425C15.675 11.275 15.8417 11.1667 16.025 11.1C16.2083 11.0333 16.3917 11 16.575 11C16.775 11 16.9667 11.0375 17.15 11.1125C17.3333 11.1875 17.5 11.3 17.65 11.45L18.575 12.375C18.7083 12.525 18.8125 12.6917 18.8875 12.875C18.9625 13.0583 19 13.2417 19 13.425C19 13.6083 18.9667 13.7958 18.9 13.9875C18.8333 14.1792 18.725 14.35 18.575 14.5L13.075 20H10ZM17.5 13.425L16.575 12.5L17.5 13.425ZM11.5 18.5H12.45L15.475 15.45L15.025 14.975L14.55 14.525L11.5 17.55V18.5ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V9H14V7H9V2H2V18H8V20H2ZM15.025 14.975L14.55 14.525L15.475 15.45L15.025 14.975Z" fill="#1267B1" />
                                    </svg>
                                ), "Correction", "Demand rectification of inaccurate or structurally flawed data profiles."],
                                [(
                                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.4 13.5L8 10.9L10.6 13.5L12 12.1L9.4 9.5L12 6.9L10.6 5.5L8 8.1L5.4 5.5L4 6.9L6.6 9.5L4 12.1L5.4 13.5ZM3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM13 3H3V16H13V3ZM3 3V16V3Z" fill="#1267B1" />
                                    </svg>
                                ), "Deletion", "Instruct the permanent erasure of your personal data architecture from our servers."],
                            ].map(([icon, title, desc], idx) => (
                                <div key={idx} className="p-5 sm:p-6 bg-white border border-[#E8E8E8]">
                                    <h3 className="font-bold text-[18px] leading-[32px] tracking-[0px] align-middle text-[#071A33] flex items-center gap-3">
                                        {icon} {title}
                                    </h3>

                                    <p className="font-normal mt-2 text-[16px] leading-[28px] tracking-[0px] align-middle text-[#44474D]">
                                        {desc}
                                    </p>

                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CONTACT */}
                    <section
                        id="Cookies"
                        className="scroll-mt-28 lg:scroll-mt-32 border-t-4 pt-12 lg:pt-16 border-[#071A33]"
                    >
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            <div className="flex flex-col gap-4 w-full lg:w-1/2 min-w-[250px]">
                                <span className="font-jakarata opacity-30 font-bold text-[80px] leading-[80px] tracking-[0px] align-middle text-[#1267B1]">
                                    10
                                </span>

                                <h2 className="font-bold text-[36px] leading-[44px] tracking-[-0.36px] align-middle text-[#071A33]">
                                    Contact Us
                                </h2>


                                <p className="font-normal text-[16px] leading-[28px] tracking-[0px] align-middle text-[#44474D]">
                                    For architectural inquiries regarding this policy or data management practices, our compliance team is available.
                                </p>

                            </div>

                            <div className="lg:col-span-5 border border-gray-300 p-5 sm:p-6 w-full lg:w-1/2 min-w-[250px]">
                                <p className="font-medium text-[12px] leading-[16px] tracking-[0.6px] align-middle text-[#415F8C] pb-2">
                                    DIRECT LINE
                                </p>


                                <h3 className="font-bold text-[32px] leading-[48px] tracking-[0px] align-middle text-[#071A33]">
                                    +91 785795757
                                </h3>


                                <p className="font-medium mt-8 text-[12px] leading-[16px] tracking-[0.6px] align-middle text-[#415F8C] pb-2">
                                    COMPLIANCE EMAIL
                                </p>

                                <p className="font-bold text-[18px] leading-[32px] tracking-[0px] align-middle text-[#071A33]">
                                    privacy@floent.com →
                                </p>

                            </div>
                        </div>
                    </section>
                </main>
            </motion.div>
        </section>
    );
}