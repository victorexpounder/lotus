'use client'
import Image from "next/image"
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedCounter from "@/components/animated-counter"
import BookingCalendar from "@/components/booking-calendar"
import ResultsCarousel from "@/components/results-carousel"
import Link from "next/link"
import { motion, useAnimation } from "motion/react"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function Home() {
  const controls = useAnimation()
  const heroControls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
      heroControls.start("visible")
      if(inView) {
        controls.start("visible")
      }
  }, [controls, inView])

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  }
  return (
    <div className="flex overflow-hidden min-h-screen flex-col">
      <Navbar showNav={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-slate-100" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          animate={heroControls}
        >
          <motion.h1
            variants={fadeUp}
            className="text-6xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-slate-900"
          >
            Is Marketing a Problem in Your Business?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {/* Optional highlight */}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-xl text-slate-700 max-w-3xl mx-auto"
          >
            Let us grow your business with Proven Marketing Frameworks and build you a solid Internal Marketing Team.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <a href="#contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">
                Let's Build Yours
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      </section>

      {/*  Marketing Agency Risks */}
      <section className="w-full py-20 bg-[#f5f7fa]" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
        >
          {/* Text Section */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl text-center md:text-4xl md:text-left font-bold text-[#0f172a] leading-tight mb-8">
              Marketing Without
              <br />
              Dependency
            </h2>

            <p className="text-lg text-[#334155] mb-6">
              Working with a Marketing Agency comes with two risks:
            </p>

            <div className="space-y-6">
              {[
                "You pay them and get no result",
                "You get results but you're stuck depending on them forever.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  variants={fadeUp}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#6200EE] flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                  <p className="text-lg text-[#334155]">
                    <span className="font-semibold">{text}</span>
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-10">
              <p className="text-lg text-[#334155]">
                We are different. As we do your marketing, we also train your marketing team to become great
                marketers.
                <span className="block mt-4 font-semibold text-xl">So you get results and freedom.</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Card Section */}
          <motion.div className="relative" variants={fadeUp}>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#6200EE]/10 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6200EE]/10 rounded-full"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-xl">
              <div className="flex flex-col gap-6">
                {[
                  "Results-driven marketing strategies",
                  "Team training & development",
                  "Long-term independence",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    variants={fadeUp}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#6200EE]/10 flex items-center justify-center">
                      {/* You can also dynamically insert different icons here */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#7e22ce"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {i === 0 && (
                          <>
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </>
                        )}
                        {i === 1 && (
                          <>
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </>
                        )}
                        {i === 2 && (
                          <>
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                          </>
                        )}
                      </svg>
                    </div>
                    <p className="font-medium text-[#0f172a]">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white" id="results">
        <div className="container px-4 md:px-6">

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Client Results</h3>
            <ResultsCarousel />
          </div>

          <div className="flex justify-center mt-12">
            <a href="#offer">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Book A Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="py-20 bg-white" id="about">
        <motion.div 
          className="container px-4 md:px-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div 
              className="relative h-[400px]"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
            >
              <Image
                src="/ceo.jpeg"
                alt="Mayokun Johnson"
                fill
                className="w-full h-full rounded-xl object-cover object-top"
              />
            </motion.div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                We're not a funnel agency. We're a growth team.
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                Led by Mayokun Johnson, Lotus.com brings together strategy, execution, and accountability.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <p>Strategic marketing expertise</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <p>Execution-focused approach</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <p>Measurable results and accountability</p>
                </div>
              </div>
              <Button variant="outline" className="mt-4">
                Learn More About Our Team <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-slate-50" id="services">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="flex flex-col items-center text-center space-y-4 mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Marketing that works because it's built right.
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed max-w-[700px]">
              We create comprehensive growth systems that drive sustainable results.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-[#6200EE]/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7e22ce"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Proven Frameworks</h3>
                <p className="text-gray-500">
                  We use proven marketing frameworks to grow your business, ensuring reliable and consistent results.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-[#6200EE]/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7e22ce"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                </div>
                <h3 className="text-xl font-bold">Real Growth</h3>
                <p className="text-gray-500">
                  While implementing our strategies, we deliver tangible business growth and measurable results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-[#6200EE]/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7e22ce"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                </div>
                <h3 className="text-xl font-bold">Your Own Team </h3>
                <p className="text-gray-500">
                  We train your people to become top-tier marketers who can continue growing your business independently.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              So, in 6 months or less, you're not just making more money—
              <br />
              <span className="font-semibold">
                You also have a full team who can keep growing the business without needing us forever.
              </span>
            </p>
            <p className="text-lg text-[#6200EE]/90 italic">That's how we do marketing differently.</p>

          </motion.div>

          <div className="flex justify-center mt-12">
            <a href="#contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      

      {/* Offer Section */}
      <section className="py-20 bg-slate-900 text-white" id="offer">
        <motion.div 
          className="container px-4 md:px-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-900 px-3 py-1 text-sm text-blue-100 mb-4">Our Offer</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Lotus Growth System</h2>
              <p className="text-slate-300 md:text-xl/relaxed">
                We partner with you to execute marketing departments that scale.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-8 p-2 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Strategy Development</h3>
                    <p className="text-slate-300">We build a smart marketing plan just for your business goals.
                    No guessing. No fluff. Just what works that we have used across Clients in Travels and Tours, Renewable Energy (Solar), Entertainment and other industries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-8 p-2 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">System Implementation</h3>
                    <p className="text-slate-300">We set up and run the systems, tools, and campaigns that bring in leads and sales.
                    All done for you—start to finish.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-8 p-2 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Internal Team Training</h3>
                    <p className="text-slate-300">While we work, we also train your in-house team.
                    They learn how to do marketing, content, and closing—so they become growth machines.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-8 p-2 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ongoing Optimization</h3>
                    <p className="text-slate-300">We don’t stop at setup.
                    We keep improving, and adjusting everything based on real data—so you grow faster.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#calendar">
                <Button size="lg" className="mt-6 bg-green-500 hover:bg-green-600 text-white">
                  Find out if you can work with us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <div id="calendar" className="bg-slate-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Schedule Your Call</h3>
                <BookingCalendar />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
            >
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-900 mb-4">
                Get Started
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to build your growth system?</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                Fill out the form and we'll get back to you to discuss how we can help.
              </p>
              <div className="space-y-2 mt-6">
                <div className="flex items-center gap-2">
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
                    className="text-blue-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <p>+2349134052630</p>
                </div>
                <div className="flex items-center gap-2">
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
                    className="text-blue-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <p>lotusmedia101@gmail.com</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="bg-slate-50 p-8 rounded-xl overflow-scroll"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
            >
              <form className="space-y-4" action="https://formsubmit.co/lotusmedia101@gmail.com" method="POST">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John"
                      name="first-name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Doe"
                      name="last-name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="+2349134052630"
                    pattern="[0-9+]+"
                    title="Please enter a valid phone number"
                    required
                    autoComplete="tel"
                    autoCorrect="off"
                    name="phone"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="john.doe@example.com"
                    name="email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Acme Inc."
                    name="company"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your project..."
                    name="message"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
