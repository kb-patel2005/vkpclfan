'use client'
import { motion } from 'framer-motion';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SelectBox } from '../common/SelectBox';
import HeroSwiper from '../common/HeroSwiper';
import { application, featureandadv, features, principal, specification, title_description, whyshould } from '@/Mockdata/Mockdata';
import Image from 'next/image';
import { categoryOfFan, model } from '@/Mockdata/Model';

const models = [
    {
        title: "hero",
        url: "/whyChooseFloent.png"
    },
    {
        title: "FLEH - 1000",
        url: "/image1.jpeg"
    },
    {
        title: "FLEH - 1220",
        url: "/image2.jpeg"
    },
    {
        title: "FLEH - 1380",
        url: "/image3.jpeg"
    },
];

const featuresAndAdavantage = [
    {
        features: "LOW NOISE",
        advantage: "Special blade design ensures low noise operation.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M10 21H16L23 15V35L16 29H10V21Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M29 20C31 22 31 28 29 30"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M34 16C38 20 38 30 34 34"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M40 13C46 19 46 31 40 37"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },

    {
        features: "ENERGY EFFICIENT",
        advantage: "High efficiency motor with low power consumption.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M28 7L13 28H23L21 43L37 21H27L28 7Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        features: "ALUMINIUM IMPELLER",
        advantage: "Corrosion resistant aluminium impeller for long life & strength",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle
                    cx="25"
                    cy="25"
                    r="4"
                    stroke="#09273A"
                    strokeWidth="2"
                />
                <path
                    d="M25 21C19 19 14 15 16 11C18 7 24 10 25 21Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M29 25C31 19 35 14 39 16C43 18 40 24 29 25Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M25 29C31 31 36 35 34 39C32 43 26 40 25 29Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M21 25C19 31 15 36 11 34C7 32 10 26 21 25Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        features: "DURABLE & RELIABLE",
        advantage: "Galvanized steel body with strong structure for heavy duty use.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M25 7L39 12V23C39 32 33 39 25 43C17 39 11 32 11 23V12L25 7Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M18 25L23 30L33 19"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        features: "COPPER-WOUND MOTOR",
        advantage: "100% copper-wound, double ball-bearing motor for durability.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle
                    cx="25"
                    cy="25"
                    r="14"
                    stroke="#09273A"
                    strokeWidth="2"
                />
                <circle
                    cx="25"
                    cy="25"
                    r="6"
                    stroke="#09273A"
                    strokeWidth="2"
                />
                <path
                    d="M25 11V16M25 34V39M11 25H16M34 25H39"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M15 15L19 19M31 31L35 35M35 15L31 19M19 31L15 35"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },

    {
        features: "HIGH AIRFLOW",
        advantage: "Large air displacement delivers maximum airflow.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M8 18H30"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M25 13L30 18L25 23"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8 26H38"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M33 21L38 26L33 31"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8 34H30"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M25 29L30 34L25 39"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        features: "RUST RESISTANT",
        advantage: "Built-in louvers prevent rain & dust entry and ensure smooth airflow.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M25 8C25 8 13 21 13 29C13 35.6 18.4 41 25 41C31.6 41 37 35.6 37 29C37 21 25 8 25 8Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M19 30C19 34 21.5 36.5 25 37"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M34 15L38 11M38 15L34 11"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },

    {
        features: "EASY MAINTENANCE",
        advantage: "Simple installation and minimal maintenance",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M32 10C27.6 10 24 13.6 24 18C24 19.4 24.4 20.7 25 21.8L12 34.8C10.9 35.9 10.9 37.7 12 38.8C13.1 39.9 14.9 39.9 16 38.8L29 25.8C30.1 26.4 31.4 26.8 32.8 26.8C37.2 26.8 40.8 23.2 40.8 18.8"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M33 10L40 17"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <circle
                    cx="14"
                    cy="36"
                    r="2"
                    fill="#09273A"
                />
            </svg>
        ),
    },
];

const workingPrincipal = "Exhaust Fan draws out polluted air from premises and replaces it with fresh air. Air is considered polluted when it contains high amounts of hot air, moisture, carbon dioxide, vaporized chemicals, dust, fungal spores and unpleasant odors. Marut Air exhaust fan combat indoor air pollution by ejecting the unclean indoor air into the outside environment and letting in clean air from the outside"

// const applications = [
//     "INDUSTRIAL PLANTS", "DAIRY FARMS & LIVESTOCK FARMS", "GREENHOUSE & AGRICULTURE", "WAREHOUSE & LOGISTICS", "COMMERCIAL SPACES", "FOOD PROCESSING UNITS"
// ]

const generateFanCodes = (arr: Array<string>): string => {

    if (arr.length > 3) {
        if (arr[2] === "geared") {
            // FL + (feet * 10 + extra)
            return `FL${arr[0]}5`;
        } else {
            // FLGL + (feet * 10 + extra)
            return `FLGL${arr[0]}6`;
        }
    } else {
        return arr.join(" ")
    }
}

export default function DetailLanding({ slug }: { slug: string }) {

    useEffect(() => {
        if (window.location.hash) {
            setActive("Ask For a Price")
        }
    }, []);

    const data = specification.get(slug);

    const [active, setActive] = useState("Description");

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        interest: "",
        message: ""
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const valueChange = (val: string) => {
        setFormData({ ...formData, interest: val });

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Build WhatsApp message
        const text = `Inquiry Form Submission:
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Interest: ${formData.interest}
Message: ${formData.message}`;

        // WhatsApp number (with country code, e.g. +91 for India)
        const phoneNumber = "919925624342"; // 9925624342 with +91

        // Open WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
    };

    return (
        <section className='w-full flex flex-col gap-4 lg:gap-12 lg:px-0 px-5 pt-5 lg:pt-10 bg-[#F8F9FA]'>
            {/* nav */}
            <div>
                <nav
                    aria-label="Breadcrumb"
                    className="mx-auto max-w-7xl px-4 pt-3 text-sm"
                >
                    <ol className="flex flex-wrap items-center gap-2 text-slate-500">
                        <li>
                            <Link href="/" className="hover:text-[#FF4D30]">
                                Home
                            </Link>
                        </li>

                        <li aria-hidden="true">&gt;</li>

                        <li>
                            <Link href="/products" className="hover:text-[#FF4D30]">
                                Products
                            </Link>
                        </li>

                        <li aria-hidden="true">&gt;</li>

                        <li
                            className="font-semibold text-slate-800 capitalize"
                            aria-current="page"
                        >
                            {slug}
                        </li>
                    </ol>
                </nav>
            </div>
            {/* models */}
            <HeroSwiper models={model.get(slug)} features={features.get(slug)} setTab={setActive} title={title_description.get(slug)[0]} slug={slug} description={title_description.get(slug)[1]} />

            {/* fetures and adva */}
            <div className='w-full max-w-7xl mx-auto mt-2'>
                <h2 className='text-4xl font-bold font-sora mb-12 text-center'>features and Advantages</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {featureandadv.get(slug)?.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="h-[50px] w-[50px] shrink-0 flex items-center justify-center">
                                {item.icon}
                            </div>

                            <div className="mt-3 flex flex-col items-center">
                                <h3 className="font-sora font-bold text-[18px] lg:text-[20px] leading-[24px] lg:leading-[28px] text-[#09273A]">
                                    {item.features}
                                </h3>

                                <p className="mt-2 max-w-[260px] font-inter font-normal text-[14px] leading-[22px] text-[#5D5D5D]">
                                    {item.advantage}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {categoryOfFan.get(slug) &&
                (
                    <div className='w-full'>
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 mx-auto max-w-7xl">
                            {/* Left side: text */}
                            <div className="flex-1">
                                <div className='flex gap-2 items-center mb-4'>
                                    <span className='w-5 h-0.5 bg-[#fdcd2e]'></span> <span className='tracking-[3px] text-[12px] font-bold'>THE RANGE</span>
                                </div>
                                <h2 className="text-4xl font-bold mb-4">{categoryOfFan.get(slug).heading} <span className='text-[#fdcd2e]'>MANUFACTURER</span> </h2>

                                <p className="text-gray-700 mb-6">{categoryOfFan.get(slug).description}</p>

                                <ul className="space-y-4">
                                    {categoryOfFan.get(slug).list.map((item: string, i: number) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="bg-[#fdcd2e]/15 text-[#fdcd2e] px-2 py-1 text-[12px] rounded-full">✔</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right side: image */}
                            <div className="flex-1">
                                <img
                                    src={categoryOfFan.get(slug).image}
                                    alt={categoryOfFan.get(slug).heading}
                                    className="rounded-lg shadow-lg w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                )}



            {/************Tabs*************************/}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className="w-full flex flex-col gap-[26px]">
                {/* Tabs */}
                <div className='w-full'>
                    <div
                        id='tabs'
                        className="max-w-7xl w-full mx-auto flex bg-white items-center gap-8 py-4 px-3 lg:px-16 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        <Link
                            href="/products/abc"
                            onClick={(e) => {
                                e.preventDefault();
                                setActive("Description");
                            }}
                            className={`text-[12px] leading-4 tracking-[0.72px] font-bold shrink-0 ${active === "Description"
                                ? "border-b-2 border-[#09273A] pb-2"
                                : ""
                                }`}
                        >
                            DESCRIPTION
                        </Link>

                        <Link
                            href="/products/abc"
                            onClick={(e) => {
                                e.preventDefault();
                                setActive("Product specifications");
                            }}
                            className={`text-[12px] leading-4 tracking-[0.72px] font-bold shrink-0 ${active === "Product specifications"
                                ? "border-b-2 border-[#09273A] pb-2"
                                : ""
                                }`}
                        >
                            SPECIFICATIONS
                        </Link>


                        {data.safety && (
                            <Link
                                href="/products/abc"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActive("Safety features");
                                }}
                                className={`cursor-pointer text-[12px] leading-4 tracking-[0.72px] font-bold shrink-0 ${active === "Safety features"
                                    ? "border-b-2 border-[#09273A] pb-2"
                                    : ""
                                    }`}
                            >
                                SAFETY FEATURES
                            </Link>)}

                        {data.installation && (
                            <Link
                                href="/products/abc"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActive("Installion requirements");
                                }}
                                className={`cursor-pointer text-[12px] leading-4 tracking-[0.72px] font-bold shrink-0 ${active === "Installion requirements"
                                    ? "border-b-2 border-[#09273A] pb-2"
                                    : ""
                                    }`}
                            >
                                INSTALLATION REQUIREMENTS
                            </Link>)}
                        {data.warrenty && (
                            <Link
                                href="/products/abc"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActive("warrenty");
                                }}
                                className={`cursor-pointer text-[12px] leading-4 tracking-[0.72px] font-bold shrink-0 ${active === "warrenty"
                                    ? "border-b-2 border-[#09273A] pb-2"
                                    : ""
                                    }`}
                            >
                                WARRENTY
                            </Link>)}
                        <Link
                            href="/products/abc"
                            onClick={(e) => {
                                e.preventDefault();
                                setActive("Ask For a Price");
                            }}
                            className={`cursor-pointer text-[12px] leading-4 tracking-[0.72px] font-bold shrink-0 ${active === "Ask For a Price"
                                ? "border-b-2 border-[#09273A] pb-2"
                                : ""
                                }`}
                        >
                            ASK FOR A PRICE
                        </Link>
                    </div>
                </div>

                {/* Content */}
                <section className={`w-full max-w-7xl mx-auto px-5 lg:px-[32px] py-5 lg:py-10 border border-[#C3C5D94D] border-l-4 border-l-[#09273A] ${active == "Ask For a Price" ? "bg-white" : ""}`}>

                    {/* DESCRIPTION */}
                    {active === "Description" && (
                        <div className='flex flex-col gap-6'>
                            {/* <h2 className="font-sora font-bold text-[32px] leading-[40px] text-[#09273A]">
                                Description
                            </h2> */}

                            {data.description.map((section: any, idx: number) => (
                                <div key={idx} className="">
                                    <h3 className="font-sora font-bold uppercase text-[20px] leading-[28px] text-[#09273A] mb-3">
                                        {section.heading}
                                    </h3>

                                    {section.type === "paragraph" && (
                                        <div className="space-y-4">
                                            {section.data.map((line: string, i: number) => (
                                                <p
                                                    key={i}
                                                    className="font-inter font-normal text-[16px] text-[#434656] leading-[24px]"
                                                >
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    {section.type === "list" && (
                                        <ul className="space-y-2">
                                            {section.data.map((item: string, i: number) => (
                                                <li
                                                    key={i}
                                                    className="relative pl-6 font-inter  font-normal text-[16px] leading-[24px] 
                                                        before:content-[''] before:absolute before:left-0 before:top-[0.62em]
                                                        before:w-2 before:h-2 before:bg-[#F5A623] before:rotate-45 text-[#434656]"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* SPECIFICATIONS */}
                    {active === "Product specifications" && (
                        <div>
                            <h2 className="font-sora font-bold text-[24px] lg:text-[32px] leading-[40px] text-[#09273A]">
                                Product Specifications
                            </h2>

                            <div className="mt-8 w-full overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#09273A] text-white">
                                            {Object.keys(data.table[0]).map((key) => (
                                                <th
                                                    key={key}
                                                    className="text-left px-5 py-3 font-inter font-medium text-[14px] leading-[20px] tracking-[0.14px]"
                                                >
                                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.table.map((item: Object, index: number) => (
                                            <tr
                                                key={index}
                                                className={
                                                    index % 2 === 0
                                                        ? "bg-[#09273A1F]"
                                                        : "bg-white"
                                                }
                                            >
                                                {Object.values(item).map((value, valueIndex) => (
                                                    <td
                                                        key={valueIndex}
                                                        className="px-5 py-3 font-inter font-medium text-[14px] leading-[20px] tracking-[0.14px] text-[#5D5D5D]"
                                                    >
                                                        {value}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* SAFETY */}
                    {active === "Safety features" && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {data.safety.map((card: any, idx: number) => (
                                <div
                                    key={idx}
                                    className="flex flex-col justify-center border rounded-lg p-6 shadow-md bg-white 
                                            transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fadeUp"
                                >
                                    <div
                                        className="p-4 rounded-lg w-fit flex items-center justify-center"
                                        style={{
                                            background: "linear-gradient(150deg, #2e5aa8, #1E3D75)",
                                        }}>
                                        <div className='h-7 w-7 text-white'>
                                            {card.icon}
                                        </div>
                                    </div>
                                    <h4 className="mt-4 font-bold text-lg text-[#09273A]">{card.title}</h4>
                                    <p className="mt-2 text-[#475569] text-[16px] leading-6">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                    )}

                    {/* WARRENTY */}
                    {active === "warrenty" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.warrenty.map((card: any, idx: number) => (
                                <div
                                    key={idx}
                                    className="flex flex-col justify-center border rounded-lg p-6 shadow-md bg-white 
                                            transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fadeUp"
                                >
                                    <div
                                        className="p-4 rounded-lg w-fit flex items-center justify-center"
                                        style={{
                                            background: "linear-gradient(150deg, #2e5aa8, #1E3D75)",
                                        }}>
                                        <div className='h-7 w-7 text-white'>
                                            {card.icon}
                                        </div>
                                    </div>
                                    <h4 className="mt-4 font-bold text-lg text-[#09273A]">{card.title}</h4>
                                    <p className="mt-2 text-[#475569] text-[16px] leading-6">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                    )}

                    {/* INSTALLATION REQUIREMENTS */}
                    {active === "Installion requirements" && (
                        <div className='flex flex-col gap-4'>
                            {/* <h2 className="font-sora font-bold text-[32px] leading-[40px] text-[#09273A]">
                                Description
                            </h2> */}

                            {data.installation.map((section: any, idx: number) => (
                                <div key={idx} className="">
                                    <h3 className="font-sora font-bold uppercase text-[20px] leading-[28px] mb-3">
                                        {section.heading}
                                    </h3>

                                    {section.type === "paragraph" && (
                                        <div className="space-y-4">
                                            {section.data.map((line: string, i: number) => (
                                                <p
                                                    key={i}
                                                    className="font-inter text-[#434656] text-[16px] leading-[24px]"
                                                >
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    {section.type === "list" && (
                                        <ul className="space-y-2">
                                            {section.data.map((item: string, i: number) => (
                                                <li
                                                    key={i}
                                                    className="relative pl-6 font-inter text-[16px] leading-[24px] text-[#434656]
                                                        before:content-[''] before:absolute before:left-0 before:top-[0.62em]
                                                        before:w-2 before:h-2 before:bg-[#F5A623] before:rotate-45"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ASK FOR A PRICE */}
                    {active === "Ask For a Price" && (
                        <div className='bg-white'>
                            <h2 className="font-sora font-bold text-[32px] leading-[40px] text-[#09273A]">
                                Ask For a Price
                            </h2>
                            <p className="font-inter font-normal text-[#434656] text-[16px] leading-[24px] tracking-[0px] align-middle">
                                Tell us what you need, and our engineering team will get back to you within 24 hours with the right solution and pricing.
                            </p>

                            <form className="mt-8 w-full" onSubmit={handleSubmit}>
                                {/* First Row */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[12px] leading-4 tracking-[1.2px] font-bold">Full Name</p>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="First Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full h-[52px] px-4 border bg-[#F1F1F1] border-[#C3C5D94D] outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[12px] leading-4 tracking-[1.2px] font-bold">Company / Organization</p>
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Company / Organization"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full h-[52px] px-4 border bg-[#F1F1F1] border-[#C3C5D94D] outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Second Row */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[12px] leading-4 tracking-[1.2px] font-bold">Email address</p>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full h-[52px] px-4 border bg-[#F1F1F1] border-[#C3C5D94D] outline-none"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[12px] leading-4 tracking-[1.2px] font-bold">Phone Number (Optional)</p>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone No."
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full h-[52px] px-4 border bg-[#F1F1F1] border-[#C3C5D94D] outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Product Interest */}
                                <div className="flex flex-col gap-2 mt-5">
                                    <p className="text-[12px] leading-4 tracking-[1.2px] font-bold">Product Interest Area</p>
                                    <div className="relative bg-[#F1F1F1] border border-[#C3C5D94D]" >
                                        {/* <select
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            className="appearance-none w-full py-2.5 pl-3 pr-10"
                                            required
                                        >
                                            <option value="">Product Interest</option>
                                            <option value="High Airflow">High Airflow</option>
                                            <option value="Heavy Duty">Heavy Duty</option>
                                            <option value="Low Maintenance">Low Maintenance</option>
                                        </select> */}
                                        <SelectBox
                                            items={["High Airflow", "Heavy Duty", "Low Maintenance"]}
                                            classes="w-full bg-[#F1F1F1] border-[#C3C5D94D] outline-none bg-[#F1F1F1]"
                                            value={formData.interest}
                                            onChange={(val) => valueChange(val)}
                                            bg='#F1F1F1'
                                        />


                                        {/* <SelectBox
                                            name='interest'
                                            onChange={handleChange}
                                            value={formData.interest}
                                            items={[
                                                "High Airflow",
                                                "Heavy Duty",
                                                "Low Maintenance",
                                            ]}
                                            className="relative bg-[#F1F1F1]"
                                        /> */}
                                        <svg
                                            className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke="currentColor" strokeWidth="2" d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-2 mt-5">
                                    <p className="text-[12px] leading-4 tracking-[1.2px] font-bold">Project Specifications / Message</p>
                                    <textarea
                                        name="message"
                                        placeholder="Provide details regarding airflow volume (CFM), facility dimensions, operating environment, or specific technical challenges..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-4 border bg-[#F1F1F1] border-[#C3C5D94D] outline-none resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.02 }}
                                    type="submit"
                                    className="w-full h-[52px] mt-5 px-8 py-4 bg-[#09273A] text-white flex items-center justify-center"
                                >
                                    <span className="mr-3">SUBMIT INQUIRY</span>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white" />
                                    </svg>
                                </motion.button>

                                <p className="text-[11px] mt-5 leading-[16.5px] font-normal text-[#434656] text-center">
                                    By submitting this form, you agree to our Privacy Policy regarding data collection and industrial<br />
                                    communications.
                                </p>
                            </form>

                        </div>
                    )}

                </section>
            </motion.div>
            <div className='w-full bg-[#09273a] py-20'>
                <div className='flex flex-col gap-5 mx-auto w-full max-w-7xl lg:px-0 px-5'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-5 h-0.5 bg-[#fdcd2e]'></div>
                            <div className='text-[12px] tracking-[1.2px] text-[#fdcd2e] font-bold'> SUITABLE FOR</div>
                        </div>
                        <h3 className='text-white text-3xl font-bold uppercase'>WHERE THE <span className='text-[#fdcd2e]'>{generateFanCodes(slug.split("-"))}</span> FITS</h3>
                        <div className='text-[#8D9AAB]'>Facility types where this diameter and drive type is a routine specification.</div>
                    </div>
                    <div>
                        <div className='flex gap-2 px-4 py-2 rounded-full bg-[#EBEFF5]/5 text-white hover:text-[#09273a] hover:font-medium hover:bg-[#fdcd2e] w-fit'>
                            <svg
                                className="ic h-5 w-5  hover:font-bold transition-colors"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4l9.4-9.4a4 4 0 0 0-1-1z"></path>
                            </svg>

                            <div>Automobile Service Stations</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left side: Image */}
                <div className="flex">
                    <Image
                        src="/aboutlanding.png" // replace with your actual image path
                        alt={`How ${slug.replace("-", " ")} work`}
                        width={600}
                        height={600}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Right side: Text */}
                <div className="flex flex-col gap-4 text-left">
                    <h2 className="text-4xl font-bold font-sora">
                        How do {slug.split("-").slice(-2).join(" ")} work?
                    </h2>
                    {principal.get(slug)?.map((e: string, idx: number) => (
                        <p
                            key={idx}
                            className="font-inter font-normal text-[16px] leading-[22px] lg:leading-[24px] text-[#5D5D5D]"
                        >
                            {e}
                        </p>
                    ))}
                </div>
            </div>

            {/* why should */}
            {
                whyshould.get(slug) && <div className='w-full max-w-7xl mx-auto flex flex-col gap-8 py-3'>
                    <h2 className='text-4xl font-bold font-sora text-center'>Why Should You Buy an Industrial {slug.split("-").slice(-2).join(" ")}?</h2>
                    {
                        whyshould.get(slug).map((e: string, idx: number) => (
                            <p className='font-inter font-normal text-[16px] leading-[22px] lg:leading-[24px] text-[#5D5D5D]' key={idx}>{e}</p>
                        ))
                    }
                </div>
            }

            {application.get(slug) && (
                <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 py-3">
                    <h2 className="text-4xl font-bold font-sora text-center">
                        {slug.split("-").slice(-2).join(" ")} Applications in Different Industries
                    </h2>

                    {application.get(slug).map((section: any, idx: number) => (
                        <div key={idx}>
                            {section.type === "paragraph" &&
                                section.data.map((para: string, i: number) => (
                                    <p
                                        key={i}
                                        className="text-[#5D5D5D] font-inter text-[16px] leading-6 mb-4"
                                    >
                                        {para}
                                    </p>
                                ))}

                            {section.type === "list" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:py-6">
                                    {section.data.map((item: string, i: number) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <svg
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                className="shrink-0 mt-0.5"
                                            >
                                                <circle cx="11" cy="11" r="10" fill="#09273A" />
                                                <path
                                                    d="M6.5 11.2L9.5 14.2L15.5 8.2"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="font-inter font-medium text-[16px] leading-[24px] text-[#5D5D5D]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

        </section>
    )
}
