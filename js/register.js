// form
var register = document.getElementById('register');


// listenig to submit event
register.addEventListener('submit',function(e) {
    e.preventDefault();

    // inputs
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // sending data to firebase
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(function() {
        alert('user created succcessfully');
        window.location.href = 'login.html';
    })
    .catch(function(e) {
        alert(e.message);
    })
})


var google2 = document.getElementById('google2');
google2.addEventListener('click', function() {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(googleProvider)
    .then(function() {
        window.location.href = 'homepage.html';
    })
    .catch(function(e) {
        alert(e.message);
    })
})