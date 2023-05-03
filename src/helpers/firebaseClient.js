import { initializeApp, } from "firebase/app";
import { getAnalytics, setUserProperties, logEvent, isSupported as isSupportedAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage, isSupported as isSupportedMessaging } from "firebase/messaging";
import { isLocalhost, isProduction } from ".";

let GALog = () => undefined

if (!isLocalhost && isProduction) {

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  const app = initializeApp(firebaseConfig);

  isSupportedAnalytics().then(isSupported => {

    if (isSupported) {
      const analytics = getAnalytics(app);

      setUserProperties(analytics, { wpa_version: process.env.REACT_APP_VERSION })

      GALog = (eventName, eventParams) => logEvent(analytics, eventName, eventParams)
    }
  })


  isSupportedMessaging().then(isSupported => {
    if (isSupported) {
      const messaging = getMessaging(app);

      onMessage(messaging, payload => {
        window.postMessage(payload)
      })

      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          getToken(messaging)
            .then(token => !isLocalhost ? undefined : console.log(token))
            .catch((err) => console.log(err))
        }
      })
    }
  })

}



export { GALog };