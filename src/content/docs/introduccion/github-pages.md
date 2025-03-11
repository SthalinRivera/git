---
title: Guía para Desplegar en GitHub Pages
description: Guía para Desplegar en GitHub Pages
---

# 🚀 Guía para Desplegar en GitHub Pages

## 1️⃣ Requisitos Previos
🔹 Tener un repositorio en GitHub.  
🔹 Un proyecto con archivos `index.html`, `style.css`, y `script.js` (si aplica).  

---

## 2️⃣ Habilitar GitHub Pages
1️⃣ Ve a tu repositorio en GitHub.
2️⃣ Dirígete a **Settings** → **Pages**.
3️⃣ En la sección **Branch**, selecciona `main` o `gh-pages` y haz clic en **Save**.
4️⃣ GitHub generará una URL pública con tu proyecto en pocos minutos.

---

## 3️⃣ Subir el Proyecto a GitHub
Si aún no has subido el proyecto, sigue estos pasos:
```sh
git init
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin https://github.com/tuusuario/tu-repositorio.git
git push -u origin main
```
Si GitHub Pages no está configurado con `main`, crea la rama `gh-pages`:
```sh
git checkout --orphan gh-pages
git commit --allow-empty -m "Inicializar GitHub Pages"
git push origin gh-pages
```

---

## 4️⃣ Desplegar Automáticamente con GitHub Actions (Opcional)
1️⃣ Crea una carpeta `.github/workflows/` en tu proyecto.
2️⃣ Dentro, crea un archivo `deploy.yml` con:
```yaml
name: Deploy en GitHub Pages
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout código
        uses: actions/checkout@v3
      - name: Configurar GitHub Pages
        uses: actions/configure-pages@v3
      - name: Subir a GitHub Pages
        run: |
          git checkout --orphan gh-pages
          git add .
          git commit -m "Deploy"
          git push origin gh-pages --force
```
3️⃣ Cada vez que hagas un `git push`, GitHub Pages actualizará el sitio.

---

## 5️⃣ Ver tu Sitio Web
La URL de tu sitio será:
```sh
https://tuusuario.github.io/tu-repositorio/
```

---

## 🚀 ¡Listo! Tu Proyecto Está en Línea
Si necesitas más detalles, revisa la [documentación oficial](https://docs.github.com/es/pages).
