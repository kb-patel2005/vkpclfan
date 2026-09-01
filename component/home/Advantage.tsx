import {
  Zap,
  Wrench,
  Thermometer,
  ShieldCheck,
  Network,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Energy Efficient",
    desc: "Advanced EC motors reduce power consumption by up to 45% compared to traditional AC units.",
  },
  {
    icon: Wrench,
    title: "Heavy Duty",
    desc: "Machined from aerospace-grade aluminum and marine-grade stainless steel for zero-failure lifespans.",
  },
  {
    icon: Thermometer,
    title: "Thermal Control",
    desc: "Integrated smart sensors that auto-adjust RPM based on real-time ambient temperature and humidity.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "Every unit undergoes a 48-hour extreme stress test before leaving our precision engineering facility.",
  },
];

export function Advantage() {
  return (
    <section className="bg-[#F3F5F7] py-16 px-5 lg:px-0">
      <div className="max-w-[1152px] mx-auto grid grid-cols-12 gap-6">

        {/* Left: 6 columns */}
        <div className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className={` flex flex-col gap-4 bg-white shadow-sm hover:shadow-xl transition p-8 ${i % 2 === 1 ? "lg:px-[32px] lg:pt-[88px] lg:pb-[48px]" : "lg:px-[32px] lg:pt-[32px] lg:pb-[88px]"
                    }`}
                >
                  <Icon className="w-6 h-[30px] text-[#0B2B45]" />

                  <h3 className="font-sora pt-3 text-2xl font-semibold text-[#09273A]">
                    {item.title}
                  </h3>

                  <p className="font-inter text-[16px] leading-6 text-[#5D5D5D]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: 6 columns */}
        <div className="col-span-12 lg:col-span-6 gap-4 lg:px-12 flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-[0.6px] text-[#09273A]">
            The VENAIRA Advantage
          </span>

          <h2 className="font-sora text-[40px] font-bold text-[#0B2B45] leading-[48px] tracking-[-0.4px]">
            Hardware Built For The Decade, Software Built For Performance.
          </h2>

          <p className="py-4 font-inter lg:w-[516px] text-[18px] font-normal leading-7 tracking-normal text-[#5D5D5D]">
            We don't just move air. We optimize environments. Our
            systems are the heartbeat of modern manufacturing,
            ensuring safety, comfort, and productivity.
          </p>

          <div className="flex items-start gap-4 bg-white p-4 shadow-sm">
            <div className="bg-[#E8EEF4] rounded-full p-3">
              <Network className="w-6 h-6 text-[#0B2B45]" />
            </div>

            <div>
              <h4 className="text-base text-[16px] font-bold text-[#0B2B45]">
                Cloud Management Integrated
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                Control entire fleets from a single terminal.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}