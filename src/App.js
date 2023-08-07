import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Photography from './components/Photography';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <About />
      <Projects />
      <Photography />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
