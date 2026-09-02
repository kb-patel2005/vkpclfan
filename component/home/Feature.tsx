import React from "react";

// Custom SVG components
const LocationIcon = () => (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#142844" />
    </svg>
);

const WarrantyIcon = () => (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.95 13.55L12.6 7.9L11.175 6.475L6.95 10.7L4.85 8.6L3.425 10.025L6.95 13.55ZM8 20C5.68333 19.4167 3.77083 18.0875 2.2625 16.0125C0.754167 13.9375 0 11.6333 0 9.1V3L8 0L16 3V9.1C16 11.6333 15.2458 13.9375 13.7375 16.0125C12.2292 18.0875 10.3167 19.4167 8 20ZM8 17.9C9.73333 17.35 11.1667 16.25 12.3 14.6C13.4333 12.95 14 11.1167 14 9.1V4.375L8 2.125L2 4.375V9.1C2 11.1167 2.56667 12.95 3.7 14.6C4.83333 16.25 6.26667 17.35 8 17.9Z" fill="#142844" />
    </svg>

);

const Star = () => (
    <svg width="24" height="24" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg" fill="#FFD700">
        <text x="0" y="20" fontSize="20">⭐</text>
    </svg>

);

const BadgeCheck = () => (
    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.675 11.7L6.55 8.85L4.25 7H7.1L8 4.2L8.9 7H11.75L9.425 8.85L10.3 11.7L8 9.925L5.675 11.7ZM2 21V13.275C1.36667 12.575 0.875 11.775 0.525 10.875C0.175 9.975 0 9.01667 0 8C0 5.76667 0.775 3.875 2.325 2.325C3.875 0.775 5.76667 0 8 0C10.2333 0 12.125 0.775 13.675 2.325C15.225 3.875 16 5.76667 16 8C16 9.01667 15.825 9.975 15.475 10.875C15.125 11.775 14.6333 12.575 14 13.275V21L8 19L2 21ZM8 14C9.66667 14 11.0833 13.4167 12.25 12.25C13.4167 11.0833 14 9.66667 14 8C14 6.33333 13.4167 4.91667 12.25 3.75C11.0833 2.58333 9.66667 2 8 2C6.33333 2 4.91667 2.58333 3.75 3.75C2.58333 4.91667 2 6.33333 2 8C2 9.66667 2.58333 11.0833 3.75 12.25C4.91667 13.4167 6.33333 14 8 14ZM4 18.025L8 17L12 18.025V14.925C11.4167 15.2583 10.7875 15.5208 10.1125 15.7125C9.4375 15.9042 8.73333 16 8 16C7.26667 16 6.5625 15.9042 5.8875 15.7125C5.2125 15.5208 4.58333 15.2583 4 14.925V18.025Z" fill="#142844" />
    </svg>


);

const TrendingUp = () => (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.4 12L0 10.6L7.4 3.15L11.4 7.15L16.6 2H14V0H20V6H18V3.4L11.4 10L7.4 6L1.4 12Z" fill="#142844" />
    </svg>

);

// You can define more custom SVGs here (StarIcon, BadgeIcon, TrendingIcon) using your raw paths

const data = [
    {
        icon: LocationIcon,
        title: "Made in India",
        para: "AHMEDABAD, GUJARAT",
    },
    {
        icon: WarrantyIcon,
        title: "5-Year Warranty",
        para: "MOTOR & GEARBOX",
    },
    {
        icon: Star,
        title: "4.9★",
        para: "1,022 VERIFIED REVIEWS",
    },
    {
        icon: BadgeCheck,
        title: "CE Certified",
        para: "ALL MODELS",
    },
    {
        icon: TrendingUp,
        title: "4,500+ Installs",
        para: "ACROSS INDIA",
    },
    // Add other items with your custom SVGs
];

export default function Features() {
    return (
        <section className="mt-0 lg:px-6 py-12 w-full bg-[#F8F9FA]">
            <div className="mx-auto max-w-7xl flex-wrap items-center justify-center lg:justify-between gap-6 flex">
                {data.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={idx}
                            className="flex flex-col items-center rounded-lg p-0 md:p-3 lg:p-4 text-center transition hover:scale-105 cursor-pointer"
                        >
                            {/* Icon */}
                            <div className="flex h-12 w-16 mb-4 items-center justify-center rounded-full bg-white opacity-80">
                                <div className=" rounded-full">
                                    <Icon />
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-[16px] font-medium leading-7 text-[#09273A]">
                                {item.title}
                            </h2>

                            {/* Description */}
                            <p className="text-[10px] text-[#44474D99] opacity-60">
                                {item.para}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
