---
title: Guía para Deploy en Vercel
description: Guía para Deploy en Vercel
---


## 1️⃣ Crear una Cuenta en Vercel
🔹 Accede a [https://vercel.com/](https://vercel.com/) y regístrate con GitHub, GitLab o Bitbucket.

---

## 2️⃣ Instalar Vercel CLI
Para administrar proyectos desde la terminal, instala Vercel CLI:
```sh
npm install -g vercel
```
Verifica la instalación con:
```sh
vercel --version
```

---

## 3️⃣ Configurar un Proyecto con Vercel

### A) **Conectar un Repositorio desde la Web**
1️⃣ En Vercel, haz clic en **New Project**.  
2️⃣ Conéctalo con tu repositorio en **GitHub**, **GitLab** o **Bitbucket**.  
3️⃣ Configura los ajustes y haz clic en **Deploy**.  

### B) **Deploy Manual desde la Terminal**
1️⃣ Ve a tu carpeta del proyecto:
```sh
cd mi-proyecto
```
2️⃣ Ejecuta:
```sh
vercel
```
3️⃣ Responde las preguntas del asistente (puedes aceptar los valores predeterminados).  
4️⃣ Una vez completado, Vercel generará una URL de despliegue. 🎉

---

## 4️⃣ Configurar Variables de Entorno
Si tu proyecto necesita variables de entorno:
```sh
vercel env add NOMBRE_VAR valor
```
O crea un archivo `.env.local` y agrégalo a **Vercel**:
```sh
vercel env pull
```

---

## 5️⃣ Desplegar Cambios Nuevos
Cada vez que hagas cambios en el código, puedes hacer:
```sh
git add .
git commit -m "Actualización"
git push origin main
```
Si tu repositorio está conectado a Vercel, se desplegará automáticamente.  
Para desplegar manualmente:
```sh
vercel --prod
```

---

## 6️⃣ Comandos Útiles de Vercel CLI
| **Comando** | **Descripción** |
|------------|-----------------|
| `vercel` | Despliega el proyecto interactivo. |
| `vercel --prod` | Despliega en producción. |
| `vercel env add <clave> <valor>` | Agrega una variable de entorno. |
| `vercel env pull` | Descarga variables de entorno de Vercel. |
| `vercel logs <deployment>` | Muestra logs del despliegue. |
| `vercel ls` | Lista proyectos en la cuenta. |
| `vercel rm <nombre>` | Elimina un proyecto de Vercel. |

---

## 🚀 ¡Listo! Tu Proyecto Está en Producción
Puedes acceder a la URL que te proporciona Vercel.  
Para más detalles, revisa la [documentación oficial](https://vercel.com/docs).
