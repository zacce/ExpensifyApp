import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD7eMZAL_fnP87699EHNYsPSSom2IaF7Vs",
    authDomain: "expensify-e88c8.firebaseapp.com",
    databaseURL: "https://expensify-e88c8-default-rtdb.firebaseio.com",
    projectId: "expensify-e88c8",
    storageBucket: "expensify-e88c8.appspot.com",
    messagingSenderId: "190025157734",
    appId: "1:190025157734:web:345eb7ece8f791a1f271a7",
    measurementId: "G-WQVZVMM872"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name:'Sakari Heino';
});

