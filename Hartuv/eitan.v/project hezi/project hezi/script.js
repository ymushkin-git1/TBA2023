function comment() {
    var commentSection = document.getElementById("titleComment")
    var comment = prompt("add a comment or question for the website")
    var addComment = "<p>" + comment + "</p"
    commentSection.insertAdjacentHTML("afterend", addComment)
    console.log(comment);
}
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
        return false;
    }
    else {
        if (code.value != code2.value || code.value.length < 5) {
            div1.innerHTML = div1.innerHTML + "הקוד חייב להיות זהה לקוד אימות וחייב להיות לפחות 5 תווים ";
            return false;
        }
        else { return true; }
    }
}
function checkmail() {
    if (email.value.includes('@')) {
        return true;
    }
    else {
        div1.innerHTML = div1.innerHTML + "אימייל לא תקין ";
        return false;
    }
}

function checkall() {
    div1.innerHTML = "";
    var result = checkname();
    result = checkcode() && result;
    result = checkuname() && result;
    result = checkmail() && result;
    if (result == true) {
        windows.location.replace("website.html");
    }
    return result;
    
}
function checkall1() {
    div1.innerHTML = "";
    var result = checkname();
    result = checkcode() && result;
    result = checkuname() && result;
    if (result == true) {
        windows.location.replace("website.html");
    }
    return result;

}

function replaceFunction() {
    windows.location.replace("website.html");
}
function replace2() {
    window.location.href = "website.html";
}