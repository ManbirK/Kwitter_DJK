
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

document.getElementById("welcome_user").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() 
{  
  firebase.database().ref("/").on('value', function(snapshot) 
    { 
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) 
        { 
          childKey  = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='gotTo_RoomName(this.id)' >#"+ Room_names +"</div><hr>";
           document.getElementById("output").innerHTML += row;
        });
    });

}

getData();

function gotTo_RoomName(selected_room)
{
  room_name = selected_room
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}


function logout(){

 
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name"); 

  window.location = "index.html";
}


