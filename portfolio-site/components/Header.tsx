import { Button } from '@/components/ui/button'
import { Briefcase, Award, BookOpen, PanelsTopLeft } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Name</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Button variant="link" className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> Work Experience</Button></li>
              <li><Button variant="link" className="flex items-center gap-2"><PanelsTopLeft className="h-4 w-4" /> Independent Projects</Button></li>
              <li><Button variant="link" className="flex items-center gap-2"><Award className="h-4 w-4" /> Education & Certifications</Button></li>
              <li><Button variant="link" className="flex items-center gap-2"><BookOpen className="h-4 w-4" /> Books</Button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

