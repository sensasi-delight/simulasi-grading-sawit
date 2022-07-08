import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

if (process.env.NODE_ENV === 'production' && process.env.REACT_APP_ENV === 'production') {
	reportWebVitals();
}

serviceWorkerRegistration.register();