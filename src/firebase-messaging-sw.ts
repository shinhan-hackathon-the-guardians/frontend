import { getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBlc1vfdR4lTXBZalRDoL2LLoqk_k9itsM",
  authDomain: "the-family-guardian.firebaseapp.com",
  projectId: "the-family-guardian",
  storageBucket: "the-family-guardian.appspot.com",
  messagingSenderId: "339693893957",
  appId: "1:339693893957:web:a8fe50ec49da82df8f262c",
  measurementId: "G-E279C39HR4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();

getToken(messaging, { vapidKey: "<YOUR_PUBLIC_VAPID_KEY_HERE>" })
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });
