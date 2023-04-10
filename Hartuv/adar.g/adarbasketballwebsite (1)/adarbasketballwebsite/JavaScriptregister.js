function checkname() {
    if (fname.value.length < 1) {
        div1.innerHTML = div1.innerHTML + "שם משפחה ושם פרטי הם שדות חובה ";
    }
    else {
        if (fname.value.length < 2 || lname.value.length < 2) {
            div1.innerHTML = div1.innerHTML + "שם פרטי או שם משפחה חייבים להיות לפחות 2 אותיות נסה שנית ";
            return false;
        }
        else { return true; }
    }
}
function checkuname() {
    if (uname.value.length < 1) {
        div1.innerHTML = div1.innerHTML + "שם משתמש הוא שדה חובה ";
    }
    else { 
    if (uname.value.length < 3) {
        div1.innerHTML = div1.innerHTML + "שם משתמש חייב להיות לפחות שלוש תווים ";
        return false;
    }
    else { return true; }
    }
}
     
function checkcode() {
    if (code.value.length < 1 || code2.value.length < 1) {
        div1.innerHTML = div1.innerHTML + "קוד ואימות קוד הם שדות חובה ";
    }
    else { 
        if (code.value != code2.value || code.value.length < 5) {
            div1.innerHTML = div1.innerHTML + "הקוד חייב להיות זהה לקוד אימות וחייב להיות לפחות 5 תווים ";
            return false;
        }
        else {return true;}
    }
}
function checkmail() {
    if (email.value.includes('@')){
        return true;
    }
    else {
        div1.innerHTML = div1.innerHTML + "אימייל לא תקין ";
        return false;
    }
}

function checkall() { 
    var result = checkname();
    result = checkcode() && result;
    result = checkuname() && result;
    result = checkmail() && result;
    return result;
}