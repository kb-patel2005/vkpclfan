'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { SelectBox } from '../common/SelectBox';
import Image from 'next/image';

export default function ContactDetails() {

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
        // <section className='w-full max-w-7xl mx-auto'>
        //     <div></div>
        //     <div className='bg-white'>
        //         <h2 className="font-sora font-bold text-[32px] leading-[40px] text-[#09273A]">
        //             Ask For a Price
        //         </h2>
        //         <p className="font-inter font-normal text-[#434656] text-[16px] leading-[24px] tracking-[0px] align-middle">
        //             Tell us what you need, and our engineering team will get back to you within 24 hours with the right solution and pricing.
        //         </p>


        //     </div>
        // </section>
        <motion.section
            id='applicationform'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-7xl mx-auto lg:px-0 px-5">
            <div className="grid grid-cols-12 gap-6">
                {/* Left side: 5 columns */}
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                    <div className="bg-white flex flex-col gap-6 p-8 border-l-4 border-l-[#09273A]">
                        <p className='text-xs leading-4 tracking-[1.2px] font-bold'>DIRECT COMMUNICATION</p>
                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-4'>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.95 18C14.8667 18 12.8083 17.5458 10.775 16.6375C8.74167 15.7292 6.89167 14.4417 5.225 12.775C3.55833 11.1083 2.27083 9.25833 1.3625 7.225C0.454167 5.19167 0 3.13333 0 1.05C0 0.75 0.1 0.5 0.3 0.3C0.5 0.1 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0791667 5.725 0.2375C5.90833 0.395833 6.01667 0.583333 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.70417 9.1125 5.1625 9.6875C5.62083 10.2625 6.125 10.8167 6.675 11.35C7.19167 11.8667 7.73333 12.3458 8.3 12.7875C8.86667 13.2292 9.46667 13.6333 10.1 14L12.45 11.65C12.6 11.5 12.7958 11.3875 13.0375 11.3125C13.2792 11.2375 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1375 17.775 12.3125C17.925 12.4875 18 12.6833 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z" fill="#09273A" />
                                    </svg>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-medium text-[#434656] leading-4 tracking-[0.14px]'>Global Support HQ</p>
                                    <div className='font-manrope font-bold text-2xl leading-8 text-[#121B2E]'>+1 (800) 555-0199</div>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div>
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z" fill="#09273A" />
                                    </svg>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-medium text-[#434656] leading-4 tracking-[0.14px]'>Engineering Inquiries</p>
                                    <span className='font-manrope font-semibold text-lg leading-7 text-[#121B2E]'>systems@foent.industrial</span>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 20V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4L0 20ZM4 12H12V10H4V12ZM4 9H16V7H4V9ZM4 6H16V4H4V6Z" fill="#09273A" />
                                    </svg>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-medium text-[#434656] leading-4 tracking-[0.14px]'>Global Support HQ</p>
                                    <span className='font-manrope font-semibold text-lg leading-7 text-[#121B2E]'>+847297599</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex flex-col p-8 border-l-4 border-l-[#09273A] gap-6">
                        <p className='text-xs leading-4 tracking-[1.2px] font-bold'>HEADQUARTERS</p>
                        <div className='flex gap-4'>
                            <div>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#375384" />
                                </svg>

                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='font-medium text-[#121B2E] leading-4 text-[16px]'>Floent Air industrial fans</p>
                                <div className='font-manrope font-medium text-[16px] leading-6 text-[#434656]'>xyz-gujrat-india</div>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='absolute bottom-4 left-4 py-1 px-2 text-sm leading-5 tracking-[0.14px] font-medium bg-white'>N 41.77° / W -87.77°</div>
                            <div className='absolute bottom-4 right-4 bg-[#071B3A] p-2 rounded-[2px]'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z" fill="white" />
                                </svg>

                            </div>
                            <Image src="/map.jpg" alt="map" height={300} width={300} className='w-full h-[250px]' />
                        </div>
                    </div>
                </div>

                {/* Right side: 7 columns */}
                <div className="col-span-12 lg:col-span-7 bg-white p-6 lg:p-12">
                    <h2 className="font-sora font-bold text-[26px] leading-[40px] text-[#09273A]">
                        Request Technical Consultation
                    </h2>
                    <p className="font-inter font-normal text-[#434656] text-[16px] leading-[24px]">
                        Submit your requirements below. Our engineering team responds to all inquiries within 24 hours.
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
            </div>
        </motion.section>

    )
}
