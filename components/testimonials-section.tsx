import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Lost 30 lbs in 3 months",
    image: "/sarah-johnson-woman.jpg",
    content:
      "iFLEX Coach completely transformed my life. The personalized workout plans and constant support from my coach helped me lose 30 pounds and gain confidence I never had before. I can't recommend this enough!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Gained 15 lbs of muscle",
    image: "/michael-chen-man.jpg",
    content:
      "As someone who struggled with consistency, having a dedicated coach made all the difference. The custom meal plans and progressive workouts helped me build muscle I didn't think was possible. Best investment I've ever made.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marathon Ready",
    image: "/emily-rodriguez-woman.jpg",
    content:
      "I went from barely running a mile to completing my first marathon in 6 months. The structured training program and nutritional guidance were exactly what I needed. Thank you iFLEX Coach!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-[#FF6B35]">
            Testimonials
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Real Stories, Real <span className="text-[#FF6B35]">Results</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about their transformation journey with
            iFLEX Coach.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-600">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
