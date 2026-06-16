import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Photographers from './pages/Photographers';
import PhotographerProfile from './pages/PhotographerProfile';
import GenreHub from './pages/GenreHub';
import Gallery from './pages/Gallery';
import Timeline from './pages/Timeline';
import Compare from './pages/Compare';
import StudyMode from './pages/StudyMode';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photographers" element={<Photographers />} />
          <Route path="/photographer/:id" element={<PhotographerProfile />} />
          <Route path="/genre/:slug" element={<GenreHub />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/study" element={<StudyMode />} />
          <Route path="/study/:id" element={<StudyMode />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
