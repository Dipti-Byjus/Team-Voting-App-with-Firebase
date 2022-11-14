import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
apiKey: "AIzaSyAeBEfWYt9M4VG8QQuo7OjQ3TNPgB9OOF4",
  authDomain: "team-voting-app-91104.firebaseapp.com",
  databaseURL: "https://team-voting-app-91104-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-91104",
  storageBucket: "team-voting-app-91104.appspot.com",
  messagingSenderId: "51649987726",
  appId: "1:51649987726:web:561d83febbe098038735df"


    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();