# /blog/ - Blog Personal

Un blog personal con estilo visual inspirado en 4chan, donde comparto pensamientos sobre tecnología, educación, aprendizaje y más.

## 🎨 Características

- **Diseño minimalista** inspirado en 4chan (colores beige/crema, tipografía simple)
- **Posts en Markdown** con frontmatter para metadata
- **Arquitectura limpia** con separación de componentes, utilidades y tipos
- **Next.js 15** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Páginas y rutas de Next.js
│   ├── posts/             # Páginas de posts
│   │   ├── [slug]/       # Página individual de post
│   │   └── page.tsx      # Lista de todos los posts
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── Header.tsx         # Header del blog
│   ├── PostCard.tsx       # Tarjeta de post en lista
│   ├── PostDetail.tsx     # Vista detallada de post
│   └── PostList.tsx       # Lista de posts
├── data/
│   └── posts/             # Posts en formato Markdown (.md)
├── lib/
│   └── posts.ts           # Utilidades para leer y procesar posts
└── types/
    └── post.ts            # Tipos TypeScript para posts
```

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

```bash
npm run build
npm start
```

## ✍️ Escribir Posts

Los posts se escriben en Markdown y se guardan en `src/data/posts/`. Cada archivo debe tener:

1. **Frontmatter** (metadata en YAML):
   ```yaml
   ---
   title: "Título del Post"
   date: "2024-01-15"
   excerpt: "Breve descripción del post"
   category: "Tecnología"
   tags: ["tag1", "tag2"]
   ---
   ```

2. **Contenido** en Markdown:
   ```markdown
   # Título
   
   Contenido del post...
   ```

### Ejemplo de Post

Crea un archivo `src/data/posts/mi-nuevo-post.md`:

```markdown
---
title: "Mi Nuevo Post"
date: "2024-01-30"
excerpt: "Una breve descripción"
category: "Personal"
tags: ["reflexión", "tecnología"]
---

# Mi Nuevo Post

Contenido del post aquí...
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `src/app/globals.css`:

- Fondo: `#FFFFEE` (beige claro)
- Posts: `#FFFFFF` (blanco)
- Hover: `#F0E0D6` (beige)
- Bordes: `#000000` (negro)

### Componentes

Los componentes están en `src/components/` y pueden ser modificados según tus necesidades.

## 📝 Notas

- Los posts se ordenan por fecha (más recientes primero)
- El slug del post se genera automáticamente desde el nombre del archivo
- Los posts soportan Markdown completo (títulos, listas, código, etc.)

## 🛠️ Tecnologías

- **Next.js 15** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos
- **gray-matter** - Parseo de frontmatter
- **remark** - Procesamiento de Markdown

---

¡Disfruta escribiendo y compartiendo tus pensamientos! 🚀
