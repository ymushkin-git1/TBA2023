function checkValues() {
    var result = checkfirstname()
    result = chacklastname() && result;
    result = chackpassword() && result;
    result = chackusername() && result;
    result = chackemail() && result;
    result = chackbirthday() && result;
    result = chackphonnumber() && result;
    return result;
}


function checkfirstname() {
    div1.innerHTML = "";

    if (FirstName.value.length > 2)
        return true;
    else {
        div1.innerHTML = "your First Name must be long than 2 characters";
        return false;
    }

}

function chacklastname() {
    div2.innerHTML = "";

    if (lastname.value.length > 2)
        return true;
    else {
        div2.innerHTML = "your Last Name must be long than 2 characters";
        return false;
    }
}

function chackpassword() {
    div4.innerHTML = "";

    if (password.value.length > 2)
        return true;
    else {
        div4.innerHTML = "your password must be long than 2 characters";
        return false;
    }
}

function chackusername() {
    div3.innerHTML = "";

    if (username.value.length > 2)
        return true;
    else {
        div3.innerHTML = "your UserName must be long than 2 characters";
        return false;
    }
}



function chackemail() {

    if (idMail.value.includes("@") == true) {
        return true;
    }
    else {
        div4.innerHTML = "worng mail"
        return false;
    }

}

function chackbirthday() {
    div5.innerHTML = "";

    if (birthday.value.length > 2)
        return true;
    else {
        div5.innerHTML = "your birthday must be long than 2 characters";
        return false;
    }
}

function chackphonnumber() {
    div6.innerHTML = "";

    if (phoneNumber.value.length > 2)
        return true;
    else {
        div6.innerHTML = "your phonnumber must be long than 2 characters";
        return false;
    }
}