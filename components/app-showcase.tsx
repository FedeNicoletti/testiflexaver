"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

export function AppShowcase() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 via-transparent to-[#00d4ff]/20 blur-3xl" />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trainee-%20Con%20coach%20dashboard-screen%201-aCnx6wmuiYCSNcL2p1HqAqZLU04C8U.png"
            alt="Dashboard Preview"
            className="relative w-full max-w-5xl mx-auto rounded-2xl shadow-2xl shadow-[#00d4ff]/10"
          />
        </motion.div>
      </div>
    </section>
  )
}
