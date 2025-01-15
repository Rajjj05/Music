import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentTrack: null,
  isPlaying: false,
  volume: 1,
  currentTime: 0,
  duration: 0,
}

export const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload
      state.isPlaying = true
    },
    play: (state) => {
      state.isPlaying = true
    },
    pause: (state) => {
      state.isPlaying = false
    },
    setVolume: (state, action) => {
      state.volume = action.payload
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload
    },
    setDuration: (state, action) => {
      state.duration = action.payload
    },
  },
})

export const { 
  setCurrentTrack, 
  play, 
  pause, 
  setVolume, 
  setCurrentTime, 
  setDuration 
} = audioSlice.actions

export default audioSlice.reducer

