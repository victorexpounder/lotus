"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const results = [
  {
    id: 1,
    video: "/rout.webm",
  },
  {
    id: 2,
    video: "/test2.mp4",
  },
  {
    id: 3,
    image: "/result2.jpeg",
  },
  {
    id: 4,
    image: "/result3.jpeg",
  },
]

export default function ResultsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const next = () => {
    setCurrent((current + 1) % results.length)
  }

  const prev = () => {
    setCurrent((current - 1 + results.length) % results.length)
  }

  

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {results.map((result) => (
            <div key={result.id} className="w-full flex-shrink-0 relative">
              <div className="relative aspect-[16/9] w-full">
                {result.image? (
                  <Image src={result.image || "/placeholder.svg"} alt={'result'} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full relative">
                    <video
                      ref={result.id === results[current].id ? videoRef : null}
                      src={result.video}
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                      playsInline
                    />

                    {/* Centered Play Button */}
                    {!isPlaying && (
                      <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-4xl pointer-events-auto"
                      >
                        ▶
                      </button>
                    )}
                  </div>
                )}
                
                <div className=" pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full bg-white"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous result</span>
        </Button>

        <div className="flex items-center gap-2">
          {results.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === current ? "bg-purple-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(index)}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <span className="sr-only">Result {index + 1}</span>
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full bg-white"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next result</span>
        </Button>
      </div>
    </div>
  )
}
