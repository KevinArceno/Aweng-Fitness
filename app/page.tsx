import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import VideoGallery from "@/components/video-gallery"
import TestimonialSlider from "@/components/testimonial-slider"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/aweng.jpg"
              alt="Aweng Fitness Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Aweng Fitness</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#vlogs" className="text-sm font-medium hover:text-primary">
              Vlogs
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <Button>Book a Session</Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg.jpeg"
              alt="Boxing Hero"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Unleash Your Boxing Potential
              </h1>
              <p className="text-lg md:text-xl">
                Professional boxing training, fitness coaching, and authentic boxing vlogs. Join Aweng Fitness to
                transform your body and mind through the art of boxing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#services">Explore Services</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                  asChild
                >
                  <Link href="#vlogs">Watch Vlogs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/coach.jpg" alt="Aweng Boxing" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  About Aweng Fitness
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Professional Boxing Coach & Fitness Expert
                </h2>
                <p className="text-muted-foreground">
                  With over 10 years of experience in professional boxing, I've dedicated my life to mastering the sweet
                  science and helping others achieve their fitness goals through boxing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Certified Professional Boxing Coach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Fitness & Nutrition Specialist</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Former Regional Boxing Champion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Boxing Content Creator</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="#contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Services</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Boxing Training & Fitness Programs</h2>
              <p className="text-muted-foreground">
                Customized boxing and fitness programs designed to help you reach your goals, whether you're a beginner
                or advanced boxer.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/training.jpg"
                    alt="Personal Boxing Training"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Personal Boxing Training</h3>
                  <p className="text-muted-foreground">
                    One-on-one boxing sessions tailored to your skill level, focusing on technique, footwork, and
                    conditioning.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="#contact">Book a Session</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Service 2 */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/clas.png"
                    alt="Group Boxing Classes"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Group Boxing Classes</h3>
                  <p className="text-muted-foreground">
                    High-energy group sessions combining boxing fundamentals with cardio workouts for maximum results.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="#contact">Join a Class</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Service 3 */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/aweng.jpg"
                    alt="Boxing Fitness Programs"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Boxing Fitness Programs</h3>
                  <p className="text-muted-foreground">
                    Comprehensive 8-12 week programs combining boxing training with nutrition guidance for total
                    transformation.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="#contact">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vlogs Section */}
        <section id="vlogs" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Boxing Vlogs</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Follow My Boxing Journey</h2>
              <p className="text-muted-foreground">
                Watch my latest boxing vlogs, training sessions, and boxing tips to improve your skills and stay
                motivated.
              </p>
            </div>

            <VideoGallery />

            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="https://www.youtube.com/@mackenrykevinarceno1683" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> Subscribe to My Channel
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What My Clients Say</h2>
              <p className="text-muted-foreground">
                Hear from people who have transformed their fitness and boxing skills with Aweng Fitness.
              </p>
            </div>

            <TestimonialSlider />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Get in Touch</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Boxing Journey?</h2>
                <p className="text-muted-foreground">
                  Fill out the form to book a session, inquire about services, or ask any questions about Aweng Fitness.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+639-514-562-812</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:mekurosensei@gmail.com" className="hover:underline text-blue-600">
                      mekurosensei@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Aweng's+Boxing+Camp,+Purok+4+Doña+Maxima,+San+Luis,+8511+Agusan+del+Sur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-600"
                    >
                      Purok 4, Doña Maxima, San Luis, Agusan del Sur
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="text-primary hover:text-white hover:bg-primary">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </Link>
                  <Link href="https://www.youtube.com/@mackenrykevinarceno1683" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="text-primary hover:text-white hover:bg-primary">
                      <Youtube className="h-5 w-5" />
                      <span className="sr-only">YouTube</span>
                    </Button>
                  </Link>
                  <Link href="https://www.facebook.com/bhong.bada" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="text-primary hover:text-white hover:bg-primary">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/aweng.jpg"
                alt="Aweng Fitness Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">Aweng Fitness</span>
            </div>

            <div className="flex gap-8">
              <Link href="#home" className="text-sm hover:text-primary">
                Home
              </Link>
              <Link href="#about" className="text-sm hover:text-primary">
                About
              </Link>
              <Link href="#services" className="text-sm hover:text-primary">
                Services
              </Link>
              <Link href="#vlogs" className="text-sm hover:text-primary">
                Vlogs
              </Link>
              <Link href="#contact" className="text-sm hover:text-primary">
                Contact
              </Link>
            </div>

            <div className="flex gap-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@mackenrykevinarceno1683" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </Link>
              <Link href="https://www.facebook.com/bhong.bada" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Aweng Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
