import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12">
            As a firm believer in the power of hands-on experience, I'm on the lookout for internships that offer the chance to learn, contribute, and thrive in real-world scenarios.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Email</CardTitle>
                <CardDescription>Drop me a line</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:your.email@example.com">advikab711@gmail.com</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Linkedin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>LinkedIn</CardTitle>
                <CardDescription>Let's connect professionally</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.linkedin.com/in/advika-bhardwaj-a32085252/" target="_blank" rel="noopener noreferrer">
                    Connect with me
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Github className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>GitHub</CardTitle>
                <CardDescription>Check out my code</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://github.com/Adviika" target="_blank" rel="noopener noreferrer">
                    Follow me
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">Currently based in Noida, UP</p>
            <p className="text-sm text-muted-foreground">
              Available for internships, freelance projects, and full-time opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
