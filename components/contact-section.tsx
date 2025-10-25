"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

export function ContactSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} id="contact-us" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Write to us, we will reach you ASAP!</h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-2xl space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Input
                placeholder="Name"
                className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-500 focus:border-[#00d4ff] transition-all duration-300"
              />
            </motion.div>
            <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Input
                type="email"
                placeholder="Email"
                className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-500 focus:border-[#00d4ff] transition-all duration-300"
              />
            </motion.div>
          </div>
          <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
            <Textarea
              placeholder="Message"
              rows={6}
              className="bg-[#1a1a1a] border-gray-800 text-white placeholder:text-gray-500 resize-none focus:border-[#00d4ff] transition-all duration-300"
            />
          </motion.div>
          <div className="text-center">
            <Button className="bg-[#00d4ff] text-black font-semibold hover:bg-[#00b8e6] hover:scale-105 px-12 transition-all duration-300 shadow-lg shadow-[#00d4ff]/30">
              Send
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
