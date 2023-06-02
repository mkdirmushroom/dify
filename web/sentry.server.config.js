import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://ee554481ba434e8b94bf76657ef9e804@o4505265719410688.ingest.sentry.io/4505265722032128',

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})
