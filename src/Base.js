import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const app = firebase.initializeApp({
      apiKey: "AIzaSyALNYI0gxdY-s_Vyj4Mv1Iaw33mUFfaSgc",
    authDomain: "todo-list-62141.firebaseapp.com",
    databaseURL: "https://todo-list-62141.firebaseio.com",
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;