"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mwprpgpj", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setStatus("success")
        form.reset() // kosongkan form setelah sukses
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Let’s connect! Whether it’s about a project, collaboration, or just to say hi — I’d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Mail className="text-secondary-foreground" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="opacity-90">nikolasmarvin542@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Phone className="text-secondary-foreground" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="opacity-90">+62 896 2048 1422</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <MapPin className="text-secondary-foreground" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="opacity-90">South Tangerang, South Tangerang City, Banten, Indonesia</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me On</h3>
              <div className="flex space-x-4">
                <Button
                    variant="outline"
                    size="icon"
                    className="border-primary-foreground text-primary-foreground hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                    onClick={() => window.open("https://www.linkedin.com/in/nikolaus-marvin-liayasa-ba956a294", "_blank")}
                  >
                    <Linkedin size={20} />
                  </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary-foreground text-primary-foreground hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  onClick={() => window.open("https://github.com/nikolausmarvinliayasa", "_blank")}
                >
                  <Github size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary-foreground text-primary-foreground hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  onClick={() => window.open("https://www.instagram.com/nikolausmarvinn/", "_blank")}
                >
                  <Instagram size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Card className="p-8 bg-card text-card-foreground">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot anti-spam */}
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" className="bg-input border-border" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-input border-border"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="Project inquiry" className="bg-input border-border" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-input border-border"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" disabled={status === "loading"} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>

                {/* Status Messages */}
                {status === "success" && (
                  <p className="text-green-500 text-sm mt-2">✅ Your message has been sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-sm mt-2">❌ Oops! Something went wrong. Please try again.</p>
                )}
              </form>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="opacity-75">© 2025 Nikolaus Marvin Liayasa. Made with ❤️ using Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  )
}
