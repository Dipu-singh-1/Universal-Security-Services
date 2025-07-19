"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Clock, Award, MapPin, Phone, Mail, CreditCard, Smartphone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const heroImages = [
    { query: "professional security guard in uniform", alt: "Professional Security Guard" },
    { query: "security team at commercial building", alt: "Security Team" },
    { query: "female security officer", alt: "Female Security Officer" },
    { query: "security guard with radio", alt: "Security Guard with Radio" },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const testimonials = [
    {
      name: "Priya Sharma",
      position: "Facility Manager",
      company: "Tech Solutions Pvt Ltd",
      review:
        "SwiftSecure has been protecting our office for 2 years. Their guards are professional, punctual, and highly trained. We feel completely secure.",
    },
    {
      name: "Rajesh Kumar",
      position: "Residential Society President",
      company: "Green Valley Apartments",
      review:
        "Excellent service! The guards are courteous and vigilant. Our society has seen a significant improvement in security since we hired SwiftSecure.",
    },
    {
      name: "Anita Desai",
      position: "Event Manager",
      company: "Elite Events",
      review:
        "We have used SwiftSecure for multiple high-profile events. Their event security team is exceptional and handles crowd management perfectly.",
    },
    {
      name: "Vikram Singh",
      position: "Store Manager",
      company: "Retail Chain",
      review:
        "Professional and reliable security services. SwiftSecure guards have helped us prevent theft and maintain a safe shopping environment.",
    },
    {
      name: "Meera Patel",
      position: "HR Director",
      company: "Corporate Solutions",
      review:
        "Outstanding service quality. The guards are well-trained and maintain high standards of professionalism. Highly recommended!",
    },
    {
      name: "Arjun Reddy",
      position: "Property Owner",
      company: "Residential Complex",
      review:
        "SwiftSecure provides 24/7 protection for our property. Their response time is excellent and we trust them completely with our security needs.",
    },
  ]

  const networkLocations = [
    { city: "Delhi NCR", guards: "500", clients: "200", status: "Operational" },
    { city: "Mumbai", guards: "400", clients: "150", status: "Operational" },
    { city: "Bangalore", guards: "350", clients: "120", status: "Operational" },
    { city: "Pune", guards: "250", clients: "80", status: "Operational" },
    { city: "Chennai", guards: "300", clients: "100", status: "Operational" },
    { city: "Hyderabad", guards: "200", clients: "60", status: "Expanding" },
  ]

  const services = [
    {
      icon: <Shield className="h-8 w-8 text-violet-600" />,
      title: "Residential Security",
      description: "24/7 protection for your home and family with trained residential guards.",
    },
    {
      icon: <Users className="h-8 w-8 text-violet-600" />,
      title: "Commercial Security",
      description: "Professional security solutions for offices, malls, and business premises.",
    },
    {
      icon: <Clock className="h-8 w-8 text-violet-600" />,
      title: "Event Security",
      description: "Specialized security services for events, conferences, and gatherings.",
    },
    {
      icon: <Award className="h-8 w-8 text-violet-600" />,
      title: "Personal Bodyguard",
      description: "Elite personal protection services for VIPs and high-profile individuals.",
    },
  ]

  const jobVacancies = [
    {
      title: "Night Shift Security Guard",
      location: "Delhi",
      shift: "10 PM - 6 AM",
      salary: "₹18,000 - ₹22,000",
    },
    {
      title: "Female Security Guard",
      location: "Bangalore",
      shift: "Day Shift",
      salary: "₹16,000 - ₹20,000",
    },
    {
      title: "Event Security Officer",
      location: "Mumbai",
      shift: "Flexible",
      salary: "₹20,000 - ₹25,000",
    },
    {
      title: "Commercial Security Supervisor",
      location: "Gurgaon",
      shift: "Day Shift",
      salary: "₹25,000 - ₹30,000",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Image Slider */}
      <section className="relative bg-gradient-to-r from-violet-900 to-violet-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                24/7 Professional Security Guard Services
              </h1>
              <p className="text-xl text-violet-100">Trained, Licensed, and Trusted Guards at Your Service</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Book a Security Service Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-violet-900 bg-transparent"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={`/placeholder.svg?height=500&width=400&query=${heroImages[currentSlide].query}`}
                  alt={heroImages[currentSlide].alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? "bg-yellow-500" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Security Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive security solutions tailored to meet your specific needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Network Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Network</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              SwiftSecure operates across major cities in India, providing reliable security services nationwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkLocations.map((location, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-violet-100">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-violet-100 p-4 rounded-full">
                      <MapPin className="h-8 w-8 text-violet-600" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{location.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-600">{location.guards}+ Active Guards</p>
                    <p className="text-gray-600">{location.clients}+ Happy Clients</p>
                    <Badge className="bg-violet-100 text-violet-800">{location.status}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Mr. Rajeev Verma - Founder"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Meet Our Founder</h2>
                <h3 className="text-2xl font-semibold text-violet-600 mb-4">Mr. Rajeev Verma</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of experience in the security industry, Mr. Rajeev Verma founded SwiftSecure with a
                vision to provide reliable, professional security services across India. His expertise in risk
                management and team leadership has helped establish SwiftSecure as a trusted name in the security
                sector.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">15+ Years Experience</Badge>
                <Badge variant="secondary">Security Expert</Badge>
                <Badge variant="secondary">Risk Management</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={`/placeholder.svg?height=50&width=50&query=${testimonial.name} profile`}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <p className="text-sm text-violet-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Job Vacancies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
            <p className="text-lg text-gray-600">Join our team of professional security guards</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {jobVacancies.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{job.location}</span>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Open</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">
                      <strong>Shift:</strong> {job.shift}
                    </p>
                    <p className="text-gray-600">
                      <strong>Salary:</strong> {job.salary}
                    </p>
                  </div>
                  <Link href="/apply">
                    <Button className="w-full bg-violet-600 hover:bg-violet-700">Apply Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/vacancies">
              <Button variant="outline" size="lg">
                View All Vacancies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Integration Section */}
      <section className="py-16 bg-violet-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Book & Pay Online</h2>
            <p className="text-lg text-violet-100 max-w-2xl mx-auto">
              Secure and convenient online booking with multiple payment options
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-center">Residential Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-violet-600 mb-2">₹800</div>
                <p className="text-gray-600 mb-4">Per Day</p>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Pay & Book Now</Button>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-center">Event Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-violet-600 mb-2">₹1,200</div>
                <p className="text-gray-600 mb-4">Per Event</p>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Pay & Book Now</Button>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-center">Personal Guard</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-violet-600 mb-2">₹2,000</div>
                <p className="text-gray-600 mb-4">Per Day</p>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Pay & Book Now</Button>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center items-center gap-6 mt-8">
            <span className="text-violet-100">Accepted Payment Methods:</span>
            <div className="flex gap-4">
              <Smartphone className="h-6 w-6" />
              <CreditCard className="h-6 w-6" />
              <span className="text-sm">UPI • Cards • Net Banking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Ready to secure your premises? Contact us today!</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-violet-600 mx-auto mb-2" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+91 98765 43210</p>
                <p className="text-gray-600">24/7 Support Available</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-violet-600 mx-auto mb-2" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@swiftsecure.com</p>
                <p className="text-gray-600">Quick Response Guaranteed</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-violet-600 mx-auto mb-2" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Delhi NCR</p>
                <p className="text-gray-600">Multiple Locations</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
