import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Developer",
      company: "Western Developers Society (WDS)",
      period: "2025 - Present",
      description:
        "Develops websites using React and PostgreSQL for clients. Works in a team setting to complete tasks on time.",
      skills: ["React", "PostgreSQL", "Team Collaboration"],
      featured: true,
    },
    {
      title: "Sponsorship Director",
      company: "Western Engineering Autopilot Club (WEAP)",
      period: "2025 - Present",
      description:
        "Outreaches with various automotive companies to gain sponsorships for club events. Communicates and collaborates with other executives to ensure the club runs smoothly.",
      skills: ["Communication", "Business Development", "Leadership"],
      featured: true,
    },
    {
      title: "VP of Technology",
      company: "Canadian Young Investors Society",
      period: "2025 - Present",
      description:
        "Maintains and enhances CYIS digital infrastructure, including the website, forms, and databases. Manages technical onboarding for members on platforms such as Slack, G Suite, and related systems.",
      skills: ["Web Development", "Database Management", "Technical Leadership"],
      featured: true,
    },
    {
      title: "Full Stack PHP Development (Co-op)",
      company: "Digitera",
      period: "2025",
      description:
        "Collaborated on building and maintaining web applications using PHP, MySQL, HTML, CSS, and JavaScript. Identified and resolved bugs across the full stack while incorporating feedback from peers and supervisors.",
      skills: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      featured: false,
    },
    {
      title: "Co-President",
      company: "Richmond Hill High School Game Development Club",
      period: "2024 - 2025",
      description: "Maintained game development club at school. Lead other executives while helping maintain the club.",
      skills: ["Leadership", "Game Development", "Club Management"],
      featured: false,
    },
    {
      title: "Research Coordinator / Web Developer",
      company: "World in Focus",
      period: "2023 - 2025",
      description:
        "Researched topics in ophthalmology, planned and wrote articles/newsletters, and interviewed experts in the field.",
      skills: ["Research", "Web Development", "Content Creation"],
      featured: false,
    },
  ]

  const education = [
    {
      degree: "Bachelors - Engineering",
      institution: "Western University",
      period: "2025 - 2030",
      description: "Pursuing advanced studies in engineering with focus on technology and business innovation.",
      highlights: ["Computing", "Software Development", "Business Strategy"],
      featured: true,
    },
    {
      degree: "OSSD",
      institution: "Richmond Hill High School",
      period: "2021 - 2025",
      description: "Strong foundation in computing and leadership through various technical clubs and activities.",
      highlights: ["Computer Science", "Game Development", "Leadership"],
      featured: false,
    },
  ]

  const additionalSkills = [
    "Java, Python, PHP, JavaScript, HTML/CSS, SQL",
    "React, PostgreSQL, MySQL, Laravel, Lua",
    "Full-stack web development",
    "Languages: English, French",
  ]

  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">Experience & Education</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              A blend of technical development, leadership, and creative problem-solving
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Experience Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Experience</h3>
              </div>

              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className={`p-6 space-y-4 ${exp.featured ? "border-l-4 border-l-accent" : "border-l-4 border-l-muted"}`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="flex-shrink-0">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Education Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Education</h3>
              </div>

              {education.map((edu, index) => (
                <Card
                  key={index}
                  className={`p-6 space-y-4 ${edu.featured ? "border-l-4 border-l-primary" : "border-l-4 border-l-muted"}`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <Badge variant="secondary" className="flex-shrink-0">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <Badge key={i} variant="outline">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}

              <Card className="p-6 space-y-4 bg-muted/50">
                <h4 className="font-semibold">Technical Skills</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {additionalSkills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
