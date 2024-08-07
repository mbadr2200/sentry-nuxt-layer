// https://nuxt.com/docs/api/configuration/nuxt-config
import { sentryVitePlugin } from "@sentry/vite-plugin";
// const appConfig = useAppConfig();
export default defineNuxtConfig({
	devtools: { enabled: true },

	vite: {
		build: {
			sourcemap: true
		},

		plugins: [sentryVitePlugin({
			// org: appConfig.sentryNuxt.org,
			// project: appConfig.sentryNuxt.projectId
		})]
	},

	compatibilityDate: "2024-08-07"
})