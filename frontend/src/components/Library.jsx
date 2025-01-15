import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TrackCard from '../components/TrackCard'

export default function Library() {
  return (
    (<div className="px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Library</h1>
        <div className="flex items-center gap-4">
          <select className="bg-transparent border-none text-sm">
            <option>Recent activity</option>
            <option>Recently added</option>
            <option>Alphabetical</option>
          </select>
        </div>
      </div>
      <Tabs defaultValue="playlists">
        <TabsList className="bg-transparent border-b border-zinc-800 mb-6">
          <TabsTrigger value="playlists" className="data-[state=active]:text-white">Playlists</TabsTrigger>
          <TabsTrigger value="songs" className="data-[state=active]:text-white">Songs</TabsTrigger>
          <TabsTrigger value="albums" className="data-[state=active]:text-white">Albums</TabsTrigger>
          <TabsTrigger value="artists" className="data-[state=active]:text-white">Artists</TabsTrigger>
          <TabsTrigger value="podcasts" className="data-[state=active]:text-white">Podcasts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="playlists" className="mt-0">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <TrackCard
              id="13"
              title="Liked music"
              artist="Auto playlist"
              artwork="/placeholder.svg?height=300&width=300"
              type="playlist"
              tracks={100} />
            <TrackCard
              id="14"
              title="gg"
              artist="Raj Singh"
              artwork="/placeholder.svg?height=300&width=300"
              type="playlist"
              tracks={49} />
            <TrackCard
              id="15"
              title="Episodes for later"
              artist="Auto playlist"
              artwork="/placeholder.svg?height=300&width=300"
              type="playlist"
              tracks={0} />
          </div>
        </TabsContent>
      </Tabs>
    </div>)
  );
}

