import { Card } from "@/components/ui/card"
import { Palette, Users, Lightbulb, Target } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Palette,
      title: "Visual Design",
      description: "Creating beautiful, cohesive interfaces with attention to typography, color, and layout",
    },
    {
      icon: Users,
      title: "User Research",
      description: "Understanding user needs through interviews, surveys, and usability testing",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant, user-friendly solutions",
    },
    {
      icon: Target,
      title: "Strategy",
      description: "Aligning design decisions with business goals and user objectives",
    },
  ]

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Western University Engineering student with a strong foundation in computing and software development. Proficient in Java, Python, PHP, JavaScript, HTML/CSS, SQL, Laravel, and Lua, with experience in full-stack web development and collaborative projects. Actively pursuing opportunities that combine technology and business, with an interest in Western’s Ivey Business School to develop expertise in management and entrepreneurship. Skilled in problem-solving, communication, and strategic thinking, aiming for a career at the intersection of engineering, software, and business innovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card key={skill.title} className="p-6 space-y-3 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
