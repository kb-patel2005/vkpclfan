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
    <section className="bg-[#F3F5F7] py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2">
        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <Icon className="mb-6 h-8 w-8 text-[#0B2B45]" />

                <h3 className="text-xl font-bold text-[#0B2B45]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            The VENAIRA Advantage
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0B2B45] md:text-5xl">
            Hardware Built For The Decade, Software Built For Performance.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-500">
            We don't just move air. We optimize environments. Our systems are
            the heartbeat of modern manufacturing, ensuring safety, comfort, and
            productivity.
          </p>

          <div className="mt-8 flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <div className="rounded-full bg-[#E8EEF4] p-3">
              <Network className="h-6 w-6 text-[#0B2B45]" />
            </div>

            <div>
              <h4 className="font-semibold text-[#0B2B45]">
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