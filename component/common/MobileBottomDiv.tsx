"use client";
import { useEffect } from "react";
import React from 'react'

export default function MobileBottomDiv() {
    useEffect(() => {
        const bar = document.getElementById("mobile-bar");
        const handleScroll = () => {
            if (window.scrollY > 50) {
                bar?.classList.remove("translate-y-full");
                bar?.classList.add("translate-y-0");
            } else {
                bar?.classList.add("translate-y-full");
                bar?.classList.remove("translate-y-0");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div
            id="mobile-bar"
            className="fixed bottom-0 left-0 right-0 z-50 bg-[#F8F9FA] py-3 px-5 flex justify-between items-center border-t border-[#EDEEEF] lg:hidden translate-y-full transition-transform duration-500"
        >
            <div className="flex items-center w-full h-18">
                <button className="w-1/3 bg-[#007bff] rounded-l-full text-white py-2 px-4 rounded-md hover:bg-[#0056b3]">
                    <div className="text-2xl">📩</div>
                    <div>Enquiry</div>
                </button>
                <button className="w-1/3 bg-[#28a745] text-white py-2 px-4 hover:bg-[#1e7e34]">
                    <div className="text-2xl">📞</div>
                    <div>Call</div>
                </button>
                <button className="w-1/3 bg-[#007bff] rounded-r-full text-white py-2 px-4 rounded-md hover:bg-[#0056b3]">
                    <div className="text-2xl">💬</div>
                    <div>WhatsApp</div>
                </button>
            </div>
        </div>

    )
}
