import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function MoreExperiences() {
  return (
    <section className="py-20 bg-muted min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <Link href="/" className="text-sm text-secondary hover:underline mb-6 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-5xl font-bold text-secondary mb-12">My Experiences</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Example cards */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-secondary">Freshmen Partner</h3>
            <p className="text-sm text-muted-foreground">Binus University | Jun 2025 - Present | Tangerang</p>
            <p className="mt-3 text-sm text-justify">
              Assisted freshmen during the First Year Program, providing weekly mentoring sessions, monitoring progress, and helping them adapt to university life.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">Mentoring</Badge>
              <Badge variant="secondary">Leadership</Badge>
              <Badge variant="secondary">Public Speaking</Badge>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-secondary">Freshmen Leader</h3>
            <p className="text-sm text-muted-foreground">Binus University | Jun 2025 - Sept 2025 | Tangerang</p>
            <p className="mt-3 text-sm text-justify">
              Led a group of freshmen in coordination with fellow leaders, ensuring the First Year Program ran smoothly and efficiently.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">Teamwork</Badge>
              <Badge variant="secondary">Communication</Badge>
              <Badge variant="secondary">Time Management</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}