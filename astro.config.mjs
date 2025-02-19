// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: ' Iot & AI Docs',
			social: {
				github: 'https://github.com/SthalinRivera',
			},
			sidebar: [
				{
					label: 'Introducion',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '¿Qué es un brazo robótico?', slug: 'introduccion/que-es' },
						{ label: 'Aplicaciones y Usos', slug: 'introduccion/usos' },
					],
				},
				{
					label: 'Componentes del Sistema',
					items: [
						{ label: 'Arduino y su función', slug: 'componentes/arduino' },
						{ label: 'Controlador de Servos de 16 canales', slug: 'componentes/controlador-servos' },
						{ label: 'Servomotores', slug: 'componentes/servomotores' },
						{ label: 'Estructura del Brazo Robótico', slug: 'componentes/estructura' },
						{ label: 'Alimentación y Cableado', slug: 'componentes/alimentacion' },
					],
				},
				{
					label: 'Montaje y Conexiones',
					items: [
						{ label: 'Ensamblaje del brazo', slug: 'montaje/ensamblaje' },

					],
				},
				{
					label: 'Programación en Arduino',
					items: [
						{ label: 'Instalación del entorno de desarrollo', slug: 'programacion/instalacion-ide' },
						{ label: 'Bibliotecas necesarias', slug: 'programacion/bibliotecas' },
						{ label: 'Uso del Controlador PCA9685', slug: 'programacion/codigo-base' },
						{ label: 'Movimiento barrido secuencial', slug: 'programacion/movimiento-secuencial' },
						{ label: 'Moviendo los servomotores en posiciones diferentes', slug: 'programacion/movimiento-posiciones-diferentes' },
					],
				},
				{
					label: 'Pruebas y Ajustes',
					items: [
						{ label: 'Calibración de Servos', slug: 'pruebas/calibracion' },
						{ label: 'Resolución de Errores', slug: 'pruebas/errores' },
					],
				},

				{
					label: 'Recomendacion',
					autogenerate: { directory: 'recomendaciones' },
				},
				{
					label: 'Referencias',
					autogenerate: { directory: 'referencias' },
				},
			],
		}),
	],
});
