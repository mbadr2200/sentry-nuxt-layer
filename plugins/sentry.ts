import * as Sentry from "@sentry/vue";

export default defineNuxtPlugin(({vueApp}) =>{
    const appConfig = useAppConfig();
    Sentry.init({
        app:vueApp,
        dsn: appConfig.sentryNuxt.dsn,
        integrations: [
          Sentry.browserTracingIntegration(),
          Sentry.replayIntegration(),
        ],
        // Performance Monitoring
        tracesSampleRate: 1.0, //  Capture 100% of the transactions
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: appConfig.sentryNuxt.targetUrls,
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
        logErrors: true,
      });
})