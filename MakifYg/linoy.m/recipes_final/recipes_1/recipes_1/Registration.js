
function FirstName() {
    if (fName.value.length < 2) {
        div1.innerHTML = "יש להכניס 2 תווים לפחות";
        return false;
    }
    else {
        div1.innerHTML = " ";
        return true;
    }
}

function LastName() {
    if (lName.value.length < 2) {
        div2.innerHTML = "יש להכניס 2 תווים לפחות";
        return false;
    }
    else {
        div2.innerHTML = " ";
        return true;
    }
}

function Year() {
    if (year.value > 2023 || year.value < 1904) {
        div3.innerHTML = "השנה לא תקינה. יש להכניס שנה שוב";
        return false;
    }
    else {
        div3.innerHTML = " ";
        return true;
    }
}


function nationality() {
    if (nationality1.checked || nationality2.checked) {
        div4.innerHTML = " ";
        return true;
    }
    else {
        div4.innerHTML = "אנא בחר אחת מהאופציות";
        return false;
    }
}

function gender() {
    if (female.checked || male.checked || other.checked) {
        div5.innerHTML = " ";
        return true;
    }
    else {
        div5.innerHTML = "אנא בחר אחת מהאופציות";
        return false;
    }
}

function password() {
    if (password1.value.length <= 8) {
        div6.innerHTML = "הסיסמה חייבת להיות באורך 8 תווים לפחות";
        return false;
    }
    else {
        div6.innerHTML = " ";
        return true;
    }
}

function passwordVari() {
    if (password1.value == passwordVari1.value) {
        div7.innerHTML = " ";
        return true;
    }
    else {
        div7.innerHTML = "אימות לא תקין";
        return false;
    }

}


function hobbies() {
    if (hobbies1.value.length < 5) {
        div9.innerHTML = "הכנס עוד תחביבים, הערך קצר מידי";
        return false;
    }
    else {
        div9.innerHTML = " ";
        return true;
    }
}

function age() {
    if (age1.value > 120 || age1.value < 13) {
        div10.innerHTML = " הגיל לא תקין. ניתן להרשם אך ורק אם גילך מעל 13";
        return false;
    }
    else {
        div10.innerHTML = " ";
        return true;
    }
}

function phone() {
    if (phone1.value.length == 9 || phone1.value.length == 10) {
        div11.innerHTML = " ";
        return true;
    }
    else {
        div11.innerHTML = "מספר הטלפון לא תקין";
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
    return result;
}