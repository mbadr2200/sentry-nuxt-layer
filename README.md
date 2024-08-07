### How to use 
1- add to your nuxt.config.ts
```
extends:[
		['github:mbadr2200/sentry-nuxt-layer',{install:true}]
	],
build:{
		transpile:['sentry-nuxt-layer']
	}
```
2- add `app.config.ts` with this configuration 
```
export default defineAppConfig({
    sentryNuxt:{
        dsn: {your dsn from sentry},
        targetUrls: ["localhost",{your_production_url}],
        project: {your project name on sentry},
        org: {your org name on sentry},
    }
})
```
3- add `sentryOrg` & `sentryProject` & `SENTRY_AUTH_TOKEN` in your `.env` file 

4- use the composable as here
```
	const {captureSentryError} = useSentry();
    captureSentryError(error);
```
