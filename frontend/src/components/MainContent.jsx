import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Library from '../pages/Library'
import Explore from '../pages/Explore'

export default function MainContent() {
  return (
    (<main className="flex-1 overflow-y-auto bg-black pb-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </main>)
  );
}

