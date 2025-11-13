import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function MoreActivities() {
  return (
    <section className="py-20 bg-muted min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <Link href="/" className="text-sm text-secondary hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-secondary mb-12">My Activities</h1>

        <div className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-secondary">Semi-Finalist | I/O Festival Tarumanagara</h3>
            <p className="text-sm text-muted-foreground mb-2">UI/UX Category | 2025</p>
            <p className="text-sm text-justify">
              Designed an educational app with interactive user experience and intuitive interface, improving problem-solving and collaboration skills.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-secondary">Co-Author | IEEE Publication</h3>
            <p className="text-sm text-muted-foreground mb-2">Research Paper | 2025</p>
            <p className="text-sm text-justify">
              Researched Dark vs Light Mode UX effects on e-commerce engagement, published with IEEE template.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-secondary">Bronze Medalist | 7th OPSILON Math Olympiad</h3>
            <p className="text-sm text-muted-foreground mb-2">2022</p>
            <p className="text-sm text-justify">
              Achieved bronze medal for analytical and logical reasoning skills at a national-level competition.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
