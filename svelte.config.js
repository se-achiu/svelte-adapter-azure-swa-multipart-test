import adapter from 'svelte-adapter-azure-swa';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			customStaticWebAppConfig: {
				trailingSlash: 'auto',
				routes: [
					{
						route: '/api/*',
						headers: {
							'Access-Control-Allow-Origin': '*',
							'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
						}
					}
				],
				globalHeaders: {
					'content-security-policy':
						"default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'",
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
				},
				mimeTypes: {
					'.json': 'text/json',
					'.png': 'image/png',
					'.jpg': 'image/jpeg',
					'.jpeg': 'image/jpeg'
				}
			},
			apiDir: 'api'
		})
	}
};

export default config;
