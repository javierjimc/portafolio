# Portafolio Digital — Javier Mariscal Cáceres

Portafolio profesional desarrollado con **React + TypeScript + Vite**.
Proyecto de la evaluación **"Desarrollo de un Portafolio Digital"** (Alkemy).

Incluye perfil, habilidades, 3 proyectos y una sección de **caso de estudio**
(API RESTful con Node.js, Express y Neon).

## Requisitos
- Node.js v18 o superior.

## Instalación y ejecución

```bash
npm install     # instala las dependencias (solo la primera vez)
npm run dev      # levanta el servidor de desarrollo (Vite)
```

Luego abrí la URL que muestra la terminal (por defecto **http://localhost:5173**).

Otros scripts:
```bash
npm run build    # genera la versión de producción en /dist
npm run preview  # sirve la build de producción para probarla
```

## Estructura del proyecto

```
entrega-9/
├── index.html              # HTML base (monta la app React)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.tsx            # punto de entrada
    ├── App.tsx             # compone las secciones
    ├── index.css           # estilos y tema claro/oscuro
    ├── components/         # Nav, Hero, About, Skills, Projects, CaseStudy, Contact
    ├── data/content.ts     # contenido del portafolio (datos)
    ├── hooks/useTheme.ts   # hook de tema claro/oscuro
    └── icons/Icons.tsx     # íconos SVG
```

> `portfolio-static-backup.html` es una copia de la versión estática (un solo
> archivo HTML), por si la necesitás.

## Publicar en GitHub Pages (opcional)
1. `npm run build` genera la carpeta `dist/`.
2. Subí el repositorio a GitHub y publicá el contenido de `dist/` con GitHub Pages
   (o usá el paquete `gh-pages`).

## Contacto
- Email: javiermariscal2446@gmail.com
- GitHub: https://github.com/javierjimc
- LinkedIn: https://www.linkedin.com/in/javier-mariscal-359364302/
# portafolio
