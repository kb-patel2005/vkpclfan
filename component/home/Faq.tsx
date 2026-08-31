import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Which industrial fan is right for my application?",
        answer:
            "AAVORide connects travelers and local users with nearby drivers for different travel needs. Users can submit their trip details in the app, and multiple drivers may respond with their offers. You can review the options, discuss details directly with the drivers via call, and choose the best one for your trip. If you want to rent a car, you can also check available vehicles in the 'Rent Car' section of the app. AAVORide supports multiple vehicle purposes such as local travel, hourly bookings, and outstation trips. Payments are made directly to the driver. There is no third-party involvement, which helps both customers and drivers benefit from transparent pricing.",
    },
    {
        question: "What airflow capacity and fan sizes do you offer?",
        answer:
            "Yes! You can view the driver's profile, vehicle details, ratings, and reviews before confirming your booking.",
    },
    {
        question: "Do you provide customized ventilation solutions?",
        answer:
            "Fares depend on the vehicle type and distance (km). The pricing is fully transparent, so you can see the estimated amount in advance before confirming your booking. Whether you rent a car or book a ride, the cost details are shown clearly in the app, helping you choose the option that fits your budget.",
    },
    {
        question: "Are your fans suitable for factories, warehouses & workshops?",
        answer:
            "Payments are made directly to the driver. AAVORide does not act as a payment intermediary. This direct payment system helps maintain transparency and allows both customers and drivers to benefit without third-party charges.",
    },
    {
        question: "Do you provide installation and after-sales support?",
        answer: "Yes, you can filter for special vehicle options in the app while booking.",
    },
    {
        question: "How can I request a quote for an industrial fan?",
        answer:
            "Our support team is available 24/7. You can raise any issues via the app's help section or contact support directly.",
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
        <section id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <section>
                <div className="flex flex-col justify-center w-full items-center gap-8">
                    <div className="w-fit py-1.5 px-4 bg-[#09273A1A] rounded-full">
                        SUPPORT CENTER
                    </div>
                    <h1
                        className="font-bold text-5xl"
                    >Frequently Asked Questions</h1>
                    <p className="text-lg font-normal text-[#5D5D5D]">Accurate solution proposition. The reason why people choose us.</p>
                </div>
                <div className="mx-auto mt-12 max-w-[860px]">
                    <div className="space-y-4">
                        {faqs.map((item) => (
                            <details
                                key={item.question}
                                className="group motion-card-hover rounded-[28px] border border-[#f1e9e5] bg-white shadow-[0_10px_22px_rgba(31,27,24,0.04)] transition-colors open:border-[#efd8cf]"
                            >
                                <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between px-6 text-left text-[16px] font-medium text-[#6d6866] [&::-webkit-details-marker]:hidden">
                                    <span>{item.question}</span>
                                    <ChevronDown
                                        className="h-[18px] w-[18px] shrink-0 text-[var(--primary)] transition-transform duration-200 group-open:rotate-180"
                                        strokeWidth={1.8}
                                    />
                                </summary>
                                <div className="px-6 pb-6 pt-1">
                                    <p className="text-[15px] leading-8 text-[#6f6966]">{item.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>

                    <div
                        className="bg-[#0A283B1F] p-8 mt-5 flex justify-between rounded-2xl">
                        <div>
                            <p className="text-[16px] font-bold tracking-[-0.02em] text-[var(--primary-strong)]">
                                Still have questions?
                            </p>
                            <p className="mt-2 text-[14px] leading-6 text-[#7a726f]">
                                We&apos;re here to help you anytime.
                            </p>
                        </div>

                        <button
                            className="py-4 px-8 bg-[#09273A] text-white rounded-full"
                            type="button"
                        >
                            Chat with Support
                        </button>

                    </div>
                </div>

            </section>
        </section>
    );
}
