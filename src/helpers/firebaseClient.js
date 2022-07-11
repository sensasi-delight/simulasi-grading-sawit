import { initializeApp } from "firebase/app";
import { getAnalytics, setUserProperties, logEvent } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import isLocalhost from "./isLocalhost";
import isProduction from "./isProduction";

let GALog = () => undefined

if (!isLocalhost && isProduction) {

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

	const analytics = getAnalytics(app);

	const messaging = getMessaging(app);


	setUserProperties(analytics, { wpa_version: process.env.REACT_APP_VERSION })

	onMessage(messaging, payload => {
		window.postMessage(payload)
	})

	Notification.requestPermission().then((permission) => {
		if (permission === 'granted') {
			getToken(messaging)
				.then(token => !isLocalhost ? undefined : console.log(token))
				.catch((err) => console.log(err))
		}
	})

	GALog = (eventName) => logEvent(analytics, eventName)
}



export { GALog };