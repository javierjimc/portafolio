import { skills } from "../data/content";

// Sección de habilidades: recorre los grupos y sus tecnologías.
export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--surface-2)" }}>
      <div className="wrap">
        <p className="eyebrow">Stack técnico</p>
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((grupo) => (
            <div className="skill-card" key={grupo.titulo}>
              <h3>{grupo.titulo}</h3>
              <div className="tags">
                {grupo.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
