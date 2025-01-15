import { BarChart2, Clock, Compass, Headphones, Music2, Radio, Smile } from 'lucide-react'

export default function Explore() {
  return (
    (<div className="px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">Explore</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-6 rounded-lg">
          <Compass className="w-8 h-8 mb-4" />
          <h2 className="text-xl font-bold">New releases</h2>
          <p className="text-sm opacity-80">The latest hits</p>
        </div>
        
        <div className="bg-gradient-to-br from-red-500 to-pink-600 p-6 rounded-lg">
          <BarChart2 className="w-8 h-8 mb-4" />
          <h2 className="text-xl font-bold">Charts</h2>
          <p className="text-sm opacity-80">Top songs global</p>
        </div>
        
        <div
          className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-lg">
          <Smile className="w-8 h-8 mb-4" />
          <h2 className="text-xl font-bold">Moods and genres</h2>
          <p className="text-sm opacity-80">Music for any mood</p>
        </div>
        
        <div
          className="bg-gradient-to-br from-yellow-500 to-orange-600 p-6 rounded-lg">
          <Radio className="w-8 h-8 mb-4" />
          <h2 className="text-xl font-bold">Podcasts</h2>
          <p className="text-sm opacity-80">News, comedy and more</p>
        </div>
      </div>
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-6">Browse all</h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button
            className="p-4 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg flex items-center gap-3 transition">
            <Music2 className="w-6 h-6" />
            <span className="font-medium">New releases</span>
          </button>
          <button
            className="p-4 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg flex items-center gap-3 transition">
            <BarChart2 className="w-6 h-6" />
            <span className="font-medium">Charts</span>
          </button>
          <button
            className="p-4 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg flex items-center gap-3 transition">
            <Headphones className="w-6 h-6" />
            <span className="font-medium">Made for you</span>
          </button>
          <button
            className="p-4 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg flex items-center gap-3 transition">
            <Clock className="w-6 h-6" />
            <span className="font-medium">Recently played</span>
          </button>
        </div>
      </section>
    </div>)
  );
}

