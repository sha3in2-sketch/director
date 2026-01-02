import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Publications from './pages/Publications';
import People from './pages/People';
import Facilities from './pages/Facilities';
import CV from './pages/CV';
import OpenPositions from './pages/OpenPositions';
import Contact from './pages/Contact';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

import ThermalSVG from './components/react-bits/ThermalSVG';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ThermalSVG />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/people" element={<People />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/positions" element={<OpenPositions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
