import React from 'react'
import Image from 'next/image'

export default function Engineering() {
    return (
        <section className='w-full lg:px-0 px-4 pt-[133px] pb-[120px]'>
            <div className='flex flex-wrap mx-auto max-w-7xl gap-2 justify-between items-center'>
                <div className='lg:w-[60%]'>
                    <h1 className="font-sora text-[40px] font-bold leading-[48px] tracking-normal mb-4">
                        Engineering That
                        <br />
                        Moves More Than Air.
                    </h1>
                    <Image
                        src="/air.jpg"
                        alt="About Fluent"
                        width={800}
                        height={600}
                        className="w-full h-[492px]"
                        priority
                    />
                </div>
                <div className='flex flex-col gap-6 lg:w-[35%]'>
                    <p className="text-[16px] font-normal leading-[24px] tracking-normal text-[#475569]">
                        AUSTAR HVLS FANS are manufactured by Austar Technologies having a manufacturing facility at well known industrial city Ahmedabad Gujarat INDIA.
                        <br />
                        Austar Technologies entered into manufacturing HVLS fans in the year 2017 after two years of designs development and testing of various sizes and options. Austar Technologies have a dedicated manufacturing facility for HVLS Fans of 20000 Square Feet Area and have a manufacturing capacity of 300 Fans per month.
                    </p>
                    <p className="text-[16px] font-normal leading-[24px] tracking-normal text-[#475569]">
                        Austar Technologies believes in service Indian market Premium Quality Products at Affordable Cost and life long service back up. Austar Technologies is continuously winning customer appreciation and growing business month by month.
                    </p>
                    <p className="text-[16px] font-normal leading-[24px] tracking-normal text-[#475569]">
                        We specialize in providing advance HVLS Fans that deliver superior air circulation solutions for industrial and commercial spaces. With a focus on energy efficiency and innovative design, we offer a complete range of products, including Geared HVLS Fans and Gearless HVLS Fans . Our Industrial HVLS Fans are engineered to reduce energy consumption while making sure optimal airflow across large areas, making them the perfect choice for warehouses, factories, and other expansive environments.
                    </p>
                </div>
            </div>

        </section>
    )
}
