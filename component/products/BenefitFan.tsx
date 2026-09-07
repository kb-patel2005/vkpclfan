import React from 'react'

export default function BenefitFan() {
  return (
    <section className="w-full bg-[#F8F9FA] py-12 lg:py-20 px-5 lg:px-0">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-8 lg:gap-6">

        {/* Left Content */}
        <div className="w-full lg:w-[35%] flex flex-col gap-6">
          <h1 className="font-sora font-bold text-[32px] leading-[40px] lg:text-[40px] lg:leading-[48px]">
            Benefits of Industrial{" "}
            <span className="text-[#FDCD2E]">Exhaust Fan</span>
          </h1>

          <p className="font-sora text-[16px] leading-6 text-[#475569]">
            An industrial exhaust fan provides powerful and efficient ventilation for factories, warehouses, agricultural facilities, commercial buildings, and other large spaces. It helps remove excess heat, humidity, fumes, dust, odors, and stale air, improving overall air quality and creating a cooler, healthier working environment. With high airflow performance and energy-efficient operation, it can reduce heat buildup and ventilation costs compared to conventional cooling solutions.</p>

          <p className="font-sora text-[16px] leading-6 text-[#475569]">
            Designed for demanding industrial applications, the Floent Exhaust Fan combines durable construction, efficient airflow, and reliable performance for continuous operation. Its low-maintenance design helps reduce operating and maintenance requirements while ensuring long-lasting ventilation. Ideal for factories, warehouses, workshops, poultry farms, and commercial spaces, it provides an effective and cost-efficient solution for maintaining proper air circulation and comfortable indoor conditions.
          </p>
        </div>

        {/* Right Image */}
        <img
          src="/benefit.jpg"
          alt="benefit of exhaust fan"
          className="w-full h-[280px] object-cover lg:object-fill lg:w-[60%] lg:h-[670px]"
        />
      </div>
    </section>
  )
}
