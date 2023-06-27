var firebaseConfig = {
    apiKey: "AIzaSyAjhqqGagNa6_3ivDCnIIQuURB6z7FuUUU",
    authDomain: "kwitter-a0699.firebaseapp.com",
    databaseURL: "https://kwitter-a0699-default-rtdb.firebaseio.com",
    projectId: "kwitter-a0699",
    storageBucket: "kwitter-a0699.appspot.com",
    messagingSenderId: "971809457663",
    appId: "1:971809457663:web:5cf9545188606ad257d3ca"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

  }