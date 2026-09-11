"use client";

import Image from "next/image";
import { useState } from "react";
import {
    Shield,
    FileText,
    Scale,
    CreditCard,
    CircleDollarSign,
    Gavel,
    BadgeCheck,
    Phone,
} from "lucide-react";
import { motion } from "framer-motion";

const sections = [
    {
        id: "intro", title: "01. Overview", icon: (
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 19V17H12V19H0ZM5.65 14.15L0 8.5L2.1 6.35L7.8 12L5.65 14.15ZM12 7.8L6.35 2.1L8.5 0L14.15 5.65L12 7.8ZM16.6 18L3.55 4.95L4.95 3.55L18 16.6L16.6 18Z" fill="#09273A" />
            </svg>

        )
    },
    {
        id: "rights", title: "02. User Rights", icon:
            (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8C11.5 8 13.625 7.60833 15.375 6.825C17.125 6.04167 18 5.1 18 4C18 2.9 17.125 1.95833 15.375 1.175C13.625 0.391667 11.5 0 9 0C6.5 0 4.375 0.391667 2.625 1.175C0.875 1.95833 0 2.9 0 4C0 5.1 0.875 6.04167 2.625 6.825C4.375 7.60833 6.5 8 9 8ZM9 10.5C9.68333 10.5 10.5375 10.4292 11.5625 10.2875C12.5875 10.1458 13.575 9.91667 14.525 9.6C15.475 9.28333 16.2917 8.87083 16.975 8.3625C17.6583 7.85417 18 7.23333 18 6.5V9C18 9.73333 17.6583 10.3542 16.975 10.8625C16.2917 11.3708 15.475 11.7833 14.525 12.1C13.575 12.4167 12.5875 12.6458 11.5625 12.7875C10.5375 12.9292 9.68333 13 9 13C8.31667 13 7.4625 12.9292 6.4375 12.7875C5.4125 12.6458 4.425 12.4167 3.475 12.1C2.525 11.7833 1.70833 11.3708 1.025 10.8625C0.341667 10.3542 0 9.73333 0 9V6.5C0 7.23333 0.341667 7.85417 1.025 8.3625C1.70833 8.87083 2.525 9.28333 3.475 9.6C4.425 9.91667 5.4125 10.1458 6.4375 10.2875C7.4625 10.4292 8.31667 10.5 9 10.5ZM9 15.5C9.68333 15.5 10.5375 15.4292 11.5625 15.2875C12.5875 15.1458 13.575 14.9167 14.525 14.6C15.475 14.2833 16.2917 13.8708 16.975 13.3625C17.6583 12.8542 18 12.2333 18 11.5V14C18 14.7333 17.6583 15.3542 16.975 15.8625C16.2917 16.3708 15.475 16.7833 14.525 17.1C13.575 17.4167 12.5875 17.6458 11.5625 17.7875C10.5375 17.9292 9.68333 18 9 18C8.31667 18 7.4625 17.9292 6.4375 17.7875C5.4125 17.6458 4.425 17.4167 3.475 17.1C2.525 16.7833 1.70833 16.3708 1.025 15.8625C0.341667 15.3542 0 14.7333 0 14V11.5C0 12.2333 0.341667 12.8542 1.025 13.3625C1.70833 13.8708 2.525 14.2833 3.475 14.6C4.425 14.9167 5.4125 15.1458 6.4375 15.2875C7.4625 15.4292 8.31667 15.5 9 15.5Z" fill="#44474D" />
                </svg>

            )
    },
    {
        id: "usage", title: "03. Usage Rights", icon: (
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM19.1 19.5L15.9 16.3C15.55 16.5 15.175 16.6667 14.775 16.8C14.375 16.9333 13.95 17 13.5 17C12.25 17 11.1875 16.5625 10.3125 15.6875C9.4375 14.8125 9 13.75 9 12.5C9 11.25 9.4375 10.1875 10.3125 9.3125C11.1875 8.4375 12.25 8 13.5 8C14.75 8 15.8125 8.4375 16.6875 9.3125C17.5625 10.1875 18 11.25 18 12.5C18 12.95 17.9333 13.375 17.8 13.775C17.6667 14.175 17.5 14.55 17.3 14.9L20.5 18.1L19.1 19.5ZM13.5 15C14.2 15 14.7917 14.7583 15.275 14.275C15.7583 13.7917 16 13.2 16 12.5C16 11.8 15.7583 11.2083 15.275 10.725C14.7917 10.2417 14.2 10 13.5 10C12.8 10 12.2083 10.2417 11.725 10.725C11.2417 11.2083 11 11.8 11 12.5C11 13.2 11.2417 13.7917 11.725 14.275C12.2083 14.7583 12.8 15 13.5 15ZM8.025 9C7.325 10.0333 6.975 11.2 6.975 12.5C6.975 13.8 7.325 14.9667 8.025 16H0V13.225C0 12.6583 0.141667 12.1333 0.425 11.65C0.708333 11.1667 1.1 10.8 1.6 10.55C2.45 10.1167 3.40833 9.75 4.475 9.45C5.54167 9.15 6.725 9 8.025 9Z" fill="#44474D" />
            </svg>

        )
    },
    {
        id: "payment", title: "04. Payments", icon: (
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20Z" fill="#44474D" />
            </svg>

        )
    },
    {
        id: "disclaimer", title: "05. Disclaimer", icon: (
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20.025C8.61667 20.025 7.31667 19.7625 6.1 19.2375C4.88333 18.7125 3.825 18 2.925 17.1C2.025 16.2 1.3125 15.1417 0.7875 13.925C0.2625 12.7083 0 11.4083 0 10.025C0 8.775 0.241667 7.55 0.725 6.35C1.20833 5.15 1.88333 4.07917 2.75 3.1375C3.61667 2.19583 4.65833 1.4375 5.875 0.8625C7.09167 0.2875 8.425 0 9.875 0C10.225 0 10.5833 0.0166667 10.95 0.05C11.3167 0.0833333 11.6917 0.141667 12.075 0.225C11.925 0.975 11.975 1.68333 12.225 2.35C12.475 3.01667 12.85 3.57083 13.35 4.0125C13.85 4.45417 14.4458 4.75833 15.1375 4.925C15.8292 5.09167 16.5417 5.05 17.275 4.8C16.8417 5.78333 16.9042 6.725 17.4625 7.625C18.0208 8.525 18.85 8.99167 19.95 9.025C19.9667 9.20833 19.9792 9.37917 19.9875 9.5375C19.9958 9.69583 20 9.86667 20 10.05C20 11.4167 19.7375 12.7042 19.2125 13.9125C18.6875 15.1208 17.975 16.1792 17.075 17.0875C16.175 17.9958 15.1167 18.7125 13.9 19.2375C12.6833 19.7625 11.3833 20.025 10 20.025ZM8.5 8.025C8.91667 8.025 9.27083 7.87917 9.5625 7.5875C9.85417 7.29583 10 6.94167 10 6.525C10 6.10833 9.85417 5.75417 9.5625 5.4625C9.27083 5.17083 8.91667 5.025 8.5 5.025C8.08333 5.025 7.72917 5.17083 7.4375 5.4625C7.14583 5.75417 7 6.10833 7 6.525C7 6.94167 7.14583 7.29583 7.4375 7.5875C7.72917 7.87917 8.08333 8.025 8.5 8.025ZM6.5 13.025C6.91667 13.025 7.27083 12.8792 7.5625 12.5875C7.85417 12.2958 8 11.9417 8 11.525C8 11.1083 7.85417 10.7542 7.5625 10.4625C7.27083 10.1708 6.91667 10.025 6.5 10.025C6.08333 10.025 5.72917 10.1708 5.4375 10.4625C5.14583 10.7542 5 11.1083 5 11.525C5 11.9417 5.14583 12.2958 5.4375 12.5875C5.72917 12.8792 6.08333 13.025 6.5 13.025ZM13 14.025C13.2833 14.025 13.5208 13.9292 13.7125 13.7375C13.9042 13.5458 14 13.3083 14 13.025C14 12.7417 13.9042 12.5042 13.7125 12.3125C13.5208 12.1208 13.2833 12.025 13 12.025C12.7167 12.025 12.4792 12.1208 12.2875 12.3125C12.0958 12.5042 12 12.7417 12 13.025C12 13.3083 12.0958 13.5458 12.2875 13.7375C12.4792 13.9292 12.7167 14.025 13 14.025Z" fill="#44474D" />
            </svg>

        )
    },
];

export default function Conditions() {
    const [active, setActive] = useState("intro");

    return (
        <section className="w-full bg-[#F8F9FA] flex flex-col gap-16">
            {/* <section className="border border-[#C5C6CE] w-full max-w-7xl mx-auto bg-white">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    <div className="p-16 ">
                        <p className="font-medium pb-4 text-[12px] leading-[16px] tracking-[0.6px] align-middle text-[#415F8C]">
                            DOCUMENT REF: AT-TC-24
                        </p>


                        <h1 className="pb-6 font-sora font-bold text-[48px] leading-[56px] text-[#1B1B1D] tracking-[-0.96px] align-middle uppercase">
                            TERMS &
                            CONDITIONS
                        </h1>


                        <p className="pb-8 font-jakarta font-normal text-[18px] leading-[32px] tracking-[0px] align-middle text-[#44474D]">
                            Terms and Conditions of Floent AIr
                        </p>


                        <p className="font-medium w-fit py-2 px-4 bg-[#F5F3F5] text-[12px] leading-[16px] tracking-[0.6px] align-middle text-[#1B1B1D]">
                            Last updated: Aug 9, 2024
                        </p>

                    </div>

                    <div className="flex p-9 justify-center border-l border-l-[#C5C6CE]">
                        <Image
                            src="/terms-conditions.jpg"
                            alt="Terms Illustration"
                            width={420}
                            height={320}
                            className=""
                        />
                    </div>
                </div>
            </section> */}
            <section className="border border-[#C5C6CE] w-full max-w-7xl mx-auto bg-white">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div className="p-6 sm:p-10 lg:p-16">
                        <p className="font-medium pb-4 text-[12px] leading-[16px] tracking-[0.6px] align-middle text-[#415F8C]">
                            DOCUMENT REF: AT-TC-24
                        </p>

                        <h1 className="pb-6 font-sora font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[40px] sm:leading-[48px] lg:leading-[56px] text-[#1B1B1D] tracking-[-0.96px] align-middle uppercase">
                            TERMS & CONDITIONS
                        </h1>

                        <p className="pb-8 font-jakarta font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] tracking-[0px] align-middle text-[#44474D]">
                            Terms and Conditions of Floent AIr
                        </p>

                        <p className="font-medium w-fit py-2 px-4 bg-[#F5F3F5] text-[12px] leading-[16px] tracking-[0.6px] align-middle text-[#1B1B1D]">
                            Last updated: Aug 9, 2024
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex p-6 sm:p-9 justify-center border-t lg:border-t-0 lg:border-l border-[#C5C6CE]">
                        <Image
                            src="/terms-conditions.jpg"
                            alt="Terms Illustration"
                            width={420}
                            height={320}
                            className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg"
                        />
                    </div>
                </motion.div>
            </section>

            {/* <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

                <aside className="w-full lg:w-[280px] border-r border-[#D9D9D9] bg-[#F4F5F7] lg:min-h-screen">
                    <div className="p-6 sticky top-0 bg-[#F4F5F7]">
                        <h3 className="text-[#071A33] font-bold text-2xl">
                            Policy Sections
                        </h3>
                        <p className="text-[11px] text-[#6B7280] mt-1">
                            Last updated Oct 2023
                        </p>

                        <nav className="mt-6 flex lg:flex-col gap-2 overflow-x-auto">
                            {sections.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActive(item.id)}
                                    className={`flex items-center gap-2 text-xs whitespace-nowrap px-3 py-2 rounded-full lg:rounded-none lg:px-0 lg:py-3 transition
                    ${active === item.id
                                            ? "text-[#071A33] font-semibold lg:border-l-2 border-[#071A33] lg:pl-3"
                                            : "text-[#5D5D5D]"
                                        }`}
                                >
                                    {item.icon}
                                    {item.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                <main className="flex-1">

                    <section className="px-6 lg:px-14 py-10">
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="lg:w-44">
                                <p className="text-[10px] tracking-[2px] text-[#7A8A9A] uppercase">
                                    Section 01
                                </p>
                                <h2 className="mt-2 text-[#071A33] font-bold text-xl">
                                    Introduction
                                </h2>
                            </div>

                            <div className="flex-1 text-[#44474D] text-[15px] leading-8">
                                <p>
                                    Please read these Terms and Conditions carefully before using
                                    our services. By using our website or engaging with our
                                    products, you agree to these terms.
                                </p>

                                <p className="mt-5">
                                    These Terms govern your use of Austar Technologies’ website,
                                    products, and services. We are dedicated to providing
                                    reliable HVAC and fan design and engineering solutions.
                                </p>
                            </div>
                        </div>
                    </section>



                    <section className="border-t border-[#D9D9D9] px-6 lg:px-14 py-10">
                        <p className="text-[10px] uppercase tracking-[2px] text-[#7A8A9A]">
                            Section 02
                        </p>

                        <h2 className="mt-2 text-[#071A33] font-bold text-2xl">
                            Intellectual Property Rights
                        </h2>

                        <p className="mt-5 text-[#44474D] leading-8">
                            All content, trademarks, patents, and engineering designs related
                            to Austar Technologies' HVLS fans are the exclusive property of
                            Austar Technologies or its licensors.
                        </p>
                    </section>

                    
                    

                    <section className="border-t border-[#D9D9D9] px-6 lg:px-14 py-10">
                        <p className="text-[10px] uppercase tracking-[2px] text-[#7A8A9A]">
                            Section 03
                        </p>

                        <h2 className="mt-2 text-[#071A33] font-bold text-2xl">
                            User Responsibilities
                        </h2>

                        <div className="mt-6 space-y-4">
                            {[
                                "Provide accurate information during purchase and installation.",
                                "Use products in compliance with local safety regulations.",
                                "Ensure installation is carried out by qualified professionals.",
                            ].map((item) => (
                                <div key={item} className="flex gap-3">
                                    <BadgeCheck className="text-[#1267B1] mt-1" size={18} />
                                    <p className="text-[#44474D]">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    
                    

                    <section className="border-t border-[#D9D9D9] px-6 lg:px-14 py-10">
                        <p className="text-[10px] uppercase tracking-[2px] text-[#7A8A9A]">
                            Section 04
                        </p>

                        <h2 className="mt-2 text-[#071A33] font-bold text-2xl">
                            Payment & Delivery
                        </h2>

                        <p className="mt-5 text-[#44474D] leading-8">
                            Payment terms are established at the point of sale. We accept
                            various forms of payment as outlined in our invoices. Delivery
                            timelines are estimates, and Austar Technologies is not liable for
                            delays caused by external logistics disruptions.
                        </p>
                    </section>




                    <section className="px-6 lg:px-14 py-8">
                        <div className="bg-[#07263A] text-white p-8 relative overflow-hidden">
                            <span className="text-[10px] tracking-[2px] uppercase text-[#9CC7E5]">
                                Section 05
                            </span>

                            <h2 className="mt-3 text-3xl font-bold">
                                Disclaimers and Limitation of Liability
                            </h2>

                            <p className="mt-5 text-[#D8E6F2] leading-8 max-w-3xl">
                                Austar Technologies provides its products on an “as-is” basis.
                                While we guarantee quality and performance, we do not warrant
                                uninterrupted services or indirect consequential damages arising
                                from the use of our products.
                            </p>

                            <Shield
                                size={140}
                                className="absolute right-6 top-6 opacity-10 hidden lg:block"
                            />
                        </div>
                    </section>




                    <section className="border-t border-[#D9D9D9] px-6 lg:px-14 py-10">
                        <p className="text-[10px] uppercase tracking-[2px] text-[#7A8A9A]">
                            Section 06
                        </p>

                        <h2 className="mt-2 text-[#071A33] font-bold text-2xl">
                            Warranty
                        </h2>

                        <p className="mt-5 text-[#44474D] leading-8">
                            Our HVLS fans come with a standard manufacturer’s warranty covering
                            defects in materials and workmanship. The warranty is void if the
                            product has been modified, improperly installed, or poorly
                            maintained.
                        </p>
                    </section>

                    
                    


                    <section className="border-t-2 border-[#071A33] px-6 lg:px-14 py-12">
                        <div className="grid lg:grid-cols-2 gap-10">

                            <div>
                                <span className="text-[10px] tracking-[2px] uppercase text-[#7A8A9A]">
                                    Section 08
                                </span>

                                <h2 className="mt-3 text-[#071A33] text-3xl font-bold">
                                    Contact Us
                                </h2>

                                <p className="mt-5 text-[#44474D] leading-8">
                                    If you have any questions concerning these Terms and
                                    Conditions, please contact our compliance team.
                                </p>
                            </div>

                            <div className="border border-[#D9D9D9] p-6 bg-white">
                                <p className="text-[11px] uppercase tracking-[2px] text-[#7A8A9A]">
                                    Direct Line
                                </p>

                                <div className="flex items-center gap-3 mt-3">
                                    <Phone className="text-[#1267B1]" />
                                    <h3 className="text-3xl font-bold text-[#071A33]">
                                        +91 78579 5757
                                    </h3>
                                </div>

                                <div className="mt-8">
                                    <p className="text-[11px] uppercase tracking-[2px] text-[#7A8A9A]">
                                        Compliance Email
                                    </p>

                                    <p className="mt-2 text-lg font-semibold text-[#071A33]">
                                        legal@floent.com
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                </main>
            </div> */}
            <section className="bg-[#F8F9FA] lg:px-0 px-5">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-7xl mx-auto flex flex-col lg:flex-row">
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
                                    href={`#${item.id}`}
                                    onClick={() => setActive(item.id)}
                                    className={`${active == item.id ? "border-l-2 border-black" : ""} flex items-center pl-4 py-2 ml-0 gap-3 text-xs leading-4 font-medium tracking-[0.6px] text-[#44474D] hover:text-[#FDB913]`}
                                >
                                    {item.icon}
                                    {item.title}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* RIGHT CONTENT */}
                    <main className="flex flex-col gap-16 w-full mb-20 lg:pl-5 lg:border-l border-l-[#C5C6CE]">
                        <p className="font-normal text-[18px] leading-[32px] tracking-[0px] align-middle">
                            Please read these Terms and Conditions carefully before using our services. By using our website or engaging with our products, you agree to these terms.
                        </p>

                        {/* SECTION 1 */}
                        <section id="intro" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 01
                                </span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    Introduction
                                </p>
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    These Terms govern your use of Austar Technologies' website, products, and services. We are dedicated to providing industrial HVLS fans that deliver high airflow and low energy consumption. The use of our technology signifies your adherence to these guidelines.
                                </p>
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    We reserve the right to modify these terms at any time. Changes will be communicated through updates on this page.
                                </p>
                            </div>
                        </section>

                        {/* SECTION 2 */}
                        <section id="rights" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 02
                                </span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    Intellectual Property Rights
                                </p>
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    All content, trademarks, patents, and engineering designs related to Austar Technologies' HVLS fans are the exclusive property of Austar Technologies or its licensors. You may not reproduce, distribute, or create derivative works from our designs or materials without explicit written consent.
                                </p>
                            </div>
                        </section>

                        {/* SECTION 3 */}
                        <section id="usage" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 03
                                </span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    User Responsibilities
                                </p>
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    When using our products or services, you agree to:
                                </p>
                                <div className="flex flex-col gap-4">
                                    {
                                        ["Provide accurate information during the purchase and installation process.",
                                            "Use the products in compliance with local safety and building regulations.",
                                            "Ensure that installation is carried out by qualified professionals according to our specifications."
                                        ].map((e, idx) => (
                                            <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                                <span className="font-bold pr-3 font-jakarata">0{idx + 1}.</span> {e}
                                            </p>
                                        ))
                                    }

                                </div>
                            </div>
                        </section>

                        {/* SECTION 4 */}
                        <section id="payment" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 04
                                </span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    Payment and Delivery
                                </p>
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    Payment terms are established at the point of sale. We accept various forms of payment as outlined in our invoice. Delivery timelines are estimates, and Austar Technologies is not liable for delays caused by external factors such as shipping disruptions or customs processing.
                                </p>
                            </div>
                        </section>

                        {/* SECTION 5 */}
                        <section
                            id="disclaimer"
                            className="py-12 border-y bg-[#09273A] border-[#5D5D5D] px-5 sm:px-6 lg:px-[48px] scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-8 "
                        >
                            <p className="py-1 px-2 bg-[#415F8C] w-fit text-white font-medium text-[12px] leading-[16px] tracking-[0.6px] align-middle">
                                SECTION 05
                            </p>

                            <div className="flex gap-4 items-center">
                                <svg width="27" height="34" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3333 33.3333C9.47222 32.3611 6.28472 30.1458 3.77083 26.6875C1.25694 23.2292 0 19.3889 0 15.1667V5L13.3333 0L26.6667 5V15.1667C26.6667 19.3889 25.4097 23.2292 22.8958 26.6875C20.3819 30.1458 17.1944 32.3611 13.3333 33.3333ZM13.3333 29.8333C16.2222 28.9167 18.6111 27.0833 20.5 24.3333C22.3889 21.5833 23.3333 18.5278 23.3333 15.1667V7.29167L13.3333 3.54167L3.33333 7.29167V15.1667C3.33333 18.5278 4.27778 21.5833 6.16667 24.3333C8.05556 27.0833 10.4444 28.9167 13.3333 29.8333Z" fill="white" />
                                </svg>
                                <p className="font-normal text-white text-[16px] leading-[24px] tracking-[0px] align-middle">
                                    Disclaimers and Limitation of Liability
                                </p>
                            </div>

                            <p className="font-normal text-[#C5C6CE] text-[16px] leading-[24px] tracking-[0px] align-middle">
                                Austar Technologies provides its products on an "as-is" basis. While we guarantee the quality and performance of our HVLS fans, we do not warrant that they will meet all specific operational requirements unless expressly stated.
                            </p>
                            <p className="font-normal text-[#C5C6CE] text-[16px] leading-[24px] tracking-[0px] align-middle">
                                In no event shall Austar Technologies be liable for indirect, incidental, or consequential damages arising from the use or inability to use our products, including structural damage or production downtime.
                            </p>

                        </section>

                        {/* SECTION 6 */}
                        <section id="Overview" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="font-jetBrainsMono absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#415F8C]">
                                    SECTION 06
                                </span>
                            </div>
                            <p className="font-jakarata font-normal text-[16px] leading-[24px] tracking-[0px] align-middle">
                                Warranty
                            </p>

                            <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                Our HVLS fans come with a standard manufacturer's warranty covering defects in materials and workmanship. The warranty is void if the product has been modified, improperly installed, or poorly maintained.     </p>

                        </section>


                        {/* SECTION 7 */}
                        <section id="Overview" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="font-jetBrainsMono absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#415F8C]">
                                    SECTION 07
                                </span>
                            </div>
                            <p className="font-jakarata font-normal text-[16px] leading-[24px] tracking-[0px] align-middle">
                                Governing Law
                            </p>

                            <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                These Terms and Conditions are governed by the laws of the jurisdiction in which Austar Technologies operates. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the local courts.
                            </p>
                        </section>

                        {/* SECTION 7 */}
                        <section id="Overview" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="font-jetBrainsMono absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#415F8C]">
                                    SECTION 08
                                </span>
                            </div>
                            <p className="font-jakarata font-normal text-[16px] leading-[24px] tracking-[0px] align-middle">
                                Contact Us
                            </p>

                            <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                If you have any questions or concerns regarding these Terms and Conditions, please reach out to us at legal@austartech.com.
                            </p>
                        </section>

                    </main>
                </motion.div>
            </section>
        </section>
    );
}