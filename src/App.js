import './App.css';
import Header from './components/Header';
import About from './components/About';    
import Hero from './components/Hero'; 
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectDetails from './components/ProjectDetails';
import './i18n';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Poppins:wght@400;700;900&display=swap');
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #0F172A;
    color: #F8FAFC;
    scroll-behavior: smooth;
    transition: background 0.5s;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    color: #6366F1;
    margin-top: 0;
  }
  a {
    color: #6366F1;
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover, a:focus {
    color: #4F46E5;
    text-decoration: underline;
  }
  section {
    padding: 0;
    margin: 0;
  }
`;

function AboutPage() {
  return <>
    <About />
    <Skills />
    <Footer />
  </>;
}
function ServicesPage() {
  return <>
    <Services />
    <Footer />
  </>;
}

const ProjectsPage = () => (
  <>
    <Projects />
    <Footer />
  </>
);

const ContactPage = () => (
  <>
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Services />
            <Projects />
            <Contact />
            <Footer />
          </>} />
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
