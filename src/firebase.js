import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAuJMvvlb26dfmV1stxpaK9snZ6G1kRUAM",
    authDomain: "lbps3-56ca0.firebaseapp.com",
    databaseURL: "https://lbps3-56ca0.firebaseio.com",
    projectId: "lbps3-56ca0",
    storageBucket: "lbps3-56ca0.appspot.com",
    messagingSenderId: "653762843526",
    appId: "1:653762843526:web:b2fe73d5d5dae4906f9207",
    measurementId: "G-8JWD0ZENXH"
  };

  const app=firebase.initializeApp(firebaseConfig);
  export const  db =firebase.firestore();
  export default app;