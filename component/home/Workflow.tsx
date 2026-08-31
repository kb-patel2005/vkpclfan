import { MessageSquare, Compass, BarChart3, BadgeCheck, Lightbulb } from "lucide-react";

const steps = [
  {
    no: "01",
    title: "Connection",
    desc: "Connect with us to solve your ventilation challenges in the most economical way.",
    icon: MessageSquare,
  },
  {
    no: "02",
    title: "Site Examination",
    desc: "Our engineers visit your site, inspect the premises, and collect technical data.",
    icon: Compass,
  },
  {
    no: "03",
    title: "Analyze",
    desc: "Our engineering team studies the collected data and prepares the optimal ventilation solution.",
    icon: BarChart3,
  },
  {
    no: "04",
    title: "Client Validation",
    desc: "Detailed proposal discussion, approvals, and final confirmation.",
    icon: BadgeCheck,
  },
];

export default function Workflow() {
  return (
    <section className="bg-[#F3F5F7] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
            Our Workflow
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#0B2B45] md:text-5xl">
            Our Workflow
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Accurate solution proposition. The reason why people choose us.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Desktop line */}
          <div className="absolute left-0 right-0 top-16 hidden h-1 md:block">
            <div className="mx-auto h-full w-[82%] rounded-full bg-[#123B5D]" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div key={i} className="relative text-center">
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl font-bold text-gray-200">
                    {step.no}
                  </span>

                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                    <Icon className="h-8 w-8 text-[#0B2B45]" />
                  </div>

                  <div className="mt-5 rounded-2xl bg-white p-6 shadow-sm">
                    <h3 className="font-semibold text-[#0B2B45]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-full bg-white p-3 shadow md:flex-row md:px-6">
          <div className="flex items-center gap-3">
            <Lightbulb className="text-[#0B2B45]" />
            <p className="font-semibold text-[#0B2B45]">
              Do you like our workflow?
            </p>
          </div>

          <button className="rounded-full bg-[#062C49] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B3C63]">
            Let's Talk →
          </button>
        </div>
      </div>
    </section>
  );
}