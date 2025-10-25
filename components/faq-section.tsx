"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

const faqs = [
  {
    question: "What is iFLEX Coach and how does it work?",
    answer:
      "iFLEX Coach is a comprehensive fitness platform that connects you with certified coaches, provides personalized workout plans, nutrition guidance, and progress tracking all in one place.",
  },
  {
    question: "How much does it cost to get started with iFLEX Coach?",
    answer:
      "We offer a free plan to get started, and our premium plan is $49.99/month with advanced features and unlimited coaching sessions.",
  },
  {
    question: "Can I track both training and nutrition on this app?",
    answer:
      "Yes! iFLEX Coach provides comprehensive tracking for both your training sessions and nutrition intake, with detailed analytics and progress reports.",
  },
  {
    question: "Is iFLEX Coach free to use?",
    answer:
      "We offer both free and premium plans. The free plan includes basic features, while the premium plan unlocks advanced coaching, unlimited programs, and priority support.",
  },
]

export function FAQSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} id="faq" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-lg border border-gray-800 bg-[#1a1a1a] px-6 transition-all duration-300 hover:border-[#00d4ff] hover:shadow-lg hover:shadow-[#00d4ff]/10"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-[#00d4ff] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
