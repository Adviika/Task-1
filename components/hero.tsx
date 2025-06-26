"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Advika Bhardwaj</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Computer Science Undergraduate & Software Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code. I build web applications, solve complex
            problems, and continuously learn new technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="text-lg px-8 py-3">
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>

          

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
