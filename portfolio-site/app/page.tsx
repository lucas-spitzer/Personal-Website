import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, Award, BookOpen, PanelsTopLeft } from 'lucide-react'
import ReadingList from '@/components/ReadingList'

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
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Cranium AI - Product Development Intern</h3>
                  <p className="text-sm text-muted-foreground">Summer 2023</p>
                </li>
                <li>
                  <h3 className="font-semibold">Boost Insurance - Product Analyst Intern</h3>
                  <p className="text-sm text-muted-foreground">June 2022 - January 2023</p>
                </li>
                <li>
                  <h3 className="font-semibold">Chester Area Pool - Head Lifeguard</h3>
                  <p className="text-sm text-muted-foreground">Summers 2019 - 2024</p>
                </li>
              </ul>
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
              <ul className="space-y-4">
                <li>
                  <a href="pdf-docs/Spitzer - IBM Data Analyst Professional Certificate.pdf"><h3 className="font-semibold">IBM Data Analyst Certificate</h3></a>
                  <p className="text-sm text-muted-foreground">Professional Level</p>
                </li>
                <li>
                  <h3 className="font-semibold">County College of Morris</h3>
                  <p className="text-sm text-muted-foreground">Associate's Degree in Computer Science</p>
                </li>
                <li>
                  <h3 className="font-semibold">Ramapo College of New Jersey</h3>
                  <p className="text-sm text-muted-foreground">Bachelor's Degree in Data Science <i>(Currently Enrolled)</i></p>
                </li>
              </ul>
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
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Swift App</h3>
                  <p className="text-sm text-muted-foreground">Save, Search, & Share Your Favorite Content Simply <i>(Under Construction)</i></p>
                </li>
                <li>
                  <h3 className="font-semibold">Data Science Lexicon</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive Library of Data Science Techniques <i>(Under Construction)</i></p>
                </li>
                <li>
                  <a href="https://www.8thwall.com/lspitzer/data3d"><h3 className="font-semibold">Data3D</h3></a>
                  <p className="text-sm text-muted-foreground">Visual Data in the Real World</p>
                </li>
                <li>
                  <a href="https://youtu.be/XSMKbn6f54g"><h3 className="font-semibold">Habit Transparency Self-Study</h3></a>
                  <p className="text-sm text-muted-foreground">Habit Tracking & Analysis</p>
                </li>
                <li>
                  <a href="https://github.com/lucas-spitzer/Password-Manager-Desktop-Application"><h3 className="font-semibold">Bit-Safe</h3></a>
                  <p className="text-sm text-muted-foreground">Password Encryption Software</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          <ReadingList />
        </div>
      </main>
      <Footer />
    </div>
  )
}