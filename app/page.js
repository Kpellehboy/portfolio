import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Research />
        <Education />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}