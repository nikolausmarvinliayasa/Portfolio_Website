"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Distance",
    description:
      "Diet Assistance (Distance) is an AI-powered web-based application that identifies food items from images and estimates their calorie content per 100 grams. It addresses common issues in calorie tracking apps, such as manual input and limited diet personalization.\n\nThis project was completed in June 2024",
    image: "/DistancePic.png",
    technologies: ["Python", "HTML", "CSS", "JavaScript "],
    liveUrl: "#",
    githubUrl: "https://github.com/nikolausmarvinliayasa/Distance_Application",
  },
  {
    id: 2,
    title: "Movie Time",
    description:
      "MovieTime is a web-based movie streaming platform that combines entertainment content with social interaction features. Designed using the User-Centered Design (UCD) methodology, it addresses common user pain points such as disruptive ads and the absence of community engagement tools.\n\nThis project was completed in June 2024",
    image: "/MovieTime.png",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/nikolausmarvinliayasa/MovieTime_Application",
  },
  {
    id: 3,
    title: "Game Web Design",
    description:
      "A web-based racing game landing page and content platform for Asphalt 9 fans, designed to showcase game information, gameplay highlights, esports events, and community interaction through an engaging, responsive interface.\n\nThis project was completed in June 2024",
    image: "/GameDesign.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/nikolausmarvinliayasa/GameFrontEnd_Project",
  },
  {
    id: 4,
    title: "Pilahin",
    description:
      "Pilahin is a mobile-based application designed using Design Thinking and User-Centered Design approaches to improve waste sorting habits in Indonesia. The app uses AI for waste type detection, gamification to boost user engagement, and location mapping for nearby waste processing facilities.\n\nThis was a self-initiated group project for the IOFEST UI/UX Competition at Universitas Tarumanagara.\n\nThis project was completed in May 2025",
    image: "/Pilahinnn.png",
    technologies: ["Figma"],
    liveUrl: "#",
    githubUrl: "https://drive.google.com/drive/folders/18I5WS1aoTP5CMRI-mDsPZ36TG2Wfnutc?usp=sharing",
    buttonLabel: "Source Link",
    buttonIcon: null,
  },
  {
    id: 5,
    title: "Project-Based Internship : Big Data Analytics at Kimia Farma by Rakamin Academy",
    description:
      "I completed a data analytics project using BigQuery and Looker Studio, where I prepared multiple datasets, wrote optimized SQL queries, and built analytical tables to calculate key business metrics. I also created an interactive dashboard with KPIs, trends, and branch insights. This project strengthened my skills in SQL, cloud data warehousing, ETL, and data visualization.",
    image: "visualisasi-rakamin-bi.png",
    technologies: ["Looker Studio", "Google BigQuery"],
    liveUrl: "#",
    githubUrl: "https://drive.google.com/drive/folders/1H4JgQVLXhEr021XzeXaP28MtvB6MxIaN?usp=sharing",
    buttonLabel: "Source Link",
    buttonIcon: null,
  },
]

export function PortfolioSection() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentProject(index)
  }

  return (
    <section id="portfolio" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-forest-green mb-4">Projects</h2>
          <div className="w-24 h-1 bg-sunset-orange mx-auto mb-6"></div>
          <p className="text-lg text-forest-green/80 max-w-2xl mx-auto">
            Explore my latest projects showcasing expertise in web development, AI integration, and user experience design.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Project Display */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div
              className="transition-all duration-500 ease-in-out transform"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              <div className="flex">
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-0 min-h-[500px] md:min-h-[600px]">
                      {/* Project Image */}
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-green/20 to-transparent"></div>
                      </div>

                      {/* Project Details */}
                      <div className="p-8 md:p-12 flex flex-col justify-center flex-1">
                        <h3 className="text-3xl font-bold text-forest-green mb-4">{project.title}</h3>
                        <p className="text-forest-green/80 mb-6 leading-relaxed flex-1 whitespace-pre-line text-justify">{project.description}</p>

                        {/* Technologies */}
                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-forest-green mb-3 uppercase tracking-wide">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-sunset-orange/10 text-sunset-orange text-sm font-medium rounded-full border border-sunset-orange/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                          
                          <Button
                            variant="outline"
                            className="border-forest-green text-forest-green hover:bg-forest-green hover:text-white px-6 py-2 rounded-full font-medium transition-all duration-300 bg-transparent"
                            onClick={() => window.open(project.githubUrl, "_blank")}
                          >
                            {project.buttonIcon !== null && <Github className="w-4 h-4 mr-2" />}
                            {project.buttonLabel || "Source Code"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl z-20 backdrop-blur-sm"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-forest-green" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl z-20 backdrop-blur-sm"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-forest-green" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-sunset-orange scale-125"
                    : "bg-forest-green/30 hover:bg-forest-green/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-6">
            <span className="text-forest-green/60 font-medium">
              {currentProject + 1} / {projects.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
