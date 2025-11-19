"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#2E3B29" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="text-[15rem] md:text-[20rem] lg:text-[25rem] font-black opacity-3 select-none"
          style={{ color: "#F9F9F9" }}
        >
          PORTFOLIO
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="text-[15rem] md:text-[20rem] lg:text-[25rem] font-black opacity-5 select-none transform translate-x-2 translate-y-2"
          style={{ color: "#F4A300", WebkitTextStroke: "2px #F4A300", WebkitTextFillColor: "transparent" }}
        >
          PORTFOLIO
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 rotate-45" style={{ backgroundColor: "#F4A300" }}></div>
        <div className="absolute top-32 left-20 w-3 h-3 rounded-full" style={{ backgroundColor: "#F4A300" }}></div>
        <div className="absolute top-16 right-20 w-2 h-8 rotate-12" style={{ backgroundColor: "#F4A300" }}></div>
        <div className="absolute bottom-40 right-16 w-5 h-5 rotate-45" style={{ backgroundColor: "#F4A300" }}></div>
        <div className="absolute bottom-60 right-32 w-2 h-2 rounded-full" style={{ backgroundColor: "#F4A300" }}></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 rotate-45" style={{ backgroundColor: "#F4A300" }}></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full" style={{ backgroundColor: "#F4A300" }}></div>
        <div className="absolute bottom-32 left-1/3 w-6 h-1 rotate-45" style={{ backgroundColor: "#F4A300" }}></div>
        <div className="absolute top-40 left-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: "#F4A300" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          <div className="lg:col-span-7 space-y-12 animate-fade-in-up relative">
            <div className="relative">
              {/* Main PORTFOLIO text with creative layering */}
              <h1
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.8] tracking-tight relative z-20"
                style={{ color: "#F9F9F9" }}
              >
                PORTFOLIO
              </h1>

              {/* Outlined text layer behind main text */}
              <div
                className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.8] tracking-tight opacity-30 transform translate-x-1 translate-y-1 z-10"
                style={{
                  WebkitTextStroke: "2px #F4A300",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                PORTFOLIO
              </div>
            </div>

            {/* Social media buttons */}
            <div className="flex space-x-4 relative z-20">
              <Button
                variant="outline"
                size="icon"
                className="border-2 hover:scale-105 transition-all duration-200 bg-transparent"
                style={{
                  borderColor: "#F9F9F9",
                  color: "#F9F9F9",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F4A300"
                  e.currentTarget.style.borderColor = "#F4A300"
                  e.currentTarget.style.color = "#2E3B29"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.borderColor = "#F9F9F9"
                  e.currentTarget.style.color = "#F9F9F9"
                }}
                onClick={() => window.open("https://www.linkedin.com/in/nikolaus-marvin-liayasa-ba956a294", "_blank")}
              >
                <Linkedin size={20} />
              </Button>
                <Button
                variant="outline"
                size="icon"
                className="border-2 hover:scale-105 transition-all duration-200 bg-transparent"
                style={{
                  borderColor: "#F9F9F9",
                  color: "#F9F9F9",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F4A300"
                  e.currentTarget.style.borderColor = "#F4A300"
                  e.currentTarget.style.color = "#2E3B29"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.borderColor = "#F9F9F9"
                  e.currentTarget.style.color = "#F9F9F9"
                }}
                onClick={() => window.open("https://github.com/nikolausmarvinliayasa", "_blank")}
              >
                <Github size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-2 hover:scale-105 transition-all duration-200 bg-transparent"
                style={{
                  borderColor: "#F9F9F9",
                  color: "#F9F9F9",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F4A300"
                  e.currentTarget.style.borderColor = "#F4A300"
                  e.currentTarget.style.color = "#2E3B29"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.borderColor = "#F9F9F9"
                  e.currentTarget.style.color = "#F9F9F9"
                }}
                onClick={() => window.open("https://www.instagram.com/nikolausmarvinn/", "_blank")}
              >
                <Instagram size={20} />
              </Button>
              {/* View CV button */}
              <Button
                className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold hover:scale-105 transition-all duration-200 shadow-md"
                style={{
                  backgroundColor: "#F4A300", // kuning emas
                  color: "#2E3B29",           // hijau tua teks
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D89000" // kuning sedikit lebih tua saat hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#F4A300"
                }}
                onClick={() => window.open("CV_ATS_Marvin.pdf", "_blank")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11V3m0 8L8 7m4 4l4-4m-6 8h6m2 2a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2h6"
                  />
                </svg>
                <span>View CV</span>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Profile image with enhanced styling */}
              <div
                className="w-full max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-20 border-4 border-opacity-20"
                style={{ borderColor: "#F4A300" }}
              >
                <img
                  src="/FotoPort.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative frame elements */}
              <div
                className="absolute -top-4 -right-4 w-8 h-8 rotate-45 z-10"
                style={{ backgroundColor: "#F4A300" }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full z-10"
                style={{ backgroundColor: "#F4A300" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator - unchanged */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center space-y-2 hover:scale-105 transition-all duration-200"
            style={{ color: "#F9F9F9" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#F4A300"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#F9F9F9"
            }}
          >
            <span className="text-sm">Scroll down</span>
            <ArrowDown size={20} />
          </Button>
        </div>
      </div>
    </section>
  )
}
