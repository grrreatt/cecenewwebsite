import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Award,
  Zap,
  CheckCircle2,
  Calendar,
  BarChart3,
  MessageSquare,
  Globe,
  Smartphone,
  Plus,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Phone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DreamcastPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold text-foreground">dreamcast</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-foreground hover:text-purple-600 transition-colors">
              Solutions
            </Link>
            <Link href="#" className="text-foreground hover:text-purple-600 transition-colors">
              Resources
            </Link>
            <Link href="#" className="text-foreground hover:text-purple-600 transition-colors">
              Company
            </Link>
            <Link href="#" className="text-foreground hover:text-purple-600 transition-colors">
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost">Login</Button>
            <Button className="bg-purple-600 text-white hover:bg-purple-700">Schedule Demo</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
                In-Person Event Platform & Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                All-in-one event tech platform for in-person events. Get all tools that offer everything your attendees
                want to register, onsite solutions and post event analytics. 30+ Integrated feature to run events
                effortlessly.
              </p>
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
                Request Demo
              </Button>

              <div className="mt-12 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-foreground">5000+</p>
                  <p className="text-sm text-muted-foreground">Events Powered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">2M+</p>
                  <p className="text-sm text-muted-foreground">Attendees</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/professional-woman-at-event.jpg" alt="Event check-in" fill className="object-cover" />
                </div>
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-2xl mt-8">
                  <Image src="/event-check-in-screen.jpg" alt="Registration screen" fill className="object-cover" />
                </div>
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-2xl -mt-8">
                  <Image src="/event-registration-badge.jpg" alt="Event badge" fill className="object-cover" />
                </div>
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/event-networking-app.jpg" alt="Mobile app" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">Trusted by leading companies worldwide</p>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-60">
            <div className="text-2xl font-bold">ICICI</div>
            <div className="text-2xl font-bold">Lenovo</div>
            <div className="text-2xl font-bold">SBI</div>
            <div className="text-2xl font-bold">Radisson</div>
            <div className="text-2xl font-bold">IBM</div>
            <div className="text-2xl font-bold">Amway</div>
            <div className="text-2xl font-bold">365</div>
            <div className="text-2xl font-bold">Airtel</div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Let's Get Your Event Going!</h2>
            <Card>
              <CardContent className="p-8">
                <form className="grid md:grid-cols-3 gap-4">
                  <Input placeholder="Name*" className="bg-white" />
                  <Input type="email" placeholder="Email*" className="bg-white" />
                  <Input placeholder="Phone*" className="bg-white" />
                  <Input placeholder="Company*" className="bg-white" />
                  <Input placeholder="Job Title" className="bg-white" />
                  <Input placeholder="No. of Attendees*" className="bg-white" />
                  <Button className="bg-purple-600 text-white hover:bg-purple-700 md:col-span-3">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Event winning Event Solutions</h2>
          <p className="text-center text-purple-200 mb-12 max-w-3xl mx-auto">
            Elevate your events with our comprehensive platform designed to streamline every aspect of event management.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-purple-800 border-purple-700 text-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image src="/corporate-conference-hall.jpg" alt="Conference" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Conferences</h3>
                  <p className="text-purple-200 text-sm">Professional conference management solutions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-800 border-purple-700 text-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image src="/event-registration-desk.jpg" alt="Registration" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Trade Shows</h3>
                  <p className="text-purple-200 text-sm">Complete trade show management platform</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-800 border-purple-700 text-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image src="/networking-event-crowd.jpg" alt="Networking" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
                  <p className="text-purple-200 text-sm">Seamless corporate event experiences</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Messaging Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Set Up, Manage And Execute A Memorable In-Person Event
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From planning to execution, our platform provides everything you need for successful events
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2 border-purple-200">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Event Site Registration</h3>
                <p className="text-muted-foreground mb-4">
                  Create custom registration pages with branding, multiple ticket types, and secure payment processing
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Custom branded registration pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Multiple ticket types and pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Secure payment gateway integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/event-registration-badge.jpg" alt="Registration interface" fill className="object-cover" />
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/event-check-in-screen.jpg" alt="Check-in screen" fill className="object-cover" />
            </div>

            <Card className="border-2 border-orange-200">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Automated White Label Mobile Event App</h3>
                <p className="text-muted-foreground mb-4">
                  Give attendees a fully branded mobile app with schedules, networking, and real-time updates
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Event agenda and schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">In-app networking features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Push notifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200">
              <CardContent className="p-8">
                <div className="bg-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Onsite Cred All-in-One App & Lead Pro</h3>
                <p className="text-muted-foreground mb-4">
                  Streamline check-ins, badge printing, and lead capture with our comprehensive onsite solution
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Fast check-in and badge printing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Lead capture and scanning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Real-time attendee tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/event-exhibition-booth.jpg" alt="Lead capture" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Why Our Clients Love Us!</h2>
          <p className="text-center text-muted-foreground mb-12">Hear from event organizers who trust our platform</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Dreamcast made our conference seamless. The registration process was smooth and the mobile app kept
                  attendees engaged throughout the event."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah Mitchell</p>
                    <p className="text-sm text-muted-foreground">Event Director, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "The analytics dashboard helped us understand attendee behavior and improve our future events. Highly
                  recommend!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">John Davis</p>
                    <p className="text-sm text-muted-foreground">Marketing Manager, Global Events</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "Best event platform we've used. The customer support team was incredibly helpful throughout our
                  entire event journey."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Emily Chen</p>
                    <p className="text-sm text-muted-foreground">Conference Coordinator, MedCon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">G2</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-foreground">4.8/5 Rating</p>
                  <p className="text-xs text-muted-foreground">Based on 500+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Event Management Section */}
      <section className="py-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            The Perfect Event Management Starts With Us
          </h2>
          <p className="text-xl text-white/90 mb-8">Schedule a demo to see how Dreamcast can transform your events</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              View Pricing
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5" />
              <span>Free trial available</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5" />
              <span>Setup in minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Platform Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive In-Person Event Platform With the Right Set of Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Make Your Event Stand Out, Memorable & Smooth!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/professional-woman-at-event.jpg" alt="Event platform" fill className="object-cover" />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Third-Party Integrations</h3>
                  <p className="text-muted-foreground">
                    Connect with your favorite tools including CRM, email marketing, and payment gateways
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Hybrid Networking & Matchmaking</h3>
                  <p className="text-muted-foreground">
                    AI-powered networking recommendations to connect attendees with similar interests
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Multi-Session Event Support</h3>
                  <p className="text-muted-foreground">
                    Manage multiple tracks, breakout sessions, and workshops with ease
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">White-Labeled Event Platform</h3>
                  <p className="text-muted-foreground">
                    Fully customizable platform with your branding, colors, and domain
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Multi-Locational Event Support</h3>
                  <p className="text-muted-foreground">Run events across multiple venues with centralized management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Read Our Impact Stories</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-foreground mb-2">TESS Event 2024</h4>
                <p className="text-sm text-muted-foreground mb-3">How we helped scale a 5,000 attendee conference</p>
                <Link href="#" className="text-purple-600 text-sm font-semibold hover:underline">
                  Read more →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Global Summit 2024</h4>
                <p className="text-sm text-muted-foreground mb-3">International event across 3 continents</p>
                <Link href="#" className="text-blue-600 text-sm font-semibold hover:underline">
                  Read more →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Tech Conference</h4>
                <p className="text-sm text-muted-foreground mb-3">Networking made simple for 2,000 developers</p>
                <Link href="#" className="text-orange-600 text-sm font-semibold hover:underline">
                  Read more →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-purple-600 text-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-2">In-Person Summit</h4>
                <p className="text-sm text-purple-100 mb-3">Best event management platform winner 2024</p>
                <Link href="#" className="text-white text-sm font-semibold hover:underline">
                  Read more →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Wonderful In-Ground Event Tech Solutions
            <br />
            Events of All Sizes, All Types
          </h2>
          <p className="text-center text-purple-200 mb-12 max-w-3xl mx-auto">
            Whether you're hosting a small corporate gathering or a large conference, we've got you covered
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Conferences</h3>
              <p className="text-purple-200 text-sm">Professional conference solutions</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trade Shows</h3>
              <p className="text-purple-200 text-sm">Exhibition management tools</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
              <p className="text-purple-200 text-sm">Seamless corporate experiences</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hybrid Events</h3>
              <p className="text-purple-200 text-sm">Virtual and in-person combined</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="font-semibold text-foreground">
                    How does Dreamcast streamline my event registration and check-in for events?
                  </span>
                  <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="font-semibold text-foreground">
                    Can I customize the branding on my event page and mobile app?
                  </span>
                  <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="font-semibold text-foreground">
                    What analytics and insights will I receive from my event?
                  </span>
                  <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="font-semibold text-foreground">
                    Does Dreamcast offer customer support for working platforms or technical issues?
                  </span>
                  <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="font-semibold text-foreground">
                    Does Dreamcast provide on-site support for event execution?
                  </span>
                  <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-400 via-orange-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Let's Organize A Memorable In-Person Event Together
            </h2>
            <p className="text-xl text-white/90 mb-8">Schedule a demo to see how Dreamcast can transform your events</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                View Pricing
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-5 h-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-5 h-5" />
                <span>Free trial available</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-5 h-5" />
                <span>Setup in minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="text-2xl font-bold">dreamcast</span>
              </div>
              <p className="text-purple-200 text-sm mb-4">
                The complete event management platform for in-person, virtual, and hybrid events.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700 flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-purple-800 hover:bg-purple-700 flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-purple-200">
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>contact@dreamcast.in</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+91 12345 67890</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-purple-200 text-sm">© 2026 Dreamcast. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-purple-200">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
