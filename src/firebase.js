import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// import { cityDb } from './temp/m-city-export';

  var firebaseConfig = {
    apiKey: "AIzaSyAhbcR1afNn6l5r2ONt-U10Zd3fcxwmtLg",
    authDomain: "manchester-49df8.firebaseapp.com",
    projectId: "manchester-49df8",
    storageBucket: "manchester-49df8.appspot.com",
    messagingSenderId: "868102382243",
    appId: "1:868102382243:web:89d46bf3969924a6885516",
    measurementId: "G-4NMX9K5Y3C"
  };

  firebase.initializeApp(firebaseConfig);

    const DB = firebase.firestore();
    const matchesCollection = DB.collection('matches');
    const playersCollection = DB.collection('players');
    const positionsCollection = DB.collection('positions');
    const promotionsCollection = DB.collection('promotions');
    const teamsCollection = DB.collection('teams');

//   cityDb.matches.forEach(item => {
//   matchesCollection.add(item)
// });

// cityDb.players.forEach(item => {
//   playersCollection.add(item)
// });

// cityDb.positions.forEach(item => {
//   positionsCollection.add(item)
// });

// cityDb.promotions.forEach(item => {
//   promotionsCollection.add(item)
// });

// cityDb.teams.forEach(item => {
//   teamsCollection.add(item)
// });


    export {
        firebase,
        matchesCollection,
        playersCollection,
        positionsCollection,
        promotionsCollection,
        teamsCollection
    }