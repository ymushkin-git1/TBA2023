document.addEventListener('click', mp);
function mp() {
    document.getElementById('a').play();
}
function c() {
    var name = document.getElementById("name").value
    var lname = document.getElementById("lname").value
    var age = document.getElementById("age").value
    var date = document.getElementById("date").value
    var gen = document.getElementById("gen").value
    var ar = document.getElementById("ar").value
    var email = document.getElementById("email").value
    var nickname = document.getElementById("nickname").value
    var pass = document.getElementById("pass").value
    var pass2 = document.getElementById("pass2").value
    var c1 = document.getElementById("c1").checked
    var c2 = document.getElementById("c2").checked
    var c3 = document.getElementById("c3").checked
    if (name.length < 2) {
        document.getElementById("name").style.border = "5px solid darkred";
        document.getElementById("e1").innerHTML ="Name must contain at least 2 characters"
        return false;
    }
    else {
        document.getElementById("name").style.border = "5px solid forestgreen";
        document.getElementById("e1").innerHTML = ""
    }
    if (lname.length < 3) {
        document.getElementById("lname").style.border = "5px solid darkred";
        document.getElementById("e2").innerHTML = "Last Name must contain at least 3 characters"

        return false;
    }
    else {
        document.getElementById("lname").style.border = "5px solid forestgreen";
        document.getElementById("e2").innerHTML = ""
    }
    if (age < 6 && age != 0) {
        document.getElementById("age").style.border = "5px solid darkred";
        if (age < 0)
            document.getElementById("e3").innerHTML = "Age cannot be negative"
        else {
            document.getElementById("e3").innerHTML = "You have to say you are over 6 years old"
        }
        return false;
    }
    else {
        document.getElementById("e3").innerHTML = ""
        date = [date[0], date[1], date[2], date[3]]
        date = date.join('');
        parseInt(date);
        if (2023 - date != age && date != "") {
            document.getElementById("age").style.border = "5px solid darkred";
            document.getElementById("date").style.border = "5px solid darkred";
            document.getElementById("e4").innerHTML = "Date does not match age"
            return false;
        }
        else {
            document.getElementById("age").style.border = "5px solid forestgreen";
            document.getElementById("date").style.border = "5px solid forestgreen";
            document.getElementById("e4").innerHTML = ""
        }
    }
    document.getElementById("gen").style.border = "5px solid forestgreen";
    if (ar == "op") {
        document.getElementById("ar").style.border = "5px solid darkred";
        document.getElementById("e5").innerHTML = "You must to choose"
        return false;
    }
    else {
        document.getElementById("ar").style.border = "5px solid forestgreen";
        document.getElementById("e5").innerHTML = ""
    }
    if (email.length < 13) {
        document.getElementById("email").style.border = "5px solid darkred";
        document.getElementById("e6").innerHTML = "Invalid email"
        return false;
    }
    else {
        document.getElementById("email").style.border = "5px solid forestgreen";
        document.getElementById("e6").innerHTML = ""
    }
    if (nickname.length < 5) {
        document.getElementById("nickname").style.border = "5px solid darkred";
        document.getElementById("e7").innerHTML = "Nickname should be at least 5 characters"
        return false;
    }
    else {
        document.getElementById("nickname").style.border = "5px solid forestgreen";
        document.getElementById("e7").innerHTML = ""
    }
    if (pass.length < 8) {
        document.getElementById("pass").style.border = "5px solid darkred";
        document.getElementById("pass2").style.border = "5px solid darkred";
        document.getElementById("e8").innerHTML = "Password cannot be shorter than 8 characters"
        return false;
    }
    else {
        if (pass != pass2) {
            document.getElementById("pass2").style.border = "5px solid darkred";
            document.getElementById("e9").innerHTML = "Passwords do not match"
            document.getElementById("e8").innerHTML = ""
            return false;
        }
        else {
            document.getElementById("pass").style.border = "5px solid forestgreen";
            document.getElementById("pass2").style.border = "5px solid forestgreen";
            document.getElementById("e9").innerHTML = ""
        }
    }
    if (c1 != true) {
        document.getElementById("tu").style.color = "darkred";
        document.getElementById("e10").innerHTML = "Confirm all terms of use"
        return false;
    }
    else {
        if (c2 != true) {
            document.getElementById("tu").style.color = "darkred";
            document.getElementById("e10").innerHTML = "Confirm all terms of use"

            return false;
        }
        else {
            if (c3 != true) {
                document.getElementById("tu").style.color = "darkred";
                document.getElementById("e10").innerHTML = "Confirm all terms of use"

                return false;
            }
            else {
                return true;
            }
        }
    }
}
document.getElementById("reset").onclick = function () {
    window.location.replace("form.html")
}
