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

  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Hero />
        <CottageHero onOrder={setOrder} />
        <div id="experience"><Experience /></div>
        <div id="research"><Research /></div>
        <div id="projects"><Projects /></div>
        <div id="organizations"><Organizations /></div>
        <div id="languages"><Languages /></div>
        <DrinkDelivery order={order} />
      </div>
      <Footer />
    </main>
  );
}

export default App;