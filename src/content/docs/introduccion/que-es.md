---
title:  Guía Básica de Git
description:  Guía Básica de Git
---

# 📌 Guía Básica de Git

## 1️⃣ Instalación de Git  
🔹 Descarga e instala Git según tu sistema operativo:  
- **Windows:** [Descargar Git](https://git-scm.com/download/win)  
- **Mac:** Usa Homebrew:  
  ```sh
  brew install git
  ```  
- **Linux:**  
  ```sh
  sudo apt install git  # Ubuntu/Debian
  sudo dnf install git  # Fedora
  sudo pacman -S git    # Arch
  ```  
Para verificar la instalación:  
```sh
git --version
```

---

## 2️⃣ Configuración Inicial  
Antes de empezar a usar Git, configura tu nombre y correo:  
```sh
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```
Para verificar la configuración:  
```sh
git config --list
```

---

## 3️⃣ Crear un Repositorio Git  
Para empezar un proyecto con Git:  
```sh
mkdir mi-proyecto && cd mi-proyecto  # Crear y entrar en la carpeta
git init  # Inicializa un repositorio Git
```
Para clonar un repositorio existente:  
```sh
git clone https://github.com/usuario/repositorio.git
```

---

## 4️⃣ Comandos Básicos  

| **Comando** | **Funcionalidad** |
|------------|------------------|
| `git init` | Inicializa un nuevo repositorio en la carpeta actual. |
| `git clone <URL>` | Clona un repositorio remoto a tu máquina local. |
| `git status` | Muestra el estado actual de los archivos en el repositorio. |
| `git add <archivo>` | Añade un archivo específico al área de preparación (staging). |
| `git add .` | Añade **todos** los archivos modificados al área de preparación. |
| `git commit -m "Mensaje"` | Guarda los cambios en el historial con un mensaje. |
| `git log` | Muestra el historial de commits del repositorio. |
| `git diff` | Muestra los cambios no añadidos al área de preparación. |
| `git diff --staged` | Muestra los cambios añadidos al área de preparación. |
| `git reset <archivo>` | Quita un archivo del área de preparación (pero no elimina los cambios). |
| `git reset --hard` | Revierte **todos** los cambios (sin posibilidad de recuperarlos). |
| `git branch` | Lista las ramas existentes en el repositorio. |
| `git branch <nombre>` | Crea una nueva rama. |
| `git checkout <rama>` | Cambia a una rama específica. |
| `git checkout -b <rama>` | Crea una nueva rama y cambia a ella. |
| `git merge <rama>` | Fusiona una rama con la rama actual. |
| `git rebase <rama>` | Reorganiza los commits aplicando los cambios de otra rama. |
| `git stash` | Guarda temporalmente los cambios sin confirmarlos. |
| `git stash pop` | Restaura los cambios guardados con `stash`. |
| `git remote -v` | Muestra los repositorios remotos asociados. |
| `git remote add origin <URL>` | Conecta el repositorio local con un repositorio remoto. |
| `git pull origin main` | Descarga y fusiona cambios desde el repositorio remoto. |
| `git push origin main` | Sube los cambios al repositorio remoto. |
| `git push -u origin <rama>` | Sube una nueva rama al repositorio remoto y la configura como predeterminada. |
| `git tag <nombre>` | Crea una etiqueta (tag) en el historial de commits. |
| `git rm <archivo>` | Elimina un archivo del repositorio. |
| `git commit --amend -m "Nuevo mensaje"` | Modifica el mensaje del último commit. |
| `git reset --soft HEAD~1` | Deshace el último commit pero mantiene los cambios en staging. |
| `git reflog` | Muestra un historial de las acciones realizadas (útil para recuperar commits). |

---

## 5️⃣ Subir tu Proyecto a GitHub  
1️⃣ **Crea un repositorio en GitHub**  
2️⃣ Conéctalo con Git:  
```sh
git remote add origin https://github.com/tuusuario/tu-repo.git
git branch -M main  # Asegurar que la rama principal sea 'main'
git push -u origin main  # Subir archivos a GitHub
```

---

## 6️⃣ Ignorar Archivos con `.gitignore`  
Crea un archivo `.gitignore` y agrega archivos que no quieres subir, como `node_modules/` o `*.log`:
```sh
node_modules/
.env
*.log
```

---

## 🚀 ¡Listo! Ya sabes lo básico de Git  
Si necesitas más ayuda, revisa la [documentación oficial de Git](https://git-scm.com/doc).
