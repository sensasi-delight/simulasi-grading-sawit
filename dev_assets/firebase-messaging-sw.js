/* DEVELOPER NOTE
 this is an unminified version, if you modify it
 plese minified first and place it in /public folder

 */


// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCit2d_g7K_BSdLtZSosZe2wsdomMNkaMU",
  authDomain: "simulasi-grading-sawit.firebaseapp.com",
  projectId: "simulasi-grading-sawit",
  storageBucket: "simulasi-grading-sawit.appspot.com",
  messagingSenderId: "608340716838",
  appId: "1:608340716838:web:4bcc8d7a239554e1eb65e7",
  measurementId: "G-837FSKTDGP"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
let messaging = undefined;

firebase.messaging.isSupported().then(isSupported => {

  if (isSupported) {
    messaging = firebase.messaging();
    messaging.onBackgroundMessage();
  }

})
