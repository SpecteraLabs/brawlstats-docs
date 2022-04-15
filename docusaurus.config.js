const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const { npm2yarn2pnpm } = require('@sapphire/docusaurus-plugin-npm2yarn2pnpm');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Brawlstats',
	tagline: 'A highly advanced API wrapper for brawlstars.',
	url: 'https://brawlstatsjs.netlify.app',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'SpecteraLabs',
	projectName: 'npm-packages',

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/SpecteraLabs/brawlstats-docs/edit/main',
					remarkPlugins: [npm2yarn2pnpm],
					showLastUpdateAuthor: true,
					showLastUpdateTime: true
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
	],
	plugins: [
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'brawlstats',
				entryPoints: ['./npm-packages/packages/brawlstats/src/index.ts'],
				tsconfig: './npm-packages/packages/brawlstats/src/tsconfig.json',
				readme: 'none',
				out: 'Documentation/brawlstats',
				sidebar: {
					categoryLabel: 'API Documentation',
					position: 0,
					fullNames: true
				}
			}
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Brawlstats',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.svg'
				},
				items: [
					{
						to: '/',
						label: 'Home',
						position: 'left',
						activeBaseRegex: '^/$'
					},
					{
						to: 'docs/General/Welcome',
						position: 'left',
						label: 'Documentation',
						activeBaseRegex: '^/docs/(General|Documentation)/.+$'
					},
					{
						to: 'docs/Guide/getting-started',
						position: 'left',
						label: 'Guide',
						activeBaseRegex: '^/docs/Guide/.+$'
					},
					{
						href: 'https://github.com/SpecteraLabs/brawlstats-docs',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			footer: {
				style: 'dark',
				logo: {
					alt: 'Deploys by Netlify',
					src: 'https://www.netlify.com/img/global/badges/netlify-color-accent.svg',
					href: 'https://netlify.com/'
				},
				copyright: `Copyright © ${new Date().getFullYear()} SpecteraLabs.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
};

module.exports = config;
