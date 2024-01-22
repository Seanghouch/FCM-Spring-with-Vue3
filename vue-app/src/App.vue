<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage, isSupported } from "firebase/messaging";

if(isSupported){
  try {
    const firebaseConfig = {
        apiKey: "AIzaSyC5k8VNyg4YMn4ZPKAzb6F7NyBHmZfyd2A",
        authDomain: "test-c4ffb.firebaseapp.com",
        databaseURL: "https://test-c4ffb.firebaseio.com",
        projectId: "test-c4ffb",
        storageBucket: "test-c4ffb.appspot.com",
        messagingSenderId: "763960945995",
        appId: "1:763960945995:web:a87d7478a3732f5ea64cce",
        measurementId: "G-51H7NDF4S9"
      };

    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // ...
    });

    getToken(messaging, { vapidKey: 'BKUJ7SEMY1b_8Lurjmk5QPioQEwFBHCDGAeFh7fTmG7HttZQamwUNQvGYfAX1zttBF5gIpjGbfkCUw9u5jDj0bE' }).then((currentToken) => {
      if (currentToken) {
        console.log("Token is:", currentToken);
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });

  } catch (error) {
    console.error("fcm is error : ", error)
  }
  console.log("brower supported")
}else{
  console.log("brower not supported")
}

</script>

<template>
  <header>
    <div><h1>Hello World, Welcome to Vue3</h1></div>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
  
  <main>
    <TheWelcome />
    
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
