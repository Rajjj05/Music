import { createContext, useContext, useState } from 'react';

const AudioContext = createContext(undefined)

export function AudioProvider({
  children
}) {
  const [currentTrack, setCurrentTrack] = useState(null)

  return (
    (<AudioContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </AudioContext.Provider>)
  );
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}

