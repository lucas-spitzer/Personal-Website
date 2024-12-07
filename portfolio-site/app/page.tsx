import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, Award, BookOpen, PanelsTopLeft } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-6 w-6" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your professional work history and accomplishments go here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PanelsTopLeft className="h-6 w-6" />
                Independent Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Showcase your notable independent projects here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6" />
                Education & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>List your education, certifications, and achievements here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Book Collection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Share your favorite books or reading list here.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}