
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Products",
        href: "/products",
    },
    {
        name: "Gallery",
        href: "/gallery",
    },
    {
        name: "Contact Us",
        href: "/contact-us",
    },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white">

            <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between py-4 *:px-5 lg:px-0">

                {/* ================= LEFT - LOGO ================= */}
                <div className="flex shrink-0 items-center">

                    <Link href="/" onClick={() => setMenuOpen(false)}>
                        <Image
                            src="/floent.png"
                            alt="Floent Fans"
                            width={59}
                            height={49}
                            className="h-auto object-contain"
                        />
                    </Link>

                </div>


                {/* ================= MIDDLE - DESKTOP NAV ================= */}
                <div className="hidden items-center gap-7 lg:flex">

                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-[16px] font-normal text-[#474747] transition-colors duration-200 hover:text-[#FDCD2E]"
                        >
                            {item.name}
                        </Link>
                    ))}

                </div>


                {/* ================= RIGHT - DESKTOP ACTIONS ================= */}
                <div className="hidden items-center gap-3 lg:flex">

                    {/* Search */}
                    <div className="flex h-[42px] w-[180px] items-center gap-2 rounded-full border border-gray-200 px-4">

                        <Search
                            size={17}
                            className="shrink-0 text-[#5D5D5D]"
                        />

                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-transparent text-sm text-[#09273A] outline-none placeholder:text-[#999]"
                        />

                    </div>


                    {/* Get Quote */}
                    <Link
                        href="/contact-us"
                        className="rounded-full bg-[#09273A] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#FDCD2E] hover:text-[#09273A]"
                    >
                        Get Quote
                    </Link>

                </div>


                {/* ================= MOBILE MENU BUTTON ================= */}
                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-[#09273A] lg:hidden"
                >
                    {menuOpen ? (
                        <X size={25} />
                    ) : (
                        <Menu size={25} />
                    )}
                </button>

            </nav>


            {/* ================= MOBILE MENU ================= */}
            {menuOpen && (
                <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg lg:hidden">

                    {/* Navigation */}
                    <div className="flex flex-col">

                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="border-b border-gray-100 py-4 text-[15px] font-medium text-[#09273A] transition hover:text-[#FDCD2E]"
                            >
                                {item.name}
                            </Link>
                        ))}

                    </div>


                    {/* Search */}
                    <div className="mt-5 flex h-[46px] w-full items-center gap-2 rounded-full border border-gray-200 px-4">

                        <Search
                            size={18}
                            className="shrink-0 text-[#5D5D5D]"
                        />

                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-transparent text-sm outline-none placeholder:text-[#999]"
                        />

                    </div>


                    {/* Get Quote */}
                    <Link
                        href="/contact-us"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 block w-full rounded-full bg-[#09273A] px-6 py-3.5 text-center text-sm font-semibold text-white"
                    >
                        Get Quote
                    </Link>

                </div>
            )}

        </header>
    );
}
