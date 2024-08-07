import * as Sentry from "@sentry/browser";

export default function useSentry() {
    const captureSentryError = (error: any) => {
        Sentry.captureException(error);
    }

    return {
        captureSentryError
    }
}