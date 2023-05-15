// form
var login = document.getElementById('login');


// listenig to submit event
login.addEventListener('submit',function(e) {
    e.preventDefault();

    // inputs
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

        // sending data to firebase
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(function() {
            alert('login successful');
            window.location.href = 'homepage.html';
        })
        .catch(function(e) {
            alert(e.message);
        })
 
})


// login with google via login page
var google = document.getElementById('google');
google.addEventListener('click', function() {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(googleProvider)
    .then(function() {
        window.location.href = 'homepage.html';
    })
    .catch(function(e) {
        alert(e.message);
    })
})
// login with google via sign up page