export const gearlessHVLS = {
    heading: "GEARLESS HVLS FANS",
    description: "The FLGL direct drive range runs without a gearbox — which means no gear oil, no oil changes and noticeably less maintenance over the life of the fan. Speed and direction are VFD controlled, noise stays below 40 dB, and the range is built to comply with CE requirements.",
    list: [
        "Direct driven PMSM motor — no gearbox, no gear oil, no oil leakage",
        "Noise level below 40 dB, suited to noise-sensitive spaces",
        "Glossy black Aluminium 6063 aerofoil blades, custom colours available",
        "Wider speed band with high torque at low RPM",
        "Reduced maintenance schedule and fewer wear parts"
    ],
    image:"/images/hvls.jpg"
}

export const categoryOfFan = new Map();
categoryOfFan.set("HVLS-gearless-fan",gearlessHVLS);


/***************Models ***************************/
const gearedModel = [
    { title: "FL125", slug: "12-feet-geared-HVLS-fan" },
    { title: "FL165", slug: "16-feet-geared-HVLS-fan" },
    { title: "FL185", slug: "18-feet-geared-HVLS-fan" },
    { title: "FL205", slug: "20-feet-geared-HVLS-fan" },
    { title: "FL245", slug: "24-feet-geared-HVLS-fan" }
];

const gearlessFans = [
    { title: "FLGL086", slug: "8-feet-gearless-HVLS-fan" },
    { title: "FLGL106", slug: "10-feet-gearless-HVLS-fan" },
    //   { title: "FLGL126", slug: "12-feet-gearless-HVLS-fan" },
    { title: "FLGL166", slug: "16-feet-gearless-HVLS-fan" },
    //   { title: "FLGL206", slug: "20-feet-gearless-HVLS-fan" },
    //   { title: "FLGL246", slug: "24-feet-gearless-HVLS-fan" }
];


export const submodel = new Map()

submodel.set("HVLS-gearless-fan", gearlessFans)

// submodel.set("12-feet-geared-HVLS-fan", gearedModel)
// submodel.set("16-feet-geared-HVLS-fan", gearedModel)
// submodel.set("18-feet-geared-HVLS-fan", gearedModel)
// submodel.set("20-feet-geared-HVLS-fan", gearedModel)
// submodel.set("24-feet-geared-HVLS-fan", gearedModel)


submodel.set("8-feet-gearless-HVLS-fan", gearlessFans);
submodel.set("10-feet-gearless-HVLS-fan", gearlessFans);
// submodel.set("12-feet-gearless-HVLS-fan", gearlessFans);
submodel.set("16-feet-gearless-HVLS-fan", gearlessFans);
// submodel.set("20-feet-gearless-HVLS-fan", gearlessFans);
// submodel.set("24-feet-gearless-HVLS-fan", gearlessFans);

const fl = [
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
export const model = new Map();

model.set("exhuast-fan", fl);
model.set("HVLS-gearless-fan", fl);
// model.set("12-feet-geared-HVLS-fan", fl)
// model.set("16-feet-geared-HVLS-fan", fl)
// model.set("18-feet-geared-HVLS-fan", fl)
// model.set("20-feet-geared-HVLS-fan", fl)
// model.set("24-feet-geared-HVLS-fan", fl)

model.set("8-feet-gearless-HVLS-fan", fl);
model.set("10-feet-gearless-HVLS-fan", fl);
// model.set("12-feet-gearless-HVLS-fan", fl);
model.set("16-feet-gearless-HVLS-fan", fl);
// model.set("20-feet-gearless-HVLS-fan", fl);
// model.set("24-feet-gearless-HVLS-fan", fl);