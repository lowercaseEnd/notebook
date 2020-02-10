import firebase from "firebase";
let firebaseConfig = {
  apiKey: "AIzaSyDuKn5rehyQOE-z66PalIiAMBqLoAUkE2U",
  authDomain: "notebook-a135b.firebaseapp.com",
  databaseURL: "https://notebook-a135b.firebaseio.com",
  projectId: "notebook-a135b",
  storageBucket: "notebook-a135b.appspot.com",
  messagingSenderId: "905121049605",
  appId: "1:905121049605:web:012349658dc4b3e774406c",
  measurementId: "G-392QYWSKT2"
};

export default {
  state: {
    database: firebase
      .initializeApp(firebaseConfig)
      .database()
      .ref()
  },
  getters: {
    getDatabase(state) {
      return state.database;
    }
  }
};
