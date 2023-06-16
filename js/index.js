const firebaseConfig = {

  apiKey: "AIzaSyBu2IWGEdxzcVWOS9917e3Lvv5GfUe91CU",

  authDomain: "angoshop-60197.firebaseapp.com",

  projectId: "angoshop-60197",

  storageBucket: "angoshop-60197.appspot.com",

  messagingSenderId: "76379478491",

  appId: "1:76379478491:web:7c2b048cad789359e4affe",

  measurementId: "G-R2JP1RYQJ0"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

firebase.auth.Auth.Persistence.LOCAL;

$("#btn-loguin").click(function(){

  var email = $("#email").val();
  var password = $("#password").val();

  if (email != "" && password != "")
  {
    var result = fireba.auth().signInWithEmailAndPassword(email, password);

    result.catch(function(error){

      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message :" + errorMessage);
    });
  }
  else{
    window.alert("Email e senha errada, porfavor cadastra-se.");
  }
});