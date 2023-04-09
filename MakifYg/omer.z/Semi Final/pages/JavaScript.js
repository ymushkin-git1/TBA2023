// register page JS
function checkFname() {
    hiddenFname.innerHTML = " ";
    if (firstName.value.length <= 2) {
        hiddenFname.innerHTML = "חייב להיות ארוך מ-2 תווים";
        return false;
    }
    else {
        return true;
    }
}

function checkLname() {
    hiddenLname.innerHTML = " ";
    if (lastName.value.length <= 3) {
        hiddenLname.innerHTML = "חייב להיות ארוך מ-3 תווים";
        return false;
    }
    else {
        return true;
    }
}

function checkUsername() {
    hiddenUsername.innerHTML = " ";
    if (username.value.length <= 3) {
        hiddenUsername.innerHTML = "חייב להיות ארוך מ-3 תווים";
        return false;
    }
    else {
        return true;
    }
}

function checkYear() {
    hiddenYear.innerHTML = " ";
    if (year.value < 1900 || hiddenYear.value > 2023) {
        hiddenYear.innerHTML = "יש למלא ערך בין 1900 ל 2023";
        return false;
    }
    else if (year.value < 1) {
        hiddenYear.innerHTML = "יש להכניס שנת לידה";
        return false;
    }
    else {
        return true;
    }
}

function checkEmail() {
    hiddenEmail.innerHTML = " ";
    var size = email.value.length - 10;
    if (email.value.indexOf("@gmail.com") == size) {
        return true;
    }
    else {
        hiddenEmail.innerHTML = "חייב להיות עם סיומת @gmail.com";
        return false;
    }
}

function checkEzrahot() {
    hiddenEzrahot.innerHTML = " ";
    if (firstOption1.checked || secondOption1.checked) {
        return true;
    }
    else {
        hiddenEzrahot.innerHTML = "יש לבחור באחת מן האפשרויות";
        return false;
    }
}

function checkGender() {
    hiddenGender.innerHTML = " ";
    if (firstOption2.checked || secondOption2.checked || thirdOption2.checked) {
        return true;
    }
    else {
        hiddenGender.innerHTML = "יש לבחור באחת מן האפשרויות";
        return false;
    }
}

function checkPassword() {
    hiddenPassword.innerHTML = " ";
    if (password.value.length <= 5) {
        hiddenPassword.innerHTML = "חייב להיות ארוך מ-5 תווים";
        return false;
    }
    else {
        return true;
    }
}

function checkVerifyPassword() {
    hiddenVerifyPassword.innerHTML = " ";
    if (verifyPassword.value == password.value) {
        return true;
    }
    else if (verifyPassword.value.length < 1) {
        hiddenVerifyPassword.innerHTML = "יש להזין אימות סיסמא";
        return false;
    }
    else {
        hiddenVerifyPassword.innerHTML = "חייב להיות זהה לסיסמא";
        return false;
    }
}

function checkHobbies() {
    hiddenHobbies.innerHTML = " ";
    if (hobbies.value.length < 30) {
        hiddenHobbies.innerHTML = "חייב להיות לפחות 30 תווים";
        return false;
    }
    else {
        return true;
    }
}

function checkGrade() {
    hiddenGrade.innerHTML = " ";
    if (grade.value.length != 1) {
        hiddenGrade.innerHTML = "חייב להיות תו אחד בלבד";
        return false;
    }
    else {
        return true;
    }
}

function checkFavorite() {
    hiddenFavorite.innerHTML = " ";
    if (favorite.value.length < 4) {
        hiddenFavorite.innerHTML = "חייב להיות לפחות 4 תווים";
        return false;
    }
    else {
        return true;
    }
}

function checkAll() {
    var check = true;
    check = checkFname() && check;
    check = checkLname() && check;
    check = checkUsername() && check;
    check = checkEmail() && check;
    check = checkYear() && check;
    check = checkEzrahot() && check;
    check = checkGender() && check;
    check = checkPassword() && check;
    check = checkVerifyPassword() && check;
    check = checkHobbies() && check;
    check = checkGrade() && check;
    check = checkFavorite() && check;
    return check;
}
//clock function

setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}