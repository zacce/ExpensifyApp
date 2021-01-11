import firebase from 'firebase/app'
import 'firebase/database'


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

const database = firebase.database();

database.ref('expenses').push({
    description:'Rent',
    note:'Testing Firebase',
    amount: 69745,
    createdAt:996546546543
});

database.ref('expenses').push({
    description:'Phone Bill',
    note:'',
    amount: 5900,
    createdAt:996546546543
});

database.ref('expenses').push({
    description:'Food',
    note:'',
    amount: 1200,
    createdAt:996546546543
});
// database.ref('notes/-MQlToEIJQZTBhOrEWxB').update({
//     body: 'Buy food'
// })
// database.ref('notes').push({
//     title: 'Third note',
//     body: 'This is my note' 
// });


// database.ref('notes').set(notes)


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref().set({
//     name: 'Andrew',
//     job: {
//         title:'Software developer',
//         company:'Microsoft'
//     }
//})
// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });

// database.ref().set({
//     name: 'Sakari Heino',
//     age: 55,
//     stresslevel:6,
//     job: {
//         title:'Lead IT spcialist',
//         company:'Telia'
//     },
//     location:{
//         city : 'Tampere',
//         country: 'Finland'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e)=> {
//     console.log('This failed. ', e)
// })

// database.ref().update({
//    stresslevel: 9,
//    'job/company':'Elisa',
//    'location/city':'Helsinki'
// })

// database.ref()
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded.")
//   })
//   .catch((e) => {
//     console.log("Remove failed: " + e.message)
//   })
