import * as Sentry from "@sentry/browser";

export default function useSentry() {
    const captureSentryError = (error: any,context?:{data:any,title:string}) => {
        if (context && context.data) 
        {   
            const contextTitle = context.title || "variables";
            Sentry.setContext(contextTitle,context.data);
        }
        Sentry.captureException(error);
    }

    return {
        captureSentryError
    }
}