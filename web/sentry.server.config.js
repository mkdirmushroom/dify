import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fc1c28fe3bdb4cdd8189f9184f82983c@o4505265719410688.ingest.sentry.io/4505265779572736",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});