"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for internship opportunities
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-balance leading-tight">
              Taliesin Yip Hoi-Lee
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              Engineering student passionate about UI/UX design, combining technical expertise with creative
              problem-solving
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full group" onClick={scrollToProjects}>
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
