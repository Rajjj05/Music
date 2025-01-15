import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setIsPlaying, setCurrentTime, setDuration } from '../store/slices/audioSlice'

export function useAudioPlayer() {
  const dispatch = useDispatch()
  const { currentTrack, isPlaying, volume, currentTime } = useSelector((state) => state.audio)
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.audioUrl
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }, [currentTrack, isPlaying])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      dispatch(setIsPlaying(!isPlaying))
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      dispatch(setCurrentTime(audioRef.current.currentTime))
      dispatch(setDuration(audioRef.current.duration))
    }
  }

  const handleSeek = (time) => {
    dispatch(setCurrentTime(time))
    if (audioRef.current) {
      audioRef.current.currentTime = time
    }
  }

  return {
    audioRef,
    togglePlay,
    handleTimeUpdate,
    handleSeek,
  }
}

