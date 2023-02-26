var form = document.querySelector("#form");
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var  password = document.querySelector('#password');
var  password2 = document.querySelector('#password2');



// Fonstions
function form_verify() {
    // Obtenir toutes les valeurs des inputs
    //trim remove the whithe space from both side of string 
    var userValue = username.value.trim();
    var  emailValue = email.value.trim();
    var pwdValue = password.value.trim();
    var  pwd2Value = password2.value.trim();

    var trackingName = false;
    var trackingEmail = false;
    var trackingPassword = false;
    var trackingPasswordConfirmation = false;

    // Username verify
    if (userValue === "") {
        let message ="Username cannot be empty";
        setError(username,message);
    }else if(!userValue.match(/^[a-zA-Z]/)){//regular expression: means any a-z or A-Z at the start of a line
        let message ="Username doit commencer par une lettre";
        setError(username,message)
    }else{
        let letterNum = userValue.length;
        if (letterNum < 3) {
            let message ="Username doit avoir au moins 3 caractères";
            setError(username,message)
        } else {
            setSuccess(username);
            trackingName = true;
        }
    }

    // email verify
    if (emailValue === "") {
        let message = "Email ne peut pas être vide";
        setError(email,message);
    }else if(!email_verify(emailValue)){
        let message = "Email non valide";
        setError(email,message);
    }else{
        setSuccess(email)
        trackingEmail = true;
    }

    // password verify
    if (pwdValue ==="") {
        let message ="Le passeword ne peut pas être vide";
        setError(password,message)

    }else if(!password_verify(pwdValue)){
        let message = "Le mot de passe est trop faible (8 à 12 caractères)";
        setError(password,message)
   
    }else{
        setSuccess(password);
        trackingPassword = true;
    }
    // pwd confirm
    if (pwd2Value ==="") {
        let message ="Le passeword confirm ne peut pas être vide";
        setError(password2,message)
    }else if( pwdValue !== pwd2Value){
        let message ="Les mot de passes ne correspondent pas";
        setError(password2,message)

    }else{
        setSuccess(password2)
        trackingPasswordConfirmation = true;
    }
    if(trackingEmail==true && trackingName==true && trackingPassword== true && trackingPasswordConfirmation==true){
        return true;
    }
    else{
        return false;
    }
}

function setError(elem,message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    // Ajout du message d'erreur
    small.innerText = message

    // Ajout de la classe error
    formControl.className = "form-control error";
    
}

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
}

function email_verify(email) {
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
function password_verify(passeword) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(passeword);
}


// Evenements
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    form_verify();
    if(form_verify()){
        window.alert("Verification is done  " + "\uD83D\uDE00");
        window.location.href = "courses.html"
    }
})