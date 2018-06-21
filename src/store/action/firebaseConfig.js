import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB29w_FU90KQQP3xtLOl7eCzU-zW-zm4Gs",
    authDomain: "quizapp-a8651.firebaseapp.com",
    databaseURL: "https://quizapp-a8651.firebaseio.com",
    projectId: "quizapp-a8651",
    storageBucket: "quizapp-a8651.appspot.com",
    messagingSenderId: "302719836734"
};
  let dbConfig = firebase.initializeApp(config);

export default dbConfig;