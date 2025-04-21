"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-sm" : "bg-slate-900",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpeg" alt="Logo" width={32} height={32} />
          <span className="font-bold text-xl text-white">LOTUS.COM</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-white hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="#results" className="text-sm font-medium text-white hover:text-purple-400 transition-colors">
            Results
          </Link>
          <Link href="#about" className="text-sm font-medium text-white hover:text-purple-400 transition-colors">
            About Us
          </Link>
          <Link href="#services" className="text-sm font-medium text-white hover:text-purple-400 transition-colors">
            What We Do
          </Link>
          <Link href="#offer" className="text-sm font-medium text-white hover:text-purple-400 transition-colors">
            Our Offer
          </Link>
          <Link href="#contact" className="text-sm font-medium text-white hover:text-purple-400 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700">
            <Link href="#contact">Get Started</Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden bg-transparent border-0 text-white hover:bg-slate-800"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 text-white border-slate-800">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" onClick={closeMenu} className="text-lg font-medium hover:text-purple-400 transition-colors">
                  Home
                </Link>
                <Link href="#results" onClick={closeMenu} className="text-lg font-medium hover:text-purple-400 transition-colors">
                  Results
                </Link>
                <Link href="#offer" onClick={closeMenu} className="text-lg font-medium hover:text-purple-400 transition-colors">
                  Our Offer
                </Link>
                <Link href="#about" onClick={closeMenu} className="text-lg font-medium hover:text-purple-400 transition-colors">
                  About Us
                </Link>
                <Link href="#services" onClick={closeMenu} className="text-lg font-medium hover:text-purple-400 transition-colors">
                  What We Do
                </Link>
                <Link href="#contact" onClick={closeMenu} className="text-lg font-medium hover:text-purple-400 transition-colors">
                  Contact
                </Link>
                <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700 w-full">
                  <Link href="#contact">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
