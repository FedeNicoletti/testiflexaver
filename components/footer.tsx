"use client"

import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

export function Footer() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <footer ref={ref} className="border-t border-gray-800 bg-[#0a0a0a] py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-1">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="8" r="3" fill="#00d4ff" />
                <path
                  d="M16 12C13 12 10 14 10 18V24C10 24 12 26 16 26C20 26 22 24 22 24V18C22 14 19 12 16 12Z"
                  fill="#00d4ff"
                />
                <circle cx="10" cy="16" r="2" fill="#00d4ff" />
                <circle cx="22" cy="16" r="2" fill="#00d4ff" />
              </svg>
              <span className="ml-1 text-xl font-bold text-white">iFLEX</span>
              <span className="text-xl font-light text-white">COACH</span>
            </div>
            <p className="mb-4 text-sm text-gray-400">
              Transform your fitness journey with personalized coaching and comprehensive training programs.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-[#00d4ff] hover:text-black"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {[
            {
              title: "PRODUCT",
              links: ["Features", "Pricing", "For Athletes", "For Coaches"],
            },
            {
              title: "LEGAL TERMS",
              links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"],
            },
          ].map((column, columnIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + columnIndex * 0.1 }}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase text-white">{column.title}</h3>
              <ul className="space-y-2 text-sm">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.2 + columnIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <a href="#" className="text-gray-400 transition-colors hover:text-[#00d4ff]">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase text-white">DOWNLOAD</h3>
            <div className="space-y-3">
              {[
                { label: "App Store", icon: "apple" },
                { label: "Google Play", icon: "android" },
              ].map((store, index) => (
                <motion.div
                  key={store.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-800 bg-transparent text-white hover:bg-gray-800 hover:border-[#00d4ff] transition-all duration-300"
                  >
                    {store.icon === "apple" ? (
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                    ) : (
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                    )}
                    {store.label}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400"
        >
          <p>&copy; 2025 iFLEX Coach. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
