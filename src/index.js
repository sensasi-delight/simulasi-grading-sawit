import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GALog } from "./helpers/firebaseClient";
import {} from "./helpers/sentryClient";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);


function sendToGoogleAnalytics({ name, delta, id }) {
	GALog(name, {
		event_category: 'Web Vitals',
		event_label: id,
		value: Math.round(name === 'CLS' ? delta * 1000 : delta),
		non_interaction: true,
	});
}

reportWebVitals(sendToGoogleAnalytics);


serviceWorkerRegistration.register();