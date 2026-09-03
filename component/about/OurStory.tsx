const cards = [
    {
        icon: (
            <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.25 22.5C8.375 22.5 5.86979 21.5469 3.73438 19.6406C1.59896 17.7344 0.375 15.3542 0.0625 12.5H2.625C2.91667 14.6667 3.88021 16.4583 5.51562 17.875C7.15104 19.2917 9.0625 20 11.25 20C13.6875 20 15.7552 19.151 17.4531 17.4531C19.151 15.7552 20 13.6875 20 11.25C20 8.8125 19.151 6.74479 17.4531 5.04688C15.7552 3.34896 13.6875 2.5 11.25 2.5C9.8125 2.5 8.46875 2.83333 7.21875 3.5C5.96875 4.16667 4.91667 5.08333 4.0625 6.25H7.5V8.75H0V1.25H2.5V4.1875C3.5625 2.85417 4.85938 1.82292 6.39062 1.09375C7.92188 0.364583 9.54167 0 11.25 0C12.8125 0 14.276 0.296875 15.6406 0.890625C17.0052 1.48438 18.1927 2.28646 19.2031 3.29688C20.2135 4.30729 21.0156 5.49479 21.6094 6.85938C22.2031 8.22396 22.5 9.6875 22.5 11.25C22.5 12.8125 22.2031 14.276 21.6094 15.6406C21.0156 17.0052 20.2135 18.1927 19.2031 19.2031C18.1927 20.2135 17.0052 21.0156 15.6406 21.6094C14.276 22.2031 12.8125 22.5 11.25 22.5ZM14.75 16.5L10 11.75V5H12.5V10.75L16.5 14.75L14.75 16.5Z"
                    fill="#0058BE"
                />
            </svg>
        ),
        number: "01",
        title: "Founded in 2017",
        description:
            "Austar Technologies started manufacturing high-performance HVLS fans after years of dedicated research and development in aerodynamic engineering.",
    },
    {
        icon: (
            <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 25V9.96875L8.75 6.25V8.75L15 6.25V10H25V25H0ZM2.5 22.5H22.5V12.5H12.5V9.9375L6.25 12.4375V10L2.5 11.6562V22.5ZM11.25 20H13.75V15H11.25V20ZM6.25 20H8.75V15H6.25V20ZM16.25 20H18.75V15H16.25V20ZM25 10H18.75L20 0H23.75L25 10ZM2.5 22.5H6.25H12.5H22.5H2.5Z"
                    fill="#0058BE"
                />
            </svg>
        ),
        number: "02",
        title: "20,000 Sq. Ft. Facility",
        description:
            "Located in Ahmedabad, Gujarat, our state-of-the-art manufacturing facility is dedicated exclusively to the production and testing of advanced industrial fans.",
    },
    {
        icon: (
            <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3.75 25C3.0625 25 2.47396 24.7552 1.98438 24.2656C1.49479 23.776 1.25 23.1875 1.25 22.5V8.40625C0.875 8.17708 0.572917 7.88021 0.34375 7.51562C0.114583 7.15104 0 6.72917 0 6.25V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H22.5C23.1875 0 23.776 0.244792 24.2656 0.734375C24.7552 1.22396 25 1.8125 25 2.5V6.25C25 6.72917 24.8854 7.15104 24.6562 7.51562C24.4271 7.88021 24.125 8.17708 23.75 8.40625V22.5C23.75 23.1875 23.5052 23.776 23.0156 24.2656C22.526 24.7552 21.9375 25 21.25 25H3.75ZM3.75 8.75V22.5H21.25V8.75H3.75ZM2.5 6.25H22.5V2.5H2.5V6.25ZM8.75 15H16.25V12.5H8.75V15Z"
                    fill="#0058BE"
                />
            </svg>
        ),
        number: "03",
        title: "300+ Fans / Month",
        description:
            "Our optimized production lines and rigorous quality control allow us to maintain a manufacturing capacity of over 300 premium HVLS fans monthly.",
    },
];

export default function AboutCards() {
    return (
        <section className="w-full bg-[#F8F9FA] py-24 lg:px-0 px-4 ">
            <div className="mx-auto max-w-7xl flex flex-col gap-16 ">
                <h1 className="border-l-4 border-[#0058BE] pl-4 font-jakarta text-[40px] font-bold leading-[48px] tracking-[-0.8px]">
                    Our Story
                </h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-7xl mx-auto">
                    {cards.map((card) => (
                        <div
                            key={card.number}
                            className="rounded-[8px] bg-white px-8 pt-8 pb-[46.39px] shadow-[0px_10px_40px_0px_#0A192F0A]"
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between">
                                <div>{card.icon}</div>

                                <span className="font-space text-[11px] font-medium leading-[11px] tracking-[1.1px] text-[#75777E]">
                                    {card.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="mt-4">
                                <h3 className="font-jakarta text-[32px] font-bold leading-[38.4px] tracking-[-0.64px]">
                                    {card.title}
                                </h3>

                                <p className="mt-4 font-jakarta text-[16px] font-normal leading-[24px] tracking-normal text-[#44474D]">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}