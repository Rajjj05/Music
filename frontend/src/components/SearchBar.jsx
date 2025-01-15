import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    (<div className="relative max-w-2xl mx-auto">
      <Search
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
      <input
        type="search"
        placeholder="Search songs, albums, artists, podcasts"
        className="w-full bg-zinc-800 rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" />
    </div>)
  );
}

