"use client";

import { secureHeapUsed } from "crypto";
import Image from "next/image";
import { useEffect, useRef } from "react";

const datas = [
    "FABRI-TEK",
    "OMNI-LOGIC",
    "CORE-GRID",
    "SOLO-MAX",
    "INDUS-VIBE",
];

function CityCard({
    data,
}: {
    data: string;
}) {
    return (
        <article
            className="
        relative
        shrink-0
        w-[300px]
        overflow-hidden"
        >
            <h1 className="text-2xl leading-8 font-hanken font-semibold text-[#535353] opacity-50">{data}</h1>
        </article>
    );
}

function CityAutoSlideTrack() {
    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const positionRef = useRef(0);

    useEffect(() => {
        const viewport = viewportRef.current;
        const track = trackRef.current;

        if (!viewport || !track) return;

        const lastCard =
            track.lastElementChild as HTMLElement | null;

        if (!lastCard) return;

        let animationFrame: number;

        const speed = 0.5;

        const animate = () => {
            positionRef.current -= speed;

            track.style.transform = `translate3d(
        ${positionRef.current}px,
        0,
        0
      )`;

            const lastRect =
                lastCard.getBoundingClientRect();

            const viewportRect =
                viewport.getBoundingClientRect();

            let iwidth = window.innerWidth;

            if (lastRect.right <= iwidth - 30) {
                positionRef.current = 50;

                track.style.transform =
                    "translate3d(0, 0, 0)";
            }

            animationFrame =
                requestAnimationFrame(animate);
        };

        animationFrame =
            requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div
            ref={viewportRef}
            className="w-full mt-7 bg-transparent"
        >
            <div
                ref={trackRef}
                className="flex w-max gap-5 pt-3.5 pb-10"
            >
                {datas.map((city, index) => (
                    <CityCard data={city} key={index}/>
                ))}
            </div>
        </div>
    );
}

import React from 'react'

export default function HorizontalScroller() {
  return (
    <section className="text-center mt-5 bg-white">
        <h1 className="text-[16px] text-[#535353] font-semibold pt-8 font-inter " style={{letterSpacing:"2.4px"}}>TRUSTED BY GLOBAL LEADERS</h1>
        <CityAutoSlideTrack/>
    </section>
    
  )
}
