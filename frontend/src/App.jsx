import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Eligibility from './pages/Eligibility';
import Skills from './pages/Skills';
import Technical from './pages/Technical';
import HR from './pages/HR';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/hr" element={<HR />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
