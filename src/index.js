import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import {} from "./helpers/sentryClient";
import {} from "./helpers/firebaseClient";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);


serviceWorkerRegistration.register();