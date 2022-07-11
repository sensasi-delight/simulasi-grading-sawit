import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import isLocalhost from "./isLocalhost";
import isProduction from "./isProduction";


if (!isLocalhost && isProduction) {
	Sentry.init({
		dsn: process.env.REACT_APP_SENTRY_DSN,
		integrations: [new BrowserTracing()],
		tracesSampleRate: process.env.REACT_APP_SENTRY_TRACE_SAMPLE_RATE,
	});
}