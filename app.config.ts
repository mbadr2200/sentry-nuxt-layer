export default defineAppConfig({
  sentryNuxt:{
    dsn: "",
    targetUrls: ["localhost"],
    project: "",
    org: "",
    normalizeDepth:10,
    environment:"development"
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    sentryNuxt?: {
      dsn: string,
      targetUrls: string[],
      project: string,
      org: string,
      normalizeDepth?:number,
      environment?:string
    }
  }
}
