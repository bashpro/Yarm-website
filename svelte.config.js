import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter:  adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: './yarm',
      assets: './yarm',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths:{
      base: process.env.NODE_ENV === 'production' ? '/bashpro.github.io': '',

    }
	},
  preprocess: vitePreprocess()
};

export default config;
