import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAaC_aOcqsEUzyJT_EOTnn-Hn1yKcPz6lM",
    authDomain: "bt3103-week8-70c66.firebaseapp.com",
    databaseURL: "https://bt3103-week8-70c66.firebaseio.com",
    projectId: "bt3103-week8-70c66",
};
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;