import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Which industrial fan is right for my application?",
        answer:
            "The right industrial fan depends on your facility size, ceiling height, airflow requirements, temperature, and application. Our team can evaluate your workspace and recommend the most suitable fan and airflow solution.",
    },
    {
        question: "What airflow capacity and fan sizes do you offer?",
        answer:
            "We offer industrial fans in different sizes and airflow capacities to suit warehouses, factories, workshops, commercial spaces, and other large facilities. The appropriate size is selected based on the area and required air circulation.",
    },
    {
        question: "Do you provide customized ventilation solutions?",
        answer:
            "Yes. We provide customized air-movement and ventilation solutions based on your facility layout, operating conditions, airflow requirements, and specific cooling or ventilation needs.",
    },
    {
        question: "Are your fans suitable for factories, warehouses & workshops?",
        answer:
            "Yes. Our industrial fans are designed for large spaces such as factories, warehouses, workshops, production facilities, and other industrial environments where effective air circulation is required.",
    },
    {
        question: "Do you provide installation and after-sales support?",
        answer:
            "Yes. We provide professional installation support and after-sales assistance to help ensure that your industrial fan operates efficiently and reliably.",
    },
    {
        question: "How can I request a quote for an industrial fan?",
        answer:
            "You can contact our sales team with your facility details and airflow requirements. Our specialists will understand your requirements and provide a suitable product recommendation and quotation.",
    },
];

export function Faq() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <section id="faq" className="w-full py-3">

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            {/* ================= HEADING ================= */}
            <div className="flex w-full flex-col items-center justify-center gap-5 px-4 text-center">

                <div className="w-fit rounded-full bg-[#09273A1A] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#09273A]">
                    SUPPORT CENTER
                </div>

                <h1 className="text-4xl font-bold text-[#09273A] sm:text-5xl">
                    Frequently Asked Questions
                </h1>

                <p className="text-base font-normal text-[#5D5D5D] sm:text-lg">
                    Accurate solutions for your industrial air-movement needs.
                </p>

            </div>


            {/* ================= FAQ LIST ================= */}
            <div className="mx-auto mt-12 w-full max-w-[860px] px-4">

                <div className="space-y-4">

                    {faqs.map((item) => (
                        <details
                            key={item.question}
                            className="group overflow-hidden rounded-[28px] border border-[#f1e9e5] bg-white shadow-[0_10px_22px_rgba(31,27,24,0.04)] transition-colors open:border-[#efd8cf]"
                        >

                            {/* Question */}
                            <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-5 px-5 text-left text-[16px] font-medium text-[#6d6866] sm:px-6 [&::-webkit-details-marker]:hidden">

                                <span>
                                    {item.question}
                                </span>

                                <ChevronDown
                                    className="h-[20px] w-[20px] shrink-0 text-[#09273A] transition-transform duration-200 group-open:rotate-180"
                                    strokeWidth={1.8}
                                />

                            </summary>


                            {/* Answer */}
                            <div className="px-5 pb-6 pt-1 sm:px-6">

                                <p className="text-[15px] leading-7 text-[#6f6966]">
                                    {item.answer}
                                </p>

                            </div>

                        </details>
                    ))}

                </div>


                {/* ================= SUPPORT CTA ================= */}
                <div className="mt-5 flex flex-col gap-5 rounded-2xl bg-[#0A283B1F] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

                    <div>
                        <p className="text-[16px] font-bold tracking-[-0.02em] text-[#09273A]">
                            Still have questions?
                        </p>

                        <p className="mt-2 text-[14px] leading-6 text-[#7a726f]">
                            We&apos;re here to help you with your industrial
                            ventilation requirements.
                        </p>
                    </div>


                    <button
                        className="w-full rounded-full bg-[#09273A] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#123d56] sm:w-auto"
                        type="button"
                    >
                        Chat with Support
                    </button>

                </div>

            </div>

        </section>
    );
}
