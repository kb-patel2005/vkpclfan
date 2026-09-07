const features = [
  {
    no: "01",
    title: "UNIFORM AIRFLOW",
    desc: "Maximum 16-foot blades create a continuous, even breeze across your entire facility.",
    icon: "💨",
  },
  {
    no: "02",
    title: "ENERGY EFFICIENT",
    desc: "Engineered for high-volume movement at low speeds, reducing consumption.",
    icon: "⚡",
  },
  {
    no: "03",
    title: "AIR QUALITY",
    desc: "Continuous circulation dilutes contaminants and manages humidity.",
    icon: "☁️",
  },
  {
    no: "04",
    title: "QUIET OPERATION",
    desc: "Whisper-quiet geared motor design for focused industrial environments.",
    icon: "🔇",
  },
  {
    no: "05",
    title: "REDUCED COSTS",
    desc: "Perceived cooling of 10°F allows significant HVAC adjustments.",
    icon: "💰",
  },
  {
    no: "06",
    title: "BUILT FOR SCALE",
    desc: "One fan covers areas that would require dozens of smaller units.",
    icon: "🏭",
  },
];

export default function WhyChooseHVLS() {
  return (
    <section className="bg-[#F7F7F7] py-16 px-5">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-[11px] font-bold tracking-[1.5px] text-[#09273A] bg-white px-3 py-1 rounded-full">
          WHY CHOOSE HVLS
        </span>

        <h2 className="mt-4 font-sora font-bold text-4xl lg:text-5xl text-[#09273A]">
          Big Smart <span className="text-[#F4B51E]">Energy</span>
        </h2>

        <p className="mt-3 text-[#5B6572] text-sm">
          Powerful airflow. Intelligent engineering. Lower energy consumption.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 relative">
          {features.map((item) => (
            <div key={item.no} className="text-left relative">
              <span className="absolute -top-5 left-0 text-5xl font-bold text-[#E7E7E7]">
                {item.no}
              </span>

              <div className="relative z-10">
                <div className="text-2xl mb-3">{item.icon}</div>

                <h3 className="font-bold text-xs tracking-[1px] text-[#09273A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#5B6572]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}