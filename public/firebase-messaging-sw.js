importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }

firebase.initializeApp({
    apiKey: "AIzaSyAqxgAHoBRBZkyEu_ZgHEh-4Yu7yBgrHDE",
    authDomain: "fir-cloud-messaging-dea92.firebaseapp.com",
    projectId: "fir-cloud-messaging-dea92",
    storageBucket: "fir-cloud-messaging-dea92.appspot.com",
    messagingSenderId: "436296418346",
    appId: "1:436296418346:web:719f4c4096e29f3d5c2f53"
  })

const initMessaging = firebase.messaging()