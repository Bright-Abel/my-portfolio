import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import SideBar from './components/SideBar';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <Hero />
      <Skills />
      <About />
      <Project />
      <Footer />
    </>
  );
};
export default App;
