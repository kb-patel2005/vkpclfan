/***************** Title and description ********************************/
const exhaustfan_title_desc = ["Exhaust Fan Series", "Built for demanding operating conditions, the Floent Exhaust Fan offers reliable performance, durable construction, low maintenance, and energy - efficient ventilation, helping maintain a cooler, cleaner, and better - ventilated environment."]
const hvlsfan_title_desc = ["HVLS Fan Series",
    "Floent Technologies India offers High Volume Low Speed (HVLS) fans, also known as jumbo ceiling fans, perfect for large warehouses, factories, and other commercial and industrial spaces. Our HVLS fans offer better air distribution across large areas and are built to replace wall-mounted fans."
]

export const title_description = new Map();
title_description.set("exhuast-fan", exhaustfan_title_desc);
title_description.set("HVLS-fan", hvlsfan_title_desc)

/**************** Features ******************************/
const exhaustFan_features = [
    {
        label: "High Airflow",
        icon: (
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.5 17C8.66667 17 7.95833 16.7083 7.375 16.125C6.79167 15.5417 6.5 14.8333 6.5 14H8.5C8.5 14.2833 8.59583 14.5208 8.7875 14.7125C8.97917 14.9042 9.21667 15 9.5 15C9.78333 15 10.0208 14.9042 10.2125 14.7125C10.4042 14.5208 10.5 14.2833 10.5 14C10.5 13.7167 10.4042 13.4792 10.2125 13.2875C10.0208 13.0958 9.78333 13 9.5 13H0V11H9.5C10.3333 11 11.0417 11.2917 11.625 11.875C12.2083 12.4583 12.5 13.1667 12.5 14C12.5 14.8333 12.2083 15.5417 11.625 16.125C11.0417 16.7083 10.3333 17 9.5 17ZM0 7V5H13.5C13.9333 5 14.2917 4.85833 14.575 4.575C14.8583 4.29167 15 3.93333 15 3.5C15 3.06667 14.8583 2.70833 14.575 2.425C14.2917 2.14167 13.9333 2 13.5 2C13.0667 2 12.7083 2.14167 12.425 2.425C12.1417 2.70833 12 3.06667 12 3.5H10C10 2.51667 10.3375 1.6875 11.0125 1.0125C11.6875 0.3375 12.5167 0 13.5 0C14.4833 0 15.3125 0.3375 15.9875 1.0125C16.6625 1.6875 17 2.51667 17 3.5C17 4.48333 16.6625 5.3125 15.9875 5.9875C15.3125 6.6625 14.4833 7 13.5 7H0ZM16.5 15V13C16.9333 13 17.2917 12.8583 17.575 12.575C17.8583 12.2917 18 11.9333 18 11.5C18 11.0667 17.8583 10.7083 17.575 10.425C17.2917 10.1417 16.9333 10 16.5 10H0V8H16.5C17.4833 8 18.3125 8.3375 18.9875 9.0125C19.6625 9.6875 20 10.5167 20 11.5C20 12.4833 19.6625 13.3125 18.9875 13.9875C18.3125 14.6625 17.4833 15 16.5 15Z"
                    fill="#09273A"
                />
            </svg>
        ),
    },
    {
        label: "Text",
        icon: (
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.55 16.2L11.725 10H7.725L8.45 4.325L3.825 11H7.3L6.55 16.2ZM4 20L5 13H0L9 0H11L10 8H16L6 20H4Z"
                    fill="#09273A"
                />
            </svg>
        ),
    },
    {
        label: "Heavy Duty",
        icon: (
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.4 18.025L10.925 12.55L13.025 10.45L18.5 15.925L16.4 18.025ZM2.6 18.025L0.5 15.925L7.4 9.025L5.7 7.325L5 8.025L3.725 6.75V8.8L3.025 9.5L0 6.475L0.7 5.775H2.75L1.5 4.525L5.05 0.975C5.38333 0.641667 5.74167 0.4 6.125 0.25C6.50833 0.1 6.9 0.025 7.3 0.025C7.7 0.025 8.09167 0.1 8.475 0.25C8.85833 0.4 9.21667 0.641667 9.55 0.975L7.25 3.275L8.5 4.525L7.8 5.225L9.5 6.925L11.75 4.675C11.6833 4.49167 11.6292 4.3 11.5875 4.1C11.5458 3.9 11.525 3.7 11.525 3.5C11.525 2.51667 11.8625 1.6875 12.5375 1.0125C13.2125 0.3375 14.0417 0 15.025 0C15.275 0 15.5125 0.025 15.7375 0.075C15.9625 0.125 16.1917 0.2 16.425 0.3L13.95 2.775L15.75 4.575L18.225 2.1C18.3417 2.33333 18.4208 2.5625 18.4625 2.7875C18.5042 3.0125 18.525 3.25 18.525 3.5C18.525 4.48333 18.1875 5.3125 17.5125 5.9875C16.8375 6.6625 16.0083 7 15.025 7C14.825 7 14.625 6.98333 14.425 6.95C14.225 6.91667 14.0333 6.85833 13.85 6.775L2.6 18.025Z"
                    fill="#09273A"
                />
            </svg>
        ),
    },
    {
        label: "Low Maintenance",
        icon: (
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.3 20L6.9 16.8C6.68333 16.7167 6.47917 16.6167 6.2875 16.5C6.09583 16.3833 5.90833 16.2583 5.725 16.125L2.75 17.375L0 12.625L2.575 10.675C2.55833 10.5583 2.55 10.4458 2.55 10.3375C2.55 10.2292 2.55 10.1167 2.55 10C2.55 9.88333 2.55 9.77083 2.55 9.6625C2.55 9.55417 2.55833 9.44167 2.575 9.325L0 7.375L2.75 2.625L5.725 3.875C5.90833 3.74167 6.1 3.61667 6.3 3.5C6.5 3.38333 6.7 3.28333 6.9 3.2L7.3 0H12.8L13.2 3.2C13.4167 3.28333 13.6208 3.38333 13.8125 3.5C14.0042 3.61667 14.1917 3.74167 14.375 3.875L17.35 2.625L20.1 7.375L17.525 9.325C17.5417 9.44167 17.55 9.55417 17.55 9.6625C17.55 9.77083 17.55 9.88333 17.55 10C17.55 10.1167 17.5333 10.2292 17.5 10.3375L20.075 12.625L17.325 17.375L14.375 16.125C14.1917 16.2583 14 16.3833 13.8 16.5C13.6 16.6167 13.4 16.7167 13.2 16.8L12.8 20H7.3Z"
                    fill="#09273A"
                />
            </svg>
        ),
    },
];

const hvls_features = [
    {
        label: "Less Power Consumption",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L6 13H11L10 22L18 10H13V2Z" fill="#09273A" />
            </svg>
        ),
    },
    {
        label: "Added Comfort",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 4C8.5 7.5 6 10.2 6 13.5C6 17.1 8.9 20 12 20C15.1 20 18 17.1 18 13.5C18 10.2 15.5 7.5 12 4Z" fill="#09273A" />
                <path d="M9.5 14C10.2 14.8 11 15.2 12 15.2C13 15.2 13.8 14.8 14.5 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: "Increased Productivity",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="13" width="4" height="8" rx="1" fill="#09273A" />
                <rect x="10" y="9" width="4" height="12" rx="1" fill="#09273A" />
                <rect x="17" y="5" width="4" height="16" rx="1" fill="#09273A" />
            </svg>
        ),
    },
    {
        label: "Maintenance Free",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.7 7.3A5.5 5.5 0 0 1 13 14.9L6.2 21.7C5.6 22.3 4.6 22.3 4 21.7C3.4 21.1 3.4 20.1 4 19.5L10.8 12.7A5.5 5.5 0 0 1 18.4 5L15.8 7.6L17.4 9.2L20.7 7.3Z" fill="#09273A" />
            </svg>
        ),
    },
    {
        label: "Noiseless",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14 5L9.5 9H6V15H9.5L14 19V5Z" fill="#09273A" />
                <path d="M17 9L21 15" stroke="#09273A" strokeWidth="2" strokeLinecap="round" />
                <path d="M21 9L17 15" stroke="#09273A" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
];
export const features = new Map();
features.set("exhuast-fan", exhaustFan_features);
features.set("HVLS-fan", hvls_features)
/****************************************************************/

const models = [
    {
        title: "hero",
        url: "/whyChooseFloent.png"
    },
    {
        title: "FLEH - 1000",
        url: "/image1.jpeg"
    },
    {
        title: "FLEH - 1220",
        url: "/image2.jpeg"
    },
    {
        title: "FLEH - 1380",
        url: "/image3.jpeg"
    },
];
/*****************Specifications *************************************/

const exhaustfan_Specification = {
    heading: "Product Specifications",
    description: "The Floent Exhaust Fan is engineered for powerful and efficient air extraction in industrial, commercial, agricultural, and large-scale ventilation environments. Designed with high-performance aerodynamic blades, a robust galvanized steel frame, and an efficient motor, it provides strong airflow for effective heat, humidity, fumes, dust, and stale-air removal.",
    table: [
        { parameter: "Blade Dia (mm)", "FLEH-1000": "900", "FLEH-1220": "1000", "FLEH-1380": "1250" },
        { parameter: "Voice Level (db)", "FLEH-1000": "<70", "FLEH-1220": "<70", "FLEH-1380": "<70" },
        { parameter: "Air flow (CM/H)", "FLEH-1000": "22000", "FLEH-1220": "38000", "FLEH-1380": "40000" },
        { parameter: "Speed (rpm)", "FLEH-1000": "560", "FLEH-1220": "560", "FLEH-1380": "460" },
        { parameter: "Power (W)", "FLEH-1000": "550", "FLEH-1220": "750", "FLEH-1380": "1100" },
        { parameter: "Voltage", "FLEH-1000": "415", "FLEH-1220": "415", "FLEH-1380": "415" },
        { parameter: "Dimension (mm) (mm) (HxW)", "FLEH-1000": "1000 x 1000 x 400", "FLEH-1220": "1220 x 1220 x 400", "FLEH-1380": "1380 x 1380 x 450" },
        { parameter: "Motor Type", "FLEH-1000": "Direct Drive", "FLEH-1220": "Direct Drive", "FLEH-1380": "Direct Drive" },
        { parameter: "Blade Material", "FLEH-1000": "Stainless Steel", "FLEH-1220": "Stainless Steel", "FLEH-1380": "Stainless Steel" },
        { parameter: "Frame Material", "FLEH-1000": "Galvanized Steel", "FLEH-1220": "Galvanized Steel", "FLEH-1380": "Galvanized Steel" },
    ],
};
const hvlsfan_Specification = {
    heading: "Product Specifications",
    description:
        "HVLS fans are large, low-speed systems designed for high-ceiling spaces, delivering superior air circulation, energy efficiency, and comfort across wide areas.",
    table: [
        {
            parameter: "Size",
            FL245: "24 ft Dia",
            FL205: "20 ft Dia",
            FL165: "16 ft Dia",
            FL125: "12 ft Dia",
            FLGL246: "24 ft Dia",
            FLGL206: "20 ft Dia",
            FLGL166: "16 ft Dia",
            FLGL126: "12 ft Dia",
            FLGL086: "8 ft Dia",
        },
        {
            parameter: "No. of Blades",
            FL245: "5 Nos",
            FL205: "5 Nos",
            FL165: "5 Nos",
            FL125: "5 Nos",
            FLGL246: "6 Nos",
            FLGL206: "6 Nos",
            FLGL166: "6 Nos",
            FLGL126: "6 Nos",
            FLGL086: "6 Nos",
        },
        {
            parameter: "Motor Rating",
            FL245: "1.5 KW",
            FL205: "1.5 KW",
            FL165: "1.1 KW",
            FL125: "0.75 KW",
            FLGL246: "1.2 KW",
            FLGL206: "1.2 KW",
            FLGL166: "0.75 KW",
            FLGL126: "0.4 KW",
            FLGL086: "0.4 KW",
        },
        {
            parameter: "RPM",
            FL245: "50 RPM",
            FL205: "60 RPM",
            FL165: "70 RPM",
            FL125: "100 RPM",
            FLGL246: "50 RPM",
            FLGL206: "50 RPM",
            FLGL166: "70 RPM",
            FLGL126: "100 RPM",
            FLGL086: "120 RPM",
        },
    ],
};
export const specification = new Map();
specification.set("exhuast-fan", exhaustfan_Specification);
specification.set("HVLS-fan", hvlsfan_Specification);

/************************************************************************/

const featuresAndAdavantageexhuastfan = [
    {
        features: "LOW NOISE",
        advantage: "Special blade design ensures low noise operation.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M10 21H16L23 15V35L16 29H10V21Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M29 20C31 22 31 28 29 30"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M34 16C38 20 38 30 34 34"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M40 13C46 19 46 31 40 37"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },

    {
        features: "ENERGY EFFICIENT",
        advantage: "High efficiency motor with low power consumption.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M28 7L13 28H23L21 43L37 21H27L28 7Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        features: "ALUMINIUM IMPELLER",
        advantage: "Corrosion resistant aluminium impeller for long life & strength",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle
                    cx="25"
                    cy="25"
                    r="4"
                    stroke="#09273A"
                    strokeWidth="2"
                />
                <path
                    d="M25 21C19 19 14 15 16 11C18 7 24 10 25 21Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M29 25C31 19 35 14 39 16C43 18 40 24 29 25Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M25 29C31 31 36 35 34 39C32 43 26 40 25 29Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M21 25C19 31 15 36 11 34C7 32 10 26 21 25Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        features: "DURABLE & RELIABLE",
        advantage: "Galvanized steel body with strong structure for heavy duty use.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M25 7L39 12V23C39 32 33 39 25 43C17 39 11 32 11 23V12L25 7Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M18 25L23 30L33 19"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        features: "COPPER-WOUND MOTOR",
        advantage: "100% copper-wound, double ball-bearing motor for durability.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle
                    cx="25"
                    cy="25"
                    r="14"
                    stroke="#09273A"
                    strokeWidth="2"
                />
                <circle
                    cx="25"
                    cy="25"
                    r="6"
                    stroke="#09273A"
                    strokeWidth="2"
                />
                <path
                    d="M25 11V16M25 34V39M11 25H16M34 25H39"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M15 15L19 19M31 31L35 35M35 15L31 19M19 31L15 35"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },

    {
        features: "HIGH AIRFLOW",
        advantage: "Large air displacement delivers maximum airflow.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M8 18H30"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M25 13L30 18L25 23"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8 26H38"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M33 21L38 26L33 31"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8 34H30"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M25 29L30 34L25 39"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },

    {
        features: "RUST RESISTANT",
        advantage: "Built-in louvers prevent rain & dust entry and ensure smooth airflow.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M25 8C25 8 13 21 13 29C13 35.6 18.4 41 25 41C31.6 41 37 35.6 37 29C37 21 25 8 25 8Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path
                    d="M19 30C19 34 21.5 36.5 25 37"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M34 15L38 11M38 15L34 11"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },

    {
        features: "EFLY MAINTENANCE",
        advantage: "Simple installation and minimal maintenance",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M32 10C27.6 10 24 13.6 24 18C24 19.4 24.4 20.7 25 21.8L12 34.8C10.9 35.9 10.9 37.7 12 38.8C13.1 39.9 14.9 39.9 16 38.8L29 25.8C30.1 26.4 31.4 26.8 32.8 26.8C37.2 26.8 40.8 23.2 40.8 18.8"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M33 10L40 17"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <circle
                    cx="14"
                    cy="36"
                    r="2"
                    fill="#09273A"
                />
            </svg>
        ),
    },
];

const featuresandAdvhvls = [
    {
        features: "LOW RUNNING COST",
        advantage: "Consumes only Rs 3.5 per hour, ensuring affordable operation.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="19" stroke="#09273A" strokeWidth="2" />
                <path
                    d="M25 12V38M31 18.5C29.8 17.3 27.8 16.5 25.5 16.5C22.2 16.5 20 18.2 20 20.8C20 23.5 22.3 24.7 25.5 25.4C28.7 26.1 31 27.2 31 29.8C31 32.4 28.5 34 25 34C22.3 34 20.1 33 18.5 31.5"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        features: "IMPROVED AESTHETICS",
        advantage: "Modern design enhances the visual appeal of the space.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect
                    x="9"
                    y="9"
                    width="32"
                    height="32"
                    rx="6"
                    stroke="#09273A"
                    strokeWidth="2"
                />
                <path
                    d="M16 31L22 24L27 28L34 19"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="18" cy="18" r="2" fill="#09273A" />
            </svg>
        ),
    },
    {
        features: "LOW MAINTENANCE",
        advantage: "Engineered for long life with minimal servicing required.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="7" stroke="#09273A" strokeWidth="2" />
                <path
                    d="M25 11V15M25 35V39M39 25H35M15 25H11M34.9 15.1L32.1 17.9M17.9 32.1L15.1 34.9M34.9 34.9L32.1 32.1M17.9 17.9L15.1 15.1"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        features: "LONG LIFE & ROI",
        advantage: "Durable build ensures longevity and excellent return on investment.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M25 10L30 18H20L25 10Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path d="M25 18V33" stroke="#09273A" strokeWidth="2" strokeLinecap="round" />
                <path
                    d="M17 30L25 38L33 30"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M13 40H37" stroke="#09273A" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        features: "NOISELESS OPERATION",
        advantage: "Special blade design ensures quiet performance.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M15 22C18 19 22 17 26 17V33C22 33 18 31 15 28V22Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                <path d="M30 20L34 16M30 30L34 34" stroke="#09273A" strokeWidth="2" strokeLinecap="round" />
                <path
                    d="M37 21C38.5 23.5 38.5 26.5 37 29"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        features: "UNIFORM AIR FLOW",
        advantage: "Distributes air evenly across large spaces.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M10 17C14 13 18 21 22 17C26 13 30 21 34 17C38 13 40 17 40 17"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M10 25C14 21 18 29 22 25C26 21 30 29 34 25C38 21 40 25 40 25"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M10 33C14 29 18 37 22 33C26 29 30 37 34 33C38 29 40 33 40 33"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        features: "REDUCED TEMPERATURE",
        advantage: "Creates a cooling effect, lowering ambient heat.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M25 11V28"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <circle cx="25" cy="34" r="6" stroke="#09273A" strokeWidth="2" />
                <path
                    d="M25 18C22 21 21 23.5 21 26C21 28.5 22.8 30 25 30C27.2 30 29 28.5 29 26C29 23.5 28 21 25 18Z"
                    fill="#09273A"
                    fillOpacity="0.15"
                />
            </svg>
        ),
    },
    {
        features: "ENERGY SAVINGS",
        advantage: "Reduces HVAC costs and power consumption significantly.",
        icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                    d="M28 9L17 27H25L22 41L33 23H25L28 9Z"
                    stroke="#09273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
];


export const featureandadv = new Map();
featureandadv.set("exhuast-fan", featuresAndAdavantageexhuastfan);
featureandadv.set("HVLS-fan", featuresandAdvhvls);


const workingPrincipal = "Exhaust Fan draws out polluted air from premises and replaces it with fresh air. Air is considered polluted when it contains high amounts of hot air, moisture, carbon dioxide, vaporized chemicals, dust, fungal spores and unpleasant odors. Marut Air exhaust fan combat indoor air pollution by ejecting the unclean indoor air into the outside environment and letting in clean air from the outside"

/************************Applications***********************************/

export const application = new Map();
application.set("exhuast-fan", [
    "INDUSTRIAL PLANTS", "DAIRY FARMS & LIVESTOCK FARMS", "GREENHOUSE & AGRICULTURE", "WAREHOUSE & LOGISTICS", "COMMERCIAL SPACES", "FOOD PROCESSING UNITS"
])
application.set("HVLS-fan", [
    "Agricultural stock yard", "Animal & Poultry farms", "Food production center", "Auto motive showrooms", "Government godowns/Cold rooms", "Milk Production center", "Large worship places", "Railway/airport/ Exihibitions"
]);
/*************************Manufacturer *********************************/
const exhuastManufacturer = [
    "Floent Technologies is a leading manufacturer of high-performance industrial exhaust fans, designed to provide powerful air extraction and efficient ventilation for factories, warehouses, agricultural facilities, commercial spaces, and other large environments. Our exhaust fans are engineered for effective removal of heat, humidity, fumes, dust, and stale air, helping create a cooler, cleaner, and more comfortable workspace.",
    "Built with durable materials, aerodynamic fan blades, robust construction, and efficient motors, Floent Exhaust Fans deliver consistent airflow with reliable long-term performance. Designed for demanding industrial applications, they offer low maintenance, energy-efficient operation, and dependable ventilation, making Floent an ideal choice for efficient air extraction and improved indoor air quality."
]

const hvlsManufacturer = [
    "Floent Fan is the leading India's HVLS Fan Manufacturer, standing out in the HVLS (High Volume Low Speed) fan industry. Introducing the market in 2017 after two years of rigorous design development and testing, Floent has since established a dedicated 20,000 square foot manufacturing facility with a capacity to produce 300 fans per month. Every fan meets international quality standards while remaining affordable, providing high value to customers. Each model is CE certified, making sure safety and performance.",
    "Floent focuses a lot of value on HVLS fans and provides dedicated support for the duration of each product. The management's direct involvement in day-to-day manufacturing and after-sales operations provides high-quality products and prompt service. Also, Floent has a well-established sales and service network across India, making it easy for customers to access their products and services.",
    "Floent Technologies are designed to be energy efficient, providing significant energy savings compared to traditional fans. They operate quietly, making them suitable for various environments, from industrial settings to commercial spaces. With their superior design and efficient operation, Floent Technologies offer long-term cost savings. They move a large volume of air, that has better air circulation and ventilation in large spaces. Built with high-quality components, Floent HVLS fans are durable and customizable to meet the specific needs of different customers and applications."
];

export const manufacturer = new Map();
manufacturer.set("exhuast-fan", exhuastManufacturer);
manufacturer.set("HVLS-fan", hvlsManufacturer);

/************************Benefits **********************************/
const exhaustbenifits = [
    "An industrial exhaust fan provides powerful and efficient ventilation for factories, warehouses, agricultural facilities, commercial buildings, and other large spaces. It helps remove excess heat, humidity, fumes, dust, odors, and stale air, improving overall air quality and creating a cooler, healthier working environment. With high airflow performance and energy-efficient operation, it can reduce heat buildup and ventilation costs compared to conventional cooling solutions.",
    "Designed for demanding industrial applications, the Floent Exhaust Fan combines durable construction, efficient airflow, and reliable performance for continuous operation. Its low-maintenance design helps reduce operating and maintenance requirements while ensuring long-lasting ventilation. Ideal for factories, warehouses, workshops, poultry farms, and commercial spaces, it provides an effective and cost-efficient solution for maintaining proper air circulation and comfortable indoor conditions."
]

const hvlsbenefits: string[] = [
    "HVLS (High Volume Low Speed) Fans are an excellent investment for large spaces such as workshops or buildings with high ceilings. These fans are specifically designed to move large volumes of air at a low speed, providing uniform air distribution. This improves air quality, reduces energy costs, and increases comfort for users, making them ideal for improving the overall environment in expansive areas.",
    "HVLS fans are ideal for large spaces, ensuring consistent airflow, improved air quality, and enhanced worker comfort.",
    "They provide energy efficiency with 30–70% savings, reduce ventilation costs, and deliver long-term cost benefits.",
    "Built for durability and aesthetics, HVLS fans improve circulation, reduce contaminants, and create healthier, more comfortable environments."
];

export const benefits = new Map();
benefits.set("exhuast-fan", exhaustbenifits);
benefits.set("HVLS-fan", hvlsbenefits);