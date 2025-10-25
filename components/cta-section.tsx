import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 p-12 text-center lg:p-20">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Ready To Start Your Transformation?</h2>
            <p className="mb-8 text-lg lg:text-xl">
              Join thousands of members who are already achieving their fitness goals with iFLEX Coach.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
