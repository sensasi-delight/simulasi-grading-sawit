import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const reportWebVitals = () => {
	Sentry.init({
		dsn: process.env.REACT_APP_SENTRY_DSN,
		integrations: [new BrowserTracing()],
		tracesSampleRate: process.env.REACT_APP_SENTRY_TRACE_SAMPLE_RATE,
	});

	const firebaseConfig = {
		apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
		authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
		projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
		storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_FIREBASE_APP_ID,
		measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
	};

	const app = initializeApp(firebaseConfig);
	// const ga = getAnalytics(app);
	getAnalytics(app);

	// console.log(ga.sen);

	// const sendToAnalytics = ({ id, name, value }) => {
	// 	logEvent('send', 'event', {
	// 		eventCategory: 'Web Vitals',
	// 		eventAction: name,
	// 		eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
	// 		eventLabel: id, // id unique to current page load
	// 		nonInteraction: true, // avoids affecting bounce rate
	// 	});
	// }

	// reportWebVitalsDefault(sendToAnalytics)
}

// defult report web vital
// const reportWebVitalsDefault = (onPerfEntry) => {
// 	if (onPerfEntry && onPerfEntry instanceof Function) {
// 		import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
// 			getCLS(onPerfEntry);
// 			getFID(onPerfEntry);
// 			getFCP(onPerfEntry);
// 			getLCP(onPerfEntry);
// 			getTTFB(onPerfEntry);
// 		});
// 	}
// };

export default reportWebVitals;
