import { perfil } from "../data/content";
import { MailIcon, PhoneIcon, GitHubIcon, LinkedInIcon } from "../icons/Icons";

// Cabecera principal: nombre, rol, pitch y datos de contacto.
export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <p className="role">{perfil.rol}</p>
        <h1>{perfil.nombre}</h1>
        <p className="pitch">{perfil.pitch}</p>
        <div className="chips">
          <a className="chip" href={`mailto:${perfil.email}`}>
            <MailIcon /> {perfil.email}
          </a>
          <a className="chip" href={`tel:${perfil.telefono.replace(/\s/g, "")}`}>
            <PhoneIcon /> {perfil.telefono}
          </a>
          <a className="chip" href={perfil.github} target="_blank" rel="noopener">
            <GitHubIcon /> github.com/javierjimc
          </a>
          <a className="chip" href={perfil.linkedin} target="_blank" rel="noopener">
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
