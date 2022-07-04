
//ANALYTIC AND LOGGING

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function connectThirdParty() {

	Sentry.init({
		dsn: process.env.REACT_APP_SENTRY_DSN,
		integrations: [new BrowserTracing()],

		// Set tracesSampleRate to 1.0 to capture 100%
		// of transactions for performance monitoring.
		// We recommend adjusting this value in production
		tracesSampleRate: process.env.REACT_APP_SENTRY_TRACE_SAMPLE_RATE,
	});

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
		authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
		projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
		storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_FIREBASE_APP_ID,
		measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const ga = getAnalytics(app);

	return {
		firebase: {
			app: app,
			ga: ga
		}
	}

}