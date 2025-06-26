import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Lumos",
      description:
        "Lumos is an AI-driven web platform aimed at helping users forecast their monthly electricity bills and explore the financial feasibility of switching to solar energy.",
      tech: ["MongoDB", "React", "Node.js", "JavaScript", "Python", "Material UI"],
      github: "https://github.com/Adviika/lumos-by-poojita",
    },
    {
      title: "ProTech",
      description:
        "Developed a robust three-factor authentication system combining username/password, email verification, and ML-powered face recognition (95% accuracy) using OpenCV.",
      tech: ["MongoDB", "React", "Node.js", "JavaScript", "Python", "Bootstrap"],
      github: "https://github.com/Adviika/3FA-PROJECT",
    },
    {
      title: "Pathfinding Visualizer",
      description:
        "Implemented C++ pathfinding visualizer with SFML library, integrating Dijkstra's, DFS, and BFS algorithms, allowing users to simulate and compare algorithm performance across unique mazes.",
      tech: ["C++", "SFML", "Algorithms", "Data Structures"],
      github: "https://github.com/yourusername/pathfinding-visualizer",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.tech || []).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
