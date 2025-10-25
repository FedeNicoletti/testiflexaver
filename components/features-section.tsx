import { Dumbbell, Heart, LineChart, Users } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Personalized Workouts",
    description: "Custom workout plans tailored to your fitness level, goals, and available equipment.",
  },
  {
    icon: Heart,
    title: "Nutrition Guidance",
    description: "Expert meal plans and nutrition advice to fuel your body and maximize results.",
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description: "Monitor your journey with detailed analytics and performance metrics.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a supportive community of like-minded individuals on their fitness journey.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-500">
            Features
          </div>
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
            Everything You Need To <span className="text-orange-500">Succeed</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Our comprehensive platform provides all the tools and support you need to reach your fitness goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-orange-500/50 hover:bg-gray-900"
            >
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/10 p-3 text-orange-500 transition-transform group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
