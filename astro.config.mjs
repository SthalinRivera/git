// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Git-GitHub',
			social: {
				github: 'https://github.com/SthalinRivera',
			},
			sidebar: [
				{
					label: 'Introducion',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: ' Guía Básica de Git', slug: 'introduccion/que-es' },
						{ label: 'Guía para Deploy en Vercel', slug: 'introduccion/usos' },
						{ label: 'Guía para Desplegar en GitHub Pages', slug: 'introduccion/github-pages' },
						{ label: 'Alternativas Gratuitas a Vercel para Despliegue de Proyectos', slug: 'introduccion/alternativas-deploy' },
						{ label: 'Despliegue de Aplicaciones Laravel en Servicios de Hosting Gratuitos', slug: 'introduccion/deploy-laravel' },
					],
				},

			],
		}),
	],
});
