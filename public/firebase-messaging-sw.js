importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"),importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"),firebase.initializeApp({apiKey:"AIzaSyCit2d_g7K_BSdLtZSosZe2wsdomMNkaMU",authDomain:"simulasi-grading-sawit.firebaseapp.com",projectId:"simulasi-grading-sawit",storageBucket:"simulasi-grading-sawit.appspot.com",messagingSenderId:"608340716838",appId:"1:608340716838:web:4bcc8d7a239554e1eb65e7",measurementId:"G-837FSKTDGP"});let messaging;firebase.messaging.isSupported().then(s=>{s&&(messaging=firebase.messaging()).onBackgroundMessage()});