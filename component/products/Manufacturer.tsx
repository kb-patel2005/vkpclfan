import React from 'react'

export default function Manufacturer() {
    return (
        <section className='w-full'>
            <div className='max-w-7xl mx-auto flex flex-col gap-10'>
                <h1 className="font-sora font-bold text-[48px] leading-[56px] tracking-[-0.96px] text-center align-middle">
                    Floent{" "}
                    <span className="text-[#FDCD2E]">Exhaust Fan</span>{" "}

                    Manufacturer
                </h1>
                <p className="text-center text-[#5D5D5D] font-inter leading-6 text-[16px] lg:text-[19px] lg:leading-7">
                    <span className='font-bold'>Floent Technologies</span> is a leading manufacturer of high-performance industrial exhaust fans, designed to provide powerful air extraction and efficient ventilation for factories, warehouses, agricultural facilities, commercial spaces, and other large environments. Our exhaust fans are engineered for effective removal of heat, humidity, fumes, dust, and stale air, helping create a cooler, cleaner, and more comfortable workspace.
                    <br />
                    Built with durable materials, aerodynamic fan blades, robust construction, and efficient motors, Floent Exhaust Fans deliver consistent airflow with reliable long-term performance. Designed for demanding industrial applications, they offer low maintenance, energy-efficient operation, and dependable ventilation, making Floent an ideal choice for efficient air extraction and improved indoor air quality.
                </p>
            </div>
        </section>
    )
}
