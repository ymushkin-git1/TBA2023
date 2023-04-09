
function checkall() {
    var result = checkfname();
    result = checklname() && result;
    result = checkyear() && result;
    result = nationality() && result;
    result = checkpas1() && result;
    result = checkpass2() && result;
    result = checkhobi() && result;
    result = emailCheck() && result;
    return result;
}
function checkfname() {

    if (fname.value.length < 2) {
        div1.innerHTML = "שם פרטי צריך להיות גדול משני תווים";
        return false;
    }
    else {
        div1.innerHTML = "  ";
        return true;

    }
}
function checklname() {

    if (lname.value.length < 3) {
        div2.innerHTML = "שם משפחה צריך להיות גדול משלושה תווים";
        return false;
    }
    else {
        div2.innerHTML = "  ";
        return true;

    }
}
function checkyear() {

    if (year.value < 1900 || year > 2023) {
        div3.innerHTML = "השנה לא תקינה";
        return false;

    }
    else {
        div3.innerHTML = "  ";
        return true;

    }
}
function nationality() {
    if (ezrahut.checked || ezrahut1.checked) {
        div5.innerHTML = " ";
        return true;
    }
    else {
        div5.innerHTML = " נא לבחור אחת מהאזרחויות  ";
        return false;

    }
}
function checkpas1() {

    if (pas.value.length < 4) {
        div7.innerHTML = "הסיסמא צריכה להיות גדולה מ4 תווים";
        return false;
    }
    else {
        div7.innerHTML = "  ";
        return true;

    }
}
function checkpass2() {
    if (pas2.value == pas.value) {
        div8.innerHTML = " ";
        return true;
    }
    else {
        div8.innerHTML = "  ";
        return true;

    }
}
function checkhobi() {
    if (hobi.value.length < 15) {
        div10.innerHTML = " הרחב עוד ";
        return false
    }
    else {
        div10.innerHTML = "  ";
        return true;

    }
}
function emailCheck() {
    var size = email.value.length - 10;
    if (email.value.indexOf("@gmail.com") == size) {
        div17.innerHTML = " ";
        return true;
    }
    else {
        div17.innerHTML = "צריך להסתיים ב @gmail.com";
        return false;
    }
}
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; 
    return i;
}

function changeColor() {
    document.getElementById("ch").style.color = "red";
    document.getElementById("ch1").style.color = "red";
    document.getElementById("ch2").style.color = "red";
}
function changeColor1() {
    document.getElementById("ch").style.color = "white";
    document.getElementById("ch1").style.color = "white";
    document.getElementById("ch2").style.color = "white";
}
function checkReview() {
    if (goodReview.checked)
        alert("We are happy that you liked reading this page!");
    else if (okReview.checked)
        alert("We hope that you will like the rest of the pages:)");
    else
        alert("Sorry to hear that this page was bad and not interesting, move on to the next page :)");

}
