import { useState } from "react"

interface Model {
  url: string
  title: string
}

export default function HeroSwiper({ models }: { models: Model[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

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
    } else if (diff < -50) {
      // swipe right → previous image
      setCurrentIndex((prev) =>
        prev === 0 ? models.length - 1 : prev - 1
      )
    }
    setTouchStartX(null)
  }

  return (
    <div
      className="flex flex-col items-center gap-5 lg:gap-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main swipeable image */}
      <img
        src={models[currentIndex].url}
        alt={models[currentIndex].title}
        className="w-[440px] h-[350px] object-cover transition-transform duration-500"
      />

      {/* Thumbnails (optional, still clickable) */}
      <div className="flex gap-4 justify-center overflow-x-auto lg:justify-between">
        {models.slice(1).map((e, i) => (
          <img
            key={e.title}
            src={e.url}
            alt={e.title}
            className={`w-[90px] lg:w-[140px] object-cover transition-transform duration-500 hover:scale-105 cursor-pointer`}
            onClick={() => setCurrentIndex(i+1)}
          />
        ))}
      </div>
    </div>
  )
}
