import { perfil } from "../data/content";

// Sección de contacto (pie de página).
export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="wrap contact-inner">
        <div>
          <p className="eyebrow">Hablemos</p>
          <h2>¿Construimos algo juntos?</h2>
          <p className="lead" style={{ marginTop: 10 }}>
            Disponible para oportunidades trainee / junior en desarrollo full-stack o backend.
            Modalidad remota.
          </p>
        </div>
        <div className="chips" style={{ marginTop: 0 }}>
          <a className="chip" href={`mailto:${perfil.email}`}>
            ✉️ Escribirme
          </a>
          <a className="chip" href={perfil.github} target="_blank" rel="noopener">
            GitHub
          </a>
          <a className="chip" href={perfil.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="wrap foot">
        © 2026 {perfil.nombre} · {perfil.ubicacion}
      </div>
    </section>
  );
}
