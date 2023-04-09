function FirstName() {
    if (fName.value.length < 2) {
        div40.innerHTML = "יש להכניס לפחות 2 תווים";
        return false;
    }
    else {
        div40.innerHTML = " ";
        return true;
    }
}

function LastName() {
    if (lName.value.length < 2) {
        div41.innerHTML = "יש להכניס לפחות 2 תווים ";
        return false;
    }
    else {
        div41.innerHTML = " ";
        return true;
    }
}

function Year() {
    if (year.value > 2023 || year.value < 1904) {
        div42.innerHTML = "אנא הכנס שנה תקינה";
        return false;
    }
    else {
        div42.innerHTML = " ";
        return true;
    }
}


function nationality() {
    if (nationality1.checked || nationality2.checked) {
        div43.innerHTML = " ";
        return true;
    }
    else {
        div43.innerHTML = "אנא בחר אחת מהאופציות";
        return false;
    }
}

function gender() {
    if (female.checked || male.checked || other.checked) {
        div44.innerHTML = " ";
        return true;
    }
    else {
        div44.innerHTML = "אנא בחר אחת מהאופציות";
        return false;
    }
}


function password() {
    if (password1.value.length <= 8) {
        div45.innerHTML = "יש להכניס לפחות 8 תווים";
        return false;
    }
    else {
        div45.innerHTML = " ";
        return true;
    }
}

function passwordVari() {
    if (password1.value == passwordVari1.value) {
        div46.innerHTML = " ";
        return true;
    }
    else {
        div46.innerHTML = "ערך האימות שונה מהסיסמה";
        return false;
    }

}

function hobbies() {
    if (hobbies1.value.length < 2) {
        div47.innerHTML = " יש להכניס לפחות תחביב אחד";
        return false;
    }
    else {
        div47.innerHTML = " ";
        return true;
    }
}

function age() {
    if (age1.value > 120 || age1.value < 12) {
        div48.innerHTML = "אנא הכנס גיל תקין, לא ניתן להירשם אם גילך קטן מ12";
        return false;
    }
    else {
        div48.innerHTML = " ";
        return true;
    }
}

function phone() {
    if (phone1.value.length == 9 || phone1.value.length == 10) {
        div49.innerHTML = " ";
        return true;
    }
    else {
        div49.innerHTML = "מספר טלפון לא תקין";
        return false;
    }
}

function email1() {
    if (email.value == "") {
        div500.innerHTML = "אימייל לא תקין";
        return false;
    }
    else {
        div500.innerHTML = "";
        return true;
    }
}
function user() {
    if (user1.value.length<=8) {
        div501.innerHTML = " יש להכניס לפחות 8 תווים";
        return true;
    }
    else {
        div501.innerHTML = "";
        return false;
    }
}

function ending() {
    var result = true;
    result = FirstName() && result;
    result = LastName() && result;
    result = Year() && result;
    result = nationality() && result;
    result = gender() && result;
    result = password() && result;
    result = passwordVari() && result;
    result = hobbies() && result;
    result = age() && result;
    result = phone() && result;
    result = email1() && result;
    result = user() && result;
    return result;
}