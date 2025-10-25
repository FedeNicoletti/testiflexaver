"use client"

import { Dumbbell, ChefHat, BookOpen, Users, MessageSquare, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { useState } from "react"

const athletesFeatures = [
  {
    icon: Dumbbell,
    title: "Training",
    description: "Access personalized workout programs, video demonstrations, and track your progress.",
  },
  {
    icon: ChefHat,
    title: "Nutrition",
    description: "Log meals, track macros, follow plans, and set meal reminders.",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Access educational content, workout tutorials, and fitness guides.",
  },
  {
    icon: Users,
    title: "Friends",
    description: "Connect with training partners, share progress, and motivate each other.",
  },
  {
    icon: MessageSquare,
    title: "Messages",
    description: "Chat directly with your coach, ask questions, and get instant feedback.",
  },
  {
    icon: Calendar,
    title: "Calendar",
    description: "Schedule workouts, plan your week, and track your training consistency.",
  },
]

const coachesFeatures = [
  {
    icon: Dumbbell,
    title: "Training",
    description: "Create and assign custom workout programs to your clients with video demos.",
  },
  {
    icon: ChefHat,
    title: "Nutrition",
    description: "Create nutrition plans, personalize and assign them to clients and track your clients progress.",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Create educational content and courses for your clients.",
  },
  {
    icon: Users,
    title: "Friends",
    description: "Build your coaching community and network with other professionals.",
  },
  {
    icon: MessageSquare,
    title: "Messages",
    description: "Communicate with all your clients in one place with organized conversations.",
  },
  {
    icon: Calendar,
    title: "Calendar",
    description: "Manage client appointments, schedule sessions, and organize your coaching business.",
  },
]

export function FeaturesGrid() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [activeTab, setActiveTab] = useState<"athletes" | "coaches">("athletes")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = activeTab === "athletes" ? athletesFeatures : coachesFeatures
  const accentColor = activeTab === "athletes" ? "#00d4ff" : "#ff9500"

  return (
    <section ref={ref} id="features" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Powerful Features, Simple to Use
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex justify-center gap-4"
        >
          <button
            onClick={() => setActiveTab("athletes")}
            className={`rounded-full px-8 py-3 text-base font-medium transition-all duration-300 ${
              activeTab === "athletes"
                ? "bg-[#00d4ff] text-black shadow-lg shadow-[#00d4ff]/30 scale-105"
                : "border-2 border-[#00d4ff] bg-transparent text-[#00d4ff] hover:bg-[#00d4ff]/10"
            }`}
          >
            Athletes
          </button>
          <button
            onClick={() => setActiveTab("coaches")}
            className={`rounded-full px-8 py-3 text-base font-medium transition-all duration-300 ${
              activeTab === "coaches"
                ? "bg-[#00d4ff] text-black shadow-lg shadow-[#00d4ff]/30 scale-105"
                : "border-2 border-[#00d4ff] bg-transparent text-[#00d4ff] hover:bg-[#00d4ff]/10"
            }`}
          >
            Coaches
          </button>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {features.map((feature, index) => (
              <motion.div
                key={`${activeTab}-${feature.title}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] transition-all duration-300 cursor-pointer"
                style={{
                  borderWidth: hoveredIndex === index ? "2px" : "1px",
                  borderColor: hoveredIndex === index ? accentColor : "#2a2a2a",
                  minHeight: "200px",
                }}
              >
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      color: hoveredIndex === index ? accentColor : "#ffffff",
                    }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <feature.icon className="h-12 w-12" strokeWidth={1.5} />
                  </motion.div>

                  <motion.h3
                    animate={{
                      color: hoveredIndex === index ? accentColor : "#ffffff",
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-bold mb-2"
                  >
                    {feature.title}
                  </motion.h3>

                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-gray-400 overflow-hidden"
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
