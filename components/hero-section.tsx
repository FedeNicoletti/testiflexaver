"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00d4ff]/5 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 text-center lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          The Only
          <br />
          Fitness App You Need
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 md:text-xl"
        >
          Everything you need to reach your fitness goals in one
          <br />
          powerful platform. Train smarter, eat better, live healthier.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-[#00d4ff] text-black font-semibold hover:bg-[#00b8e6] hover:scale-105 px-8 h-12 text-base transition-all duration-300 shadow-2xl shadow-[#00d4ff]/30"
          >
            Get Started
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fotos%20header-8XsrMJdpqOiDwe2HR4WAFB6pZqADUm.png"
            alt="Fitness photos"
            className="w-full max-w-6xl mx-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
