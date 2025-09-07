import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: true,
	// prerender: ['/*'], // Removed to avoid invalid wildcard filenames on Windows
} satisfies Config;
