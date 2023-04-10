function checkValues() {
    ageAlert.innerHTML = "";
    nameAlert.innerHTML = "";
    lastNameAlert = "";
    mistameshAlert = "";
    passwordAlert.innerHTML = "";
    password2Alert.innerHTML = "";
    emailAlert.innerHTML = "";
    phonAlert.innerHTML = "";
    phonAlert.innerHTML = "";
    localAlert.innerHTML = "";
    var result = checkName();
    result = checkYear() && result;
    result = check1() && result;
    result = checkLastName() && result;
    result = checkPassword() && result;
    result = checkMail() && result;
    result = checkPhon() && result;
    result = checkPassMust() && result;
    result = checkR() && result;
    return result;
}
function checkYear() {
    if (age.value < 1900 || age.value > 2023) {
        ageAlert.innerHTML = "שנת לידה לא תקינה";
        return false;
    }
    else {
        return true;
    }
}
function checkName() {
    if (idname.value.length < 2) {
        nameAlert.innerHTML = "שם לא תקין. חייב להיות מעל 2 תווים";
        return false;
    }
    else {
        return true;
    }
}
function checkLastName() { 
    if (lastName.value.length < 2) {
        lastNameAlert.innerHTML = "שם משפחה לא תקין. חייב להיות מעל 2 תווים";
        return false;
    }
    else {
        return true;
    }
}
function check1() {
    if (mistamesh.value.length < 3) {
        mistameshAlert.innerHTML = "שם משתמש לא תקין. חייב להיות מעל 3 תווים";
        return false;
    }
    else {
        return true;
    }
}
function checkPassword() {
    if (password.value != password2.value) {
        password2Alert.innerHTML = "סיסמאות לא זהות";
        return false;
    }
    else {
        return true;
    }
}
function checkMail() {
    if (!email.value.includes("@")) {
        emailAlert.innerHTML = "כתובת מייל לא תקינה";
        return false;
    }
    else {
        return true;
    }
}
function checkPhon() {
    if (phon.value.length < 1) {
        phonAlert.innerHTML = "שדה חובה";
        return false;
    }
    else {
        return true;
    }
}
function checkPassMust() {
    if (password.value.length < 1) {
        passwordAlert.innerHTML = "שדה חובה";
        return false;
    }
    else {
        return true;
    }
}
function checkR() {
    if (localY.checked == false && localN.checked == false) {
        localAlert.innerHTML = "שדה חובה";
        return false;
    }
    else {
        return true;
    }
}
