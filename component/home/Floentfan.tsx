"use client";

import React, { useEffect, useRef } from "react";

import {
    Plane,
    Warehouse,
    Building2,
    Dumbbell,
    Factory,
    TrainFront,
    Church,
    Car,
} from "lucide-react";

const datas = [
    {
        title: "Airport",
        logo: Plane,
    },
    {
        title: "Warehouse",
        logo: Warehouse,
    },
    {
        title: "Community Hall",
        logo: Building2,
    },
    {
        title: "Gym",
        logo: Dumbbell,
    },
    {
        title: "Industry",
        logo: Factory,
    },
    {
        title: "Railway / Bus Station",
        logo: TrainFront,
    },
    {
        title: "Temple",
        logo: Church,
    },
    {
        title: "Automobile",
        logo: Car,
    },
];


function CategoryCard({
    data,
}: {
    data: (typeof datas)[number];
}) {
    const Icon = data.logo;

    return (
        <article
            className="
                flex
                h-[110px]
                w-[126px]
                shrink-0
                flex-col
                items-center
                justify-center
                rounded-2xl
                bg-[#5D5D5D1A]
                
            "
        >
            <Icon
                size={52}
                strokeWidth={1.8}
                className="text-[#09273A] pb-2 w-[52px] h-[52px]"
            />

            <p className="mt-2 text-center text-[12px] font-semibold leading-tight text-[#09273A]">
                {data.title}
            </p>
        </article>
    );
}


function CategoryAutoSlideTrack() {

    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const positionRef = useRef(0);

    useEffect(() => {

        const viewport = viewportRef.current;
        const track = trackRef.current;

        if (!viewport || !track) return;

        // Don't run animation on large screens
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        if (mediaQuery.matches) {
            return;
        }

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

            if (lastRect.right <= window.innerWidth - 30) {

                positionRef.current = 0;

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
            className="
                mt-7
                wax-w-7xl
                overflow-hidden
                lg:overflow-visible
            "
        >

            <div
                ref={trackRef}
                className="
                mx-auto
                    flex
                    max-w-7xl
                    gap-5
                    pb-5
                    pt-3.5
                    lg:w-full
                    lg:justify-between
                    lg:transform-none
                "
            >

                {datas.map((item, index) => (
                    <CategoryCard
                        key={index}
                        data={item}
                    />
                ))}

            </div>

        </div>
    );
}


export default function Floentfan() {

    return (
        <section
            className="
                my-16
                flex
                w-full
                flex-col
                items-center
                gap-2
                overflow-hidden
                bg-white
                px-4
            "
        >

            {/* ================= HEADING ================= */}

            <div className="max-w-4xl">

                <h1
                    className="
                    font-inter
                        text-center
                        text-4xl
                        font-bold
                        leading-tight
                        sm:text-5xl
                    "
                >
                    <span className="text-[#FFC727]">
                        Floent Fans
                    </span>{" "}
                    for Every Large Space
                </h1>

                <p
                    className="
                        mt-5
                        text-center
                        text-base
                        font-normal
                        text-[#43474E]
                        sm:text-lg
                    "
                >
                    Engineered for powerful air circulation across
                    diverse large-scale environments.
                </p>

            </div>

            <CategoryAutoSlideTrack />

        </section>
    );
}