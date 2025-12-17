import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, FileText } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance">Let's Connect</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm actively seeking UI/UX design internship opportunities at innovative marketing agencies. Let's
                discuss how I can contribute to your team.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <Button size="lg" className="rounded-full group" asChild>
                <a href="mailto:taliesinyip@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
                <a href="https://www.canva.com/design/DAG3L6cfYTo/ODr5aW14XfN1XlAUY7ru4w/edit?utm_content=DAG3L6cfYTo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Based in London, Ontario • Available for remote or hybrid positions
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
