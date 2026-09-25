/***************** Title and description ********************************/
const exhaustfan_title_desc = ["Exhaust Fan Series", "Built for demanding operating conditions, the Floent Exhaust Fan offers reliable performance, durable construction, low maintenance, and energy - efficient ventilation, helping maintain a cooler, cleaner, and better - ventilated environment."]
const hvlsfan_title_desc = ["Big Industrial HVLS Fan",
    "Floent Technologies is the largest industrial HVLS fan manufacturer in India, specializing in high-performance geared HVLS fans and gearless HVLS fans. We offer a complete range of energy-efficient solutions, customized to meet specific industry requirements for maximum airflow, durability, and cost-effectiveness."
];
const hvls_geared_12_title_desc = [
    "12 Feet Geared HVLS Fan Manufacturer",
    "12 ft diameter HVLS fan with 5 blades, delivering 135,000 CFM airflow powered by a 0.75 KW motor. Covers up to 6,500 ft² with noise levels between 60–65 dB."
]


export const title_description = new Map();

// Exhaust Fan
title_description.set("exhuast-fan", [
  "Industrial Exhaust Fan",
  "Exhaust fans are designed for ventilation in factories, warehouses, and commercial spaces, ensuring air quality by removing heat, fumes, dust, and humidity."
]);

title_description.set("HVLS-gearless-fan", [
  "Big Industrial HVLS Fan",
  "Floent Technologies is the largest industrial HVLS fan manufacturer in India, specializing in high-performance geared HVLS fans and gearless HVLS fans. We offer a complete range of energy-efficient solutions, customized to meet specific industry requirements for maximum airflow, durability, and cost-effectiveness."
]);

title_description.set("12-feet-geared-HVLS-fan", [
  "12 Feet Geared HVLS Fan Manufacturer",
  "12 ft diameter HVLS fan with 5 blades, delivering 135,000 CFM airflow powered by a 0.75 KW motor. Covers up to 6,500 ft² with noise levels between 60–65 dB."
]);

title_description.set("16-feet-geared-HVLS-fan", [
  "16 Feet Geared HVLS Fan Manufacturer",
  "16 ft diameter HVLS fan with 5 blades, delivering 185,000 CFM airflow powered by a 1.0 KW motor. Covers up to 10,000 ft² with noise levels between 60–65 dB."
]);

title_description.set("18-feet-geared-HVLS-fan", [
  "18 Feet Geared HVLS Fan Manufacturer",
  "18 ft diameter HVLS fan with 5 blades, delivering 200,000 CFM airflow powered by a 1.1 KW motor. Covers up to 13,000 ft² with noise levels between 60–65 dB."
]);

title_description.set("20-feet-geared-HVLS-fan", [
  "20 Feet Geared HVLS Fan Manufacturer",
  "20 ft diameter HVLS fan with 5 blades, delivering 350,000 CFM airflow powered by a 1.5 KW motor. Covers up to 16,000 ft² with noise levels between 60–65 dB."
]);

title_description.set("24-feet-geared-HVLS-fan", [
  "24 Feet Geared HVLS Fan Manufacturer",
  "24 ft diameter HVLS fan with 5 blades, delivering 390,000 CFM airflow powered by a 2.0 KW motor. Covers up to 20,000 ft² with noise levels between 60–65 dB."
]);

// Gearless HVLS Fans
title_description.set("8-feet-gearless-HVLS-fan", [
  "8 Feet Gearless HVLS Fan Manufacturer",
  "8 ft diameter gearless HVLS fan delivering 95,000 CFM airflow powered by a 0.5 KW motor. Covers up to 2,500 ft² with ultra-low noise levels."
]);

title_description.set("10-feet-gearless-HVLS-fan", [
  "10 Feet Gearless HVLS Fan Manufacturer",
  "10 ft diameter gearless HVLS fan delivering 120,000 CFM airflow powered by a 0.6 KW motor. Covers up to 4,000 ft² with ultra-low noise levels."
]);

title_description.set("12-feet-gearless-HVLS-fan", [
  "12 Feet Gearless HVLS Fan Manufacturer",
  "12 ft diameter gearless HVLS fan delivering 180,000 CFM airflow powered by a 0.75 KW motor. Covers up to 6,500 ft² with ultra-low noise levels."
]);

title_description.set("16-feet-gearless-HVLS-fan", [
  "16 Feet Gearless HVLS Fan Manufacturer",
  "16 ft diameter gearless HVLS fan delivering 355,000 CFM airflow powered by a 1.2 KW motor. Covers up to 10,000 ft² with ultra-low noise levels."
]);

title_description.set("20-feet-gearless-HVLS-fan", [
  "20 Feet Gearless HVLS Fan Manufacturer",
  "20 ft diameter gearless HVLS fan delivering 410,000 CFM airflow powered by a 1.5 KW motor. Covers up to 16,000 ft² with ultra-low noise levels."
]);

title_description.set("24-feet-gearless-HVLS-fan", [
  "24 Feet Gearless HVLS Fan Manufacturer",
  "24 ft diameter gearless HVLS fan delivering 485,000 CFM airflow powered by a 2.0 KW motor. Covers up to 20,000 ft² with ultra-low noise levels."
]);


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
features.set("HVLS-gearless-fan", hvls_features);


features.set("8-feet-gearless-HVLS-fan",hvls_features);
features.set("10-feet-gearless-HVLS-fan", hvls_features);
// specification.set("12-feet-gearless-HVLS-fan", hvls_12ft_gearless);
features.set("16-feet-gearless-HVLS-fan", hvls_features);
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
    description: [
        {
            type: "paragraph",
            heading: "Description",
            data: [

                "The Floent Exhaust Fan is engineered for powerful and efficient air extraction in industrial, commercial, agricultural, and large-scale ventilation environments. Designed with high-performance aerodynamic blades, a robust galvanized steel frame, and an efficient motor, it provides strong airflow for effective heat, humidity, fumes, dust, and stale-air removal."],
        },
    ],
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
    description: [
        {
            type: "paragraph",
            heading: "Description",
            data: [
                "Floent ASGL series Fan are Gearless Type HVLS Fans driven by latest technology Permanent Magnet Synchronous Motor, with five Aero Blades and die casted Blade mounting clamps. FLGL Series Fans have Noise level advantage and efficiency advantages against FL series Fans. Are controlled through Variable Frequency Drive for Reverse / Forward and speed adjustment features. Complies to international safety standards. Available in Standard Matt Black color and customized color options."
            ]
        }
    ],
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

const hvls_12ft = {
    heading: "Product Specifications",
    description: [
        {
            type: "paragraph",
            heading: "FL125 — 12 Feet HVLS Fan",
            data: [
                "The FL125 is the entry point into the geared range — a 12 ft sweep for bays that do not need a larger diameter but still want the German geared drive under the hub. Air volume is 135,000 CFM at a maximum of 50 rpm, variable from zero, and the fan weighs about 110 kg. Drive is an inline helical geared unit with an induction motor, Nord or SEW German make, rated 0.75 KW at 90 Nm and IE2 efficiency — IE3 is available on special request. Five cambered aerofoil blades are rolled in Aluminium 6063 T6 to a 220 mm section with two ribs. Speed is set from a Danfoss VFD in an IP54 powder coated steel cabinet, wall mounted 4 to 5 ft from floor level and BMS compatible. Noise sits at 60 to 65 dB."
            ]
        },
        {
            type: "list",
            heading: "What Comes With It",
            data: [
                "Inline helical geared motor with induction motor — Nord / SEW German make, 0.75 KW, 90 Nm, IE2 (IE3 on special request)",
                "Five cambered aerofoil blades in Aluminium 6063 T6, 220 mm section, two ribs",
                "M.S. powder coated frame and hanging structure",
                "3\" square extension tube, hot dip galvanised inside against rust",
                "High tensile 10.9 grade HEX bolts, Unbrako or TVS make, with self-locking Nyloc nuts",
                "Danfoss VFD in an IP54 powder coated steel cabinet, BMS compatible",
                "Input power three phase 415 V 50 Hz, or single phase 230 V",
                "Matt Black, Silver, Pure White, Off White or Red — or any RAL number to order",
                "CE certified through TUV"
            ]
        }
    ],
    table: [
        { label: "Diameter", value: "12 feet" },
        { label: "Model", value: "FL125" },
        { label: "Blade Quantity", value: "5" },
        { label: "Blade Material", value: "Aluminium 6063 T6, cambered aerofoil, 220 mm section, 2 ribs" },
        { label: "Air Delivery", value: "135,000 CFM" },
        { label: "Motor Make & Rating", value: "NORD / SEW (Germany) geared motor — 0.75 KW" },
        { label: "Speed Range", value: "0 – 50 rpm (variable)" },
        { label: "Noise Level", value: "60 – 65 dB" },
        { label: "Coverage Area", value: "up to 6,500 sq.ft. (indicative, at standard mounting height)" },
        { label: "Insulation Class", value: "Class F" },
        { label: "Efficiency Class", value: "IE2 (IE3 available on request)" },
        { label: "Power Supply", value: "Three phase 415 V 50 Hz / single phase 230 V" },
        { label: "Frame", value: "M.S. powder coated frame and hanging structure, 3\" square extension tube hot dip galvanised inside" },
        { label: "Hub", value: "Single piece die cast aluminium hub, radiography tested; blades through-bolted with 10.9 grade fasteners and Nyloc nuts" },
        { label: "Fasteners", value: "High tensile 10.9 grade HEX bolts (Unbrako / TVS) with self-locking Nyloc nuts" },
        { label: "Control Panel", value: "Danfoss VFD in an IP54 powder coated steel cabinet, BMS compatible" },
        { label: "IP Rating", value: "IP54 (control panel)" },
        { label: "Certification", value: "CE certified by TUV Nord" },
        { label: "Approx. Weight", value: "110 kg approx." },
    ],
    safety: [
        {
            title: "Bolted Joints",
            description:
                "All nuts are self-locking Nyloc type, which eliminates any chance of loosening in service.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                </svg>
            ),
        },
        {
            title: "Wire Rope Restraint",
            description:
                "As an additional safety measure every bolted joint is wrapped with SS wire rope, so a joint that backs off is still held.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path>
                </svg>
            ),
        },
        {
            title: "Fasteners",
            description:
                "High tensile 10.9 grade HEX bolts throughout, Unbrako or TVS make — sized with margin rather than to the minimum the load calls for.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4z"></path>
                    <path d="M6 6 3 9l3 3"></path>
                </svg>
            ),
        },
        {
            title: "Hanging Structure",
            description:
                "M.S. powder coated frame and hanging structure, with a 3\" square extension tube hot dip galvanised on the inside so the bore does not rust where it cannot be inspected.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.2"></circle>
                    <path d="M12 9.8c0-3 .6-5.6 2.4-6.4 1.6-.7 2.9 1 2 2.8-.9 1.9-2.7 3-4.4 3.6M14.2 12c2.9 0 5.5.6 6.3 2.4.7 1.6-1 2.9-2.8 2-1.9-.9-3-2.7-3.5-4.4M12 14.2c0 3-.6 5.6-2.4 6.4-1.6.7-2.9-1-2-2.8.9-1.9 2.7-3 4.4-3.6M9.8 12c-3 0-5.6-.6-6.4-2.4-.7-1.6 1-2.9 2.8-2 1.9.9 3 2.7 3.6 4.4"></path>
                </svg>
            ),
        },
    ],
    installation: [
        {
            type: "list",
            heading: "Installation Requirements",
            data: [
                "Minimum roof height of 18 ft to the underside of the fan for effective coverage; below that, fan count rises.",
                "Blade tip clearance of at least 600 mm from any beam, duct, light fitting, sprinkler or crane path.",
                "Hanging point on a load-bearing truss node or purlin, verified at site survey — not a decorative or false ceiling.",
                "Danfoss VFD panel wall mounted 4 to 5 ft from floor level, clear of wash-down, oil and heavy dust zones.",
                "Three phase 415 V 50 Hz, or single phase 230 V, to the VFD panel.",
                "Access equipment (scissor lift or scaffolding) available at site on the installation date."
            ]
        },
        {
            type: "paragraph",
            heading: "What We Handle",
            data: [
                "Dispatch and site handling, hanging structure fitment, fan assembly and mounting, control panel mounting, VFD commissioning, run testing across the full speed range, and an operator briefing at handover — all by our own qualified technicians."
            ]
        }
    ],
    warrenty: [
        {
            title: "3 Years",
            description: "Hub, blades and hanging structure",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
        {
            title: "1 Year",
            description: "Motor and controller",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
    ]

}

const hvls_16ft = {
    heading: "Product Specifications",
    description: [
        {
            type: "paragraph",
            heading: "FL165 — 16 Feet HVLS Fan",
            data: [
                "The FL165 is the mid-size geared fan, and the diameter specified most often for workshop, packing and stitching floors. Air volume is 185,000 CFM at a maximum of 70 rpm, variable from zero, and the fan weighs about 130 kg. Drive is an inline helical geared unit with an induction motor, Nord or SEW German make, rated 1.1 KW at 180 Nm and IE2 efficiency — IE3 is available on special request. Five cambered aerofoil blades are rolled in Aluminium 6063 T6 to a 220 mm section with two ribs. Speed is set from a Danfoss VFD in an IP54 powder coated steel cabinet, wall mounted 4 to 5 ft from floor level and BMS compatible. Noise sits at 60 to 65 dB."
            ]
        },
        {
            type: "list",
            heading: "What Comes With It",
            data: [
                "Inline helical geared motor with induction motor — Nord / SEW German make, 1.1 KW, 180 Nm, IE2 (IE3 on special request)",
                "Five cambered aerofoil blades in Aluminium 6063 T6, 220 mm section, two ribs",
                "M.S. powder coated frame and hanging structure",
                "3\" square extension tube, hot dip galvanised inside against rust",
                "High tensile 10.9 grade HEX bolts, Unbrako or TVS make, with self-locking Nyloc nuts",
                "Danfoss VFD in an IP54 powder coated steel cabinet, BMS compatible",
                "Input power three phase 415 V 50 Hz, or single phase 230 V",
                "Matt Black, Silver, Pure White, Off White or Red — or any RAL number to order",
                "CE certified through TUV"
            ]
        }
    ],
    table: [
        { label: "Model", value: "FL165" },
        { label: "Diameter", value: "16 feet" },
        { label: "Blade Quantity", value: "5" },
        { label: "Blade Material", value: "Aluminium 6063 T6, cambered aerofoil, 220 mm section, 2 ribs" },
        { label: "Air Delivery", value: "185,000 CFM" },
        { label: "Motor Make & Rating", value: "NORD / SEW (Germany) geared motor — 1.1 KW" },
        { label: "Speed Range", value: "0 – 70 rpm (variable)" },
        { label: "Noise Level", value: "60 – 65 dB" },
        { label: "Coverage Area", value: "up to 10,000 sq.ft. (indicative, at standard mounting height)" },
        { label: "Insulation Class", value: "Class F" },
        { label: "Efficiency Class", value: "IE2 (IE3 available on request)" },
        { label: "Power Supply", value: "Three phase 415 V 50 Hz / single phase 230 V" },
        { label: "Frame", value: "M.S. powder coated frame and hanging structure, 3\" square extension tube hot dip galvanised inside" },
        { label: "Hub", value: "Single piece die cast aluminium hub, radiography tested; blades through-bolted with 10.9 grade fasteners and Nyloc nuts" },
        { label: "Fasteners", value: "High tensile 10.9 grade HEX bolts (Unbrako / TVS) with self-locking Nyloc nuts" },
        { label: "Control Panel", value: "Danfoss VFD in an IP54 powder coated steel cabinet, BMS compatible" },
        { label: "IP Rating", value: "IP54 (control panel)" },
        { label: "Certification", value: "CE certified by TUV Nord" },
        { label: "Approx. Weight", value: "130 kg approx." },
    ],
    safety: [
        {
            title: "Bolted Joints",
            description: "All nuts are self-locking Nyloc type, which eliminates any chance of loosening in service.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                </svg>
            ),
        },
        {
            title: "Wire Rope Restraint",
            description: "As an additional safety measure every bolted joint is wrapped with SS wire rope, so a joint that backs off is still held.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path>
                </svg>
            ),
        },
        {
            title: "Fasteners",
            description: "High tensile 10.9 grade HEX bolts throughout, Unbrako or TVS make — sized with margin rather than to the minimum the load calls for.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4z"></path>
                    <path d="M6 6 3 9l3 3"></path>
                </svg>
            ),
        },
        {
            title: "Hanging Structure",
            description: "M.S. powder coated frame and hanging structure, with a 3\" square extension tube hot dip galvanised on the inside so the bore does not rust where it cannot be inspected.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.2"></circle>
                    <path d="M12 9.8c0-3 .6-5.6 2.4-6.4 1.6-.7 2.9 1 2 2.8-.9 1.9-2.7 3-4.4 3.6M14.2 12c2.9 0 5.5.6 6.3 2.4.7 1.6-1 2.9-2.8 2-1.9-.9-3-2.7-3.5-4.4M12 14.2c0 3-.6 5.6-2.4 6.4-1.6.7-2.9-1-2-2.8.9-1.9 2.7-3 4.4-3.6M9.8 12c-3 0-5.6-.6-6.4-2.4-.7-1.6 1-2.9 2.8-2 1.9.9 3 2.7 3.6 4.4"></path>
                </svg>
            )
        },
    ],
    installation: [
        {
            type: "list",
            heading: "Installation Requirements",
            data: [
                "Minimum roof height of 18 ft to the underside of the fan for effective coverage; below that, fan count rises.",
                "Blade tip clearance of at least 600 mm from any beam, duct, light fitting, sprinkler or crane path.",
                "Hanging point on a load-bearing truss node or purlin, verified at site survey — not a decorative or false ceiling.",
                "Danfoss VFD panel wall mounted 4 to 5 ft from floor level, clear of wash-down, oil and heavy dust zones.",
                "Three phase 415 V 50 Hz, or single phase 230 V, to the VFD panel.",
                "Access equipment (scissor lift or scaffolding) available at site on the installation date."
            ]
        },
        {
            type: "paragraph",
            heading: "What We Handle",
            data: [
                "Dispatch and site handling, hanging structure fitment, fan assembly and mounting, control panel mounting, VFD commissioning, run testing across the full speed range, and an operator briefing at handover — all by our own qualified technicians."
            ]
        }
    ],
    warranty: [
        {
            title: "3 Years",
            description: "Hub, blades and hanging structure",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
        {
            title: "1 Year",
            description: "Motor and controller",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        }
    ]
};

const hvls_18ft = {
    heading: "Product Specifications",
    description: [
        {
            type: "paragraph",
            heading: "FL185 — 18 Feet HVLS Fan",
            data: [
                "The FL185 sits between the 16 and 20 ft fans, for bays where a 16 ft sweep leaves a gap at the walls and a 20 ft sweep will not clear the structure. Air volume is 200,000 CFM at a maximum of 70 rpm, variable from zero, and the fan weighs about 130 kg. Drive is an inline helical geared unit with an induction motor, Nord or SEW German make, rated 1.1 KW at 180 Nm and IE2 efficiency — IE3 is available on special request. Five cambered aerofoil blades are rolled in Aluminium 6063 T6 to a 220 mm section with two ribs. Speed is set from a Danfoss VFD in an IP54 powder coated steel cabinet, wall mounted 4 to 5 ft from floor level and BMS compatible. Noise sits at 60 to 65 dB."
            ]
        },
        {
            type: "list",
            heading: "What Comes With It",
            data: [
                "Inline helical geared motor with induction motor — Nord / SEW German make, 1.1 KW, 180 Nm, IE2 (IE3 on special request)",
                "Five cambered aerofoil blades in Aluminium 6063 T6, 220 mm section, two ribs",
                "M.S. powder coated frame and hanging structure",
                "3\" square extension tube, hot dip galvanised inside against rust",
                "High tensile 10.9 grade HEX bolts, Unbrako or TVS make, with self-locking Nyloc nuts",
                "Danfoss VFD in an IP54 powder coated steel cabinet, BMS compatible",
                "Input power three phase 415 V 50 Hz, or single phase 230 V",
                "Matt Black, Silver, Pure White, Off White or Red — or any RAL number to order",
                "CE certified through TUV"
            ]
        }
    ],
    table: [
        { label: "Model", value: "AS185" },
        { label: "Diameter", value: "18 feet" },
        { label: "Blade Quantity", value: "5" },
        { label: "Blade Material", value: "Aluminium 6063 T6, cambered aerofoil, 220 mm section, 2 ribs" },
        { label: "Air Delivery", value: "200,000 CFM" },
        { label: "Motor Make & Rating", value: "NORD / SEW (Germany) geared motor — 1.1 KW, 180 Nm" },
        { label: "Speed Range", value: "0 – 70 rpm (variable)" },
        { label: "Noise Level", value: "60 – 65 dB" },
        { label: "Coverage Area", value: "up to 11,000 sq.ft. (indicative, at standard mounting height)" },
        { label: "Insulation Class", value: "Class F" },
        { label: "Efficiency Class", value: "IE2 (IE3 available on request)" },
        { label: "Power Supply", value: "Three phase 415 V 50 Hz / single phase 230 V" },
        { label: "Frame", value: "M.S. powder coated frame and hanging structure, 3\" square extension tube hot dip galvanised inside" },
        { label: "Hub", value: "Single piece die cast aluminium hub, radiography tested; blades through-bolted with 10.9 grade fasteners and Nyloc nuts" },
        { label: "Fasteners", value: "High tensile 10.9 grade HEX bolts (Unbrako / TVS) with self-locking Nyloc nuts" },
        { label: "Control Panel", value: "Danfoss VFD in an IP54 powder coated steel cabinet, BMS compatible" },
        { label: "IP Rating", value: "IP54 (control panel)" },
        { label: "Certification", value: "CE certified by TUV Nord" },
        { label: "Approx. Weight", value: "130 kg approx." },
    ],
    safety: [
        {
            title: "Bolted Joints",
            description:
                "All nuts are self-locking Nyloc type, which eliminates any chance of loosening in service.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                </svg>
            ),
        },
        {
            title: "Wire Rope Restraint",
            description:
                "As an additional safety measure every bolted joint is wrapped with SS wire rope, so a joint that backs off is still held.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path>
                </svg>
            ),
        },
        {
            title: "Fasteners",
            description:
                "High tensile 10.9 grade HEX bolts throughout, Unbrako or TVS make — sized with margin rather than to the minimum the load calls for.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4z"></path>
                    <path d="M6 6 3 9l3 3"></path>
                </svg>
            ),
        },
        {
            title: "Hanging Structure",
            description:
                "M.S. powder coated frame and hanging structure, with a 3\" square extension tube hot dip galvanised on the inside so the bore does not rust where it cannot be inspected.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.2"></circle>
                    <path d="M12 9.8c0-3 .6-5.6 2.4-6.4 1.6-.7 2.9 1 2 2.8-.9 1.9-2.7 3-4.4 3.6M14.2 12c2.9 0 5.5.6 6.3 2.4.7 1.6-1 2.9-2.8 2-1.9-.9-3-2.7-3.5-4.4M12 14.2c0 3-.6 5.6-2.4 6.4-1.6.7-2.9-1-2-2.8.9-1.9 2.7-3 4.4-3.6M9.8 12c-3 0-5.6-.6-6.4-2.4-.7-1.6 1-2.9 2.8-2 1.9.9 3 2.7 3.6 4.4"></path>
                </svg>
            ),
        },
    ],
    installation: [
        {
            type: "list",
            heading: "Installation Requirements",
            data: [
                "Minimum roof height of 18 ft to the underside of the fan for effective coverage; below that, fan count rises.",
                "Blade tip clearance of at least 600 mm from any beam, duct, light fitting, sprinkler or crane path.",
                "Hanging point on a load-bearing truss node or purlin, verified at site survey — not a decorative or false ceiling.",
                "Danfoss VFD panel wall mounted 4 to 5 ft from floor level, clear of wash-down, oil and heavy dust zones.",
                "Three phase 415 V 50 Hz, or single phase 230 V, to the VFD panel.",
                "Access equipment (scissor lift or scaffolding) available at site on the installation date."
            ]
        },
        {
            type: "paragraph",
            heading: "What We Handle",
            data: [
                "Dispatch and site handling, hanging structure fitment, fan assembly and mounting, control panel mounting, VFD commissioning, run testing across the full speed range, and an operator briefing at handover — all by our own qualified technicians."
            ]
        }
    ],
    warrenty: [
        {
            title: "3 Years",
            description: "Hub, blades and hanging structure",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
        {
            title: "1 Year",
            description: "Motor and controller",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
    ]
};

const hvls_20ft = {
    heading: "Product Specifications",
    description: [
        {
            type: "paragraph",
            heading: "FL205 — 20 Feet HVLS Fan",
            data: [
                "The FL205 is the large-bay geared fan, sized for warehouses, logistics halls and assembly lines with a wide clear span. Air volume is 350,000 CFM at a maximum of 50 rpm, variable from zero, and the fan weighs about 140 kg. Drive is an inline helical geared unit with an induction motor, Nord or SEW German make, rated 1.5 KW at 270 Nm and IE2 efficiency — IE3 is available on special request. Five cambered aerofoil blades are rolled in Aluminium 6063 T6 to a 220 mm section with two ribs. Speed is set from a Danfoss VFD in an IP54 powder coated steel cabinet, wall mounted 4 to 5 ft from floor level and BMS compatible. Noise sits at 60 to 65 dB."
            ]
        },
        {
            type: "list",
            heading: "What Comes With It",
            data: [
                "Inline helical geared motor with induction motor — Nord / SEW German make, 1.5 KW, 270 Nm, IE2 (IE3 on special request)",
                "Five cambered aerofoil blades in Aluminium 6063 T6, 220 mm section, two ribs",
                "M.S. powder coated frame and hanging structure",
                "3\" square extension tube, hot dip galvanised inside against rust",
                "High tensile 10.9 grade HEX bolts, Unbrako or TVS make, with self-locking Nyloc nuts",
                "Danfoss VFD in an IP54 powder coated steel cabinet, BMS compatible",
                "Input power three phase 415 V 50 Hz, or single phase 230 V",
                "Matt Black, Silver, Pure White, Off White or Red — or any RAL number to order",
                "CE certified through TUV"
            ]
        }
    ],
    table: [
        { label: "Model", value: "FL205" },
        { label: "Diameter", value: "20 feet" },
        { label: "Blade Quantity", value: "5" },
        { label: "Blade Material", value: "Aluminium 6063 T6, cambered aerofoil, 220 mm section, 2 ribs" },
        { label: "Air Delivery", value: "350,000 CFM" },
        { label: "Motor Make & Rating", value: "NORD / SEW (Germany) geared motor — 1.5 KW" },
        { label: "Speed Range", value: "0 – 50 rpm (variable)" },
        { label: "Noise Level", value: "60 – 65 dB" },
        { label: "Coverage Area", value: "up to 16,000 sq.ft. (indicative, at standard mounting height)" },
        { label: "Insulation Class", value: "Class F" },
        { label: "Efficiency Class", value: "IE2 (IE3 available on request)" },
        { label: "Power Supply", value: "Three phase 415 V 50 Hz / single phase 230 V" },
        { label: "Frame", value: "M.S. powder coated frame and hanging structure, 3\" square extension tube hot dip galvanised inside" },
        { label: "Hub", value: "Single piece die cast aluminium hub, radiography tested; blades through-bolted with 10.9 grade fasteners and Nyloc nuts" },
        { label: "Fasteners", value: "High tensile 10.9 grade HEX bolts (Unbrako / TVS) with self-locking Nyloc nuts" },
        { label: "Control Panel", value: "Danfoss VFD in an IP54 powder coated steel cabinet, BMS compatible" },
        { label: "IP Rating", value: "IP54 (control panel)" },
        { label: "Certification", value: "CE certified by TUV Nord" },
        { label: "Approx. Weight", value: "140 kg approx." },
    ],
    safety: [
        {
            title: "Bolted Joints",
            description:
                "All nuts are self-locking Nyloc type, which eliminates any chance of loosening in service.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                </svg>
            ),
        },
        {
            title: "Wire Rope Restraint",
            description:
                "As an additional safety measure every bolted joint is wrapped with SS wire rope, so a joint that backs off is still held.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path>
                </svg>
            ),
        },
        {
            title: "Fasteners",
            description:
                "High tensile 10.9 grade HEX bolts throughout, Unbrako or TVS make — sized with margin rather than to the minimum the load calls for.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4z"></path>
                    <path d="M6 6 3 9l3 3"></path>
                </svg>
            ),
        },
        {
            title: "Hanging Structure",
            description:
                "M.S. powder coated frame and hanging structure, with a 3\" square extension tube hot dip galvanised on the inside so the bore does not rust where it cannot be inspected.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.2"></circle>
                    <path d="M12 9.8c0-3 .6-5.6 2.4-6.4 1.6-.7 2.9 1 2 2.8-.9 1.9-2.7 3-4.4 3.6M14.2 12c2.9 0 5.5.6 6.3 2.4.7 1.6-1 2.9-2.8 2-1.9-.9-3-2.7-3.5-4.4M12 14.2c0 3-.6 5.6-2.4 6.4-1.6.7-2.9-1-2-2.8.9-1.9 2.7-3 4.4-3.6M9.8 12c-3 0-5.6-.6-6.4-2.4-.7-1.6 1-2.9 2.8-2 1.9.9 3 2.7 3.6 4.4"></path>
                </svg>
            ),
        },
    ],
    installation: [
        {
            type: "list",
            heading: "Installation Requirements",
            data: [
                "Minimum roof height of 18 ft to the underside of the fan for effective coverage; below that, fan count rises.",
                "Blade tip clearance of at least 600 mm from any beam, duct, light fitting, sprinkler or crane path.",
                "Hanging point on a load-bearing truss node or purlin, verified at site survey — not a decorative or false ceiling.",
                "Danfoss VFD panel wall mounted 4 to 5 ft from floor level, clear of wash-down, oil and heavy dust zones.",
                "Three phase 415 V 50 Hz, or single phase 230 V, to the VFD panel.",
                "Access equipment (scissor lift or scaffolding) available at site on the installation date."
            ]
        },
        {
            type: "paragraph",
            heading: "What We Handle",
            data: [
                "Dispatch and site handling, hanging structure fitment, fan assembly and mounting, control panel mounting, VFD commissioning, run testing across the full speed range, and an operator briefing at handover — all by our own qualified technicians."
            ]
        }
    ],
    warrenty: [
        {
            title: "3 Years",
            description: "Hub, blades and hanging structure",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
        {
            title: "1 Year",
            description: "Motor and controller",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
    ]
};

const hvls_24ft = {
    heading: "Product Specifications",
    description: [
        {
            type: "paragraph",
            heading: "FL245 — 24 Feet HVLS Fan",
            data: [
                "The FL245 is the largest geared fan Floent builds — a 24 ft sweep for the biggest sheds on site, where one fan has to do the work of a hundred conventional ceiling fans. Air volume is 390,000 CFM at a maximum of 50 rpm, variable from zero, and the fan weighs about 150 kg. Drive is an inline helical geared unit with an induction motor, Nord or SEW German make, rated 1.5 KW at 270 Nm and IE2 efficiency — IE3 is available on special request. Five cambered aerofoil blades are rolled in Aluminium 6063 T6 to a 220 mm section with two ribs. Speed is set from a Danfoss VFD in an IP54 powder coated steel cabinet, wall mounted 4 to 5 ft from floor level and BMS compatible. Noise sits at 60 to 65 dB."
            ]
        },
        {
            type: "list",
            heading: "What Comes With It",
            data: [
                "Inline helical geared motor with induction motor — Nord / SEW German make, 1.5 KW, 270 Nm, IE2 (IE3 on special request)",
                "Five cambered aerofoil blades in Aluminium 6063 T6, 220 mm section, two ribs",
                "M.S. powder coated frame and hanging structure",
                "3\" square extension tube, hot dip galvanised inside against rust",
                "High tensile 10.9 grade HEX bolts, Unbrako or TVS make, with self-locking Nyloc nuts",
                "Danfoss VFD in an IP54 powder coated steel cabinet, BMS compatible",
                "Input power three phase 415 V 50 Hz, or single phase 230 V",
                "Matt Black, Silver, Pure White, Off White or Red — or any RAL number to order",
                "CE certified through TUV"
            ]
        }
    ],
    table: [
        { label: "Model", value: "AS245" },
        { label: "Diameter", value: "24 feet" },
        { label: "Blade Quantity", value: "5" },
        { label: "Blade Material", value: "Aluminium 6063 T6, cambered aerofoil, 220 mm section, 2 ribs" },
        { label: "Air Delivery", value: "390,000 CFM" },
        { label: "Motor Make & Rating", value: "NORD / SEW (Germany) geared motor — 1.5 KW, 270 Nm" },
        { label: "Speed Range", value: "0 – 50 rpm (variable)" },
        { label: "Noise Level", value: "60 – 65 dB" },
        { label: "Coverage Area", value: "up to 20,000 sq.ft. (indicative, at standard mounting height)" },
        { label: "Insulation Class", value: "Class F" },
        { label: "Efficiency Class", value: "IE2 (IE3 available on request)" },
        { label: "Power Supply", value: "Three phase 415 V 50 Hz / single phase 230 V" },
        { label: "Frame", value: "M.S. powder coated frame and hanging structure, 3\" square extension tube hot dip galvanised inside" },
        { label: "Hub", value: "Single piece die cast aluminium hub, radiography tested; blades through-bolted with 10.9 grade fasteners and Nyloc nuts" },
        { label: "Fasteners", value: "High tensile 10.9 grade HEX bolts (Unbrako / TVS) with self-locking Nyloc nuts" },
        { label: "Control Panel", value: "Danfoss VFD in an IP54 powder coated steel cabinet, BMS compatible" },
        { label: "IP Rating", value: "IP54 (control panel)" },
        { label: "Certification", value: "CE certified by TUV Nord" },
        { label: "Approx. Weight", value: "150 kg approx." },
    ],
    safety: [
        {
            title: "Bolted Joints",
            description:
                "All nuts are self-locking Nyloc type, which eliminates any chance of loosening in service.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                </svg>
            ),
        },
        {
            title: "Wire Rope Restraint",
            description:
                "As an additional safety measure every bolted joint is wrapped with SS wire rope, so a joint that backs off is still held.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path>
                </svg>
            ),
        },
        {
            title: "Fasteners",
            description:
                "High tensile 10.9 grade HEX bolts throughout, Unbrako or TVS make — sized with margin rather than to the minimum the load calls for.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4z"></path>
                    <path d="M6 6 3 9l3 3"></path>
                </svg>
            ),
        },
        {
            title: "Hanging Structure",
            description:
                "M.S. powder coated frame and hanging structure, with a 3\" square extension tube hot dip galvanised on the inside so the bore does not rust where it cannot be inspected.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.2"></circle>
                    <path d="M12 9.8c0-3 .6-5.6 2.4-6.4 1.6-.7 2.9 1 2 2.8-.9 1.9-2.7 3-4.4 3.6M14.2 12c2.9 0 5.5.6 6.3 2.4.7 1.6-1 2.9-2.8 2-1.9-.9-3-2.7-3.5-4.4M12 14.2c0 3-.6 5.6-2.4 6.4-1.6.7-2.9-1-2-2.8.9-1.9 2.7-3 4.4-3.6M9.8 12c-3 0-5.6-.6-6.4-2.4-.7-1.6 1-2.9 2.8-2 1.9.9 3 2.7 3.6 4.4"></path>
                </svg>
            ),
        },
    ],
    installation: [
        {
            type: "list",
            heading: "Installation Requirements",
            data: [
                "Minimum roof height of 18 ft to the underside of the fan for effective coverage; below that, fan count rises.",
                "Blade tip clearance of at least 600 mm from any beam, duct, light fitting, sprinkler or crane path.",
                "Hanging point on a load-bearing truss node or purlin, verified at site survey — not a decorative or false ceiling.",
                "Danfoss VFD panel wall mounted 4 to 5 ft from floor level, clear of wash-down, oil and heavy dust zones.",
                "Three phase 415 V 50 Hz, or single phase 230 V, to the VFD panel.",
                "Access equipment (scissor lift or scaffolding) available at site on the installation date."
            ]
        },
        {
            type: "paragraph",
            heading: "What We Handle",
            data: [
                "Dispatch and site handling, hanging structure fitment, fan assembly and mounting, control panel mounting, VFD commissioning, run testing across the full speed range, and an operator briefing at handover — all by our own qualified technicians."
            ]
        }
    ],
    warrenty: [
        {
            title: "3 Years",
            description: "Hub, blades and hanging structure",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
        {
            title: "1 Year",
            description: "Motor and controller",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
    ]
};

const hvls_8ft_gearless = {
    heading: "Product Specifications",
    description: [
        {
            type: "paragraph",
            heading: "FLGL086 — Gearless 8 Feet HVLS Fan",
            data: [
                "The FLGL086 is the smallest fan in the range — an 8 ft sweep for narrow bays, mezzanine floors and customer-facing spaces where a large diameter simply will not fit. A direct driven PMSM outer rotor motor, air and liquid cooled and made in India, is rated 0.4 KW at 80 Nm and turns the 8 ft sweep (2.4 m) at anything from zero to 110 rpm, moving 95,000 CFM. The motor runs N45SH grade magnets, Class H insulation and aluminium top and bottom plates rather than sheet metal. Six cambered aerofoil blades are rolled in Aluminium 6063 T6 to a 190 mm section with two ribs. Supply is single phase 230 V, 50 Hz, and the fan weighs about 60 kg. Noise stays below 40 dB, which is what puts this range into showrooms, halls and food and pharma floors."
            ]
        },
        {
            type: "list",
            heading: "What Comes With It",
            data: [
                "Direct driven PMSM outer rotor motor, air and liquid cooled, made in India — 0.4 KW, 80 Nm, no gearbox and no gear oil",
                "N45SH magnets, Class H insulation, aluminium top and bottom plates (no sheet metal)",
                "Six cambered aerofoil blades in Aluminium 6063 T6, 190 mm section, two ribs",
                "Laser cut M.S. mounting structure and motor mounting bracket, minimum 8 mm plate",
                "3\" square extension tube of reputed make — Asian, Apollo or Surya",
                "High tensile 10.9 grade HEX bolts, Unbrako or TVS make, with self-locking Nyloc nuts",
                "Delta VFD in an IP54 powder coated steel cabinet — start and stop on green and red display, speed adjustment, emergency stop, and a display for speed and status parameters",
                "BMS compatible control interface",
                "Input power single phase 230 V, 50 Hz",
                "Matt Black, Silver, Pure White or Dark Gray — or any RAL number to order",
                "Complies with CE requirements"
            ]
        }
    ],
    table: [
        { label: "Model", value: "ASGL086" },
        { label: "Diameter", value: "8 feet (2.4 m)" },
        { label: "Blade Quantity", value: "6" },
        { label: "Blade Material", value: "Aluminium 6063 T6, cambered aerofoil, 190 mm section, 2 ribs, Matt Black (customisable to RAL)" },
        { label: "Air Delivery", value: "95,000 CFM" },
        { label: "Motor Make & Rating", value: "Direct drive PMSM outer rotor — 0.4 KW, 80 Nm torque" },
        { label: "Speed Range", value: "0 – 110 rpm (variable)" },
        { label: "Noise Level", value: "Below 40 dB" },
        { label: "Coverage Area", value: "up to 2,500 sq.ft. (indicative, at standard mounting height)" },
        { label: "Insulation Class", value: "Class H" },
        { label: "Magnet Grade", value: "N45SH, permanent magnet outer rotor" },
        { label: "Power Supply", value: "Single phase 230 V, 50 Hz" },
        { label: "Frame", value: "Laser cut M.S. mounting structure and motor bracket, minimum 8 mm plate; 3\" square extension tube (Asian / Apollo / Surya)" },
        { label: "Hub", value: "Single piece hub with a safety ring interlocking all six blades; die cast aluminium, radiography tested before assembly" },
        { label: "Fasteners", value: "High tensile 10.9 grade HEX bolts (Unbrako / TVS) with self-locking Nyloc nuts" },
        { label: "Control Panel", value: "Delta VFD in an IP54 powder coated steel cabinet — start / stop, speed adjustment, emergency stop, BMS compatible" },
        { label: "IP Rating", value: "IP54 (control panel)" },
        { label: "Certification", value: "Complies with CE requirements" },
        { label: "Approx. Weight", value: "60 kg approx." },
    ],
    safety: [
        {
            title: "Anti-Fall Mounting Bracket",
            description:
                "The extension tube, motor and hub assembly hang from an anti-fall mounting bracket, so the assembly is still held even if the motor or extension tube bolts fail."
            , icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                </svg>
            ),
        },
        {
            title: "Single Piece Hub And Safety Ring",
            description:
                "A single piece hub carries all six blades, and a safety ring interlocks the blades to each other so no blade is retained by its own fixing alone.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path>
                </svg>
            ),
        },
        {
            title: "Wire Rope Restraint",
            description: "Every bolted joint is wrapped with 8 mm diameter wire rope, and four further 8 mm ropes carry the fan in balance.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4z"></path>
                    <path d="M6 6 3 9l3 3"></path>
                </svg>
            ),
        },
        {
            title: "Bolted Joints",
            description: "All nuts are self-locking Nyloc type, which eliminates any chance of loosening in service, on high tensile 10.9 grade Unbrako or TVS bolts.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.2"></circle>
                    <path d="M12 9.8c0-3 .6-5.6 2.4-6.4 1.6-.7 2.9 1 2 2.8-.9 1.9-2.7 3-4.4 3.6M14.2 12c2.9 0 5.5.6 6.3 2.4.7 1.6-1 2.9-2.8 2-1.9-.9-3-2.7-3.5-4.4M12 14.2c0 3-.6 5.6-2.4 6.4-1.6.7-2.9-1-2-2.8.9-1.9 2.7-3 4.4-3.6M9.8 12c-3 0-5.6-.6-6.4-2.4-.7-1.6 1-2.9 2.8-2 1.9.9 3 2.7 3.6 4.4"></path>
                </svg>
            ),
        },
    ],
    installation: [
        {
            type: "list",
            heading: "Installation Requirements",
            data: [
                "Minimum roof height of 18 ft to the underside of the fan for effective coverage; below that, fan count rises.",
                "Blade tip clearance of at least 600 mm from any beam, duct, light fitting, sprinkler or crane path.",
                "Hanging point on a load-bearing truss node or purlin, verified at site survey — not a decorative or false ceiling.",
                "Delta VFD panel wall mounted 4 to 5 ft from floor level, clear of wash-down, oil and heavy dust zones.",
                "Input power single phase 230 V, 50 Hz to the VFD panel.",
                "Access equipment (scissor lift or scaffolding) available at site on the installation date."
            ]
        },
        {
            type: "paragraph",
            heading: "What We Handle",
            data: [
                "Dispatch and site handling, hanging structure fitment, fan assembly and mounting, control panel mounting, VFD commissioning, run testing across the full speed range, and an operator briefing at handover — all by our own qualified technicians."
            ]
        }
    ],
    warrenty: [
        {
            title: "5 Years",
            description: "Blades, hub, extension tube and mounting structure — replacement warranty",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
        {
            title: "2 Year",
            description: "Motor, controller and VFD — replacement warranty",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
    ]
};

const hvls_10ft_gearless = {
    heading: "Product Specifications",
    description: [
        {
            type: "paragraph",
            heading: "FLGL106 — Gearless 10 Feet HVLS Fan",
            data: [
                "The FLGL106 is a 10 ft direct drive fan for bays that are too narrow for a 12 ft sweep but too wide to be covered properly by an 8 ft one. A direct driven PMSM outer rotor motor, air and liquid cooled and made in India, is rated 0.4 KW at 80 Nm and turns the 10 ft sweep (3.0 m) at anything from zero to 100 rpm, moving 120,000 CFM. The motor runs N45SH grade magnets, Class H insulation and aluminium top and bottom plates rather than sheet metal. Six cambered aerofoil blades are rolled in Aluminium 6063 T6 to a 190 mm section with two ribs. Supply is single phase 230 V, 50 Hz, and the fan weighs about 60 kg. Noise stays below 40 dB, which is what puts this range into showrooms, halls and food and pharma floors."
            ]
        },
        {
            type: "list",
            heading: "What Comes With It",
            data: [
                "Direct driven PMSM outer rotor motor, air and liquid cooled, made in India — 0.4 KW, 80 Nm, no gearbox and no gear oil",
                "N45SH magnets, Class H insulation, aluminium top and bottom plates (no sheet metal)",
                "Six cambered aerofoil blades in Aluminium 6063 T6, 190 mm section, two ribs",
                "Laser cut M.S. mounting structure and motor mounting bracket, minimum 8 mm plate",
                "3\" square extension tube of reputed make — Asian, Apollo or Surya",
                "High tensile 10.9 grade HEX bolts, Unbrako or TVS make, with self-locking Nyloc nuts",
                "Delta VFD in an IP54 powder coated steel cabinet — start and stop on green and red display, speed adjustment, emergency stop, and a display for speed and status parameters",
                "BMS compatible control interface",
                "Input power single phase 230 V, 50 Hz",
                "Matt Black, Silver, Pure White or Dark Gray — or any RAL number to order",
                "Complies with CE requirements"
            ]
        }
    ],
    table: [
        { label: "Model", value: "FLGL106" },
        { label: "Diameter", value: "10 feet (3.0 m)" },
        { label: "Blade Quantity", value: "6" },
        { label: "Blade Material", value: "Aluminium 6063 T6, cambered aerofoil, 190 mm section, 2 ribs, Matt Black (customisable to RAL)" },
        { label: "Air Delivery", value: "120,000 CFM" },
        { label: "Motor Make & Rating", value: "Direct drive PMSM outer rotor — 0.4 KW, 80 Nm torque" },
        { label: "Speed Range", value: "0 – 100 rpm (variable)" },
        { label: "Noise Level", value: "Below 40 dB" },
        { label: "Coverage Area", value: "up to 4,000 sq.ft. (indicative, at standard mounting height)" },
        { label: "Insulation Class", value: "Class H" },
        { label: "Magnet Grade", value: "N45SH, permanent magnet outer rotor" },
        { label: "Power Supply", value: "Single phase 230 V, 50 Hz" },
        { label: "Frame", value: "Laser cut M.S. mounting structure and motor bracket, minimum 8 mm plate; 3\" square extension tube (Asian / Apollo / Surya)" },
        { label: "Hub", value: "Single piece hub with a safety ring interlocking all six blades; die cast aluminium, radiography tested before assembly" },
        { label: "Fasteners", value: "High tensile 10.9 grade HEX bolts (Unbrako / TVS) with self-locking Nyloc nuts" },
        { label: "Control Panel", value: "Delta VFD in an IP54 powder coated steel cabinet — start / stop, speed adjustment, emergency stop, BMS compatible" },
        { label: "IP Rating", value: "IP54 (control panel)" },
        { label: "Certification", value: "Complies with CE requirements" },
        { label: "Approx. Weight", value: "60 kg approx." },
    ],
    safety: [
        {
            title: "Anti-Fall Mounting Bracket",
            description:
                "The extension tube, motor and hub assembly hang from an anti-fall mounting bracket, so the assembly is still held even if the motor or extension tube bolts fail."
            , icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                </svg>
            ),
        },
        {
            title: "Single Piece Hub And Safety Ring",
            description:
                "A single piece hub carries all six blades, and a safety ring interlocks the blades to each other so no blade is retained by its own fixing alone.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path>
                </svg>
            ),
        },
        {
            title: "Wire Rope Restraint",
            description: "Every bolted joint is wrapped with 8 mm diameter wire rope, and four further 8 mm ropes carry the fan in balance.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4z"></path>
                    <path d="M6 6 3 9l3 3"></path>
                </svg>
            ),
        },
        {
            title: "Bolted Joints",
            description: "All nuts are self-locking Nyloc type, which eliminates any chance of loosening in service, on high tensile 10.9 grade Unbrako or TVS bolts.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.2"></circle>
                    <path d="M12 9.8c0-3 .6-5.6 2.4-6.4 1.6-.7 2.9 1 2 2.8-.9 1.9-2.7 3-4.4 3.6M14.2 12c2.9 0 5.5.6 6.3 2.4.7 1.6-1 2.9-2.8 2-1.9-.9-3-2.7-3.5-4.4M12 14.2c0 3-.6 5.6-2.4 6.4-1.6.7-2.9-1-2-2.8.9-1.9 2.7-3 4.4-3.6M9.8 12c-3 0-5.6-.6-6.4-2.4-.7-1.6 1-2.9 2.8-2 1.9.9 3 2.7 3.6 4.4"></path>
                </svg>
            ),
        },
    ],
    installation: [
        {
            type: "list",
            heading: "Installation Requirements",
            data: [
                "Minimum roof height of 18 ft to the underside of the fan for effective coverage; below that, fan count rises.",
                "Blade tip clearance of at least 600 mm from any beam, duct, light fitting, sprinkler or crane path.",
                "Hanging point on a load-bearing truss node or purlin, verified at site survey — not a decorative or false ceiling.",
                "Delta VFD panel wall mounted 4 to 5 ft from floor level, clear of wash-down, oil and heavy dust zones.",
                "Input power single phase 230 V, 50 Hz to the VFD panel.",
                "Access equipment (scissor lift or scaffolding) available at site on the installation date."
            ]
        },
        {
            type: "paragraph",
            heading: "What We Handle",
            data: [
                "Dispatch and site handling, hanging structure fitment, fan assembly and mounting, control panel mounting, VFD commissioning, run testing across the full speed range, and an operator briefing at handover — all by our own qualified technicians."
            ]
        }
    ],
    warrenty: [
        {
            title: "5 Years",
            description: "Blades, hub, extension tube and mounting structure — replacement warranty",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
        {
            title: "2 Year",
            description: "Motor, controller and VFD — replacement warranty",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
    ]
};

const hvls_12ft_gearless = {
    heading: "Product Specifications",
    description: [
        {
            type: "paragraph",
            heading: "FLGL126 — Gearless 12 Feet HVLS Fan",
            data: [
                "The FLGL126 takes the gearbox out of the equation at the most commonly specified diameter — no gear oil to change, and far fewer wear parts to service. A direct driven PMSM outer rotor motor, air and liquid cooled and made in India, is rated 0.4 KW at 80 Nm and turns the 12 ft sweep (3.6 m) at anything from zero to 100 rpm, moving 180,000 CFM. The motor runs N45SH grade magnets, Class H insulation and aluminium top and bottom plates rather than sheet metal. Six cambered aerofoil blades are rolled in Aluminium 6063 T6 to a 190 mm section with two ribs. Supply is single phase 230 V, 50 Hz, and the fan weighs about 90 kg. Noise stays below 40 dB, which is what puts this range into showrooms, halls and food and pharma floors."
            ]
        },
        {
            type: "list",
            heading: "What Comes With It",
            data: [
                "Direct driven PMSM outer rotor motor, air and liquid cooled, made in India — 0.4 KW, 80 Nm, no gearbox and no gear oil",
                "N45SH magnets, Class H insulation, aluminium top and bottom plates (no sheet metal)",
                "Six cambered aerofoil blades in Aluminium 6063 T6, 190 mm section, two ribs",
                "Laser cut M.S. mounting structure and motor mounting bracket, minimum 8 mm plate",
                "3\" square extension tube of reputed make — Asian, Apollo or Surya",
                "High tensile 10.9 grade HEX bolts, Unbrako or TVS make, with self-locking Nyloc nuts",
                "Delta VFD in an IP54 powder coated steel cabinet — start and stop on green and red display, speed adjustment, emergency stop, and a display for speed and status parameters",
                "BMS compatible control interface",
                "Input power single phase 230 V, 50 Hz",
                "Matt Black, Silver, Pure White or Dark Gray — or any RAL number to order",
                "Complies with CE requirements"
            ]
        }
    ],
    table: [
        { label: "Model", value: "FLGL126" },
        { label: "Diameter", value: "12 feet (3.6 m)" },
        { label: "Blade Quantity", value: "6" },
        { label: "Blade Material", value: "Aluminium 6063 T6, cambered aerofoil, 190 mm section, 2 ribs" },
        { label: "Air Delivery", value: "180,000 CFM" },
        { label: "Motor Make & Rating", value: "Direct drive PMSM outer rotor — 0.4 KW, 80 Nm torque" },
        { label: "Speed Range", value: "0 – 100 rpm (variable)" },
        { label: "Noise Level", value: "Below 40 dB" },
        { label: "Coverage Area", value: "up to 6,500 sq.ft. (indicative, at standard mounting height)" },
        { label: "Insulation Class", value: "Class H" },
        { label: "Magnet Grade", value: "N45SH, permanent magnet outer rotor" },
        { label: "Power Supply", value: "Single phase 230 V, 50 Hz" },
        { label: "Frame", value: "Laser cut M.S. mounting structure and motor bracket, minimum 8 mm plate; 3\" square extension tube (Asian / Apollo / Surya)" },
        { label: "Hub", value: "Single piece hub with a safety ring interlocking all six blades; die cast aluminium, radiography tested before assembly" },
        { label: "Fasteners", value: "High tensile 10.9 grade HEX bolts (Unbrako / TVS) with self-locking Nyloc nuts" },
        { label: "Control Panel", value: "Delta VFD in an IP54 powder coated steel cabinet — start / stop, speed adjustment, emergency stop, BMS compatible" },
        { label: "IP Rating", value: "IP54 (control panel)" },
        { label: "Certification", value: "Complies with CE requirements" },
        { label: "Approx. Weight", value: "90 kg approx." },
    ],
    safety: [
        {
            title: "Anti-Fall Mounting Bracket",
            description:
                "The extension tube, motor and hub assembly hang from an anti-fall mounting bracket, so the assembly is still held even if the motor or extension tube bolts fail."
            , icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                </svg>
            ),
        },
        {
            title: "Single Piece Hub And Safety Ring",
            description:
                "A single piece hub carries all six blades, and a safety ring interlocks the blades to each other so no blade is retained by its own fixing alone.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path>
                </svg>
            ),
        },
        {
            title: "Wire Rope Restraint",
            description: "Every bolted joint is wrapped with 8 mm diameter wire rope, and four further 8 mm ropes carry the fan in balance.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4z"></path>
                    <path d="M6 6 3 9l3 3"></path>
                </svg>
            ),
        },
        {
            title: "Bolted Joints",
            description: "All nuts are self-locking Nyloc type, which eliminates any chance of loosening in service, on high tensile 10.9 grade Unbrako or TVS bolts.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.2"></circle>
                    <path d="M12 9.8c0-3 .6-5.6 2.4-6.4 1.6-.7 2.9 1 2 2.8-.9 1.9-2.7 3-4.4 3.6M14.2 12c2.9 0 5.5.6 6.3 2.4.7 1.6-1 2.9-2.8 2-1.9-.9-3-2.7-3.5-4.4M12 14.2c0 3-.6 5.6-2.4 6.4-1.6.7-2.9-1-2-2.8.9-1.9 2.7-3 4.4-3.6M9.8 12c-3 0-5.6-.6-6.4-2.4-.7-1.6 1-2.9 2.8-2 1.9.9 3 2.7 3.6 4.4"></path>
                </svg>
            ),
        },
    ],
    installation: [
        {
            type: "list",
            heading: "Installation Requirements",
            data: [
                "Minimum roof height of 18 ft to the underside of the fan for effective coverage; below that, fan count rises.",
                "Blade tip clearance of at least 600 mm from any beam, duct, light fitting, sprinkler or crane path.",
                "Hanging point on a load-bearing truss node or purlin, verified at site survey — not a decorative or false ceiling.",
                "Delta VFD panel wall mounted 4 to 5 ft from floor level, clear of wash-down, oil and heavy dust zones.",
                "Input power single phase 230 V, 50 Hz to the VFD panel.",
                "Access equipment (scissor lift or scaffolding) available at site on the installation date."
            ]
        },
        {
            type: "paragraph",
            heading: "What We Handle",
            data: [
                "Dispatch and site handling, hanging structure fitment, fan assembly and mounting, control panel mounting, VFD commissioning, run testing across the full speed range, and an operator briefing at handover — all by our own qualified technicians."
            ]
        }
    ],
    warrenty: [
        {
            title: "5 Years",
            description: "Blades, hub, extension tube and mounting structure — replacement warranty",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
        {
            title: "2 Year",
            description: "Motor, controller and VFD — replacement warranty",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
    ]
};

const hvls_16ft_gearless = {
    heading: "Product Specifications",
    description: [
        {
            type: "paragraph",
            heading: "FLGL166 — Gearless 16 Feet HVLS Fan",
            data: [
                "The FLGL166 is the mid-size direct drive fan, and the largest single step up in air delivery anywhere in the gearless range. A direct driven PMSM outer rotor motor, air and liquid cooled and made in India, is rated 0.75 KW at 160 Nm and turns the 16 ft sweep (4.9 m) at anything from zero to 70 rpm, moving 355,000 CFM. The motor runs N45SH grade magnets, Class H insulation and aluminium top and bottom plates rather than sheet metal. Six cambered aerofoil blades are rolled in Aluminium 6063 T6 to a 190 mm section with two ribs. Supply is single phase 230 V, 50 Hz, and the fan weighs about 110 kg. Noise stays below 40 dB, which is what puts this range into showrooms, halls and food and pharma floors."
            ]
        },
        {
            type: "list",
            heading: "What Comes With It",
            data: [
                "Direct driven PMSM outer rotor motor, air and liquid cooled, made in India — 0.75 KW, 160 Nm, no gearbox and no gear oil",
                "N45SH magnets, Class H insulation, aluminium top and bottom plates (no sheet metal)",
                "Six cambered aerofoil blades in Aluminium 6063 T6, 190 mm section, two ribs",
                "Laser cut M.S. mounting structure and motor mounting bracket, minimum 8 mm plate",
                "3\" square extension tube of reputed make — Asian, Apollo or Surya",
                "High tensile 10.9 grade HEX bolts, Unbrako or TVS make, with self-locking Nyloc nuts",
                "Delta VFD in an IP54 powder coated steel cabinet — start and stop on green and red display, speed adjustment, emergency stop, and a display for speed and status parameters",
                "BMS compatible control interface",
                "Input power single phase 230 V, 50 Hz",
                "Matt Black, Silver, Pure White or Dark Gray — or any RAL number to order",
                "Complies with CE requirements"
            ]
        }
    ],
    table: [
        { label: "Model", value: "FLGL166" },
        { label: "Diameter", value: "16 feet (4.9 m)" },
        { label: "Blade Quantity", value: "6" },
        { label: "Blade Material", value: "Aluminium 6063 T6, cambered aerofoil, 190 mm section, 2 ribs" },
        { label: "Air Delivery", value: "355,000 CFM" },
        { label: "Motor Make & Rating", value: "Direct drive PMSM outer rotor — 0.75 KW, 160 Nm torque" },
        { label: "Speed Range", value: "0 – 70 rpm (variable)" },
        { label: "Noise Level", value: "Below 40 dB" },
        { label: "Coverage Area", value: "up to 10,000 sq.ft. (indicative, at standard mounting height)" },
        { label: "Insulation Class", value: "Class H" },
        { label: "Magnet Grade", value: "N45SH, permanent magnet outer rotor" },
        { label: "Power Supply", value: "Single phase 230 V, 50 Hz" },
        { label: "Frame", value: "Laser cut M.S. mounting structure and motor bracket, minimum 8 mm plate; 3\" square extension tube (Asian / Apollo / Surya)" },
        { label: "Hub", value: "Single piece hub with a safety ring interlocking all six blades; die cast aluminium, radiography tested before assembly" },
        { label: "Fasteners", value: "High tensile 10.9 grade HEX bolts (Unbrako / TVS) with self-locking Nyloc nuts" },
        { label: "Control Panel", value: "Delta VFD in an IP54 powder coated steel cabinet — start / stop, speed adjustment, emergency stop, BMS compatible" },
        { label: "IP Rating", value: "IP54 (control panel)" },
        { label: "Certification", value: "Complies with CE requirements" },
        { label: "Approx. Weight", value: "110 kg approx." },
    ],
    safety: [
        {
            title: "Anti-Fall Mounting Bracket",
            description:
                "The extension tube, motor and hub assembly hang from an anti-fall mounting bracket, so the assembly is still held even if the motor or extension tube bolts fail."
            , icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                </svg>
            ),
        },
        {
            title: "Single Piece Hub And Safety Ring",
            description:
                "A single piece hub carries all six blades, and a safety ring interlocks the blades to each other so no blade is retained by its own fixing alone.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path>
                </svg>
            ),
        },
        {
            title: "Wire Rope Restraint",
            description: "Every bolted joint is wrapped with 8 mm diameter wire rope, and four further 8 mm ropes carry the fan in balance.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4z"></path>
                    <path d="M6 6 3 9l3 3"></path>
                </svg>
            ),
        },
        {
            title: "Bolted Joints",
            description: "All nuts are self-locking Nyloc type, which eliminates any chance of loosening in service, on high tensile 10.9 grade Unbrako or TVS bolts.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.2"></circle>
                    <path d="M12 9.8c0-3 .6-5.6 2.4-6.4 1.6-.7 2.9 1 2 2.8-.9 1.9-2.7 3-4.4 3.6M14.2 12c2.9 0 5.5.6 6.3 2.4.7 1.6-1 2.9-2.8 2-1.9-.9-3-2.7-3.5-4.4M12 14.2c0 3-.6 5.6-2.4 6.4-1.6.7-2.9-1-2-2.8.9-1.9 2.7-3 4.4-3.6M9.8 12c-3 0-5.6-.6-6.4-2.4-.7-1.6 1-2.9 2.8-2 1.9.9 3 2.7 3.6 4.4"></path>
                </svg>
            ),
        },
    ],
    installation: [
        {
            type: "list",
            heading: "Installation Requirements",
            data: [
                "Minimum roof height of 18 ft to the underside of the fan for effective coverage; below that, fan count rises.",
                "Blade tip clearance of at least 600 mm from any beam, duct, light fitting, sprinkler or crane path.",
                "Hanging point on a load-bearing truss node or purlin, verified at site survey — not a decorative or false ceiling.",
                "Delta VFD panel wall mounted 4 to 5 ft from floor level, clear of wash-down, oil and heavy dust zones.",
                "Input power single phase 230 V, 50 Hz to the VFD panel.",
                "Access equipment (scissor lift or scaffolding) available at site on the installation date."
            ]
        },
        {
            type: "paragraph",
            heading: "What We Handle",
            data: [
                "Dispatch and site handling, hanging structure fitment, fan assembly and mounting, control panel mounting, VFD commissioning, run testing across the full speed range, and an operator briefing at handover — all by our own qualified technicians."
            ]
        }
    ],
    warrenty: [
        {
            title: "5 Years",
            description: "Blades, hub, extension tube and mounting structure — replacement warranty",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
        {
            title: "2 Year",
            description: "Motor, controller and VFD — replacement warranty",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
    ]
};

const hvls_20ft_gearless = {
    heading: "Product Specifications",
    description: [
        {
            type: "paragraph",
            heading: "FLGL206 — Gearless 20 Feet HVLS Fan",
            data: [
                "The FLGL206 is the large-bay direct drive fan, and the first in the range to move to a three phase supply. A direct driven PMSM outer rotor motor, air and liquid cooled and made in India, is rated 1.2 KW at 270 Nm and turns the 20 ft sweep (6.1 m) at anything from zero to 50 rpm, moving 410,000 CFM. The motor runs N45SH grade magnets, Class H insulation and aluminium top and bottom plates rather than sheet metal. Six cambered aerofoil blades are rolled in Aluminium 6063 T6 to a 190 mm section with two ribs. Supply is three phase 415 V, 50 Hz, and the fan weighs about 125 kg. Noise stays below 40 dB, which is what puts this range into showrooms, halls and food and pharma floors."
            ]
        },
        {
            type: "list",
            heading: "What Comes With It",
            data: [
                "Direct driven PMSM outer rotor motor, air and liquid cooled, made in India — 1.2 KW, 270 Nm, no gearbox and no gear oil",
                "N45SH magnets, Class H insulation, aluminium top and bottom plates (no sheet metal)",
                "Six cambered aerofoil blades in Aluminium 6063 T6, 190 mm section, two ribs",
                "Laser cut M.S. mounting structure and motor mounting bracket, minimum 8 mm plate",
                "3\" square extension tube of reputed make — Asian, Apollo or Surya",
                "High tensile 10.9 grade HEX bolts, Unbrako or TVS make, with self-locking Nyloc nuts",
                "Delta VFD in an IP54 powder coated steel cabinet — start and stop on green and red display, speed adjustment, emergency stop, and a display for speed and status parameters",
                "BMS compatible control interface",
                "Input power three phase 415 V, 50 Hz",
                "Matt Black, Silver, Pure White or Dark Gray — or any RAL number to order",
                "Complies with CE requirements"
            ]
        }
    ],
    table: [
        { label: "Model", value: "FLGL206" },
        { label: "Diameter", value: "20 feet (6.1 m)" },
        { label: "Blade Quantity", value: "6" },
        { label: "Blade Material", value: "Aluminium 6063 T6, cambered aerofoil, 190 mm section, 2 ribs" },
        { label: "Air Delivery", value: "410,000 CFM" },
        { label: "Motor Make & Rating", value: "Direct drive PMSM outer rotor — 1.2 KW, 270 Nm torque" },
        { label: "Speed Range", value: "0 – 50 rpm (variable)" },
        { label: "Noise Level", value: "Below 40 dB" },
        { label: "Coverage Area", value: "up to 12,000 sq.ft. (indicative, at standard mounting height)" },
        { label: "Insulation Class", value: "Class H" },
        { label: "Magnet Grade", value: "N45SH, permanent magnet outer rotor" },
        { label: "Power Supply", value: "Three phase 415 V, 50 Hz" },
        { label: "Frame", value: "Laser cut M.S. mounting structure and motor bracket, minimum 8 mm plate; 3\" square extension tube (Asian / Apollo / Surya)" },
        { label: "Hub", value: "Single piece hub with a safety ring interlocking all six blades; die cast aluminium, radiography tested before assembly" },
        { label: "Fasteners", value: "High tensile 10.9 grade HEX bolts (Unbrako / TVS) with self-locking Nyloc nuts" },
        { label: "Control Panel", value: "Delta VFD in an IP54 powder coated steel cabinet — start / stop, speed adjustment, emergency stop, BMS compatible" },
        { label: "IP Rating", value: "IP54 (control panel)" },
        { label: "Certification", value: "Complies with CE requirements" },
        { label: "Approx. Weight", value: "125 kg approx." },
    ],
    safety: [
        {
            title: "Anti-Fall Mounting Bracket",
            description:
                "The extension tube, motor and hub assembly hang from an anti-fall mounting bracket, so the assembly is still held even if the motor or extension tube bolts fail."
            , icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                </svg>
            ),
        },
        {
            title: "Single Piece Hub And Safety Ring",
            description:
                "A single piece hub carries all six blades, and a safety ring interlocks the blades to each other so no blade is retained by its own fixing alone.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path>
                </svg>
            ),
        },
        {
            title: "Wire Rope Restraint",
            description: "Every bolted joint is wrapped with 8 mm diameter wire rope, and four further 8 mm ropes carry the fan in balance.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4z"></path>
                    <path d="M6 6 3 9l3 3"></path>
                </svg>
            ),
        },
        {
            title: "Bolted Joints",
            description: "All nuts are self-locking Nyloc type, which eliminates any chance of loosening in service, on high tensile 10.9 grade Unbrako or TVS bolts.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.2"></circle>
                    <path d="M12 9.8c0-3 .6-5.6 2.4-6.4 1.6-.7 2.9 1 2 2.8-.9 1.9-2.7 3-4.4 3.6M14.2 12c2.9 0 5.5.6 6.3 2.4.7 1.6-1 2.9-2.8 2-1.9-.9-3-2.7-3.5-4.4M12 14.2c0 3-.6 5.6-2.4 6.4-1.6.7-2.9-1-2-2.8.9-1.9 2.7-3 4.4-3.6M9.8 12c-3 0-5.6-.6-6.4-2.4-.7-1.6 1-2.9 2.8-2 1.9.9 3 2.7 3.6 4.4"></path>
                </svg>
            ),
        },
    ],
    installation: [
        {
            type: "list",
            heading: "Installation Requirements",
            data: [
                "Minimum roof height of 18 ft to the underside of the fan for effective coverage; below that, fan count rises.",
                "Blade tip clearance of at least 600 mm from any beam, duct, light fitting, sprinkler or crane path.",
                "Hanging point on a load-bearing truss node or purlin, verified at site survey — not a decorative or false ceiling.",
                "Delta VFD panel wall mounted 4 to 5 ft from floor level, clear of wash-down, oil and heavy dust zones.",
                "Input power three phase 415 V, 50 Hz to the VFD panel.",
                "Access equipment (scissor lift or scaffolding) available at site on the installation date."
            ]
        },
        {
            type: "paragraph",
            heading: "What We Handle",
            data: [
                "Dispatch and site handling, hanging structure fitment, fan assembly and mounting, control panel mounting, VFD commissioning, run testing across the full speed range, and an operator briefing at handover — all by our own qualified technicians."
            ]
        }
    ],
    warrenty: [
        {
            title: "5 Years",
            description: "Blades, hub, extension tube and mounting structure — replacement warranty",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
        {
            title: "2 Year",
            description: "Motor, controller and VFD — replacement warranty",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
    ]
};

const hvls_24ft_gearless = {
    heading: "Product Specifications",
    description: [
        {
            type: "paragraph",
            heading: "FLGL246 — Gearless 24 Feet HVLS Fan",
            data: [
                "The FLGL246 is the largest direct drive fan Floent builds, and the highest air delivery figure on the whole price list. A direct driven PMSM outer rotor motor, air and liquid cooled and made in India, is rated 1.2 KW at 350 Nm and turns the 24 ft sweep (7.2 m) at anything from zero to 50 rpm, moving 485,000 CFM. The motor runs N45SH grade magnets, Class H insulation and aluminium top and bottom plates rather than sheet metal. Six cambered aerofoil blades are rolled in Aluminium 6063 T6 to a 190 mm section with two ribs. Supply is three phase 415 V, 50 Hz, and the fan weighs about 130 kg. Noise stays below 40 dB, which is what puts this range into showrooms, halls and food and pharma floors."
            ]
        },
        {
            type: "list",
            heading: "What Comes With It",
            data: [
                "Direct driven PMSM outer rotor motor, air and liquid cooled, made in India — 1.2 KW, 350 Nm, no gearbox and no gear oil",
                "N45SH magnets, Class H insulation, aluminium top and bottom plates (no sheet metal)",
                "Six cambered aerofoil blades in Aluminium 6063 T6, 190 mm section, two ribs",
                "Laser cut M.S. mounting structure and motor mounting bracket, minimum 8 mm plate",
                "3\" square extension tube of reputed make — Asian, Apollo or Surya",
                "High tensile 10.9 grade HEX bolts, Unbrako or TVS make, with self-locking Nyloc nuts",
                "Delta VFD in an IP54 powder coated steel cabinet — start and stop on green and red display, speed adjustment, emergency stop, and a display for speed and status parameters",
                "BMS compatible control interface",
                "Input power three phase 415 V, 50 Hz",
                "Matt Black, Silver, Pure White or Dark Gray — or any RAL number to order",
                "Complies with CE requirements"
            ]
        }
    ],
    table: [
        { label: "Model", value: "FLGL246" },
        { label: "Diameter", value: "24 feet (7.2 m)" },
        { label: "Blade Quantity", value: "6" },
        { label: "Blade Material", value: "Aluminium 6063 T6, cambered aerofoil, 190 mm section, 2 ribs" },
        { label: "Air Delivery", value: "485,000 CFM" },
        { label: "Motor Make & Rating", value: "Direct drive PMSM outer rotor — 1.2 KW, 350 Nm torque" },
        { label: "Speed Range", value: "0 – 50 rpm (variable)" },
        { label: "Noise Level", value: "Below 40 dB" },
        { label: "Coverage Area", value: "up to 14,000 sq.ft. (indicative, at standard mounting height)" },
        { label: "Insulation Class", value: "Class H" },
        { label: "Magnet Grade", value: "N45SH, permanent magnet outer rotor" },
        { label: "Power Supply", value: "Three phase 415 V, 50 Hz" },
        { label: "Frame", value: "Laser cut M.S. mounting structure and motor bracket, minimum 8 mm plate; 3\" square extension tube (Asian / Apollo / Surya)" },
        { label: "Hub", value: "Single piece hub with a safety ring interlocking all six blades; die cast aluminium, radiography tested before assembly" },
        { label: "Fasteners", value: "High tensile 10.9 grade HEX bolts (Unbrako / TVS) with self-locking Nyloc nuts" },
        { label: "Control Panel", value: "Delta VFD in an IP54 powder coated steel cabinet — start / stop, speed adjustment, emergency stop, BMS compatible" },
        { label: "IP Rating", value: "IP54 (control panel)" },
        { label: "Certification", value: "Complies with CE requirements" },
        { label: "Approx. Weight", value: "130 kg approx." },
    ],
    safety: [
        {
            title: "Anti-Fall Mounting Bracket",
            description:
                "The extension tube, motor and hub assembly hang from an anti-fall mounting bracket, so the assembly is still held even if the motor or extension tube bolts fail."
            , icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                </svg>
            ),
        },
        {
            title: "Single Piece Hub And Safety Ring",
            description:
                "A single piece hub carries all six blades, and a safety ring interlocks the blades to each other so no blade is retained by its own fixing alone.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path>
                </svg>
            ),
        },
        {
            title: "Wire Rope Restraint",
            description: "Every bolted joint is wrapped with 8 mm diameter wire rope, and four further 8 mm ropes carry the fan in balance.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4z"></path>
                    <path d="M6 6 3 9l3 3"></path>
                </svg>
            ),
        },
        {
            title: "Bolted Joints",
            description: "All nuts are self-locking Nyloc type, which eliminates any chance of loosening in service, on high tensile 10.9 grade Unbrako or TVS bolts.",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="2.2"></circle>
                    <path d="M12 9.8c0-3 .6-5.6 2.4-6.4 1.6-.7 2.9 1 2 2.8-.9 1.9-2.7 3-4.4 3.6M14.2 12c2.9 0 5.5.6 6.3 2.4.7 1.6-1 2.9-2.8 2-1.9-.9-3-2.7-3.5-4.4M12 14.2c0 3-.6 5.6-2.4 6.4-1.6.7-2.9-1-2-2.8.9-1.9 2.7-3 4.4-3.6M9.8 12c-3 0-5.6-.6-6.4-2.4-.7-1.6 1-2.9 2.8-2 1.9.9 3 2.7 3.6 4.4"></path>
                </svg>
            ),
        },
    ],
    installation: [
        {
            type: "list",
            heading: "Installation Requirements",
            data: [
                "Minimum roof height of 18 ft to the underside of the fan for effective coverage; below that, fan count rises.",
                "Blade tip clearance of at least 600 mm from any beam, duct, light fitting, sprinkler or crane path.",
                "Hanging point on a load-bearing truss node or purlin, verified at site survey — not a decorative or false ceiling.",
                "Delta VFD panel wall mounted 4 to 5 ft from floor level, clear of wash-down, oil and heavy dust zones.",
                "Input power three phase 415 V, 50 Hz to the VFD panel.",
                "Access equipment (scissor lift or scaffolding) available at site on the installation date."
            ]
        },
        {
            type: "paragraph",
            heading: "What We Handle",
            data: [
                "Dispatch and site handling, hanging structure fitment, fan assembly and mounting, control panel mounting, VFD commissioning, run testing across the full speed range, and an operator briefing at handover — all by our own qualified technicians."
            ]
        }
    ],
    warrenty: [
        {
            title: "5 Years",
            description: "Blades, hub, extension tube and mounting structure — replacement warranty",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
        {
            title: "2 Year",
            description: "Motor, controller and VFD — replacement warranty",
            icon: (
                <svg className="ic " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 2 4 5v7c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>),
        },
    ]
};


export const specification = new Map();
specification.set("exhuast-fan", exhaustfan_Specification);
specification.set("HVLS-gearless-fan", hvlsfan_Specification);

//geared
// Geared HVLS Fans
// specification.set("12-feet-geared-HVLS-fan", hvls_12ft);
// specification.set("16-feet-geared-HVLS-fan", hvls_16ft);
// specification.set("18-feet-geared-HVLS-fan", hvls_18ft);
// specification.set("20-feet-geared-HVLS-fan", hvls_20ft);
// specification.set("24-feet-geared-HVLS-fan", hvls_24ft);

// Gearless HVLS Fans
specification.set("8-feet-gearless-HVLS-fan", hvls_8ft_gearless);
specification.set("10-feet-gearless-HVLS-fan", hvls_10ft_gearless);
// specification.set("12-feet-gearless-HVLS-fan", hvls_12ft_gearless);
specification.set("16-feet-gearless-HVLS-fan", hvls_16ft_gearless);
// specification.set("20-feet-gearless-HVLS-fan", hvls_20ft_gearless);
// specification.set("24-feet-gearless-HVLS-fan", hvls_24ft_gearless);

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
featureandadv.set("HVLS-gearless-fan", featuresandAdvhvls);

// featureandadv.set("12-feet-geared-HVLS-fan", featuresandAdvhvls);
// featureandadv.set("16-feet-geared-HVLS-fan", featuresandAdvhvls);
// featureandadv.set("18-feet-geared-HVLS-fan", featuresandAdvhvls);
// featureandadv.set("20-feet-geared-HVLS-fan", featuresandAdvhvls);
// featureandadv.set("24-feet-geared-HVLS-fan", featuresandAdvhvls);

// Gearless HVLS Fans
featureandadv.set("8-feet-gearless-HVLS-fan", featuresandAdvhvls);
featureandadv.set("10-feet-gearless-HVLS-fan", featuresandAdvhvls);
// featureandadv.set("12-feet-gearless-HVLS-fan", featuresandAdvhvls);
featureandadv.set("16-feet-gearless-HVLS-fan", featuresandAdvhvls);
// featureandadv.set("20-feet-gearless-HVLS-fan", featuresandAdvhvls);
// featureandadv.set("24-feet-gearless-HVLS-fan", featuresandAdvhvls);

/********************************Working principal ***********************************/

const exhaust_fan_Principal = ["Exhaust Fan draws out polluted air from premises and replaces it with fresh air. Air is considered polluted when it contains high amounts of hot air, moisture, carbon dioxide, vaporized chemicals, dust, fungal spores and unpleasant odors. Floent Air exhaust fan combat indoor air pollution by ejecting the unclean indoor air into the outside environment and letting in clean air from the outside"];
const hvls_fan_Principal = [
    "HVLS fans operate on the premise that cool flowing air separates the boundary layer surrounding the body that is saturated with moisture and speeds up evaporation to generate a cooling effect. As they rotate, ceiling fans create a column of air. Along the floor, this air column flows downward and outward. This thick wall of horizontally flowing air, also known as a horizontal floor jet, is related to a fan's diameter and, to a lesser extent, its speed. The floor jet moves outward until it encounters a side wall or other vertical surface after it reaches its maximum capacity.",
    "Industrial Jumbo ceiling fan, or another name commonly known as HVLS (High Volume Low Speed), causes high volume of wind movement and low ground. Before colliding with the ground and changing direction to become a 'floor jet', moving around 360 degrees in all directions, also helping to push dust from the nook or corner out of the area."
];

export const principal = new Map();
principal.set("exhuast-fan", exhaust_fan_Principal);
principal.set("HVLS-gearless-fan", hvls_fan_Principal);

// principal.set("12-feet-geared-HVLS-fan", hvls_fan_Principal);
// principal.set("16-feet-geared-HVLS-fan", hvls_fan_Principal);
// principal.set("18-feet-geared-HVLS-fan", hvls_fan_Principal);
// principal.set("20-feet-geared-HVLS-fan", hvls_fan_Principal);
// principal.set("24-feet-geared-HVLS-fan", hvls_fan_Principal);

// Gearless HVLS Fans
principal.set("8-feet-gearless-HVLS-fan", hvls_fan_Principal);
principal.set("10-feet-gearless-HVLS-fan", hvls_fan_Principal);
// principal.set("12-feet-gearless-HVLS-fan", hvls_fan_Principal);
principal.set("16-feet-gearless-HVLS-fan", hvls_fan_Principal);
// principal.set("20-feet-gearless-HVLS-fan", hvls_fan_Principal);
// principal.set("24-feet-gearless-HVLS-fan", hvls_fan_Principal);
/************************Applications***********************************/

export const application = new Map();

const exhuastApplication = [
    {
        type: "paragraph",
        data: [
            "Exhaust fans are widely used for ventilation in factories, warehouses, and commercial spaces. They help maintain air quality by removing heat, fumes, dust, and humidity efficiently."
        ]
    },
    // {
    //     type: "list",
    //     data: [
    //         "INDUSTRIAL PLANTS", "DAIRY FARMS & LIVESTOCK FARMS", "GREENHOUSE & AGRICULTURE", "WAREHOUSE & LOGISTICS", "COMMERCIAL SPACES", "FOOD PROCESSING UNITS"
    //     ]
    // }
];

const hvlsApplication = [

    {
        type: "paragraph",
        data: [
            "Accurate solution proposition. Both Small Size HVLS fans and Jumbo Ceiling Fan Manufactured by us are ideal for commercial and industrial spaced such as warehouses, factories, food courts, schools, indoor stadiums and gymnasiums.",
            "Floent Air HVLS Fans are a wise purchase for any company or industry that wants to maintain comfortable Interior temperature and Fresh Air Quality. Our High Volume Low Speed Fan comes with the advantage of high energy efficiency and high volume air circulation. All our projects are individually calculated, taking into account all aspects for maximum coverage, effective operation, and reliability, depending on the particular conditions of your premises."
        ]
    },
    // {
    //     type: "list",
    //     data: ["Airport", "Auditorium", "Automobile", "Commercial", "Industrial", "Railway Bus", "temple"]
    // }
    // "Accurate solution proposition. Both Small Size HVLS fans and Jumbo Ceiling Fan Manufactured by us are ideal for commercial and industrial spaced such as warehouses, factories, food courts, schools, indoor stadiums and gymnasiums.",
    // "Agricultural stock yard", "Animal & Poultry farms", "Food production center", "Auto motive showrooms", "Government godowns/Cold rooms", "Milk Production center", "Large worship places", "Railway/airport/ Exihibitions"

]

application.set("exhuast-fan", exhuastApplication);
application.set("HVLS-gearless-fan", hvlsApplication);


application.set("8-feet-gearless-HVLS-fan", hvlsApplication);
application.set("10-feet-gearless-HVLS-fan", hvlsApplication);
// principal.set("12-feet-gearless-HVLS-fan", hvls_fan_Principal);
application.set("16-feet-gearless-HVLS-fan", hvlsApplication);
/*************************Manufacturer *********************************/
const exhuastManufacturer = [
    "Floent Technologies is a leading manufacturer of high-performance industrial exhaust fans, designed to provide powerful air extraction and efficient ventilation for factories, warehouses, agricultural facilities, commercial spaces, and other large environments. Our exhaust fans are engineered for effective removal of heat, humidity, fumes, dust, and stale air, helping create a cooler, cleaner, and more comfortable workspace.",
    "Built with durable materials, aerodynamic fan blades, robust construction, and efficient motors, Floent Exhaust Fans deliver consistent airflow with reliable long-term performance. Designed for demanding industrial applications, they offer low maintenance, energy-efficient operation, and dependable ventilation, making Floent an ideal choice for efficient air extraction and improved indoor air quality."
]

const hvlsManufacturer = [
    "HVLS Fans also known as High Volume Low Speed Fan or Jumbo ceiling fan is intended for usage in big warehouses, factories, and other commercial and industrial applications.",
    "Our HVLS Fans are best to replace wall-mounted fans because they are widely renowned for evenly distributing air over vast areas. Since we are aware of the enormous demand, we are producing top-notch goods.",
    "Floent Air Ventilation Services one of the leading HVLS Fans manufacturer offers a broad selection of industrial fans with a variety of customisations and specifications to best satisfy customer needs.",
    "An Energy Efficient Innovative solution for Large Spaces for Efficient and Effective Air Circulation.",
    "The Floent Air High Volume Low Speed (HVLS) Fans are built to ensure efficient air movement in big commercial and industrial buildings. Made from the latest technologies like the gearless motor and aluminum blades, our HVLS fans generate large volumes of air using less power than any ordinary system of ventilation. Whether it is a manufacturing plant, a warehouse, a logistics hub, a shopping mall, a gymnasium, agriculture area, or even an aircraft hangar, the HVLS fans from Floent Air create an ideal environment for all types of uses throughout the year."
];

//geared
const manu_12ft = [
    "Floent Technologies is a leading 12 Feet Geared HVLS fan manufacturer, offering high-quality, energy-efficient solutions for industrial and commercial spaces. Our HVLS Fan is designed for optimal air circulation and ventilation, ensuring a comfortable environment while reducing energy costs. With a geared mechanism, it operates smoothly at variable speeds, reaching a maximum of 10 RPM.",
    "This 12 feet HVLS fan features 5 aero blades, designed for maximum airflow efficiency. Available in matte black and customizable colors, it complements various industrial and commercial interiors. Whether for warehouses, factories, or gymnasiums, Floent Technologies provides CE-certified HVLS fans with long-lasting performance. Our fans are engineered to deliver low-speed, high-volume airflow, ensuring better cooling and air quality. With a strong manufacturing process and lifetime support, assure reliable, durable, and cost-effective industrial HVLS fan solutions for various applications."
]

const manu_16ft = [
    "Floent Technologies is a trusted 16 feet geared HVLS fan manufacturer, offering high-quality, energy-efficient solutions for industrial and commercial spaces. Our HVLS Fan is designed for optimal air circulation, ensuring a comfortable environment while reducing energy costs. With a geared mechanism, it operates smoothly at variable speeds up to 10 RPM, providing consistent airflow across large areas.",
    "This 16 feet HVLS fan features 5 aeroblades, engineered for maximum efficiency. Available in matte black and customizable colors, it blends well with different industrial and commercial settings. Whether for warehouses, manufacturing units, or shopping malls, Floent Technologies provides CE-certified HVLS fans built for long-lasting performance. Designed for low-speed, high-volume airflow, our HVLS fans improve ventilation, reduce humidity, and eliminate hot spots. With a tough manufacturing process and lifetime support, ensures durable, cost-effective HVLS fan solutions for diverse applications."
]

const manu_18ft = [
    "Floent Technologies is a leading 18 feet geared HVLS fan manufacturer, offering high-performance industrial ceiling fans designed for efficient airflow and energy savings. Our HVLS fans are built to provide maximum ventilation, assuring a comfortable and productive environment for factories, warehouses, gymnasiums, commercial spaces, and other large facilities. The 18 feet HVLS fan features a geared system with 2 rib blades, delivering consistent air circulation at speeds of up to 70 RPM. With variable speed control (0 to 70 RPM), it offers customized airflow to suit different requirements. This big industrial fan is available in Matt Black and other customizable colors, ensuring seamless integration with various interiors.",
    "Engineered for silent operation, this HVLS industrial ceiling fan minimizes noise while improving air quality, reducing heat buildup, and lowering cooling costs. Built from high-quality materials, it is long-lasting, low-maintenance, and assured by Floent Technologies' commitment to outstanding performance and lifetime service. With CE-certified manufacturing, safety, longevity, and international quality standards. Whether for commercial or industrial applications, our 18 feet HVLS fan ensures cost-effective cooling, optimized airflow, and reduced energy consumption, making it an ideal solution for large spaces."
]

const manu_20ft = [
    "Floent Technologies is a leading 20 feet geared HVLS fan manufacturer, offering high-performance industrial ceiling fans for factories, warehouses, gymnasiums, commercial buildings, and other large spaces. Designed for maximum airflow efficiency, our HVLS fans ensure better ventilation, reduced energy costs, and improved working conditions. This 20 Feet HVLS Fan is equipped with 2 Rib Blades and operates at a maximum speed of 50 RPM (variable from 0 to 60 RPM), allowing for customized airflow as per the facility’s needs. The geared mechanism ensures smooth and silent operation, making it suitable for industrial and commercial applications. It is available in matt black and customizable colors and integrates well into various environments.",
    "Our Geared HVLS industrial ceiling fans are built with durability and low maintenance in mind, ensuring long-lasting performance with minimal upkeep. With CE-certified components and international quality standards, it guarantees superior safety, reliability, and efficiency. These energy-efficient fans help lower cooling costs, improve air circulation, and create a comfortable environment by eliminating hot spots and reducing humidity. Ideal for large-scale facilities, the 20 Feet HVLS Fan enhances productivity and operational efficiency while delivering cost-effective cooling solutions."
]

const manu_24ft = [
    "Floent Technologies is a leading 24 Feet Geared HVLS Fan Manufacturer, providing high-performance industrial ceiling fans designed for large spaces such as warehouses, factories, gymnasiums, commercial buildings, and public spaces. Our 24 feet HVLS fans deliver superior airflow efficiency, ensuring better ventilation, reduced humidity, and significant energy savings. This large industrial fan features 2 rib blades and operates at a maximum speed of 50 RPM (variable from 0 to 50 RPM), ensuring optimal air circulation with minimal energy consumption. The geared mechanism ensures smooth operation, reducing noise levels while maintaining efficient performance. Available in matt black and customizable colors, it blends seamlessly with different industrial and commercial interiors.",
    "Austar’s HVLS fans are engineered for durability, low maintenance, and long-lasting performance. With CE-certified components and advanced technology, we ensure top-notch safety, reliability, and efficiency. Our 24 feet HVLS fan significantly lowers cooling costs, enhances worker comfort, and improves overall productivity by eliminating hot spots and stale air pockets. Known for its robust build and energy efficiency, this HVLS industrial ceiling fan is an ideal choice for businesses looking to optimize airflow, reduce operational costs, and create a comfortable indoor environment."
]

//gearless

const manu_8ft_gl = [
  "Floent Technologies is a leading 8 feet gearless HVLS fan manufacturer, delivering efficient and cost‑effective ventilation solutions for compact industrial and commercial spaces. Our 8 feet gearless HVLS fan is designed for optimal airflow in smaller warehouses, gyms, retail outlets, and offices. Equipped with 3 Rib Blades, this fan operates at a maximum speed of 90 RPM (variable from 0 to 90 RPM), ensuring consistent air circulation with minimal energy consumption. The gearless technology eliminates friction, reducing mechanical wear and maintenance costs, while ensuring quieter operation and longer service life.",
  "Finished in glossy black with customizable color options, this 8 feet gearless HVLS fan integrates seamlessly into modern commercial and industrial environments. CE‑certified and built with premium materials, Austar’s 8 feet gearless HVLS fan guarantees durability, reliability, and performance. By reducing heat buildup and improving air quality, it helps lower energy costs and enhances comfort in smaller spaces, making it an ideal choice for gyms, retail stores, and compact industrial facilities."
];

const manu_10ft_gl = [
  "Floent Technologies is a trusted 10 feet gearless HVLS fan manufacturer, offering advanced ventilation solutions for mid‑sized industrial and commercial spaces. Our 10 feet gearless HVLS fan is engineered for balanced airflow, creating a cooler and more comfortable environment in warehouses, factories, shopping malls, and gyms. Equipped with 3 Rib Blades, this fan operates at a maximum speed of 80 RPM (variable from 0 to 80 RPM), delivering uniform airflow with low power consumption. The gearless technology eliminates the need for a gearbox, reducing friction, mechanical wear, and maintenance costs, while ensuring quieter operation.",
  "With a sleek glossy black finish and customizable color options, this 10 feet gearless HVLS fan blends into diverse industrial and commercial settings. CE‑certified and manufactured with high‑quality materials, Austar’s 10 feet gearless HVLS fan ensures durability, efficiency, and long‑term performance. By reducing humidity, condensation, and airborne contaminants, it improves air quality and workplace productivity, making it a reliable choice for factories, gyms, and medium‑sized open areas."
];


const manu_12ft_gl = [
    "Floent Technologies is a trusted 12 feet gearless HVLS fan manufacturer, offering high-performance, energy-efficient solutions for industrial and commercial applications. Our 12 feet gearless HVLS fans are designed to enhance air circulation, reduce humidity, and create a comfortable indoor environment in warehouses, factories, gymnasiums, and large public spaces. This gearless HVLS fan features 3 Rib Blades and operates at a maximum speed of 100 RPM (variable from 0 to 100 RPM), ensuring whisper-quiet, efficient airflow while minimizing energy consumption. The gearless mechanism eliminates friction, reducing wear and tear, extending lifespan, and ensuring low maintenance costs.",
    "With a sleek glossy black finish and customizable color options, our 12 Feet Gearless HVLS Fan seamlessly integrates into various interiors. Built with high-strength, CE-certified components, it guarantees safety, durability, and exceptional performance. Floent Technologies' HVLS ceiling fans help businesses optimize cooling efficiency, significantly lowering HVAC energy costs while maintaining consistent temperature control. These fans prevent air stratification, reduce heat stress, and improve air quality, making them an ideal choice for industries, commercial buildings, and large open spaces."
]

const manu_16ft_gl = [
    "Floent Technologies is a leading 16 feet gearless HVLS fan manufacturer, providing high-efficiency, energy-saving ventilation solutions for industrial and commercial spaces. Our 16 feet gearless HVLS fan is engineered for optimal air circulation, ensuring a cool, comfortable environment in warehouses, factories, gymnasiums, shopping malls, and other large areas. Equipped with 3 Rib Blades, this gearless HVLS fan operates at a maximum speed of 70 RPM (variable from 0 to 70 RPM), delivering uniform airflow with minimal power consumption. The gearless technology eliminates friction, reducing mechanical wear and maintenance costs, ensuring a longer lifespan and quieter operation.",
    "With a glossy black finish and customizable color options, this industrial HVLS fan seamlessly integrates into various commercial and industrial settings. CE-certified and built with premium materials, Austar’s 16 feet gearless HVLS fan guarantees reliability, durability, and maximum performance. By reducing heat buildup and improving air quality, this HVLS ceiling fan helps lower energy costs and enhances workplace productivity. It also reduces humidity, condensation, and airborne contaminants, making it an ideal choice for factories, commercial spaces, and large open areas."
]

const manu_20ft_gl = [
    "Floent Technologies is a trusted 20 feet gearless HVLS fan manufacturer, offering high-performance, energy-efficient ventilation solutions for industrial and commercial spaces. Our gearless HVLS fan is designed to provide superior airflow, reduced energy consumption, and enhanced workplace comfort in factories, warehouses, shopping malls, airports, and large commercial buildings. Equipped with 3 Rib Blades, this HVLS ceiling fan operates at a maximum speed of 50 RPM (variable from 0 to 50 RPM), ensuring consistent air circulation with minimal energy usage. The gearless motor technology reduces mechanical friction, leading to whisper-quiet operation, lower maintenance costs, and an extended lifespan.",
    "With a glossy black finish and customizable color options, This 20 feet HVLS fan complements a variety of industrial and commercial designs. CE-certified and built with international-quality materials, Austar’s gearless HVLS fan guarantees safety, durability, and reliability. This large industrial fan effectively eliminates heat buildup, maintains uniform airflow, and enhances air quality, preventing humidity and condensation issues. It also significantly reduces the strain on HVAC systems, leading to lower operational costs and improved energy efficiency. Ideal for large-scale applications, Floent 20 feet gearless HVLS fan is a smart investment for businesses looking to optimize cooling, enhance comfort, and cut energy expenses."
]

const manu_24ft_gl = [
    "Floent Technologies is a leading 24 feet gearless HVLS fan manufacturer, providing high-performance, energy-efficient ventilation for large industrial and commercial spaces. Our gearless HVLS fans are designed to enhance airflow, improve indoor air quality, and reduce energy consumption, making them ideal for factories, warehouses, malls, airports, railway stations, and large buildings. With a gearless motor system, this 24ft HVLS fan ensures whisper-quiet operation, minimal maintenance, and long-lasting durability. Equipped with 3 rib blades, it operates at a maximum speed of 50 RPM (variable from 0 to 50 RPM), delivering uniform air circulation while consuming less power.",
    "The glossy black finish gives a modern, aesthetic look, and customizable color options ensure seamless integration into any industrial or commercial setting. Designed with international-quality components, this CE-certified HVLS fan offers high reliability, enhanced safety, and cost-effective cooling solutions. By reducing heat buildup, eliminating humidity, and decreasing HVAC dependency, the 24ft gearless HVLS fan significantly lowers energy costs while maintaining a comfortable working environment. With Floent Technologies, you get a high-quality, durable, and efficient cooling solution that ensures maximum airflow and superior comfort."
]

export const manufacturer = new Map();
manufacturer.set("exhuast-fan", exhuastManufacturer);
manufacturer.set("HVLS-gearless-fan", hvlsManufacturer);

//geared
// manufacturer.set("12-feet-geared-HVLS-fan", manu_12ft);
// manufacturer.set("16-feet-geared-HVLS-fan", manu_16ft);
// manufacturer.set("18-feet-geared-HVLS-fan", manu_18ft);
// manufacturer.set("20-feet-geared-HVLS-fan", manu_20ft);
// manufacturer.set("24-feet-geared-HVLS-fan", manu_24ft);

//gearless
manufacturer.set("8-feet-gearless-HVLS-fan", manu_8ft_gl);
manufacturer.set("10-feet-gearless-HVLS-fan", manu_10ft_gl);
// manufacturer.set("12-feet-gearless-HVLS-fan", manu_12ft_gl);
manufacturer.set("16-feet-gearless-HVLS-fan", manu_16ft_gl);
// manufacturer.set("20-feet-gearless-HVLS-fan", manu_20ft_gl);
// manufacturer.set("24-feet-gearless-HVLS-fan", manu_24ft_gl);

/************************Benefits **********************************/
const exhaustbenifits = {
    paragraph: [
        "An industrial exhaust fan provides powerful and efficient ventilation for factories, warehouses, agricultural facilities, commercial buildings, and other large spaces. It helps remove excess heat, humidity, fumes, dust, odors, and stale air, improving overall air quality and creating a cooler, healthier working environment. With high airflow performance and energy-efficient operation, it can reduce heat buildup and ventilation costs compared to conventional cooling solutions.",
        "Designed for demanding industrial applications, the Floent Exhaust Fan combines durable construction, efficient airflow, and reliable performance for continuous operation. Its low-maintenance design helps reduce operating and maintenance requirements while ensuring long-lasting ventilation. Ideal for factories, warehouses, workshops, poultry farms, and commercial spaces, it provides an effective and cost-efficient solution for maintaining proper air circulation and comfortable indoor conditions."
    ]
}

const hvlsbenefits = {
    // paragraph: [
    //     "HVLS (High Volume Low Speed) Fans are an excellent investment for large spaces such as workshops or buildings with high ceilings. These fans are specifically designed to move large volumes of air at a low speed, providing uniform air distribution. This improves air quality, reduces energy costs, and increases comfort for users, making them ideal for improving the overall environment in expansive areas.",
    //     "HVLS fans are ideal for large spaces, ensuring consistent airflow, improved air quality, and enhanced worker comfort.",
    //     "They provide energy efficiency with 30–70% savings, reduce ventilation costs, and deliver long-term cost benefits.",
    //     "Built for durability and aesthetics, HVLS fans improve circulation, reduce contaminants, and create healthier, more comfortable environments."],
    // list: [
    //     "Running Cost only RS 3.5/ Hrs*",
    //     "Improved Aesthetics",
    //     "No frequent maintenance",
    //     "It has Long Life. Good ROI",
    //     "Freedom from flying insects",
    //     "It is Noiseless",
    //     "Uniform air flow",
    //     "Reduced dust accumulation",
    //     "Reduces the temperature",
    //     "Reduced HVAC Costs"
    // ]
    paragraph: [
        "Floent Air HVLS Fans offer top-notch performance and reliability in the long term. Thanks to their energy-efficient performance, they minimize electricity usage and provide much better air coverage than several conventional ceiling fans. A gearless PMSM motor allows for noiseless operation, low maintenance needs, and longevity. With good air distribution, workers can benefit from increased comfort, minimized fatigue, and good working conditions, which may be helpful when increasing productivity.",
        "The fans offered by us can be used in places with high ceiling heights and large areas that usually find it difficult to maintain continuous air flow. They not only enhance the process of ventilation and reduce moisture but also ensure an improved indoor climate."
    ]
};

const benefit_12ft = {
    paragraph: [
        "A 12 feet industrial HVLS ceiling fan is a powerful solution for efficient cooling and air circulation in commercial and industrial spaces. It reduces humidity, prevents dust accumulation, and enhances overall air quality. Its energy-efficient design helps cut electricity costs while maintaining a comfortable workspace.",
        "With low-speed, high-volume airflow, it eliminates hot spots and improves ventilation, making it ideal for warehouses, workshops, and gymnasiums. The silent operation provides a noise-free environment, which boosts productivity. Built with durable materials, it requires minimal maintenance, ensuring long-lasting performance. Investing in a 12 feet HVLS ceiling fan is a cost-effective way to enhance airflow, comfort, and energy savings."
    ]
}

const benefit_16ft = {
    paragraph: [
        "A 16 feet industrial HVLS ceiling fan is perfect for large industrial and commercial spaces, offering efficient cooling and ventilation. It reduces humidity, prevents dust accumulation, and improves overall air quality while maintaining a consistent temperature.",
        "Its energy-efficient operation helps lower electricity costs, making it a cost-effective solution for factories, warehouses, and auditoriums. The low-speed, high-volume airflow eliminates hot spots, ensuring better comfort for employees and visitors. With its silent functioning, it promotes a productive work atmosphere free of unwanted noise. Built with durable materials, it requires minimal maintenance, offering long-term performance. Investing in a 16 feet HVLS ceiling fan enhances air circulation, comfort, and energy savings."
    ]
}

const benefit_18ft = {
    paragraph: [
        "Floent Technologies is a leading 18 feet geared HVLS fan manufacturer, offering high-performance industrial ceiling fans designed for efficient airflow and energy savings. Our HVLS fans are built to provide maximum ventilation, assuring a comfortable and productive environment for factories, warehouses, gymnasiums, commercial spaces, and other large facilities. The 18 feet HVLS fan features a geared system with 2 rib blades, delivering consistent air circulation at speeds of up to 70 RPM. With variable speed control (0 to 70 RPM), it offers customized airflow to suit different requirements. This big industrial fan is available in Matt Black and other customizable colors, ensuring seamless integration with various interiors.",
        "Engineered for silent operation, this HVLS industrial ceiling fan minimizes noise while improving air quality, reducing heat buildup, and lowering cooling costs. Built from high-quality materials, it is long-lasting, low-maintenance, and assured by Floent Technologies' commitment to outstanding performance and lifetime service. With CE-certified manufacturing, safety, longevity, and international quality standards. Whether for commercial or industrial applications, our 18 feet HVLS fan ensures cost-effective cooling, optimized airflow, and reduced energy consumption, making it an ideal solution for large spaces."
    ]
}

const benefit_20ft = {
    paragraph: [
        "A 20 feet industrial HVLS ceiling fan provides optimal air circulation, assuring even airflow distribution across large areas. It significantly reduces humidity, prevents heat buildup, and creates a comfortable and healthy workspace. This high-volume, low-speed fan consumes minimal energy, making it a cost-effective alternative to traditional cooling solutions. It enhances HVAC system efficiency, reducing the need for excessive air conditioning and cutting down on energy expenses.",
        "Engineered for silent operation, it minimizes noise pollution, making it ideal for factories, warehouses, airports, railway stations, and auditoriums. Its high-durability construction ensures long service life with minimal maintenance requirements. The sleek design and customizable color options make it a perfect fit for industrial and commercial environments, offering both functionality and aesthetic appeal. With Floent Technologies’ commitment to quality, this 20 feet HVLS ceiling fan guarantees exceptional performance, energy efficiency, and long-term reliability."
    ]
}

const benefit_24ft = {
    paragraph: [
        "A 24 feet industrial HVLS ceiling fan provides optimum airflow coverage, making it perfect for large industrial and commercial spaces. It effectively reduces humidity, prevents heat buildup, and eliminates stagnant air, ensuring a cooler and healthier workspace. By consuming minimal energy, this high-volume, low-speed fan provides a cost-effective cooling solution, significantly reducing air conditioning reliance and lowering energy expenses. It enhances HVAC efficiency, maintaining consistent temperature control across the facility.",
        "Designed for whisper-quiet operation, it minimizes noise disturbances, creating a productive and comfortable environment. Built with high-strength materials, this fan offers long-lasting durability with minimal maintenance needs. Its aesthetic and customizable design makes it an excellent choice for factories, warehouses, airports, railway stations, and shopping malls. With our commitment to quality and innovation, the 24 feet HVLS fan ensures exceptional air circulation, energy efficiency, and long-term reliability."
    ]
}

const benefit_8ft_gl = {
  paragraph: [
    "The 8 feet gearless HVLS ceiling fan is designed for smaller industrial and commercial spaces, offering efficient air movement with very low energy consumption. Its compact size makes it ideal for gyms, retail outlets, and offices where consistent airflow is needed without high operating costs.",
    "With gearless motor technology, the fan runs quietly below 40 dB and requires minimal maintenance, ensuring smooth operation and long service life. It eliminates friction and mechanical wear, making it a reliable choice for noise‑sensitive environments.",
    "By improving air circulation and reducing humidity, the 8ft gearless HVLS fan enhances comfort, prevents stale air buildup, and lowers cooling costs. Built with CE‑certified components and customizable finishes, it combines durability, safety, and modern aesthetics for smaller commercial and industrial interiors."
  ]
};

const benefit_10ft_gl = {
  paragraph: [
    "The 10 feet gearless HVLS ceiling fan provides balanced airflow for mid‑sized industrial and commercial spaces, delivering effective cooling with low energy consumption. It is well suited for warehouses, gyms, and shopping areas where reliable ventilation is essential.",
    "Its gearless motor ensures quiet operation below 40 dB, reduced mechanical wear, and minimal maintenance requirements. The fan’s smooth performance and long lifespan make it a cost‑effective solution for facilities seeking sustainable ventilation.",
    "By reducing strain on HVAC systems, the 10ft gearless HVLS fan lowers cooling expenses while maintaining consistent temperature balance. CE‑certified and available in customizable colors, it offers durability, safety, and aesthetic appeal alongside superior air circulation."
  ]
};


const benefit_12ft_gl = {
    paragraph: [
        "A 12 feet gearless HVLS ceiling fan offers powerful air circulation with minimal energy consumption, reducing electricity costs while enhancing workplace comfort. The gearless design ensures whisper-quiet operation, making it suitable for factories, gyms, and commercial spaces. These large-diameter fans create consistent airflow, preventing hot spots and stale air buildup. By maintaining optimal temperature balance, they improve employee productivity and reduce heat-related discomfort.",
        "The high-quality motor and advanced blade design ensure smooth, vibration-free performance, minimizing maintenance requirements and operational downtime. Additionally, these fans significantly reduce HVAC workload, leading to long-term energy savings. With its customizable color options and aesthetic appeal, the 12 Feet Gearless HVLS Fan seamlessly blends into industrial and commercial environments, offering superior ventilation, cost efficiency, and long-lasting performance."
    ]
}

const benefit_16ft_gl = {
    paragraph: [
        "The 16 feet gearless HVLS ceiling fan offers exceptional air movement with low energy consumption, making it a cost-effective solution for large industrial and commercial areas. The gearless motor technology ensures quiet, smooth operation with minimal maintenance, increasing operational efficiency.",
        "Designed to enhance air circulation, this fan eliminates hot spots, prevents stale air buildup, and creates a consistent temperature balance. This leads to increased comfort for employees, improving productivity and overall workplace conditions.",
        "By reducing the strain on HVAC systems, the 16ft gearless HVLS fan significantly lowers cooling costs, making it a sustainable choice for warehouses, airports, railway stations, and shopping centers. Built with high-strength, CE-certified components, this HVLS ceiling fan ensures durability, safety, and long-lasting performance. The sleek design and customizable colors allow it to complement various industrial and commercial interiors, providing aesthetic appeal alongside superior ventilation."
    ]
}

const benefit_20ft_gl = {
    paragraph: [
        "The 20 feet gearless HVLS ceiling fan is engineered for maximum airflow efficiency, making it a perfect cooling solution for large industrial and commercial spaces. With its gearless technology, this industrial ceiling fan ensures smooth, noise-free operation, eliminating vibrations and mechanical wear while extending the lifespan of the motor. By maintaining consistent air movement, this HVLS ceiling fan prevents hot spots, enhances air circulation, and creates a comfortable indoor environment. The improved ventilation reduces humidity and condensation, protecting stored goods and maintaining optimal working conditions.",
        "This high-performance gearless HVLS fan significantly reduces HVAC energy consumption, leading to lower electricity costs and a more sustainable cooling system. Designed for low maintenance and long-term durability, it is a cost-effective and eco-friendly solution for warehouses, shopping malls, factories, airports, and other large facilities. With customizable color options and a sleek glossy black finish, the 20ft HVLS ceiling fan complements modern industrial and commercial interiors, combining aesthetic appeal with superior functionality."
    ]
}

const benefit_24ft_gl = {
    paragraph: [
        "The 24 feet gearless HVLS ceiling fan is a powerful, energy-efficient cooling solution designed for large industrial and commercial applications. Its gearless motor technology ensures silent operation, minimal mechanical wear, and long-lasting durability, making it a low-maintenance and cost-effective investment. This industrial HVLS ceiling fan delivers steady and uniform airflow, reducing hot spots, humidity, and condensation while enhancing workplace comfort. By improving air circulation, it also minimizes dust accumulation and airborne contaminants, creating a healthier indoor environment.",
        "One of the biggest advantages of the 24ft HVLS fan is its ability to reduce HVAC energy costs, as it improves air distribution and reduces the need for high-powered air conditioning. The sleek glossy black finish and customizable colors ensure it complements various industrial and commercial settings. With international-quality materials, CE certification, and advanced airflow technology, the Floent 24ft Gearless HVLS Fan provides superior cooling, energy savings, and long-term performance for large-scale operations."
    ]
}

export const benefits = new Map();
benefits.set("exhuast-fan", exhaustbenifits);
benefits.set("HVLS-gearless-fan", hvlsbenefits);

// benefits.set("12-feet-geared-HVLS-fan", benefit_12ft);
// benefits.set("16-feet-geared-HVLS-fan", benefit_16ft);
// benefits.set("18-feet-geared-HVLS-fan", benefit_18ft);
// benefits.set("20-feet-geared-HVLS-fan", benefit_20ft);
// benefits.set("24-feet-geared-HVLS-fan", benefit_24ft);

// benefits.set("12-feet-gearless-HVLS-fan", benefit_12ft_gl);
benefits.set("16-feet-gearless-HVLS-fan", benefit_16ft_gl);
benefits.set("8-feet-gearless-HVLS-fan", benefit_8ft_gl);
benefits.set("10-feet-gearless-HVLS-fan", benefit_10ft_gl);
// benefits.set("20-feet-gearless-HVLS-fan", benefit_20ft_gl);
// benefits.set("24-feet-gearless-HVLS-fan", benefit_24ft_gl);

/********************why should you ************************/

const whyshouldhvls = [
    "Big commercial and industrial buildings experience problems like poor air circulation, an increase in indoor temperature, and higher energy costs. The ordinary ceiling fans or other methods of ventilation may require the installation of several units that use much energy and increase maintenance requirements. An Industrial HVLS fan is a better alternative with its energy efficiency and uniform airflow through big areas.",
    "The Floent Air HVLS Fans are meant to increase comfort levels in workplaces and assist companies in minimizing their operational expenses. In addition, the energy-efficient design makes it possible for the fan to provide adequate ventilation, prevent heat accumulation, and ensure that workers enjoy comfort in the place of work. Good air circulation may also assist in keeping conditions constant in warehouses, industrial facilities, logistics parks, textile plants, food processing facilities, and other large facilities.",
    "Durability and reliable performance make the Floent Air HVLS Fans an excellent choice for those businesses that aim at increasing productivity, cut down on energy usage, and attain operational efficiency in the long run."
]

export const whyshould = new Map()

whyshould.set("HVLS-gearless-fan", whyshouldhvls)


// whyshould.set("12-feet-geared-HVLS-fan", whyshouldhvls);
// whyshould.set("16-feet-geared-HVLS-fan", whyshouldhvls);
// whyshould.set("18-feet-geared-HVLS-fan", whyshouldhvls);
// whyshould.set("20-feet-geared-HVLS-fan", whyshouldhvls);
// whyshould.set("24-feet-geared-HVLS-fan", whyshouldhvls);


whyshould.set("8-feet-gearless-HVLS-fan", whyshouldhvls);
whyshould.set("10-feet-gearless-HVLS-fan", whyshouldhvls);
// whyshould.set("12-feet-gearless-HVLS-fan", whyshouldhvls);
whyshould.set("16-feet-gearless-HVLS-fan", whyshouldhvls);
// whyshould.set("20-feet-gearless-HVLS-fan", whyshouldhvls);
// whyshould.set("24-feet-gearless-HVLS-fan", whyshouldhvls);