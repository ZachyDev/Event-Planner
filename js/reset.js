var resetForm = document.getElementById('reset');

resetForm.addEventListener('submit', function(e){
    e.preventDefault();
    var email = document.getElementById('email').value;

    // reset password
    firebase.auth().sendPasswordResetEmail(email)
    .then(function() {
        alert('Password reset link sent');
    })
    .catch(function(e) {
        alert(e.message);
    })
})  