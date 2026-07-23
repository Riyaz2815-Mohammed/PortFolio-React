import FloatingElements from './components/common/FloatingElements';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Expertise from './components/sections/Expertise';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <>
      <FloatingElements />
      <Navbar />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Expertise />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
