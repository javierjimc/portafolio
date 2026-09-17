import { casoItems, metricas } from "../data/content";

// Sección "Caso de estudio": los 8 puntos que pide la consigna + métricas.
export default function CaseStudy() {
  return (
    <section id="caso" style={{ background: "var(--surface-2)" }}>
      <div className="wrap">
        <p className="eyebrow">Proyecto representativo</p>
        <h2 className="section-title">Caso de estudio</h2>
        <div className="case">
          <div className="case-head">
            <span className="badge">Backend · Node.js · PostgreSQL (Neon)</span>
            <h3>API RESTful segura para gestión de usuarios y datos</h3>
          </div>
          <div className="case-body">
            {casoItems.map((item) => (
              <div className={`case-item ${item.full ? "full" : "half"}`} key={item.label}>
                <h4>{item.label}</h4>
                {item.text && <p>{item.text}</p>}
                {item.list && (
                  <ul>
                    {item.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="case-item full">
              <h4>Métricas de impacto</h4>
              <div className="metrics">
                {metricas.map((m) => (
                  <div className="metric" key={m.l}>
                    <div className="n">{m.n}</div>
                    <div className="l">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-item full">
              <h4>Por qué elegí este proyecto</h4>
              <p>
                Es el proyecto donde di el salto de “hacer que funcione” a “diseñar para escalar”:
                pensar la arquitectura, las relaciones de datos y la seguridad. Representa mi
                crecimiento hacia el desarrollo backend profesional y deja una base lista para sumar
                autenticación con JWT y subida de archivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
