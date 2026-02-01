import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToolsWidget from './components/ToolsWidget';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Force scroll to top on mount to prevent browser restoring scroll position to middle of page
    window.scrollTo(0, 0);
    
    // In case there is a hash in URL, clear it to start at Home
    if (window.location.hash) {
        history.replaceState(null, "", " ");
    }
  }, []);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ToolsWidget />
    </div>
  );
};

export default App;