import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Tell us about your fitness goals, current level, and preferences. Our AI will analyze your information to create the perfect starting point.",
  },
  {
    number: "02",
    title: "Get Your Custom Plan",
    description:
      "Receive a personalized workout and nutrition plan designed specifically for your body type, schedule, and goals.",
  },
  {
    number: "03",
    title: "Start Training",
    description:
      "Follow your custom workouts with video demonstrations and real-time form corrections. Track every rep, set, and meal.",
  },
  {
    number: "04",
    title: "See Results",
    description:
      "Watch your transformation unfold with progress tracking, body measurements, and regular check-ins with your coach.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-[#FF6B35]">
            How It Works
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Your Journey To <span className="text-[#FF6B35]">Fitness</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Getting started is easy. Follow these simple steps and you'll be on your way to achieving your fitness
            goals.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex gap-6 rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6B35] text-2xl font-bold text-white">
                  {step.number}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-[#FF6B35]">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Quick & Easy</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
