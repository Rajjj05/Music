import { Compass, Headphones, Music2, PartyPopper, Radio, Smile } from 'lucide-react'
import MoodCard from '../components/MoodCard'
import TrackCard from '../components/TrackCard'

export default function Home() {
  return (
    (<div className="px-6 py-8 space-y-8">
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <MoodCard title="Podcasts" icon={<Radio className="w-6 h-6" />} />
        <MoodCard title="Relax" icon={<Headphones className="w-6 h-6" />} />
        <MoodCard title="Romance" icon={<Music2 className="w-6 h-6" />} />
        <MoodCard title="Feel good" icon={<Smile className="w-6 h-6" />} />
        <MoodCard title="Party" icon={<PartyPopper className="w-6 h-6" />} />
        <MoodCard title="Energise" icon={<Compass className="w-6 h-6" />} />
      </div>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">New albums and singles</h2>
          <button className="text-sm font-medium hover:underline">More</button>
        </div>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <TrackCard
            id="1"
            title="Flight Time"
            artist="Karma & Sez on the Beat"
            artwork="/placeholder.svg?height=300&width=300"
            type="song" />
          <TrackCard
            id="2"
            title="Baawe"
            artist="RAFTAAR"
            artwork="/placeholder.svg?height=300&width=300"
            type="single" />
          <TrackCard
            id="3"
            title="Dum, Dumb, and Dumber"
            artist="Lil Baby, Young Thug & Future"
            artwork="/placeholder.svg?height=300&width=300"
            type="single" />
          <TrackCard
            id="4"
            title="Tu Na Aaye"
            artist="Rahul Sathu, Shivai Vyas & Bella"
            artwork="/placeholder.svg?height=300&width=300"
            type="single" />
          <TrackCard
            id="5"
            title="Alpha's Goodbye"
            artist="King"
            artwork="/placeholder.svg?height=300&width=300"
            type="single" />
          <TrackCard
            id="6"
            title="Tauba Tauba - New Year Party Mix"
            artist="Rl8 Music & Karan Aujla"
            artwork="/placeholder.svg?height=300&width=300"
            type="single" />
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Listen again</h2>
          <button className="text-sm font-medium hover:underline">More</button>
        </div>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <TrackCard
            id="7"
            title="Show of Hands"
            artist="Future, Metro Boomin & A$AP Rocky"
            artwork="/placeholder.svg?height=300&width=300"
            type="song" />
          <TrackCard
            id="8"
            title="Tour Shit!"
            artist="Seedhe Maut"
            artwork="/placeholder.svg?height=300&width=300"
            type="song" />
          <TrackCard
            id="9"
            title="The Weeknd"
            artist="The Weeknd"
            artwork="/placeholder.svg?height=300&width=300"
            type="album"
            subscribers="36.8M subscribers" />
          <TrackCard
            id="10"
            title="Untitled"
            artist="KR$NA"
            artwork="/placeholder.svg?height=300&width=300"
            type="song" />
          <TrackCard
            id="11"
            title="KODAK"
            artist="King & Seedhe Maut"
            artwork="/placeholder.svg?height=300&width=300"
            type="song" />
          <TrackCard
            id="12"
            title="Fanne Khan"
            artist="Seedhe Maut & yungsta"
            artwork="/placeholder.svg?height=300&width=300"
            type="song" />
        </div>
      </section>
    </div>)
  );
}

