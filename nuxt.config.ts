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
			org: process.env.sentryOrg,
			project: process.env.sentryProject,
			release:{
				deploy:{
					env:process.env.environment
				}
			}
		})]
	},

	compatibilityDate: "2024-08-07"
})