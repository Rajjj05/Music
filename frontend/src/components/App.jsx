import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import MainContent from './components/MainContent'
import { AudioProvider } from './context/AudioContext'
import Navbar from './components/Navbar'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    (<BrowserRouter>
      <AudioProvider>
        <div className="h-screen bg-black text-white flex flex-col">
          <div className="flex-1 flex overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Navbar />
              <MainContent />
            </div>
          </div>
          <Player />
        </div>
      </AudioProvider>
    </BrowserRouter>)
  );
}

