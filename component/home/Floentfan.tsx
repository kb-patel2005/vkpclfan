import React from 'react'

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

const data = [
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

export default function Floentfan() {
    return (
        <section className='flex flex-col gap-10 items-center my-15'>
            <div>
                <h1 className='font-bold text-5xl text-center'>
                    <span className='text-[#FFC727]'>Floent Fans </span> for Every Large Space</h1>
                <p className='font-normal text-center text-lg text-[#43474E] mt-5'>Engineered for powerful air circulation across diverse large-scale environments.</p>

            </div>
            <div className='flex gap-6'>
                {data.map((item, index) => {
                    const Icon = item.logo;

                    return (
                        <div key={index} className='p-3 bg-[#5D5D5D1A] w-[100px] h-[100px] flex flex-col justify-center items-center rounded-2xl'>
                            <Icon size={32} strokeWidth={1.8} />
                            <p className='font-semibold text-[12px] text-center'>{item.title}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
