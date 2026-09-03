import React from 'react'
import Image from 'next/image'

export default function AboutLanding() {
    return (
        <section className='w-full h-auto py-20 lg:px-0 px-4'>
            <div className='max-w-7xl flex flex-wrap lg:gap-[48px] gap-3 mx-auto justify-between items-center'>
                <div className='flex flex-col lg:w-[50%] gap-16'>
                    <div className='flex flex-col gap-3'>
                        <p className='font-sora text-[16px] tracking-[3.2px] font-normal leading-6 '> — ENGINEERED FOR PERFORMANCE</p>
                        <h1 className='font-sora font-extrabold text-[64px] leading-[70.4px] tracking-[-1.28px] text-[#0F172A]'>Powering
                            Industries.
                            <br />
                            <span> Built to Perform.</span>

                        </h1>
                        <p className="font-sora text-[18px] font-normal leading-[28.8px] tracking-normal text-[#475569]">
                            We design and manufacture heavy-duty industrial fans
                            that keep critical operations running. Precision
                            engineering meets unstoppable reliability.
                        </p>
                    </div>
                    <div className='font-sora flex gap-2'>
                        <button className='py-4 px-8 bg-[#09273A] text-white text-[16px] tracking-[0.8px] leading-[24px] rounded-sm'>EXPLORE OUR STORY →</button>
                        <button className='py-4 px-8 bg-white text-[#0F172A] border border-[#0F172A] text-[16px] tracking-[0.8px] leading-[24px] rounded-sm'>VIEW PRODUCTS</button>
                    </div>
                </div>
                <div className="w-full lg:w-[560px] lg:h-[560px]">
                    <Image
                        src="/aboutlanding.png"
                        alt="About Fluent"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
