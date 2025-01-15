import { Home, Compass, Library, PlusCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    (<div className="h-full w-64 bg-black border-r border-zinc-800 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="font-bold text-sm">M</span>
          </div>
          <span className="font-semibold">Music</span>
        </div>
      </div>
      <nav className="flex-1 px-2">
        <Link
          to="/"
          className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-zinc-800">
          <Home className="w-6 h-6" />
          <span>Home</span>
        </Link>
        <Link
          to="/explore"
          className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-zinc-800">
          <Compass className="w-6 h-6" />
          <span>Explore</span>
        </Link>
        <Link
          to="/library"
          className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-zinc-800">
          <Library className="w-6 h-6" />
          <span>Library</span>
        </Link>
      </nav>
      <div className="p-4">
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-zinc-800 w-full">
          <PlusCircle className="w-5 h-5" />
          <span>New playlist</span>
        </button>
      </div>
    </div>)
  );
}

