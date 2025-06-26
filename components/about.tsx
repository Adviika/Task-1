import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Terminal } from "lucide-react"

export function About() {
  const skills = {
    languages: ["C", "C++", "Python", "JavaScript", "HTML", "SQL"],
    databases: ["MySQL", "MongoDB"],
    tools: ["MongoDB Compass", "PyCharm", "Spyder", "Linux (Ubuntu)", "VS Code", "Git/GitHub"],
  }

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                Hey! I'm 3rd year student pursuing a BTech in Computer Science. My coding journey started with C, and
                I've since delved into web development, a bit of Machine Learning, and even ventured into Node.js and
                Express.js.
              </p>
              <p className="text-muted-foreground mb-4">
                I enjoy tackling complex challenges, whether it's optimizing algorithms, building full-stack
                applications, or exploring new technologies. My goal is to leverage technology to solve real-world
                problems and make a positive impact.
              </p>
              <p className="text-muted-foreground">
                Passionate about exploring the limitless possibilities of technology, I'm eager to expand my skills and
                insights in these dynamic fields.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="h-5 w-5 text-primary mr-2" />
                    <h4 className="font-semibold">Languages</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Database className="h-5 w-5 text-primary mr-2" />
                    <h4 className="font-semibold">Databases</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Terminal className="h-5 w-5 text-primary mr-2" />
                    <h4 className="font-semibold">Developer Tools</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
