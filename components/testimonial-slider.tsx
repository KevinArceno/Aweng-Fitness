"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Amateur Boxer",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Training with Aweng has completely transformed my boxing technique. In just 3 months, I've seen incredible improvements in my footwork, power, and overall confidence in the ring.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Fitness Enthusiast",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "I was looking for a challenging workout routine, and Aweng's boxing fitness program exceeded all my expectations. I've lost 15 pounds and gained muscle definition I never thought possible.",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Professional Athlete",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "As a professional athlete, I needed specialized training to improve my conditioning. Aweng created a custom boxing program that perfectly complemented my sport-specific training.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Boxing Beginner",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "I had zero boxing experience when I started with Aweng. His patience and expert instruction made learning the fundamentals enjoyable and effective. Now I'm hooked on boxing!",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-none shadow-lg">
        <CardContent className="p-8 md:p-12">
          <Quote className="h-12 w-12 text-primary/20 mb-6" />

          <div className="grid md:grid-cols-[1fr_3fr] gap-8 items-center">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold">{testimonials[currentIndex].name}</h3>
              <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>

            <div>
              <p className="text-lg italic">"{testimonials[currentIndex].content}"</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4 mt-6">
        <Button size="icon" variant="outline" onClick={prevTestimonial}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button size="icon" variant="outline" onClick={nextTestimonial}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Testimonial {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
