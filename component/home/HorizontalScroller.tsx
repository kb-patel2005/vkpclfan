"use client";

import React, { useEffect, useRef } from "react";

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
                w-[300px]
                shrink-0
                overflow-hidden
            "
        >
            <h1
                className="
                    font-hanken
                    text-2xl
                    font-semibold
                    leading-8
                    text-[#535353]
                    opacity-50
                "
            >
                {data}
            </h1>
        </article>
    );
}

function CityAutoSlideTrack() {
    const trackRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef(0);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        let animationFrame: number;

        const speed = 0.5;

        const animate = () => {
            positionRef.current -= speed;

            const halfWidth = track.scrollWidth / 2;

            if (Math.abs(positionRef.current) >= halfWidth) {
                positionRef.current = 0;
            }

            track.style.transform = `translate3d(
                ${positionRef.current}px,
                0,
                0
            )`;

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div
            className="
                mt-7
                w-full
                overflow-hidden
            "
        >
            <div
                ref={trackRef}
                className="
                    flex
                    w-max
                    gap-5
                    pt-3.5
                    pb-10
                    will-change-transform
                "
            >
                {/* ================= FIRST SET ================= */}

                {datas.map((data, index) => (
                    <CityCard
                        key={`first-${index}`}
                        data={data}
                    />
                ))}

                {/* ================= DUPLICATE SET ================= */}

                {datas.map((data, index) => (
                    <CityCard
                        key={`second-${index}`}
                        data={data}
                    />
                ))}
            </div>
        </div>
    );
}

export default function HorizontalScroller() {
    return (
        <section
            className="
                mt-5
                w-full
                overflow-hidden
                bg-white
                text-center
            "
        >
            {/* ================= TITLE ================= */}

            <h1
                className="
                    font-inter
                    pt-8
                    text-[16px]
                    font-semibold
                    text-[#535353]
                "
                style={{
                    letterSpacing: "2.4px",
                }}
            >
                TRUSTED BY GLOBAL LEADERS
            </h1>

            {/* ================= AUTO SCROLLER ================= */}

            <CityAutoSlideTrack />
        </section>
    );
}