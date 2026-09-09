'use client'
import { motion } from 'framer-motion';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SelectBox } from '../common/SelectBox';
import HeroSwiper from '../common/HeroSwiper';

const features = [
    {
        label: "High Airflow",
        icon: (
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.5 17C8.66667 17 7.95833 16.7083 7.375 16.125C6.79167 15.5417 6.5 14.8333 6.5 14H8.5C8.5 14.2833 8.59583 14.5208 8.7875 14.7125C8.97917 14.9042 9.21667 15 9.5 15C9.78333 15 10.0208 14.9042 10.2125 14.7125C10.4042 14.5208 10.5 14.2833 10.5 14C10.5 13.7167 10.4042 13.4792 10.2125 13.2875C10.0208 13.0958 9.78333 13 9.5 13H0V11H9.5C10.3333 11 11.0417 11.2917 11.625 11.875C12.2083 12.4583 12.5 13.1667 12.5 14C12.5 14.8333 12.2083 15.5417 11.625 16.125C11.0417 16.7083 10.3333 17 9.5 17ZM0 7V5H13.5C13.9333 5 14.2917 4.85833 14.575 4.575C14.8583 4.29167 15 3.93333 15 3.5C15 3.06667 14.8583 2.70833 14.575 2.425C14.2917 2.14167 13.9333 2 13.5 2C13.0667 2 12.7083 2.14167 12.425 2.425C12.1417 2.70833 12 3.06667 12 3.5H10C10 2.51667 10.3375 1.6875 11.0125 1.0125C11.6875 0.3375 12.5167 0 13.5 0C14.4833 0 15.3125 0.3375 15.9875 1.0125C16.6625 1.6875 17 2.51667 17 3.5C17 4.48333 16.6625 5.3125 15.9875 5.9875C15.3125 6.6625 14.4833 7 13.5 7H0ZM16.5 15V13C16.9333 13 17.2917 12.8583 17.575 12.575C17.8583 12.2917 18 11.9333 18 11.5C18 11.0667 17.8583 10.7083 17.575 10.425C17.2917 10.1417 16.9333 10 16.5 10H0V8H16.5C17.4833 8 18.3125 8.3375 18.9875 9.0125C19.6625 9.6875 20 10.5167 20 11.5C20 12.4833 19.6625 13.3125 18.9875 13.9875C18.3125 14.6625 17.4833 15 16.5 15Z"
                    fill="#09273A"
                />
            </svg>
        ),
    },
    {
        label: "Text",
        icon: (
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.55 16.2L11.725 10H7.725L8.45 4.325L3.825 11H7.3L6.55 16.2ZM4 20L5 13H0L9 0H11L10 8H16L6 20H4Z"
                    fill="#09273A"
                />
            </svg>
        ),
    },
    {
        label: "Heavy Duty",
        icon: (
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.4 18.025L10.925 12.55L13.025 10.45L18.5 15.925L16.4 18.025ZM2.6 18.025L0.5 15.925L7.4 9.025L5.7 7.325L5 8.025L3.725 6.75V8.8L3.025 9.5L0 6.475L0.7 5.775H2.75L1.5 4.525L5.05 0.975C5.38333 0.641667 5.74167 0.4 6.125 0.25C6.50833 0.1 6.9 0.025 7.3 0.025C7.7 0.025 8.09167 0.1 8.475 0.25C8.85833 0.4 9.21667 0.641667 9.55 0.975L7.25 3.275L8.5 4.525L7.8 5.225L9.5 6.925L11.75 4.675C11.6833 4.49167 11.6292 4.3 11.5875 4.1C11.5458 3.9 11.525 3.7 11.525 3.5C11.525 2.51667 11.8625 1.6875 12.5375 1.0125C13.2125 0.3375 14.0417 0 15.025 0C15.275 0 15.5125 0.025 15.7375 0.075C15.9625 0.125 16.1917 0.2 16.425 0.3L13.95 2.775L15.75 4.575L18.225 2.1C18.3417 2.33333 18.4208 2.5625 18.4625 2.7875C18.5042 3.0125 18.525 3.25 18.525 3.5C18.525 4.48333 18.1875 5.3125 17.5125 5.9875C16.8375 6.6625 16.0083 7 15.025 7C14.825 7 14.625 6.98333 14.425 6.95C14.225 6.91667 14.0333 6.85833 13.85 6.775L2.6 18.025Z"
                    fill="#09273A"
                />
            </svg>
        ),
    },
    {
        label: "Low Maintenance",
        icon: (
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.3 20L6.9 16.8C6.68333 16.7167 6.47917 16.6167 6.2875 16.5C6.09583 16.3833 5.90833 16.2583 5.725 16.125L2.75 17.375L0 12.625L2.575 10.675C2.55833 10.5583 2.55 10.4458 2.55 10.3375C2.55 10.2292 2.55 10.1167 2.55 10C2.55 9.88333 2.55 9.77083 2.55 9.6625C2.55 9.55417 2.55833 9.44167 2.575 9.325L0 7.375L2.75 2.625L5.725 3.875C5.90833 3.74167 6.1 3.61667 6.3 3.5C6.5 3.38333 6.7 3.28333 6.9 3.2L7.3 0H12.8L13.2 3.2C13.4167 3.28333 13.6208 3.38333 13.8125 3.5C14.0042 3.61667 14.1917 3.74167 14.375 3.875L17.35 2.625L20.1 7.375L17.525 9.325C17.5417 9.44167 17.55 9.55417 17.55 9.6625C17.55 9.77083 17.55 9.88333 17.55 10C17.55 10.1167 17.5333 10.2292 17.5 10.3375L20.075 12.625L17.325 17.375L14.375 16.125C14.1917 16.2583 14 16.3833 13.8 16.5C13.6 16.6167 13.4 16.7167 13.2 16.8L12.8 20H7.3Z"
                    fill="#09273A"
                />
            </svg>
        ),
    },
];

const data = [
    {
        heading: "Product Specifications",

        description:
            "This fan is designed for high-performance airflow and reliable operation in demanding environments.",

        table: [
            {
                parameter: "Motor Power",
                value: "123",
            },
            {
                parameter: "Airflow",
                value: "2456",
            },
            {
                parameter: "Speed",
                value: "1200 RPM",
            },
            {
                parameter: "Voltage",
                value: "230V",
            },
        ],

        url: "https://example.com/product",
    },
];


const models = [
    {
        title: "hero",
        url: "/images/exhaust-main.png"
    },
    {
        title: "FLEH - 1000",
        url: "/exhuast1.png"
    },
    {
        title: "FLEH - 1220",
        url: "/exhuast2.png"
    },
    {
        title: "FLEH - 1380",
        url: "/exhuast3.png"
    },
];

const productData = {
    heading: "Product Specifications",
    description: "The Floent Exhaust Fan is engineered for powerful and efficient air extraction in industrial, commercial, agricultural, and large-scale ventilation environments. Designed with high-performance aerodynamic blades, a robust galvanized steel frame, and an efficient motor, it provides strong airflow for effective heat, humidity, fumes, dust, and stale-air removal.",
    table: [
        { parameter: "Blade Dia (mm)", value: "900", },
        { parameter: "Voice Level (db)", value: "< 70", },
        { parameter: "Air flow (CM/H)", value: "22000", },
        { parameter: "Speed (rpm)", value: "560", },
        { parameter: "Power (W)", value: "550", },
        { parameter: "Voltage", value: "415", },
        { parameter: "Dimension (mm) (mm) (HxW)", value: "1000 x 1000 x 400", },
        { parameter: "Motor Type", value: "Direct Drive", },
        { parameter: "Blade Material", value: "Stainless Steel", },
        { parameter: "Frame Material", value: "Galvanized Steel", },
    ],
};

export default function DetailLanding({ slug }: { slug: string }) {

    useEffect(() => {
        if (window.location.hash) {
            setActive("Ask For a Price")
        }
    }, []);

    const [active, setActive] = useState("Description");
    const [heroimage, setHeroimage] = useState(models[0].url);
    const [activeModel, setActiveModel] = useState(-1);

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
            <div>
                <nav
                    aria-label="Breadcrumb"
                    className="mx-auto max-w-7xl px-4 pt-3 text-sm"
                >
                    <ol className="flex items-center gap-2 text-slate-500 flex-wrap">
                        <li>
                            <Link href="/" className="hover:text-[#FF4D30]">
                                Home
                            </Link>
                        </li>

                        <li>{`>`}</li>

                        <li>
                            <Link href="/products" className="hover:text-[#FF4D30]">
                                products
                            </Link>
                        </li>

                        <li>{`>`}</li>
                        <li>
                            <li className="font-semibold text-slate-800">{slug}</li>
                        </li>
                    </ol>
                </nav>
            </div>
            <HeroSwiper models={models} features={features} setTab={setActive}/>

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className="w-full flex flex-col gap-[26px]">
                {/* Tabs */}
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

                    <Link
                        href="/products/abc"
                        onClick={(e) => {
                            e.preventDefault();
                            setActive("Ask For a Price");
                        }}
                        className={`text-[12px] leading-4 tracking-[0.72px] font-bold shrink-0 ${active === "Ask For a Price"
                            ? "border-b-2 border-[#09273A] pb-2"
                            : ""
                            }`}
                    >
                        ASK FOR A PRICE
                    </Link>
                </div>

                {/* Content */}
                <section className={`w-full max-w-7xl mx-auto px-5 lg:px-[32px] py-5 lg:py-10 border border-[#C3C5D94D] border-l-4 border-l-[#09273A] ${active == "Ask For a Price" ? "bg-white" : ""}`}>

                    {/* DESCRIPTION */}
                    {active === "Description" && (
                        <div>
                            <h2 className="font-sora font-bold text-[32px] leading-[40px] text-[#09273A]">
                                Description
                            </h2>

                            <p className="mt-4 font-inter font-light text-[16px] leading-[24px] text-[#09273A]">
                                {productData.description}
                            </p>
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
                                            <th className="text-left px-5 py-3 font-inter font-medium text-[14px] leading-[20px] tracking-[0.14px]">
                                                Parameter
                                            </th>

                                            <th className="text-left px-5 py-3 font-inter font-medium text-[14px] leading-[20px] tracking-[0.14px]">
                                                Value
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {productData.table.map((item, index) => (
                                            <tr
                                                key={index}
                                                className={
                                                    index % 2 === 0
                                                        ? "bg-[#09273A1F]"
                                                        : "bg-white"
                                                }
                                            >
                                                <td className="px-5 py-3 font-inter font-medium text-[14px] leading-[20px] tracking-[0.14px] text-[#5D5D5D]">
                                                    {item.parameter}
                                                </td>

                                                <td className="px-5 py-3 font-inter font-medium text-[14px] leading-[20px] tracking-[0.14px] text-[#5D5D5D]">
                                                    {item.value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
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


        </section>
    )
}
