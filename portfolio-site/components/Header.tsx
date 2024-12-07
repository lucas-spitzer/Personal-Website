import { Button } from '@/components/ui/button'
import { Briefcase, Award, BookOpen, PanelsTopLeft } from 'lucide-react'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
  return (
    <header className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">Lucas Spitzer's Digital Portfolio</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}



