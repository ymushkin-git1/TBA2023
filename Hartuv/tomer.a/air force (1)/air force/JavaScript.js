

function check() {
    var ans = checkY();
    ans = checkN() && ans;
    var ans = checkN();
    ans = checkN() && ans;
    var ans = checkY();
    ans = checkY() && ans;
    var ans = checkP();
    ans = checkP() && ans;
    return ans;
}

function checkY() {
    if (bornyear.value > 2023) {
        msg5.innerHTML = "שנת לידה לא תקינה";
        return false;
    }
    else {
        return true;
    }
}
function checkN() {
    if (lastname.value.length < 3) {
        msg2.innerHTML = "שם חייב להיות מעל 3 תווים";
        return false;
    }
    else {
        return true;
    }
}

function checkN() {
    if (firstname.value.length < 2) {
        msg1.innerHTML = "שם חייב להיות מעל 2 תווים";
        return false;
    }
    else {
        return true;
    }
}
function checkP() {
    if (psw1.value == psw2.value) {
        msg8.innerHTML = "סימסאות זהות";
        return true;
    }
    else {
        msg8.innerHTML = "סיסמאות לא זהות";
        return false;
    }
}