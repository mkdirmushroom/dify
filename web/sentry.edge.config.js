import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fc1c28fe3bdb4cdd8189f9184f82983c@o4505265719410688.ingest.sentry.io/4505265779572736",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});