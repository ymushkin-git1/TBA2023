function checkValues() {
    var result = checkFirstName();
    result = checkPassword() && result;
    result = checkLastName() && result;
    result = checkCity() && result;
    result = checkAdress() && result;
    result = checkSec() && result;
    result = checkUsername() && result;
    result = checkMail() && result;
    return result;
}

function checkFirstName() {
    if (fName.value.length > 2) {
        firstName.innerHTML = "";
        return true;
    }

    else {
        firstName.innerHTML = "First Name must be longer than 2 character";
        return false;
    }
}
function checkLastName() {
    if (lName.value.length > 3) {
        lastName.innerHTML = "";
        return true;
    }

    else {
        lastName.innerHTML = "last Name must be longer than 3 character";
        return false;
    }
}
function checkPassword() {
    if (password.value == confirmPass.value) {
        passwordText.innerHTML = "";
        return true;
    }
    else {
        passwordText.innerHTML ="passwords are not the same";
        return false;
    }

}
function checkCity() {
    if (city.value.length > 0) {
        cityText.innerHTML = "";
        return true;
    }
    else {
        cityText.innerHTML = "You must write the city you live in";
        return false;
    }
}
function checkAdress() {
    if (adress.value.length > 0) {
        adressText.innerHTML = "";
        return true;
    }
    else {
        adressText.innerHTML = "You must write your address"
        return false;
    }
}
function checkSec() {
    if (security.value.length > 0) {
        securityText.innerHTML = "";
        return true;
    }
    else {
        securityText.innerHTML = "You must answer the security question";
        return false;
    }
}
function checkUsername() {
    if (username.value.length > 3) {
        usernameText.innerHTML = "";
        return true;
    }
    else {
        usernameText.innerHTML = "username must be longer then 3 letters"
        return false;
    }
}
function checkMail() {
    var x =mail.value;
    var y = x.includes("@");
    if (y) {
        mailText.innerHTML = "";
        return true;
    }
    else {
        mailText.innerHTML="mail must includes @"
        return false;
    }


}
function hideText() {
    skate.innerHTML = "";
}
function changeColor(color) {
    document.body.style.color = color;

}
function changeR() {
    basket.style.color = 'red';
}
function changeB() {
    basket.style.color = 'blue';
}

    function result() {
            var score = 0;
    if (document.getElementById('correct1').checked) {
        score += 25;
            }
    if (document.getElementById('correct2').checked) {
        score += 25;
            }
    if (document.getElementById('correct3').checked) {
        score += 25;
            }
    if (document.getElementById('correct4').checked) {
        score += 25;
            }
    alert("your score is:" + score+"/100");

        }

