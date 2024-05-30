const frontEndIconConfig = {
	HTML: 'SiHtml5',
	CSS3: 'SiCss3',
	JavaScript: 'SiJavascript',
	React: 'SiReact',
	Vuejs: 'SiVuedotjs',
	Vite: 'SiVite',
	Nextjs: 'SiNextdotjs',
	Nuxtjs: 'SiNuxtdotjs',
	TailwindCSS: 'SiTailwindcss',
};

const backEndIconConfig = {
	Express: 'SiExpress',
	NodeJS: 'SiNodedotjs',
	Mongoose: 'SiMongoose',
	MongoDB: 'SiMongodb',
	Pug: 'SiPug',
};

const miscIconConfig = {
	Linux: 'SiLinux',
	Git: 'SiGit',
	GitHub: 'SiGithub',
	Vercel: 'SiVercel',
};

function getIcons(config) {
	return Object.entries(config).map(([name, componentName]) => {
		const IconComponent = require('react-icons/si')[componentName];
		return {
			name,
			component: IconComponent,
		};
	});
}

export const frontEnd = getIcons(frontEndIconConfig);

export const backEnd = getIcons(backEndIconConfig);

export const misc = getIcons(miscIconConfig);

