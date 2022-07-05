import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";


const reportWebVitals = () => {
	if (process.env.NODE_ENV === 'production') {

		Sentry.init({
			dsn: process.env.REACT_APP_SENTRY_DSN,
			integrations: [new BrowserTracing()],
			tracesSampleRate: process.env.REACT_APP_SENTRY_TRACE_SAMPLE_RATE,
		});
	}

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

	if (process.env.NODE_ENV === 'production') {

		getAnalytics(app);
	}

	const messaging = getMessaging(app);

	onMessage(messaging, payload => {
		window.postMessage(payload)
	})

	Notification.requestPermission().then((permission) => {
		if (permission === 'granted') {
			getToken(messaging)
				.then(token => process.env.NODE_ENV === 'production' ? undefined : console.log(token))
				.catch((err) => console.log(err))
		}
	})
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
