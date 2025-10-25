"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

export function DeviceShowcase() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d4ff]/5 to-transparent" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Answers at Your Fingertips</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#00d4ff]/20 blur-[120px]" />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201-2vajXqsFWETVZ3gnT4tFLjgp9g16Yc.png"
            alt="App on devices"
            className="relative w-full max-w-5xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}
