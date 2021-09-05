
import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyCxg1KshWlKuSl2XB1Pwt0-3YDb0MY-3u0",
    authDomain: "socialmedialogin-eec40.firebaseapp.com",
    projectId: "socialmedialogin-eec40",
    storageBucket: "socialmedialogin-eec40.appspot.com",
    messagingSenderId: "716896965267",
    appId: "1:716896965267:web:206811ea3d5331ba95b366",
    measurementId: "G-28EDCEL4P0"
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var googleprovider = new firebase.auth.GoogleAuthProvider(); 
var facebookprovider = new firebase.auth.FacebookAuthProvider(); 
var githubprovider = new firebase.auth.GithubAuthProvider();
export {auth , googleprovider,facebookprovider,githubprovider};