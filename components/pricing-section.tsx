"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

export function PricingSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} id="my-plan" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Find the Perfect Plan for You</h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {/* Trainees Plan */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-3xl bg-gradient-to-br from-[#00d4ff] to-[#00b8e6] p-8 shadow-2xl shadow-[#00d4ff]/30"
          >
            <div className="mb-4 inline-block rounded-full bg-[#ff9500] px-4 py-1 text-sm font-semibold text-white">
              Trainees
            </div>

            <h3 className="mb-2 text-5xl font-bold text-white">Free</h3>
            <p className="mb-8 text-lg text-white/90">For individuals tracking their fitness & nutrition.</p>

            <ul className="mb-8 space-y-4">
              {[
                "Access to training & nutrition programs",
                "Progress tracking & analytics",
                "Personalized dashboard & calendar",
                "Log workouts & meals",
                "Access to learning content",
                "Chat with friends & share progress",
              ].map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <Check className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-base text-white">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button className="w-full bg-white text-[#00d4ff] font-bold text-base hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg h-12">
              Start free trial
            </Button>
          </motion.div>

          {/* Coaches Plan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-3xl bg-gradient-to-br from-[#00d4ff] to-[#00b8e6] p-8 shadow-2xl shadow-[#00d4ff]/30"
          >
            <div className="mb-4 inline-block rounded-full bg-[#ff9500] px-4 py-1 text-sm font-semibold text-white">
              Coaches
            </div>

            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-white">$49.99</span>
              <span className="text-lg text-white/80">/month</span>
            </div>
            <p className="mb-8 text-lg text-white/90">For professionals managing clients & programs.</p>

            <ul className="mb-8 space-y-4">
              {[
                "Create & assign training and nutrition plans",
                "Track client progress & compliance",
                "Custom branding (UI color customization)",
                "In-app chat with clients",
                "Manage client scheduling & appointments",
                "Manage financial performance & payments",
              ].map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <Check className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-base text-white">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button className="w-full bg-white text-[#00d4ff] font-bold text-base hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg h-12">
              Start subscription
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
