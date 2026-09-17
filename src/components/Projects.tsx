import { proyectos } from "../data/content";
import { GitHubIcon } from "../icons/Icons";

// Sección de proyectos: tarjetas generadas a partir de los datos.
export default function Projects() {
  return (
    <section id="proyectos">
      <div className="wrap">
        <p className="eyebrow">Trabajo</p>
        <h2 className="section-title">Proyectos destacados</h2>
        <p className="lead" style={{ marginTop: 14 }}>
          Tres proyectos desarrollados durante mi formación, de frontend a backend con base de datos.
        </p>
        <div className="proj-grid">
          {proyectos.map((p) => (
            <article className="proj" key={p.titulo}>
              <span className="kind">{p.kind}</span>
              <h3>{p.titulo}</h3>
              <p>{p.descripcion}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="links">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("#") ? undefined : "_blank"}
                    rel={l.href.startsWith("#") ? undefined : "noopener"}
                  >
                    {l.github && <GitHubIcon />}
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
