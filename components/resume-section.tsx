import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Education & Experience */}
          <div className="space-y-12">
            {/* Education */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-foreground mb-8 relative">
                Education
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-secondary"></div>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-secondary font-bold">2023 - Now</div>
                    <h3 className="font-bold text-lg">Bina Nusantara University</h3>
                    <p className="text-muted-foreground">Bachelor's degree, Computer Science</p>
                    <p className="text-muted-foreground">Grade: 3.83</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-secondary font-bold">2020 - 2023</div>
                    <h3 className="font-bold text-lg">Global Indonesia School</h3>
                    <p className="text-muted-foreground">Science Major</p>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Experience */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8 bg-secondary text-secondary-foreground">
                <h2 className="text-4xl font-bold mb-8">Experience</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-bold">2025 - Now</div>
                      <h3 className="font-bold text-lg">Scholarship Mentor</h3>
                      <p className="text-sm opacity-90 text-justify">Mentored students in various Computer Science and related courses, including Data Mining, Compilation Techniques, and Geographical Information Systems, and etc. Guiding mentees individually and in group settings, offering review sessions and Q&A discussions to help prepare for midterms and finals.</p>
                      <p className="text-sm opacity-90 text-justify">Strengthened communication, teaching, and leadership skills while deepening my own understanding of technical subjects through teaching others. Discovered that mentoring is not only about academic guidance but also about fostering confidence, critical thinking, and collaborative growth among mentees.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-bold">2024 - 2025</div>
                      <h3 className="font-bold text-lg">Bina Nusantara University Freshmen Partner</h3>
                      <p className="text-sm opacity-90 text-justify">
                        Mentored new students (Freshmen) at Bina Nusantara
University for one year. Responsible for assisting with
academic life, adapting to campus, and guiding Freshmen
throughout the ESEE 1 and ESEE 2 program at Bina Nusantara University
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-white text-white">
                    #Creativity
                  </Badge>
                  <Badge variant="outline" className="border-white text-white">
                    #Communication
                  </Badge>
                  <Badge variant="outline" className="border-white text-white">
                    #Detail-oriented
                  </Badge>
                  <Badge variant="outline" className="border-white text-white">
                    #Adaptability
                  </Badge>
                  <div className="mt-10 text-center">
                    <Link href="/more/experiences">
                      <button className="px-6 py-3 rounded-full bg-white text-secondary font-semibold hover:bg-secondary hover:text-white transition-all shadow-md">
                        View More Experiences →
                      </button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          {/* Right side - Skills & Languages */}
          <div className="space-y-12">
            {/* Technical Skills */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-4xl font-bold text-foreground mb-8 relative">
                Technical Skills
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-secondary"></div>
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Programming &amp; Development</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center text-secondary-foreground font-bold text-sm">
                        Py
                      </div>
                      <span>Python</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center text-secondary-foreground font-bold text-sm">
                        {"Sq"}
                      </div>
                      <span>SQL</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center text-secondary-foreground font-bold text-sm">
                        {"JS"}
                      </div>
                      <span>JavaScript</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center text-secondary-foreground font-bold text-sm">
                        {"PHP"}
                      </div>
                      <span>PHP</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center text-secondary-foreground font-bold text-sm">
                        {"H,C"}
                      </div>
                      <span>HTML, CSS </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Data &amp; Database Skills</h3>
                  <div className="space-y-2 text-sm">
                    <div>Knowledge of:</div>
                    <div className="grid grid-cols-2 gap-2">
                      <span>SQL (MySQL, PostgreSQL)</span>
                      <span>Big Data (Hadoop, Spark)</span>
                      <span>MongoDB / NoSQL</span>
                      
                      <span>Data Visualization (Power BI, Matplotlib, Seaborn)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary text-primary-foreground">Artificial Intelligence</Badge>
                  <Badge className="bg-primary text-primary-foreground">Visual design</Badge>
                  <Badge className="bg-primary text-primary-foreground">UI/UX design</Badge>
                  <Badge className="bg-primary text-primary-foreground">User Research</Badge>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-4xl font-bold text-foreground mb-8 relative">
                Language
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-secondary"></div>
              </h2>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-bold text-lg">Indonesian</h3>
                  <p className="text-muted-foreground">Native</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">English</h3>
                  <p className="text-muted-foreground">Intermediate</p>
                </div>
                <div className="text-center">
                  
                  
                </div>
              </div>
            </div>
            {/* Activities & Hobbies */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <h2 className="text-4xl font-bold text-foreground mb-8 relative">
                Activities
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-secondary"></div>
              </h2>

              <div className="space-y-4">
                {[
                  {
                    year: "2025",
                    title: "Semi-Finalist | Top 15 in I/O Festival Tarumanagara University – UI/UX Category",
                    desc: [
                      "Developed an application design focused on education and elections using an interactive and user-friendly UI/UX approach.",
                      "Improved collaboration, problem solving, and understanding of user-centric design principles"
                    ]
                  },
                  {
                    year: "2025",
                    title: "Co-Author | Research Paper – IEEE Template Publication",
                    desc: [
                      "Conducted a research on the impact of Dark Mode and Light Mode in e-commerce platforms (Tokopedia & Shopee), analyzing user experience and conversion rates through an online survey with 50 respondents. Findings highlighted how display modes influence engagement, satisfaction, and purchasing behavior.",
                    ]
                  },
                  {
                    year: "2022",
                    title: "Bronze Medalist | 7th OPSILON Mathematics Olympiad",
                    desc: [
                      "Awarded Bronze Medal for outstanding problem-solving and analytical skills in a national-level mathematics competition."
                    ]
                  }
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-secondary font-bold">{activity.year}</div>
                      <h3 className="font-bold">{activity.title}</h3>
                      {activity.desc.map((d, i) => (
                        <p key={i} className="text-muted-foreground text-sm text-justify">
                          {d}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link href="/more/activities">
                  <button className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-primary hover:text-white transition-all shadow-md">
                    View More Activities →
                  </button>
                </Link>
              </div>              
                {/* Activities Button */}
              <div className="mt-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl"><br /></span>
                    <span className="font-medium"><br /></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl"><br /></span>
                    <span className="font-medium"><br /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
