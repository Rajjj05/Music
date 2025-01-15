import { Play, Music } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setCurrentTrack } from '../store/slices/audioSlice'

export default function TrackCard({ id, title, artist, artwork, type, subscribers, tracks }) {
  const dispatch = useDispatch()

  const handlePlay = () => {
    dispatch(setCurrentTrack({ id, title, artist, artwork, audioUrl: '' }))
  }

  return (
    (<div className="group relative">
      <div className="aspect-square overflow-hidden rounded-lg bg-zinc-800">
        {artwork ? (
          <img
            src={artwork}
            alt={title}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-75" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400">
            <Music size={48} />
          </div>
        )}
        <button
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handlePlay}>
          <Play className="w-12 h-12 text-white" />
        </button>
      </div>
      <div className="mt-3">
        <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
        <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
          {type === 'playlist' ? (
            `Playlist • ${artist} • ${tracks} tracks`
          ) : type === 'album' ? (
            `Album • ${artist}`
          ) : (
            `Song • ${artist}`
          )}
        </p>
        {subscribers && (
          <p className="text-xs text-zinc-400 mt-1">{subscribers} subscribers</p>
        )}
      </div>
    </div>)
  );
}

