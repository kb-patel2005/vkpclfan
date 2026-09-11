'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Support {
    type: string;
    value: any;
    title: string;
}

interface TableDatas {
    material: string;
    corrosionResistance: string;
    fatiguePerformance: string;
    recommendedUse: string;

}

interface Details {
    title: string;
    description: string;
    link: string;
}

interface LifeSpan {
    title: string;
    tag: string;
    icon: any;
}

interface DarkData { heading: string; description: string; icon: any }

const topics = [
    "The Challenge",
    "Environmental Exposure",
    "Material Fatigue",
    "Engineering Analysis",
    "Recommended Materials",
    "Results",
    "Conclusion"
]

const Heading = ({ text, idx }: { text: string, idx: number }) => {
    return (
        <div className='flex gap-4 items-baseline pb-2 border-b border-b-[#C5C6CE]'>
            <span className='text-[#75777E] font-medium text-xs tracking-[1.2px] font-jetBrainsMono'>0{idx}</span>
            <h1 className='font-semibold text-[32px] leading-[38.4px] text-[#09273A]'>{text}</h1>
        </div>
    )
}

const SubHeading = ({ text }: { text: string }) => {
    return (
        <h2 className='font-semibold text-2xl leading-[31.2px]'>{text}</h2>
    )
}

const DescriptionTag = ({ text }: { text: string }) => {
    return (
        <p className='text-[16px] text-[#44474D] leading-7 font-normal'>{text}</p>
    )
}

const Cards = ({ data }: { data: Support[] }) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center lg:justify-center w-full mx-auto py-8 border-y border-[#C5C6CE]">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`flex w-[100px] lg:w-[23%] flex-col items-center justify-center gap-3 ${index !== data.length - 1
                        ? "lg:border-r border-[#C5C6CE]"
                        : ""
                        }`}
                >
                    {/* Value */}
                    {item.type === "text" ? (
                        <h3 className="font-sora  leading-none text-[#09273A]">
                            {item.value}
                        </h3>
                    ) : (
                        <div
                            className="w-8 h-8 flex items-center justify-center"
                            dangerouslySetInnerHTML={{ __html: item.value }}
                        />
                    )}

                    {/* Title */}
                    <p className="font-inter font-medium text-[12px] leading-[12px] tracking-[1.2px] text-center text-[#75777E] uppercase">
                        {item.title}
                    </p>
                </div>
            ))}
        </div>
    )
}

const TableData = ({ data }: { data: TableDatas[] }) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full lg:w-full min-w-[600px] border-collapse">
                <thead>
                    <tr>
                        {["Material", "Corrosion Resistance", "Fatigue Performance", "Recommended Use"].map(
                            (heading, idx) => (
                                <th
                                    key={idx}
                                    className="py-[22px] px-4 font-inter font-medium text-[12px] leading-[12px] tracking-[1.2px] text-[#09273A] border border-[#C5C6CE] bg-[#F2F4F6] border-[#09273A] text-left"
                                >
                                    {heading}
                                </th>
                            )
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((m: TableDatas, idx: number) => (
                        <tr key={idx}>
                            <td className="font-inter font-medium text-[16px] leading-[28px] text-[#09273A] border py-[16.5px] px-4">
                                {m.material}
                            </td>
                            <td
                                className={`py-[16.5px] px-4 font-inter text-[16px] leading-[28px] border ${m.corrosionResistance.toLowerCase() === "low"
                                    ? "font-normal text-[#BA1A1A]"
                                    : m.corrosionResistance.toLowerCase() === "moderate"
                                        ? "font-normal text-[#44474D]"
                                        : "font-bold text-[#09273A]"
                                    }`}
                            >
                                {m.corrosionResistance}
                            </td>
                            <td className="font-inter font-normal text-[16px] leading-[28px] text-[#44474D] border py-[16.5px] px-4">
                                {m.fatiguePerformance}
                            </td>
                            <td className="font-inter font-normal text-[16px] leading-[28px] text-[#44474D] border py-[16.5px] px-4">
                                {m.recommendedUse}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



const MaterialCard = ({ data }: { data: Details[] }) => {
    return (
        <div className="flex flex-wrap gap-4 justify-between">
            {data.map((e, idx) => (
                <div
                    key={idx}
                    className="relative flex flex-col gap-2 pt-8 pb-6 px-6 w-full sm:w-[48%] lg:w-[30%] border border-[#C5C6CE]"
                >
                    {/* Top Accent Bar */}
                    <div className="h-2 w-8 bg-[#09273A] absolute top-0 left-0"></div>

                    {/* Title */}
                    <h3 className="font-inter font-semibold text-[24px] leading-[31.2px] text-[#09273A]">
                        {e.title}
                    </h3>

                    {/* Description */}
                    <p className="font-inter font-normal text-[14px] leading-[20px] text-[#44474D] pb-4 border-b border-b-[#C5C6CE]">
                        {e.description}
                    </p>

                    {/* Link */}
                    <span className="font-inter font-medium text-[12px] leading-[16px] tracking-[1.2px] text-[#09273A] pt-2">
                        {e.link} →
                    </span>
                </div>
            ))}
        </div>

    )
}

const DarkHeading = ({ text }: { text: string }) => {
    return (
        <h2 className='text-white font-bold text-2xl leading-[31.2px]'>{text}</h2>
    )
}

const DarkDescription = ({ text }: { text: string }) => {
    return (
        <p className="font-normal text-[16px] leading-[28px] tracking-[0px] pb-4 align-middle text-[#B6C7E8]">
            {text}
        </p>
    )
}

const DarkComponent = ({ data }: { data: DarkData }) => {
    return (
        <div className='relative p-8 bg-[#09273A] flex flex-col gap-2 rounded-[4px]'>
            <div className='absolute top-0 right-5 opacity-10'>
                {data.icon}
            </div>
            <DarkHeading text={data.heading} />
            <DarkDescription text={data.description} />
        </div>
    )
}

const LifeSpan = ({ data }: { data: LifeSpan }) => {
    return (
        <div className='flex justify-between bg-white border border-[#C5C6CE] p-6 items-center'>
            <div>
                <span className="font-medium text-[12px] leading-[12px] tracking-[1.2px] align-middle text-[#75777E]">
                    {data.title}
                </span>

                <h4 className="font-normal text-[16px] leading-[28px] tracking-[0px] align-middle text-[#09273A]">
                    {data.tag}
                </h4>
            </div>
            <div>
                {data.icon}
            </div>
        </div>
    )
}

const Category = ({ text }: { text: string }) => {
    return (
        <span className="w-fit font-medium text-[12px] leading-[16px] tracking-[1.2px] align-middle text-[#09273A] py-1 px-2 bg-[#F8F9FB] border border-[#C5C6CE]">
            {text}
        </span>
    )
}

const ImageCompo = ({ text }: { text: string }) => {
    return (
        <div className='w-[100%] flex justify-center'>
            <Image height={400} width={400} alt="image" src={text} />
        </div>
    )
}

const data = [
    {
        heading: "The Challenge",
        description: "Continuous operation in heavy manufacturing facilities demands extreme resilience from ventilation infrastructure. When exhausting chemical fumes, particularly acidic byproducts, standard materials degrade rapidly. The primary engineering challenge lies in maintaining structural integrity over long operational lifespans while subjected to aggressive corrosives.",
        lifespan: {
            title: "TARGET OPERATIONAL LIFESPAN",
            tag: "10,000+ HOURS",
            icon: (
                <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3V0H18V3H9ZM12 19.5H15V10.5H12V19.5ZM13.5 31.5C11.65 31.5 9.90625 31.1437 8.26875 30.4312C6.63125 29.7188 5.2 28.75 3.975 27.525C2.75 26.3 1.78125 24.8688 1.06875 23.2313C0.35625 21.5938 0 19.85 0 18C0 16.15 0.35625 14.4062 1.06875 12.7688C1.78125 11.1313 2.75 9.7 3.975 8.475C5.2 7.25 6.63125 6.28125 8.26875 5.56875C9.90625 4.85625 11.65 4.5 13.5 4.5C15.05 4.5 16.5375 4.75 17.9625 5.25C19.3875 5.75 20.725 6.475 21.975 7.425L24.075 5.325L26.175 7.425L24.075 9.525C25.025 10.775 25.75 12.1125 26.25 13.5375C26.75 14.9625 27 16.45 27 18C27 19.85 26.6437 21.5938 25.9312 23.2313C25.2188 24.8688 24.25 26.3 23.025 27.525C21.8 28.75 20.3688 29.7188 18.7313 30.4312C17.0938 31.1437 15.35 31.5 13.5 31.5Z" fill="#3F6088" />
                </svg>
            )
        }
    },
    {
        heading: "Environmental Exposure",
        description: "Airborne corrosives interact with atmospheric moisture, creating condensation that settles on blade surfaces. This environment accelerates pitting corrosion and stress corrosion cracking (SCC), severely compromising the aerodynamic efficiency and safety of standard steel alloys.",
        category: "FLOW DYNAMICS SCHEMATIC",
        image: "/fanparts.png"
    },
    {
        heading: "Material Fatigue",
        description: "Selecting the appropriate alloy requires balancing corrosion resistance with mechanical strength. Below is a comparative analysis of common industrial materials subjected to high-acid environments.",
        table: [
            {
                material: "Standard Carbon Steel",
                corrosionResistance: "Low",
                fatiguePerformance: "Moderate",
                recommendedUse: "Dry, non-corrosive environments only."
            },
            {
                material: "304 Stainless Steel",
                corrosionResistance: "Moderate",
                fatiguePerformance: "High",
                recommendedUse: "Mildly corrosive, general industrial."
            },
            {
                material: "316 Stainless Steel",
                corrosionResistance: "High",
                fatiguePerformance: "High",
                recommendedUse: "Severe chemical exposure, acidic fumes."
            },
            {
                material: "FRP (Fiberglass)",
                corrosionResistance: "Extreme",
                fatiguePerformance: "Moderate",
                recommendedUse: "Highly specialized extreme chemical zones."
            }
        ]

    },
    {
        darkComponenet: {
            id: "Engineering Analysis",
            heading: "Built for demanding industrial environments.",
            description: "Our engineering teams specify materials based on rigorous environmental testing and long-term fatigue modeling.",
            icon: (
                <svg width="91" height="93" viewBox="0 0 91 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 92.5294V77.5294H20.5L7.75 35.7794C5.5 34.5294 3.64583 32.6961 2.1875 30.2794C0.729167 27.8627 0 25.2794 0 22.5294C0 18.3627 1.45833 14.8211 4.375 11.9044C7.29167 8.98774 10.8333 7.52941 15 7.52941C18.25 7.52941 21.1458 8.46691 23.6875 10.3419C26.2292 12.2169 28 14.6127 29 17.5294H45V12.5294C45 11.1127 45.4792 9.92524 46.4375 8.96691C47.3958 8.00858 48.5833 7.52941 50 7.52941C50.75 7.52941 51.4792 7.69608 52.1875 8.02941C52.8958 8.36274 53.5 8.86274 54 9.52941L62.5 1.52941C63.25 0.779412 64.1458 0.300245 65.1875 0.0919118C66.2292 -0.116422 67.25 0.0294118 68.25 0.529412L87.75 9.52941C88.75 10.0294 89.4375 10.7586 89.8125 11.7169C90.1875 12.6752 90.1667 13.6127 89.75 14.5294C89.25 15.5294 88.5208 16.1752 87.5625 16.4669C86.6042 16.7586 85.6667 16.6961 84.75 16.2794L66.75 8.02941L55 19.0294V26.0294L66.75 36.7794L84.75 28.5294C85.6667 28.1127 86.625 28.0711 87.625 28.4044C88.625 28.7377 89.3333 29.3627 89.75 30.2794C90.25 31.2794 90.2917 32.2377 89.875 33.1544C89.4583 34.0711 88.75 34.7794 87.75 35.2794L68.25 44.5294C67.25 45.0294 66.2292 45.1752 65.1875 44.9669C64.1458 44.7586 63.25 44.2794 62.5 43.5294L54 35.5294C53.5 36.0294 52.8958 36.4877 52.1875 36.9044C51.4792 37.3211 50.75 37.5294 50 37.5294C48.5833 37.5294 47.3958 37.0502 46.4375 36.0919C45.4792 35.1336 45 33.9461 45 32.5294V27.5294H29C28.75 28.1961 28.4792 28.8211 28.1875 29.4044C27.8958 29.9877 27.5 30.6127 27 31.2794L52 77.5294H70V92.5294H5ZM15 27.5294C16.4167 27.5294 17.6042 27.0502 18.5625 26.0919C19.5208 25.1336 20 23.9461 20 22.5294C20 21.1127 19.5208 19.9252 18.5625 18.9669C17.6042 18.0086 16.4167 17.5294 15 17.5294C13.5833 17.5294 12.3958 18.0086 11.4375 18.9669C10.4792 19.9252 10 21.1127 10 22.5294C10 23.9461 10.4792 25.1336 11.4375 26.0919C12.3958 27.0502 13.5833 27.5294 15 27.5294Z" fill="white" />
                </svg>
            )
        }
    },
    {
        heading: "Recommended Materials",
        cards: [
            {
                title: "Alloy 316L",
                description: "Superior resistance to pitting in chloride environments.",
                link: "DATA SHEET"
            },
            {
                title: "Hastelloy C276",
                description: "Exceptional resistance to a wide variety of severe corrosives.",
                link: "DATA SHEET"
            },
            {
                title: "FRP Composites",
                description: "Non-metallic alternative for complete immunity to rust.",
                link: "DATA SHEET"
            }
        ]
    },
    {
        heading: "Results",
        supportItems: [
            {
                type: "text",
                value: "10k+",
                title: "HOURS"
            },
            {
                type: "svg",
                value: `<svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 30C8.525 29.125 5.65625 27.1312 3.39375 24.0187C1.13125 20.9062 0 17.45 0 13.65V4.5L12 0L24 4.5V13.65C24 17.45 22.8688 20.9062 20.6063 24.0187C18.3438 27.1312 15.475 29.125 12 30ZM12 26.85C14.6 26.025 16.75 24.375 18.45 21.9C20.15 19.425 21 16.675 21 13.65V6.5625L12 3.1875L3 6.5625V13.65C3 16.675 3.85 19.425 5.55 21.9C7.25 24.375 9.4 26.025 12 26.85Z" fill="#09273A"/>
                </svg>`,
                title: "HIGH RESISTANCE"
            },
            {
                type: "svg",
                value: `<svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.675 17.25C13.275 17.85 14.05 18.1438 15 18.1313C15.95 18.1187 16.65 17.775 17.1 17.1L25.5 4.5L12.9 12.9C12.225 13.35 11.8688 14.0375 11.8313 14.9625C11.7937 15.8875 12.075 16.65 12.675 17.25ZM15 0C16.475 0 17.8938 0.20625 19.2563 0.61875C20.6187 1.03125 21.9 1.65 23.1 2.475L20.25 4.275C19.425 3.85 18.5688 3.53125 17.6812 3.31875C16.7937 3.10625 15.9 3 15 3C11.675 3 8.84375 4.16875 6.50625 6.50625C4.16875 8.84375 3 11.675 3 15C3 16.05 3.14375 17.0875 3.43125 18.1125C3.71875 19.1375 4.125 20.1 4.65 21H25.35C25.925 20.05 26.3438 19.0625 26.6063 18.0375C26.8688 17.0125 27 15.95 27 14.85C27 13.95 26.8937 13.075 26.6812 12.225C26.4688 11.375 26.15 10.55 25.725 9.75L27.525 6.9C28.275 8.075 28.8687 9.325 29.3062 10.65C29.7437 11.975 29.975 13.35 30 14.775C30.025 16.2 29.8625 17.5625 29.5125 18.8625C29.1625 20.1625 28.65 21.4 27.975 22.575C27.7 23.025 27.325 23.375 26.85 23.625C26.375 23.875 25.875 24 25.35 24H4.65C4.125 24 3.625 23.875 3.15 23.625C2.675 23.375 2.3 23.025 2.025 22.575C1.375 21.45 0.875 20.2563 0.525 18.9937C0.175 17.7312 0 16.4 0 15C0 12.925 0.39375 10.9812 1.18125 9.16875C1.96875 7.35625 3.04375 5.76875 4.40625 4.40625C5.76875 3.04375 7.3625 1.96875 9.1875 1.18125C11.0125 0.39375 12.95 0 15 0Z" fill="#09273A"/>
                </svg>`,
                title: "OPTIMIZED PERF."
            },
            {
                type: "text",
                value: "2.5x",
                title: "EXTENDED LIFE"
            }
        ]
    },
    {
        heading: "Conclusion",
        subheading: "Engineering for the Environment",
        description: "The operational success of an industrial ventilation system hinges on specifying components engineered for the exact chemical environment they will face. Proactive material specification mitigates downtime, ensures regulatory compliance, and maximizes the return on infrastructure investment."
    }
]



export default function ArticleDetails() {

    const [active, setActive] = useState("The Challenge");

    return (
        <article className='mb-20 w-full'>
            <motion.div initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-6 px-5 lg:px-0">
                {/* Left Sidebar */}
                <div className="w-full lg:w-[260px] lg:sticky lg:top-24 h-fit shrink-0">
                    <p className="font-semibold text-xs tracking-[1.2px] pb-6">
                        IN THIS ARTICLE
                    </p>

                    <div className="flex flex-col gap-2">
                        {topics.map((e, idx) => (
                            <a
                                key={idx}
                                href={`#${e}`}
                                onClick={() => setActive(e)}
                                className={`${active === e
                                    ? "text-[#3F6088] bg-[#E7E8EA] border-l-2 border-l-[#3F6088]"
                                    : ""
                                    } font-semibold text-xs tracking-[1.2px] py-2 pl-4 text-[#44474D]`}
                            >
                                {String(idx + 1).padStart(2, "0")} {e}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-col gap-12 lg:gap-16 min-w-0">
                    {data.map((section, index) => (
                        <div
                            key={index}
                            id={section.heading ? section.heading : section.darkComponenet?.id}
                            className="flex flex-col gap-6 scroll-mt-24"
                        >
                            {section.heading && (
                                <Heading text={section.heading} idx={index + 1} />
                            )}

                            {section.subheading && <SubHeading text={section.subheading} />}

                            {section.description && (
                                <DescriptionTag text={section.description} />
                            )}

                            {section.table && <TableData data={section.table} />}

                            {section.category && <Category text={section.category} />}

                            {section.lifespan && <LifeSpan data={section.lifespan} />}

                            {section.image && <ImageCompo text={section.image} />}

                            {section.darkComponenet && (
                                <DarkComponent data={section.darkComponenet} />
                            )}

                            {section.cards && <MaterialCard data={section.cards} />}

                            {section.supportItems && <Cards data={section.supportItems} />}
                        </div>
                    ))}
                </div>
            </motion.div>

        </article>
    )
}
