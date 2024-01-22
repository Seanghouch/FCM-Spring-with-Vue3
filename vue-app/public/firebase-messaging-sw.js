// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyC5k8VNyg4YMn4ZPKAzb6F7NyBHmZfyd2A",
    authDomain: "test-c4ffb.firebaseapp.com",
    databaseURL: "https://test-c4ffb.firebaseio.com",
    projectId: "test-c4ffb",
    storageBucket: "test-c4ffb.appspot.com",
    messagingSenderId: "763960945995",
    appId: "1:763960945995:web:a87d7478a3732f5ea64cce",
    measurementId: "G-51H7NDF4S9"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notifocation.title;
    const notificationOptions = {
      body: payload.notifocation.body,
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });