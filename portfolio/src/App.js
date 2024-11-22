import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import all components
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Contact from './pages/Contact';
import CodingProfiles from './pages/CodingProfiles';

function App() {
  return (
    <Router>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coding-profiles" element={<CodingProfiles />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
