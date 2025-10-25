"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AppShowcase } from "@/components/app-showcase"
import { PlatformSection } from "@/components/platform-section"
import { AnimatedDiagram } from "@/components/animated-diagram"
import { FeaturesGrid } from "@/components/features-grid"
import { DeviceShowcase } from "@/components/device-showcase"
import { FAQSection } from "@/components/faq-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    return () => document.removeEventListener("click", handleSmoothScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AppShowcase />
        <PlatformSection />
        <AnimatedDiagram />
        <FeaturesGrid />
        <DeviceShowcase />
        <FAQSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
