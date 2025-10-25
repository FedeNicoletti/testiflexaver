"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

export function PlatformSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-3xl font-bold text-[#00d4ff] md:text-4xl lg:text-5xl"
        >
          A Platform for Every Fitness Journey
        </motion.h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl group"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2031-SywhQWhi0iSsiNdLDeMFXnl3wPvMlj.png"
              alt="Athletes"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-12 flex items-end group hover:shadow-2xl hover:shadow-[#00d4ff]/20 transition-all duration-500"
          >
            <div>
              <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors duration-300">
                Coaches
              </h3>
              <a
                href="#"
                className="text-[#00d4ff] hover:underline flex items-center gap-2 group-hover:gap-4 transition-all duration-300"
              >
                View plans
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.5 5L12.5 10L7.5 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
