import './App.scss';
import { Routes, Route } from "react-router-dom";
import MenuBar from './components/MenuBar';
import HeroSection from './components/HeroSection';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
        <MenuBar/>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </div>
  );
}

export default App;
