function IName() {
    if (iName.value.length < 2) {
        div1.innerHTML = "יש להכניס לפחות 2 תווים";
        return false;
    }
    else {
        div1.innerHTML = " ";
        return true;
    }
}
//שם משפחה
function FName() {
    if (fName.value.length < 2) {
        div2.innerHTML = "יש להכניס לפחות 2 תווים ";
        return false;
    }
    else {
        div2.innerHTML = " ";
        return true;
    }
}
//אימייל
function Emile() {
    if (emile.value.length < 3) {
        div3.innerHTML = "יש להכניס לפחות 3 תווים";
        return false;
    }
    else {
        div3.innerHTML = " ";
        return true;
    }

}
//שם משתמש
function Code() {
    if (code.value.length < 3) {
        div4.innerHTML = "יש להכניס לפחות 3 תווים";
        return false;
    }
    else {
        div4.innerHTML = " ";
        return true;
    }


}
//מגדר
function Gender() {
    if (Female.checked || Male.checked || Painter.checked) {
        div8.innerHTML = " ";
        return true;
    }
    else {
        div8.innerHTML = "אנא בחר אחת מהאופציות";
        return false;
    }
}
//ניסון
function Experience() {
    if (No.checked || Yes.checked || Maybe.checked || AllLife.checked || More.checked) {
        div7.innerHTML = " ";
        return true;
    }

    else {
        div7.innerHTML = "אנא בחר אחת מהאופציות";
        return false;
    }
}

//סיסמה
function Password() {
    if (password.value.length < 8) {
        div5.innerHTML = "יש להכניס לפחות 8 תווים";
        return false;
    }
    else {
        div5.innerHTML = " ";
        return true;
    }
}
//אימות סיסמה
function PasswordVari() {
    if (password.value == passwordVari.value) {
        div6.innerHTML = " ";
        return true;
    }
    else {
        div6.innerHTML = "ערך האימות שונה מהסיסמה";
        return false;
    }

}
//בדיקה סופית
function ending() {
    var result = true;
    result = IName() && result;
    result = FName() && result;
    result = Code() && result;
    result = Emile() && result;
    result = Experience() && result;
    result = Gender() && result;
    result = Password() && result;
    result = PasswordVari() && result;
    return result;
}