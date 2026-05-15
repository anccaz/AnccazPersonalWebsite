import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CottageHero from './components/CottageHero';
import Experience from './components/Experience';
import Research from './components/Research';
import Projects from './components/Projects';
import Organizations from './components/Organizations';
import Languages from './components/Languages';
import DrinkDelivery from './components/DrinkDelivery';
import Footer from './components/Footer';

function App() {
  const [order, setOrder] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={darkMode ? 'dark-mode' : ''}
      style={{
        background: darkMode ? '#0a0520' : 'var(--cream)',
        color: darkMode ? '#f0e8ff' : 'var(--charcoal)',
        transition: 'background 0.8s ease, color 0.8s ease',
        minHeight: '100vh',
      }}
    >
      {/* Dark mode toggle */}
      <button
        onClick={() => setDarkMode(d => !d)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-lg text-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: darkMode ? '#2d1060' : '#fff0f5',
          border: '2px solid',
          borderColor: darkMode ? '#9b6dff' : '#ffb3ba',
        }}
        title="Toggle dark mode"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>

      <Navbar darkMode={darkMode} />
      <div className="pt-20">
        <Hero darkMode={darkMode} />
        <CottageHero onOrder={setOrder} darkMode={darkMode} />
        <div id="experience"><Experience darkMode={darkMode} /></div>
        <div id="research"><Research /></div>
        <div id="projects"><Projects /></div>
        <div id="organizations"><Organizations /></div>
        <div id="languages"><Languages /></div>
        <DrinkDelivery order={order} darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode} />
    </main>
  );
}

export default App;