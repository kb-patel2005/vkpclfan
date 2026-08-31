
"use client";

import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
    {
        review:
            "Excellent product quality and very professional installation service. The fan performance is outstanding.",
        name: "Rajesh Patel",
        role: "Factory Manager",
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9QfcqrOCD3yyGuzwEolDJIYVIjYZ5Imw5njDFZf-1Q&s=10",
    },
    {
        review:
            "Very happy with the product. It has improved airflow and made our workspace much more comfortable.",
        name: "Amit Shah",
        role: "Operations Manager",
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9QfcqrOCD3yyGuzwEolDJIYVIjYZ5Imw5njDFZf-1Q&s=10",
    },
    {
        review:
            "Great support from the team and excellent product performance. Highly recommended.",
        name: "Mehul Desai",
        role: "Plant Head",
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9QfcqrOCD3yyGuzwEolDJIYVIjYZ5Imw5njDFZf-1Q&s=10",
    },
];

function ReviewCard({
    item,
}: {
    item: (typeof reviews)[number];
}) {
    return (
        <div
            className="
                w-[320px]
                shrink-0
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-6
                shadow-sm
                transition
                hover:shadow-lg
                sm:w-[380px]
            "
        >
            {/* Stars */}
            <div className="mb-5 flex items-center gap-1">
                {[...Array(5)].map((_, starIndex) => (
                    <Star
                        key={starIndex}
                        size={18}
                        strokeWidth={1.8}
                        className="fill-[#FDCD2E] text-[#FDCD2E]"
                    />
                ))}
            </div>

            {/* Review */}
            <p className="min-h-[96px] text-[15px] font-normal leading-6 text-[#5D5D5D]">
                "{item.review}"
            </p>

            {/* Avatar + User */}
            <div className="mt-6 flex items-center gap-3">
                <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-11 w-11 rounded-full object-cover"
                />

                <div>
                    <h3 className="text-[15px] font-semibold text-[#09273A]">
                        {item.name}
                    </h3>

                    <p className="text-[12px] font-normal text-[#5D5D5D]">
                        {item.role}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Reviews() {
    const trackRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef(0);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        let animationFrame: number;

        const speed = 0.5;

        const animate = () => {
            positionRef.current -= speed;

            /*
             * Half of the track contains the original reviews.
             * Once that part has moved away, reset the position.
             */
            const halfWidth = track.scrollWidth / 2;

            if (Math.abs(positionRef.current) >= halfWidth) {
                positionRef.current = 0;
            }

            track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <section className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6">

            {/* ================= HEADING ================= */}
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-center">

                <div className="rounded-full bg-[#09273A1A] px-4 py-1.5 text-[12px] font-semibold text-[#09273A]">
                    CLIENT FEEDBACK
                </div>

                <h1 className="text-4xl font-bold text-[#09273A] sm:text-5xl">
                    Trusted in the Field
                </h1>

            </div>


            {/* ================= AUTO SCROLLER ================= */}
            <div className="mx-auto mt-12 w-full max-w-[1400px] overflow-hidden">

                <div
                    ref={trackRef}
                    className="flex w-max gap-6"
                >

                    {/* First set */}
                    {reviews.map((item, index) => (
                        <ReviewCard
                            key={`first-${index}`}
                            item={item}
                        />
                    ))}

                    {/* Duplicate set for continuous scrolling */}
                    {reviews.map((item, index) => (
                        <ReviewCard
                            key={`second-${index}`}
                            item={item}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}
