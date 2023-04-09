//שם פרטי
function FirstName() {
    if (fname.value.length < 2) {
        div1.innerHTML = " please write 2+ letters";

        return false;
    }
    else {
        div1.innerHTML = " ";
        return true;
    }
}
//שם משפחה
function LastName() {
    if (lname.value.length < 3) {
        div2.innerHTML = " please write 2+ letters";
        return false;
    }
    else {
        div2.innerHTML = " ";
        return true;
    }
}
//אימייל
function emailCheck() {
    var size = email.value.length - 10;
    if (email.value.indexOf("@gmail.com") == size) {
        div3.innerHTML = " ";
        return true;
    }
    else {
        div3.innerHTML = "צריך להסתיים ב @gmail.com";
        return false;
    }
}

//אזרחות
function nationality() {
    if (ezrahut.checked || ezrahut1.checked) {
        div4.innerHTML = " ";
        return true;
    }
    else {
        div4.innerHTML = "please choose one from the options";
        return false;
    }
}
//מגדר
function gender() {
    if (female.checked || male.checked || other.checked) {
        div5.innerHTML = " ";
        return true;
    }
    else {
        div5.innerHTML = "please choose one from the options";
        return false;
    }
}

//סיסמה
function password() {
    if (password1.value.length <= 8) {
        div6.innerHTML = "please write 8+ letters";
        return false;
    }
    else {
        div6.innerHTML = " ";
        return true;
    }
}
//אימות סיסמה
function vpassword() {
    if (password1.value == vipassword.value) {
        div7.innerHTML = " ";
        return true;
    }
    else {
        div7.innerHTML = "the verified are not same as the password";
        return false;
    }
   
}
//סרטים אהובים
function movies() {
    if (movies1.value.length < 5) {
        div9.innerHTML = "please write more letters";
        return false;
    }
    else {
        div9.innerHTML = " ";
        return true;
    }
}
//סוג סרט
function movieType() {
    if (movie3.checked || movie4.checked || movie5.checked || movie5.checked) {
        div10.innerHTML = "  ";
        return true;
    }
    else {
        div10.innerHTML = "please select one type from the list";
        return false;
    }
}


//בדיקה סופית
function ending() {
    var result = true;
    result = FirstName() && result;
    result = LastName() && result;
    result = emailCheck() && result;
    result = nationality() && result;
    result = gender() && result;
    result = password() && result;
    result = vpassword() && result;
    result = movies() && result;
    result = movieType() && result;
    return result;
}
//more functions



function forget() {
    alert("dont forget to sign up")
}


function thankful() {
    alert("thanks for sign up,enjoy with ours movies")
}


function colorCH() {
    document.getElementById("inLines").style.color = "black";
}

function backCH() {
    backch.style.backgroundColor = "black";
}

function secretch() {
    secret.innerHTML = "this movie are made in 1964!";
}

function backColor() {
    poof.style.backgroundColor = "black";
}

function scamm() {
    document.getElementById("scam").style.display = "none";
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clocki').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
