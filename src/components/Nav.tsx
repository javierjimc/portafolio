interface NavProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

// Barra de navegación fija con enlaces a las secciones y botón de tema.
export default function Nav({ theme, onToggle }: NavProps) {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <span className="brand">
          Javier Mariscal<span className="dot">.</span>
        </span>
        <div className="nav-links">
          <a href="#sobre">Sobre mí</a>
          <a href="#skills">Skills</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#caso">Caso de estudio</a>
          <a href="#contacto">Contacto</a>
        </div>
        <button className="toggle" onClick={onToggle} aria-label="Cambiar tema">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
