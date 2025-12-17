import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "World in Focus Canada Website",
      description:
        "Designed and developed a comprehensive website for a global vision care advocacy organization. The site features an engaging mission-driven design, event showcases, team recruitment pages, and a multimedia gallery. Focused on creating an accessible, impactful user experience that effectively communicates their mission to sponsor eye care for those with limited access.",
      image: "/wif-screenshot.jpg",
      tags: ["Web Development", "UI/UX Design", "Non-Profit"],
      featured: true,
      link: "https://worldinfocus.ca/",
    },
    {
      title: "Canadian Young Investors Society",
      description:
        "Designed and built the website for CYIS, a student-run investment education platform. Created an informative, modern design with clear navigation for resources, events, and membership. Focused on making financial education accessible and engaging for young investors through intuitive information architecture and clean visual design.",
      image: "/cyis-screenshot.jpg",
      tags: ["Web Design", "Educational Platform", "Student Organization"],
      featured: true,
      link: "https://www.cyis.ca/",
    },
  ]

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              A showcase of my design work demonstrating problem-solving, creativity, and user-centered thinking
            </p>
          </div>

          {/* Featured Projects - Large Cards */}
          <div className="space-y-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-video md:aspect-auto overflow-hidden bg-muted">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Badge className="mb-2">Featured</Badge>
                          <h3 className="text-2xl font-serif font-semibold">{project.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button variant="outline" className="group/btn bg-transparent" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          {/* Other Projects - Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif font-semibold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn -ml-4">
                      Learn More
                      <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
