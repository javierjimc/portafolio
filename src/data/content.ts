// Contenido del portafolio centralizado (datos → los componentes los recorren).

export const perfil = {
  nombre: "Javier Mariscal Cáceres",
  rol: "Ingeniero de Ejecución en Informática · Desarrollador Full-Stack Jr.",
  email: "javiermariscal2446@gmail.com",
  telefono: "+56 9 2004 5310",
  github: "https://github.com/javierjimc",
  linkedin: "https://www.linkedin.com/in/javier-mariscal-359364302/",
  ubicacion: "San Fernando, Chile",
  pitch:
    "Construyo aplicaciones web full-stack con React, TypeScript y Node.js, cuidando la arquitectura, el código limpio y la experiencia de quien lo usa. Titulado con distinción, con experiencia en el sector público y foco en el desarrollo backend.",
  resumen:
    "Ingeniero de Ejecución en Informática titulado con distinción en AIEP, con mención en Desarrollo de Sistemas y formación previa como Técnico en Programación y Análisis de Sistemas. Tengo experiencia en el ámbito público (Municipalidad de San Fernando) en mantenimiento, soporte y análisis de plataformas, además de conocimientos sólidos en desarrollo web frontend y backend. Soy metódico, con capacidad analítica para el levantamiento de requerimientos y la resolución de incidencias, y con habilidades de comunicación forjadas en atención al cliente y trabajo colaborativo.",
};

export interface SkillGroup {
  titulo: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { titulo: "Frontend & UI", items: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
  { titulo: "Backend", items: ["Node.js", "Express", "NestJS", "Sequelize", "Prisma", "API REST", "POO"] },
  { titulo: "Bases de datos", items: ["PostgreSQL", "Neon", "SQL", "Modelado relacional"] },
  { titulo: "Herramientas & otros", items: ["Git", "GitHub", "JWT", "Redes y soporte"] },
];

export interface Project {
  kind: string;
  titulo: string;
  descripcion: string;
  tags: string[];
  links: { label: string; href: string; github?: boolean }[];
}

export const proyectos: Project[] = [
  {
    kind: "Backend · API REST",
    titulo: "API RESTful con Node.js, Express & Neon",
    descripcion:
      "API modular para gestión de usuarios y tareas: relaciones 1:1, 1:N y N:M con Sequelize, CRUD completo, búsquedas filtradas, validaciones y manejo de errores. Desplegada sobre PostgreSQL en Neon.",
    tags: ["Node.js", "Express", "Sequelize", "PostgreSQL/Neon", "JWT-ready"],
    links: [
      { label: "Ver repositorio", href: "https://github.com/javierjimc/entrega-6", github: true },
      { label: "Caso de estudio ↓", href: "#caso" },
    ],
  },
  {
    kind: "Frontend + SQL · Grupal (ABP)",
    titulo: "AlkeWallet — Banco Digital",
    descripcion:
      "Interfaz web de billetera digital: login, depósitos, retiros, envío de dinero y listado de transacciones. Incluye el diseño del modelo de base de datos relacional en SQL. Proyecto grupal desarrollado con metodología ABP.",
    tags: ["HTML5", "CSS3", "JavaScript", "SQL"],
    links: [{ label: "Ver en GitHub", href: "https://github.com/javierjimc", github: true }],
  },
  {
    kind: "Frontend · JavaScript",
    titulo: "Portal Escolar — CRUD de Estudiantes",
    descripcion:
      "Sistema de gestión escolar (CRUD) para registrar estudiantes, calcular promedios y evaluar su estado (aprobado/reprobado). Persistencia en LocalStorage y renderizado dinámico del DOM con JavaScript puro.",
    tags: ["JavaScript (ES6+)", "DOM", "LocalStorage"],
    links: [{ label: "Ver en GitHub", href: "https://github.com/javierjimc", github: true }],
  },
];

export interface CaseItem {
  label: string;
  full?: boolean;
  text?: string;
  list?: string[];
}

export const casoItems: CaseItem[] = [
  { label: "Descripción", full: true, text: "Diseño y construcción de una API RESTful para gestionar usuarios y tareas, como parte del proyecto integrador de backend. Servidor Express con arquitectura modular (rutas → controladores → servicios → modelos) y persistencia real en PostgreSQL sobre Neon mediante el ORM Sequelize." },
  { label: "Desafío principal", text: "Pasar de un servidor con archivos planos a una arquitectura profesional con base de datos en la nube: modelar tres tipos de relación (1:1, 1:N, N:M), conectar de forma segura a Neon con SSL y mantener respuestas consistentes sin romper la API." },
  { label: "Solución propuesta", text: "Arquitectura por capas + Sequelize con asociaciones; validación en dos niveles (express-validator y validaciones de modelo); un middleware central que traduce los errores de Sequelize a códigos claros (400 / 404 / 409 / 500), y un formato de respuesta uniforme { status, message, data }." },
  { label: "Herramienta técnica utilizada", text: "Node.js + Express, Sequelize como ORM, PostgreSQL sobre Neon (serverless), express-validator, dotenv y nodemon. Control de versiones con Git y GitHub." },
  { label: "Habilidades técnicas aplicadas", text: "Diseño de APIs REST, modelado relacional con ORM, manejo de errores y validación, arquitectura modular, conexión segura a servicios en la nube y buenas prácticas con Git." },
  { label: "Principales aprendizajes", full: true, list: [
    "Modelar relaciones (1:1, 1:N, N:M) y resolverlas con un ORM en vez de SQL manual.",
    "Separar responsabilidades por capas hace el código testeable y escalable.",
    "Centralizar el manejo de errores mejora la consistencia de la API.",
    "Conectar de forma segura (SSL + variables de entorno) y no exponer credenciales.",
  ] },
];

export const metricas = [
  { n: "14", l: "endpoints probados en vivo contra Neon" },
  { n: "3", l: "tipos de relación (1:1, 1:N, N:M)" },
  { n: "4", l: "modelos con asociaciones" },
  { n: "100%", l: "respuestas con formato consistente" },
  { n: "0", l: "credenciales expuestas en el repo" },
];
