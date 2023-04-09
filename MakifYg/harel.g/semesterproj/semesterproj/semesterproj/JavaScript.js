function blackorwhite() {
    if (pstorytext.style.color == 'white')
        pstorytext.style.color = 'black';
    else
        pstorytext.style.color = 'white';

}
function picswitch(){
    var x = document.getElementById("pushup1").src;
    if (x.endsWith("images/pushup1.png")) {
        document.getElementById("pushup1").src = "images/pushup2.png";
        document.getElementById("dip").src = "images/dip2.png";
        document.getElementById("pullup").src = "images/pullup2.png";
        document.getElementById("squat").src = "images/squat2.png";
    }
    else {
        document.getElementById("pushup1").src = "images/pushup1.png";
        document.getElementById("dip").src = "images/dip1.png";
        document.getElementById("pullup").src = "images/pullup1.png";
        document.getElementById("squat").src = "images/squat1.png";
    }
}
//For men:
//BMR = 10W + 6.25H - 5A + 5
//For women:
//BMR = 10W + 6.25H - 5A - 161

function caloriecalc() {
    var A = age.value;
    var W = weight.value;
    var H = height.value;
    var E = activity.value;
    if (woman.checked == true) {
        document.getElementById("calories").innerHTML = "the amount of calories you burn daily is: " + ((10 * W + 6.25 * H - 5 * A - 161)*E);
    }
    else if (man.checked == true) {
        document.getElementById("calories").innerHTML = "the amount of calories you burn daily is: " + ((10 * W + 6.25 * H - 5 * A + 5) * E);
    }
    else
        document.getElementById("calories").innerHTML = "OOPS seems you didn't input your gender "
}
function shoppinglist() {
    document.getElementById("shoppinglist").innerHTML += document.getElementById("shopinp").value + "<br/>";
    document.getElementById("shopinp").value = "";
}
function checkvalues() {
    var result = checkname();
    result = checklname() && result;
    result = passwordveri() && result;
    return result

}
function checkname() {
    if (pname.value.length < 2) {
        document.getElementById("pnamecheck").innerHTML = "must have over two characters";
        return false;
    }
    else {
        return true;
    }
}
function checklname() {
    if (lname.value.length < 3) {
        lnamecheck.innerHTML = "must have over three characters";
        return false;
    }
    else {
        return true;
    }
}
function passwordveri() {
    if (passwordver.value == password.value) {
        return true;
    }
    else {
        document.getElementById("passwordcheck").innerHTML = "must be the same in both inputs"
        return false;
    }
}
function colorchange() {
    document.body.style.backgroundColor = colorpick.value;
}
function surprise() {
    alert("BOO! HAHHAHAHAHAH GOT YOUUUUU");
}
function clearsign() {
    lnamecheck.innerHTML = "";
    pnamecheck.innerHTML = "";
    passwordcheck.innerHTML = "";

}