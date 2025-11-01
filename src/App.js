import './App.css';
import About from './component/About';
import Arrow from './component/Arrow';
import Contact from './component/Contact';
import Education from './component/Education';
import Experience from './component/Experience';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Project from './component/Project';
import Skills from './component/Skills';

function App() {
  return (
    <div className="App">
       <Header/>
       <Home/>
       <About/>
       <Skills/>
       <Experience/>
       <Project/>
       <Education/>
       <Contact/>
       <Footer/>
       <Arrow/>
    </div>
  );
}

export default App;
