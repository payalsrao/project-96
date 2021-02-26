//YOUR FIRE BASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBRM3zzbJ2VMSiH0AOXswdo1WEb1qrJ6iI",
  authDomain: "kwitter-c5546.firebaseapp.com",
  databaseURL: "https://kwitter-c5546-default-rtdb.firebaseio.com",
  projectId: "kwitter-c5546",
  storageBucket: "kwitter-c5546.appspot.com",
  messagingSenderId: "1098736886211",
  appId: "1:1098736886211:web:4a37f08f2dcc79e62ddd76"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }


function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}
