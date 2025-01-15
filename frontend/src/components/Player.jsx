import { useSelector, useDispatch } from 'react-redux'
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import { setVolume, play, pause } from '../store/slices/audioSlice'

export default function Player() {
  const dispatch = useDispatch()
  const { currentTrack, isPlaying, volume } = useSelector((state) => state.audio)

  return (
    (<div
      className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800">
      {/* Progress bar */}
      <div className="h-1 bg-zinc-800">
        <div className="h-full bg-white w-0" />
      </div>
      <div className="h-16 md:h-20 px-4 flex items-center justify-between gap-4">
        {/* Track info */}
        <div className="min-w-0 w-1/3">
          {currentTrack && (
            <div className="flex items-center gap-3">
              <img
                src={currentTrack.artwork}
                alt={currentTrack.title}
                className="w-10 h-10 md:w-14 md:h-14 rounded" />
              <div className="min-w-0">
                <h4 className="text-sm font-medium truncate">{currentTrack.title}</h4>
                <p className="text-xs text-zinc-400 truncate">{currentTrack.artist}</p>
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 flex-1 justify-center">
          <button className="text-zinc-400 hover:text-white">
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={() => dispatch(isPlaying ? pause() : play())}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button className="text-zinc-400 hover:text-white">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        {/* Volume */}
        <div className="hidden md:flex items-center gap-2 w-1/3 justify-end">
          <Volume2 className="w-5 h-5 text-zinc-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => dispatch(setVolume(parseFloat(e.target.value)))}
            className="w-24 h-1 bg-zinc-800 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white" />
        </div>
      </div>
    </div>)
  );
}

