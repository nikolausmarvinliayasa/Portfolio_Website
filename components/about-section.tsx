import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Hello,
                <br />
                I'm Marvin!
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a fifth-semester student who is enthusiastic and
passionate about learning and participating in various activities
that can support my development. By joining various activities, I
can train both soft skills and hard skills to become even better. I
believe that with the confidence and maximum ability that I have,
I can contribute positively in any activity I participate in.

              </p>
            </div>

            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a href="https://www.linkedin.com/in/nikolaus-marvin-liayasa-ba956a294" target="_blank" rel="noopener noreferrer">
                www.linkedin.com/in/nikolaus-marvin-liayasa
              </a>
            </Button>
          </div>

          {/* Right side - Profile card */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Card className="p-8 bg-card border-0 shadow-lg relative overflow-hidden">
              {/* Background decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full transform translate-x-16 -translate-y-16"></div>

              <div className="relative z-10">
                <div className="w-32 h-32 bg-primary rounded-2xl overflow-hidden mb-6">
                  <img src="/FotoPort.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-4">
                  <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full inline-block text-sm font-medium">
                    21 May 2025
                  </div>

                  <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full inline-block text-sm font-medium ml-2">
                    Indonesian
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary text-primary-foreground rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">Contact</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{"South Tangerang City, Banten"}</span>
                    </div>
                    <div>{"nikolaus.liayasa@binus.ac.id"}</div>
                    <div>+62 896 2048 1422  </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
