"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearch } from "@/context/SearchContext";

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
        href: "/contact",
    },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { search, setSearch } = useSearch()
    const [onProduct, setOnProduct] = useState(false)
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);

        if (value.trim().length > 0 && !onProduct) {
            setOnProduct(true);
        }

        if (onProduct) {
            router.push(`/products/#product`);
        }

    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white">
            <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-0">
                <div className="flex justify-between w-[67%]">
                    {/* LOGO */}
                    <div className="flex shrink-0 items-center">
                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                        >
                            <Image
                                src="/floent.png"
                                alt="Floent Fans"
                                width={59}
                                height={49}
                                priority
                                className="h-auto w-[59px] object-contain"
                            />
                        </Link>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden items-center gap-7 lg:flex">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={
                                    (e) => {
                                        if (window.location.pathname === item.href) {
                                            // Prevent Next.js from reloading the same route
                                            e.preventDefault();
                                            // Scroll to top smoothly
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }
                                    }
                                }
                                className="text-[16px] font-normal text-[#474747] transition-colors duration-200 hover:text-[#FDCD2E]"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* DESKTOP ACTIONS */}
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
                            value={search}
                            onChange={handleChange}
                            className="w-full bg-transparent text-sm text-[#09273A] outline-none placeholder:text-[#999]"
                        />
                    </div>

                    {/* Get Quote */}
                    <Link
                        href="/products/exhuast-fan#tabs"
                        className="rounded-full bg-[#09273A] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#FDCD2E] hover:text-[#09273A]"
                    >
                        Get Quote
                    </Link>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-[#09273A] lg:hidden"
                >
                    {menuOpen ? (
                        <X size={25} />
                    ) : (
                        <Menu size={25} />
                    )}
                </button>
            </nav>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg lg:hidden">

                    {/* Navigation */}
                    <div className="flex flex-col">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={
                                    (e) => {
                                        if (window.location.pathname === item.href) {
                                            // Prevent Next.js from reloading the same route
                                            e.preventDefault();
                                            // Scroll to top smoothly
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }
                                        setMenuOpen(false);
                                    }
                                }
                                className="border-b border-gray-100 py-4 text-[15px] font-medium text-[#09273A] transition hover:text-[#FDCD2E]"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Search */}
                    <div className="mt-5 flex h-[46px] w-full items-center gap-2 rounded-full border border-gray-200 px-4">
                        <Search
                            size={18}
                            className="shrink-0 text-[#5D5D5D]"
                        />

                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={handleChange}
                            className="w-full bg-transparent text-sm outline-none placeholder:text-[#999]"
                        />
                    </div>

                    {/* Mobile Get Quote */}
                    <Link
                        href="/products/exhuast-fan#tabs"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 block w-full rounded-full bg-[#09273A] px-6 py-3.5 text-center text-sm font-semibold text-white"
                    >
                        Get Quote
                    </Link>
                </div>
            )
            }
        </header >
    );
}