var firebaseConfig = {
    apiKey: "AIzaSyBv31LElLuduIv-EvwOVssyJ3EjUH5xgUA",
    authDomain: "kwitter-b8ca5.firebaseapp.com",
    databaseURL: "https://kwitter-b8ca5-default-rtdb.firebaseio.com",
    projectId: "kwitter-b8ca5",
    storageBucket: "kwitter-b8ca5.appspot.com",
    messagingSenderId: "834969108863",
    appId: "1:834969108863:web:1d0771a4cc8b89abc1da4a",
    measurementId: "G-T5JMNT2NJD"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");


  function send() {

    message = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name : user_name,
      message : message,
      like: 0
    });
    
    
    document.getElementById("msg").value = "";


  }