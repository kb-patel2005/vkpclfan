import { useState } from "react"
import { motion } from "framer-motion"

interface Model {
  url: string
  title: string
}

interface Feature {
  icon: React.ReactNode
  label: string
}

interface Props {
  models: Model[]
  features: Feature[]
  setTab: (val:string) => void
}

export default function HeroSwiper({ models, features, setTab }: Props) {
  const [active, setActive] = useState("Description")
  const [heroimage, setHeroimage] = useState(models[0].url)
  const [activeModel, setActiveModel] = useState(-1)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const [currentIndex, setCurrentIndex] = useState(0) // start at models[0]

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX

    if (diff > 50) {
      // swipe left → next image
      setCurrentIndex((prev) => (prev + 1) % models.length)
      setHeroimage(models[(currentIndex + 1) % models.length].url)
    } else if (diff < -50) {
      // swipe right → previous image
      setCurrentIndex((prev) =>
        prev === 0 ? models.length - 1 : prev - 1
      )
      setHeroimage(
        models[
          currentIndex === 0 ? models.length - 1 : currentIndex - 1
        ].url
      )
    }
    setTouchStartX(null)
  }


  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-wrap mx-auto max-w-7xl gap-4"
    >
      {/* Sidebar */}
      <div className="w-full lg:w-[15%]">
        <div className="bg-[#09273A] h-full lg:p-8 px-4 py-2">
          <h2 className="text-white font-extrabold text-sm leading-6 pb-2 lg:pb-8">
            Related Products
          </h2>
          <div className="flex flex-col lg:gap-2">
            <h2
              className="text-black font-bold text-[12px] leading-3 tracking-[1.2px] py-2 px-4 bg-white cursor-pointer text-center"
              onClick={() => {
                setHeroimage(models[0].url)
                setActiveModel(-1)
              }}
            >
              MODELS
            </h2>
            <ul className="flex flex-row lg:flex-col gap-2 justify-between mt-2">
              {models.slice(1).map((e, idx) => (
                <li
                  key={e.title}
                  className={`text-center font-bold text-xs leading-3 tracking-[1.2px] py-2 px-3.5 lg:px-4 cursor-pointer ${activeModel === idx
                      ? "bg-white text-black"
                      : "text-white"
                    }`}
                  onClick={() => {
                    setHeroimage(e.url)
                    setActiveModel(idx)
                  }}
                >
                  {e.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-wrap lg:gap-5 lg:w-[80%] justify-center lg:justify-between">
        <div className="flex flex-col items-center">
          {/* Swipeable hero image */}
          <div
            className="w-full lg:w-[440px] h-[300px] lg:h-[380px] overflow-hidden relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={heroimage}
              alt="Exhaust fan"
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>

          {/* Thumbnails below hero image */}
          <div className="flex gap-4 justify-center lg:justify-between mt-4">
            {models.slice(1).map((e, i) => (
              <img
                key={e.title}
                src={e.url}
                alt={e.title}
                className={`w-[90px] lg:w-[140px] object-cover transition-transform duration-500 hover:scale-105 cursor-pointer`}
                onClick={() => {
                  setHeroimage(e.url)
                  setActiveModel(i)
                }}
              />
            ))}
          </div>
        </div>

        {/* Text + features */}
        <div className="flex flex-col gap-4 lg:w-[50%] mt-3">
          <h1 className="font-sora font-bold leading-[1.15] sm:text-5xl text-[32px]">
            Exhaust Fan Series
          </h1>

          <p className="font-inter font-normal text-[16px] leading-[28px] tracking-[0px] text-[#09273A]">
            Built for demanding operating conditions, the Floent Exhaust Fan
            offers reliable performance, durable construction, low maintenance,
            and energy-efficient ventilation, helping maintain a cooler, cleaner,
            and better-ventilated environment.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-white border border-[#C3C5D94D] min-w-0"
              >
                {feature.icon}
                <p className="font-inter font-medium text-[14px] leading-[20px] tracking-[0.14px] text-[#09273A] truncate">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setTab("Ask For a Price")
              document.getElementById("tabs")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
            className="w-full flex justify-center font-inter mt-6 bg-[#09273A] hover:bg-black px-6 py-3 text-sm font-medium text-white transition sm:w-auto lg:px-8 lg:py-4 lg:text-[14px]"
          >
            <span className="mr-2">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16H12V14H4V16ZM4 12H12V10H4V12ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 7V2H2V18H14V7H9ZM2 2V7V2V7V18V2Z"
                  fill="white"
                />
              </svg>
            </span>
            ASK FOR PRICE
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
