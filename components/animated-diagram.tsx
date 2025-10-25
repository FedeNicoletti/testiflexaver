"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { X } from "lucide-react"

export function AnimatedDiagram() {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  const positions = [
    { x: 0, y: -150 }, // top
    { x: 106, y: -106 }, // top-right
    { x: 150, y: 0 }, // right
    { x: 106, y: 106 }, // bottom-right
    { x: 0, y: 150 }, // bottom
    { x: -106, y: 106 }, // bottom-left
    { x: -150, y: 0 }, // left
    { x: -106, y: -106 }, // top-left
  ]

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Background animated X icons */}
          {positions.map((pos, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, x: pos.x, y: pos.y, scale: 1 }}
              animate={
                isInView
                  ? {
                      opacity: 0,
                      scale: 0,
                      transition: { delay: 0.5 + index * 0.1, duration: 0.5 },
                    }
                  : { opacity: 1, x: pos.x, y: pos.y, scale: 1 }
              }
              className="absolute flex items-center justify-center"
            >
              <div className="rounded-2xl bg-[#2a2a2a] p-6">
                <X className="h-8 w-8 text-gray-600" />
              </div>
            </motion.div>
          ))}

          {/* Central logo and connections */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 1.5, duration: 0.6 },
                  }
                : { opacity: 0, scale: 0 }
            }
            className="absolute z-10"
          >
            <div className="rounded-3xl bg-[#00d4ff] p-8 shadow-2xl shadow-[#00d4ff]/30">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="20" r="8" fill="white" />
                <path
                  d="M40 30C32.5 30 25 35 25 45V60C25 60 30 65 40 65C50 65 55 60 55 60V45C55 35 47.5 30 40 30Z"
                  fill="white"
                />
                <circle cx="25" cy="40" r="5" fill="white" />
                <circle cx="55" cy="40" r="5" fill="white" />
              </svg>
            </div>
          </motion.div>

          {/* Connection lines */}
          {positions.map((pos, index) => (
            <motion.div
              key={`line-${index}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? {
                      opacity: 0.3,
                      scale: 1,
                      transition: { delay: 1.8 + index * 0.05, duration: 0.4 },
                    }
                  : { opacity: 0, scale: 0 }
              }
              className="absolute w-0.5 bg-gray-700 origin-center"
              style={{
                height: Math.sqrt(pos.x ** 2 + pos.y ** 2),
                transform: `rotate(${Math.atan2(pos.y, pos.x) + Math.PI / 2}rad)`,
                left: "50%",
                top: "50%",
                marginLeft: "-1px",
                marginTop: `-${Math.sqrt(pos.x ** 2 + pos.y ** 2) / 2}px`,
              }}
            />
          ))}

          {/* Animated text */}
          <div className="absolute inset-x-0 bottom-0 text-center">
            <motion.p
              initial={{ opacity: 1 }}
              animate={
                isInView
                  ? {
                      opacity: 0,
                      transition: { delay: 0.5, duration: 0.5 },
                    }
                  : { opacity: 1 }
              }
              className="mb-4 text-2xl text-gray-600 md:text-3xl"
            >
              Forget about Downloading all these apps
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 2.2, duration: 0.6 },
                    }
                  : { opacity: 0, y: 20 }
              }
              className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            >
              Find Everything you need in Our Platform
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  )
}
