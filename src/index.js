import React from 'react';
// import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";


Sentry.init({
	dsn: "https://1ecacbf61e314e9e97eb29bd3844a367@o1289319.ingest.sentry.io/6546418",
	integrations: [new BrowserTracing()],

	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});

// render(<App />, document.getElementById("root"));

// Can also use with React Concurrent Mode
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCit2d_g7K_BSdLtZSosZe2wsdomMNkaMU",
	authDomain: "simulasi-grading-sawit.firebaseapp.com",
	projectId: "simulasi-grading-sawit",
	storageBucket: "simulasi-grading-sawit.appspot.com",
	messagingSenderId: "608340716838",
	appId: "1:608340716838:web:4bcc8d7a239554e1eb65e7",
	measurementId: "G-837FSKTDGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();