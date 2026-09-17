import { perfil } from "../data/content";

// Sección "Sobre mí": resumen profesional.
export default function About() {
  return (
    <section id="sobre">
      <div className="wrap">
        <p className="eyebrow">Sobre mí</p>
        <h2 className="section-title">Perfil profesional</h2>
        <p className="lead" style={{ marginTop: 16 }}>
          {perfil.resumen}
        </p>
      </div>
    </section>
  );
}
