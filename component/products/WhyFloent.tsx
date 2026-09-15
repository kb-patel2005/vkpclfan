import React from 'react'
import Image from 'next/image'

const whyChoose = [
    "Trusted industrial ventilation solutions provider",
    "Long-life machinery with robust construction",
    "High airflow with energy efficiency",
    "Built for heavy-duty performance",
    "Quality tested components for reliable operation"
]

export default function WhyFloent() {
  return (
    <section className='flex flex-wrap justify-between w-full max-w-7xl mx-auto items-center pt-5 lg:py-10 lg:px-0 px-5'>
        <div>
            <h2 className='text-5xl font-bold font-sora mb-6 lg:mb-12 '>Why Floent?</h2>
            <ul className='flex flex-col gap-4'>
                 {whyChoose.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                className="shrink-0 mt-0.5"
                            >
                                <circle cx="11" cy="11" r="10" fill="#09273A" />
                                <path
                                    d="M6.5 11.2L9.5 14.2L15.5 8.2"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <p className="font-inter font-medium text-lg leading-[24px] text-[#5D5D5D]">
                                {item}
                            </p>
                        </div>
                    ))}
            </ul>
        </div>
        <div>
            <Image src={'/whyChooseFloent.png'} width={600} height={500} alt='floent fan'/>
        </div>
    </section>
  )
}
