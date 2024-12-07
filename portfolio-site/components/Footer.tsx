import { Github, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Github size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary">
            <Mail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Linkedin size={24} />
          </a>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

