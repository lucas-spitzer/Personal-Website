'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BookOpen } from 'lucide-react'

const nonFictionBooks = [
  "Atomic Habits by James Clear",
  "Deep Work by Cal Newport",
  "Flow by Mihaly Csikszentmihalyi",
  "Start With Why by Simon Sinek",
  "The Infinite Game by Simon Sinek",
  "Influence by Robert Cialdini",
  "Everything is Predictable by Tom Chivers",
  "Can't Hurt Me by David Goggins",
  "Never Finished by David Goggins",
  "Ikigai by Héctor García & Francesc Miralles",
  "Row the Boat by Jon Gordon & PJ Fleck",
  "Forward by Andrew Yang",
  "12 Rules for Life by Jordan Peterson",
  "Legacy by James Kerr",
  "The Metaverse by Matthew Ball",
  "Meditations by Marcus Aurelius",
  "The Art of War by Sun Tzu",
  "Mere Christianity for C.S. Lewis",
  "Unlimited Memory by Kevin Horsley",
]

const fictionBooks = [
  "1984 by George Orwell",
  "Animal Farm by George Orwell",
  "The Hobbit by J.R.R. Tolkien",
  "Angels & Demons by Dan Brown",
  "The DaVinci Code by Dan Brown",
  "Dune by Frank Herbert",
  "Dune Messiah by Frank Herbert",
  "Children of Dune by Frank Herbert",
  "God Emperor of Dune by Frank Herbert",
  "Heretics of Dune by Frank Herbert",
  "Chapterhouse: Dune by Frank Herbert",
  "Hyperion by Dan Simmons",
  "The Fall of Hyperion by Dan Simmons",
  "Endymion by Dan Simmons",
  "The Rise of Endymion by Dan Simmons",
  "Ready Player One by Ernest Cline",
  "Ready Player Two by Ernest Cline",
  "Snow Crash by Neal Stephenson",
  "Annihilation by Jeff Vandermeer",
  "Neuromancer by William Gibson",

]

export default function ReadingList() {
  const [category, setCategory] = useState<'non-fiction' | 'fiction'>('non-fiction')

  const books = category === 'non-fiction' ? nonFictionBooks : fictionBooks

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          Reading List
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select
          value={category}
          onValueChange={(value) => setCategory(value as 'non-fiction' | 'fiction')}
        >
          <SelectTrigger className="w-[180px] mb-4">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="non-fiction">Non-fiction</SelectItem>
            <SelectItem value="fiction">Fiction</SelectItem>
          </SelectContent>
        </Select>
        <ul className="list-disc pl-5 space-y-2">
          {books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}