import { Award, TrendingUp, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Coaches",
    description:
      "Work with certified fitness professionals who have years of experience helping people just like you achieve their goals.",
  },
  {
    icon: Zap,
    title: "Personalized Plans",
    description:
      "Every workout and meal plan is tailored specifically to your body type, fitness level, and personal goals.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description:
      "Monitor your transformation with detailed analytics, progress photos, and measurements to stay motivated.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Join thousands of success stories. Our clients see real, measurable results within the first 30 days.",
  },
]

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-[#FF6B35]">
            Why Choose Us
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Everything You Need To <span className="text-[#FF6B35]">Succeed</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We provide a comprehensive fitness solution designed to help you reach your goals faster and more
            effectively than ever before.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-[#FF6B35] hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex rounded-xl bg-orange-100 p-4 text-[#FF6B35] transition-transform group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
