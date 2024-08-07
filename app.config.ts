export default defineAppConfig({
  sentryNuxt:{
    dsn: "",
    targetUrls: ["localhost"],
    project: "",
    org: "",
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    sentryNuxt?: {
      dsn: string,
      targetUrls: string[],
      project: string,
      org: string
    }
  }
}
