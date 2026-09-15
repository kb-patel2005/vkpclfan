"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";

const sections = [
    {
        id: "use-site",
        title: "Use of the Site",
        icon: (
            <svg width="22"
                height="23" viewBox="0 0 18 19" fill="none">
                <path d="M9 0L2 2.5V8C2 12.5 5 16.5 9 18C13 16.5 16 12.5 16 8V2.5L9 0ZM8 12.5L5.5 10L6.9 8.6L8 9.7L11.1 6.6L12.5 8L8 12.5Z" fill="#09273A" />
            </svg>
        )
    },
    {
        id: "intellectual",
        title: "Intellectual Property Rights",
        icon: (
            <svg width="22"
                height="23" viewBox="0 0 18 19" fill="none">
                <path d="M4 1H11.5L15 4.5V17H4V1ZM11 2.5V5H13.5L11 2.5ZM6 8H12V9.5H6V8ZM6 11H12V12.5H6V11Z" fill="#09273A" />
            </svg>
        )
    },
    {
        id: "conduct",
        title: "User Conduct",
        icon: (
            <svg width="22"
                height="23" viewBox="0 0 18 19" fill="none">
                <path d="M9 2C7.1 2 5.5 3.6 5.5 5.5C5.5 7.4 7.1 9 9 9C10.9 9 12.5 7.4 12.5 5.5C12.5 3.6 10.9 2 9 2ZM3 16C3 13.5 5.7 11.5 9 11.5C12.3 11.5 15 13.5 15 16H3Z" fill="#09273A" />
            </svg>
        )
    },
    {
        id: "links",
        title: "Third-Party Links",
        icon: (
            <svg width="22"
                height="23" viewBox="0 0 18 19" fill="none">
                <path d="M10 2H16V8H14V5.4L8.7 10.7L7.3 9.3L12.6 4H10V2ZM2 4H8V6H4V14H12V10H14V15C14 15.6 13.6 16 13 16H3C2.4 16 2 15.6 2 15V4Z" fill="#09273A" />
            </svg>
        )
    },
    {
        id: "disclaimer",
        title: "Disclaimers & Liability",
        icon: (
            <svg width="22"
                height="23" viewBox="0 0 18 19" fill="none">
                <path d="M9 1L17 16H1L9 1ZM8 7V11H10V7H8ZM8 12.5V14H10V12.5H8Z" fill="#09273A" />
            </svg>
        )
    },
    {
        id: "indemnification",
        title: "Indemnification",
        icon: (
            <svg width="22"
                height="23" viewBox="0 0 18 19" fill="none">
                <path d="M9 0L15.5 2.5V7.5C15.5 11.5 12.8 15 9 16.8C5.2 15 2.5 11.5 2.5 7.5V2.5L9 0ZM7.5 9L6.2 10.3L8.4 12.5L12.3 8.6L11 7.3L8.4 9.9L7.5 9Z" fill="#09273A" />
            </svg>
        )
    },
    {
        id: "changes",
        title: "Changes to These Terms",
        icon: (
            <svg width="22"
                height="23" viewBox="0 0 18 19" fill="none">
                <path d="M9 2V0L12 3L9 6V4C6.2 4 4 6.2 4 9C4 9.8 4.2 10.6 4.7 11.3L3.2 12.8C2.4 11.7 2 10.4 2 9C2 5.1 5.1 2 9 2ZM14.8 5.2C15.6 6.3 16 7.6 16 9C16 12.9 12.9 16 9 16V18L6 15L9 12V14C11.8 14 14 11.8 14 9C14 8.2 13.8 7.4 13.3 6.7L14.8 5.2Z" fill="#09273A" />
            </svg>
        )
    },
    {
        id: "termination",
        title: "Termination",
        icon: (
            <svg width="22"
                height="23" viewBox="0 0 18 19" fill="none">
                <path d="M3 2H9V4H5V15H9V17H3V2ZM11.5 6L10.1 7.4L11.7 9H7V11H11.7L10.1 12.6L11.5 14L15.5 10L11.5 6Z" fill="#09273A" />
            </svg>
        )
    },
    {
        id: "law",
        title: "Governing Law",
        icon: (
            <svg width="22"
                height="23" viewBox="0 0 18 19" fill="none">
                <path d="M9 1.5C4.9 1.5 1.5 4.9 1.5 9C1.5 13.1 4.9 16.5 9 16.5C13.1 16.5 16.5 13.1 16.5 9C16.5 4.9 13.1 1.5 9 1.5ZM8 3.7V6H5.7C6.1 4.9 6.9 4.1 8 3.7ZM3.7 10H6V12.3C4.9 11.9 4.1 11.1 3.7 10ZM10 14.3V12H12.3C11.9 13.1 11.1 13.9 10 14.3ZM12 10H10V8H12V10ZM8 10V8H6V10H8Z" fill="#09273A" />
            </svg>
        )
    },
    {
        id: "contact",
        title: "Contact Information",
        icon: (
            <svg width="22"
                height="23" viewBox="0 0 18 19" fill="none">
                <path d="M2 3H16C16.6 3 17 3.4 17 4V15C17 15.6 16.6 16 16 16H2C1.4 16 1 15.6 1 15V4C1 3.4 1.4 3 2 3ZM2.5 5L9 9.5L15.5 5H2.5ZM15 14V7L9 11L3 7V14H15Z" fill="#09273A" />
            </svg>
        )
    }
];

const ListComponenet = ({ list }: { list: Array<Array<string>> }) => {
    return (
        <div className="flex flex-col gap-4">
            {
                list.map(([title, description], idx) => (
                    <p key={title} className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                        <span className="font-bold pr-3 font-jakarata">0{idx + 1}.</span>
                        <span className="font-bold pr-3 font-jakarata">{title}</span>
                        {description}
                    </p>
                ))
            }

        </div>
    )
}

export default function Conditions() {
    const [active, setActive] = useState("intro");

    useEffect(() => {
        const ids = [
            "use-site",
            "intellectual",
            "conduct",
            "links",
            "disclaimer",
            "indemnification",
            "changes",
            "termination",
            "law",
            "contact",
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-30% 0px -55% 0px",
                threshold: 0,
            }
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full bg-[#F8F9FA] flex flex-col gap-6 lg:gap-16 px-5 md:px-0 lg:px-0">

            <section className="border border-[#C5C6CE] w-full max-w-7xl lg:mt-15 mx-auto bg-white ">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center">

                    {/* Left Content */}
                    <div className="p-6 sm:p-10 lg:p-16">
                        <p className="font-medium pb-4 text-[12px] leading-[16px] tracking-[0.6px] align-middle text-[#415F8C]">
                            DOCUMENT REF: AT-TC-24
                        </p>


                        <motion.h1
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="pb-6 font-sora font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[40px] sm:leading-[48px] lg:leading-[56px] text-[#1B1B1D] tracking-[-0.96px] align-middle uppercase"
                        >
                            TERMS & CONDITIONS
                        </motion.h1>


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

            <section className="bg-[#F8F9FA] ">
                <div
                    className="max-w-7xl mx-auto flex flex-col lg:flex-row mb-20">
                    {/* LEFT SIDEBAR */}
                    <aside className="w-full lg:max-w-[300px] lg:block hidden border-b lg:border-b-0 lg:border-l-2 h-fit border-[#C5C6CE] pt-4 pb-4 lg:pb-0 sticky lg:top-24 bg-[#F8F9FA] z-20">

                        <h2 className="pl-4 font-inter font-bold text-[28px] leading-[36px] tracking-[0px] align-middle text-[#44474D]">
                            Terms & conditions Sections
                        </h2>

                        <p className="pl-4 font-inter font-medium mb-4 text-[12px] leading-[16px] tracking-[0.6px] align-middle text-[#44474D]">
                            Last updated Oct 2023
                        </p>

                        <nav className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:space-y-4 px-4 lg:px-0 scrollbar-hide">
                            {sections.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`flex items-center gap-3 whitespace-nowrap py-2 pl-4 pr-4 text-xs font-medium tracking-[0.6px] transition-all duration-200 ${active === item.id
                                        ? "lg:border-l-2 border-[#09273A] text-[#09273A] bg-[#EEF2F6] lg:bg-transparent"
                                        : "text-[#44474D] hover:text-[#FDB913]"
                                        }`}
                                >
                                    {item.icon}
                                    {item.title}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* RIGHT CONTENT */}
                    <main className="flex flex-col gap-10 lg:gap-16 w-full lg:pl-5 lg:border-l border-l-[#C5C6CE]">
                        <p className="font-normal text-[18px] lg:leading-[32px] tracking-[0px] align-middle">
                            Welcome to floent Technologies ("we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our website www.floentfansindia.com . By accessing or using the Site, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Site.
                        </p>

                        {/* SECTION 1 */}
                        <motion.section
                            initial={{ x: 0, y: 100, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            id="use-site" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-4 lg:gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 01
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-4">
                                <h2 className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    Use of the Site
                                </h2>
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    We may collect the following types of information:
                                </p>
                                <ListComponenet list={
                                    [
                                        ["Eligibility:", "You must be at least 18 years old to use the Site. By using the Site, you represent that you are at least 18 years old."],
                                        ["Account: ", "To access certain features of the Site, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete."],
                                        ["Account Security: ", " You are responsible for safeguarding your account and password. You agree to notify us immediately of any unauthorized use of your account. We are not liable for any loss or damage arising from your failure to protect your account."]
                                    ]
                                } />

                            </div>
                        </motion.section>

                        {/* SECTION 2 */}
                        <motion.section
                            initial={{ x: 0, y: 100, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            id="intellectual" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-4 lg:gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 02
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-4">
                                <h2 className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    Intellectual Property Rights
                                </h2>
                                <ListComponenet
                                    list={
                                        [
                                            ["Ownership:", "All content, features, and functionality on the Site, including but not limited to text, graphics, logos, and images, are the exclusive property of floent Technologies or its licensors and are protected by intellectual property laws."],
                                            ["Limited License: ", "We grant you a limited, non-exclusive, non-transferable license to access and use the Site for your personal, non-commercial use. You may not reproduce, distribute, modify, or create derivative works from any content on the Site without our prior written consent."]
                                        ]
                                    } />


                            </div>
                        </motion.section>

                        {/* SECTION 3 */}
                        <motion.section
                            initial={{ x: 0, y: 100, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}

                            id="conduct" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-4 lg:gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 03
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-4">
                                <h2 className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    User Conduct
                                </h2>
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below:
                                </p>
                                <div className="flex flex-col gap-4">
                                    <ListComponenet list={[
                                        ["Prohibited Activities:", "You agree not to engage in any of the following prohibited activities:"]
                                    ]} />
                                    <ul className="list-disc list-inside pl-2">
                                        {[
                                            "Using the Site for any unlawful purpose.",
                                            "Interfering with or disrupting the Site or servers.",
                                            "Attempting to gain unauthorized access to any part of the Site or its related systems or networks.",
                                            "Posting or transmitting any content that is defamatory, obscene, or otherwise objectionable."
                                        ].map((e, i) => (
                                            <li key={i}>{e}</li>
                                        ))}
                                    </ul>


                                </div>
                            </div>
                        </motion.section>

                        {/* SECTION 4 */}
                        <motion.section
                            initial={{ x: 0, y: 100, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            id="links" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-4 lg:gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 04
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-4">
                                <h2 className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    Third-Party Links
                                </h2>
                                <ListComponenet list={[
                                    ["Links to Other Websites:", " The Site may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of any third-party sites. Your use of third-party sites is at your own risk."]
                                ]} />
                            </div>

                        </motion.section>

                        {/* SECTION 5 */}
                        <motion.section
                            initial={{ x: 0, y: 100, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            id="disclaimer" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-4 lg:gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 05
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-4">
                                <h2 className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    Disclaimers and Limitation of Liability
                                </h2>
                                <ListComponenet list={[
                                    ["Disclaimer of Warranties:", "The Site is provided “as is” and “as available” without any warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to implied warranties of merchantability and fitness for a particular purpose."],
                                    ["Limitation of Liability:", " To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Site."]
                                ]} />
                            </div>

                        </motion.section>

                        {/* SECTION 6 */}
                        <motion.section
                            initial={{ x: 0, y: 100, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            id="indemnification" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-4 lg:gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 06
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-4">
                                <h2 className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    Indemnification
                                </h2>
                                <ListComponenet list={[
                                    ["Indemnity:", "You agree to indemnify, defend, and hold harmless floent Technologies and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys’ fees, arising out of or related to your use of the Site or violation of these Terms."]
                                ]} />
                            </div>

                        </motion.section>

                        {/* SECTION 7 */}
                        <motion.section
                            initial={{ x: 0, y: 100, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            id="changes" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-4 lg:gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 07
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-4">
                                <h2 className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    Changes to These Terms
                                </h2>
                                <ListComponenet list={[
                                    ["Modifications:",
                                        "We reserve the right to modify these Terms at any time. Any changes will be effective when we post the revised Terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms."]
                                ]} />
                            </div>

                        </motion.section>

                        {/* SECTION 8 */}
                        <motion.section
                            initial={{ x: 0, y: 100, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            id="termination" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-4 lg:gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 08
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-4">
                                <h2 className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    Termination
                                </h2>
                                <ListComponenet list={[
                                    ["Termination by Us:",
                                        "We reserve the right to terminate or suspend your access to the Site at any time, with or without cause, and with or without notice, for any reason, including if we believe you have violated these Terms."
                                    ]]} />
                            </div>

                        </motion.section>

                        {/* SECTION 9 */}
                        <motion.section
                            initial={{ x: 0, y: 100, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            id="law" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-4 lg:gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#09273A]">
                                    SECTION 09
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-4">
                                <h2 className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]">
                                    Governing Law
                                </h2>
                                <ListComponenet list={[
                                    ["Applicable Law: ", "These Terms are governed by and construed in accordance with the laws of the state of Gujarat-India, without regard to its conflict of law principles."]]} />
                            </div>

                        </motion.section>

                        {/* SECTION 10 */}
                        <motion.section
                            initial={{ x: 0, y: 100, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            id="contact" className="scroll-mt-28 lg:scroll-mt-32 flex flex-col gap-4 lg:gap-8">
                            <div className="relative border-b border-b-[#C5C6CE]">
                                <span className="font-jetBrainsMono absolute -bottom-1.5 py-1 px-2 font-medium text-[12px] w-fit  bg-[#F8F9FA] leading-[16px] tracking-[0.6px] align-middle text-[#415F8C]">
                                    SECTION 10
                                </span>
                            </div>
                            <h2 className="font-jakarata font-normal text-[16px] leading-[24px] tracking-[0px] align-middle">
                                Changes to This Terms & Condition
                            </h2>
                            <div className="flex flex-col gap-1">
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]"> If you have any questions or concerns about this Terms & Condition or our data practices, please contact us by</p>
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]"> call us : +91 9925624342</p>
                                <p className="font-normal text-[16px] leading-[24px] tracking-[0px] align-middle text-[#1B1B1D]"> Mail us : sales@floentair.com</p>
                            </div>
                        </motion.section>

                    </main>
                </div>
            </section>
        </section>
    );
}