import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import { useTheme } from "./hooks/useTheme";

// Componente raíz: compone todas las secciones del portafolio.
export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Nav theme={theme} onToggle={toggle} />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <CaseStudy />
        <Contact />
      </main>
    </>
  );
}
