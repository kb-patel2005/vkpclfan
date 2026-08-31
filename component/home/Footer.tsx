import React from "react";
import {
    BriefcaseBusiness,
    Camera,
    Mail,
    Phone,
    Play,
    Users,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="text-[#5D5D5D]">

            <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">

                {/* ================= 4 COLUMNS ================= */}
                <div className="flex flex-wrap lg:gap-8 gap-10 justify-between">

                    {/* ================= COLUMN 1 ================= */}
                    <div>

                        {/* Logo */}
                        <img
                            src="/floent.png"
                            alt="Floent Fans"
                            className="mb-5 h-18 w-auto object-contain bg-white p-3 rounded-2xl"
                        />

                        {/* Description */}
                        <p className="max-w-sm text-sm font-normal leading-6 ">
                            Floent fans are manufactured by Floent Technologies
                            having manufacturing facility at well known industrial
                            city Ahmedabad, Gujarat, India.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-3">

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5C5D9] transition duration-300 hover:bg-white hover:text-[#09273A]"
                            >
                                <Users className="h-3.5 w-3.5" strokeWidth={1.9} />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5C5D9]  transition duration-300 hover:bg-white hover:text-[#09273A]"
                            >
                                <Camera className="h-3.5 w-3.5" strokeWidth={1.9} />
                            </a>

                            <a
                                href="#"
                                aria-label="YouTube"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5C5D9]  transition duration-300 hover:bg-white hover:text-[#09273A]"
                            >
                                <Play className="h-3.5 w-3.5 fill-current" strokeWidth={1.9} />
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5C5D9]  transition duration-300 hover:bg-white hover:text-[#09273A]"
                            >
                                <BriefcaseBusiness className="h-3.5 w-3.5" strokeWidth={1.9} />
                            </a>

                        </div>
                    </div>

                    <div className="flex lg:w-1/3 gap-15 justify-between">
                    {/* ================= COLUMN 2 ================= */}
                    <div>

                        <h3 className="mb-5 text-sm font-bold tracking-wider text-black">
                            QUICK LINKS
                        </h3>

                        <ul className="space-y-3 text-sm ">

                            <li>
                                <a
                                    href="/about"
                                    className="transition duration-300"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/products"
                                    className="transition duration-300"
                                >
                                    Our Products
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/blog"
                                    className="transition duration-300"
                                >
                                    Blog
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/gallery"
                                    className="transition duration-300"
                                >
                                    Gallery
                                </a>
                            </li>

                        </ul>
                    </div>


                    {/* ================= COLUMN 3 ================= */}
                    <div>

                        <h3 className="mb-5 text-sm font-bold tracking-wider text-black">
                            QUICK LINKS
                        </h3>

                        <ul className="space-y-3 text-sm">

                            <li>
                                <a
                                    href="/contact-us"
                                    className="transition duration-300"
                                >
                                    Contact Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/privacy-policy"
                                    className="transition duration-300"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/terms-and-conditions"
                                    className="transition duration-300"
                                >
                                    Terms and Conditions
                                </a>
                            </li>

                        </ul>
                    </div>
                    </div>

                    {/* ================= COLUMN 4 ================= */}
                    <div>

                        <h3 className="mb-5 text-sm font-bold tracking-wider text-black">
                            CONTACT
                        </h3>

                        {/* Contact Sales */}
                        <p className="mb-4 text-sm font-bold text-[#785900]">
                            Contact Sales
                        </p>

                        {/* Email */}
                        <a
                            href="mailto:emain.gmail.com"
                            className="mb-4 flex items-center gap-3 text-sm  transition duration-300 hover:text-white"
                        >
                            <Mail size={18} />

                            <span>
                                info@floentair.com
                            </span>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-3 text-sm transition duration-300 hover:text-white"
                        >
                            <Phone size={18} />

                            <span>
                                +91 9925624342
                            </span>
                        </a>

                    </div>

                </div>


                {/* ================= COPYRIGHT ================= */}
                <div className="mt-12 border-t border-white/10 pt-6">

                    <p className="text-center text-xs text-[#C5C5D9]">
                        © {new Date().getFullYear()} Floent Technologies.
                        All rights reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
}
