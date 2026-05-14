import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Research from './components/Research';
import Projects from './components/Projects';
import Organizations from './components/Organizations';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Hero />
        <div id="experience"><Experience /></div>
        <div id="research"><Research /></div>
        <div id="projects"><Projects /></div>
        <div id="organizations"><Organizations /></div>
        <div id="languages"><Languages /></div>
      </div>
      <Footer />
    </main>
  );
}

export default App;