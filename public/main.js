  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDkgHuwoCsbP8W67vPeiV1MFhv5ULCFSVc",
    authDomain: "hardwork-p1.firebaseapp.com",
    databaseURL: "https://hardwork-p1.firebaseio.com",
    projectId: "hardwork-p1",
    storageBucket: "hardwork-p1.appspot.com",
    messagingSenderId: "884116588070",
    appId: "1:884116588070:web:045c9288dffa63c71848e7",
    measurementId: "G-NNVV39TL7D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var messagesRef = firebase.database().ref('messages');

  document.getElementById('formu').addEventListener('submit', submitForm);

  function submitForm(e){
      e.preventDefault();

      var name = getInputVal('nome');
      var emmail = getInputVal('email');

      saveMessage(name, email);
  }

  function getInputVal(id){
      return document.getElementById(id).nodeValue;
  }

  function saveMessage(nome, email){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          nome: nome,
          email: email
      })
  }