"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}
      style={{
        backgroundColor: isScrolled ? "rgba(46, 59, 41, 0.95)" : "rgba(46, 59, 41, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-black tracking-wide" style={{ color: "#F9F9F9" }}>
              Nikolaus Marvin Liayasa
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="font-medium transition-colors duration-200 hover:scale-105"
                style={{ color: "#F9F9F9" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F4A300"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#F9F9F9"
                }}
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("resume")}
                className="font-medium transition-colors duration-200 hover:scale-105"
                style={{ color: "#F9F9F9" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F4A300"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#F9F9F9"
                }}
              >
                Resume
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="font-medium transition-colors duration-200 hover:scale-105"
                style={{ color: "#F9F9F9" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F4A300"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#F9F9F9"
                }}
              >
                Portfolio
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: "#F4A300",
                  color: "#2E3B29",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e6930a"
                  e.currentTarget.style.transform = "scale(1.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#F4A300"
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                Get in touch!
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: "#F9F9F9" }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1" style={{ backgroundColor: "rgba(46, 59, 41, 0.95)" }}>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 font-medium transition-colors duration-200"
                style={{ color: "#F9F9F9" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F4A300"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#F9F9F9"
                }}
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("resume")}
                className="block px-3 py-2 font-medium transition-colors duration-200"
                style={{ color: "#F9F9F9" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F4A300"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#F9F9F9"
                }}
              >
                Resume
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block px-3 py-2 font-medium transition-colors duration-200"
                style={{ color: "#F9F9F9" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F4A300"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#F9F9F9"
                }}
              >
                Portfolio
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-2 font-semibold rounded-full"
                style={{
                  backgroundColor: "#F4A300",
                  color: "#2E3B29",
                }}
              >
                Get in touch!
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
