export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Advika. All rights reserved.</p>
          <p className="text-sm mt-2">Built with Next.js, Tailwind CSS, and ❤️</p>
        </div>
      </div>
    </footer>
  )
}
