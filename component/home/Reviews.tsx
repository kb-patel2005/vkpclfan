
import React from "react";
import { Star } from "lucide-react";

const reviews = [
    {
        review:
            "Excellent product quality and very professional installation service. The fan performance is outstanding.",
        name: "Rajesh Patel",
        role: "Factory Manager",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9QfcqrOCD3yyGuzwEolDJIYVIjYZ5Imw5njDFZf-1Q&s=10",
    },
    {
        review:
            "Very happy with the product. It has improved airflow and made our workspace much more comfortable.",
        name: "Amit Shah",
        role: "Operations Manager",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9QfcqrOCD3yyGuzwEolDJIYVIjYZ5Imw5njDFZf-1Q&s=10",
    },
    {
        review:
            "Great support from the team and excellent product performance. Highly recommended.",
        name: "Mehul Desai",
        role: "Plant Head",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9QfcqrOCD3yyGuzwEolDJIYVIjYZ5Imw5njDFZf-1Q&s=10",
    },
];

export default function Reviews() {
    return (
        <section className="w-full px-6 py-12 flex flex-col gap-12 items-center">
            <div className="max-w-7xl flex flex-col justify-center items-center gap-3">
                <div className='text-[#09273A] font-semibold text-[12px] py-1.5 px-4 bg-[#09273A1A] rounded-full'>CLIENT FEEDBACK</div>
                <h1 className='font-bold text-5xl text-[#09273A]'>Trusted in the Field</h1>
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                {reviews.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg"
                    >

                        {/* Stars */}
                        <div className="mb-4 flex items-center gap-1">
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
                        <p className="text-[15px] font-normal leading-6 text-[#5D5D5D]">
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
                ))}

            </div>
        </section>
    );
}
