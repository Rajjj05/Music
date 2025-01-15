import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    (<Provider store={store}>
      <BrowserRouter>
        <div className="h-screen bg-black text-white flex flex-col">
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar - hidden on mobile, shown on larger screens */}
            <div
              className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-30 transition-transform duration-300 ease-in-out`}>
              <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            </div>
            
            {/* Main content area */}
            <div className="flex-1 flex flex-col w-full">
              <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
              <MainContent />
            </div>
          </div>
          <Player />
        </div>
      </BrowserRouter>
    </Provider>)
  );
}

