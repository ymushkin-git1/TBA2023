var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("ul").style.top = "0";
    } else {
        document.getElementById("ul").style.top = "-71px";
    }
    prevScrollpos = currentScrollPos;
}

var modal = document.getElementById('id1');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function FirstName() {
    if (Fname.value.length < 2) {
        div1.innerHTML = "The name must be at least 2 characters long";
        return false;
    }
    else {
        div1.innerHTML = " ";
        return true;
    }
}

function LastName() {
    if (Lname.value.length < 2) {
        div2.innerHTML = "The last name must be at least 3 characters long characters long";
        return false;
    }
    else {
        div2.innerHTML = " ";
        return true;
    }
}

function YearBorn() {
    if (yborn.value > 2023 || yborn.value < 1904) {
        div3.innerHTML = "The year of birth must be between 1904 and 2023";
        return false;
    }
    else {
        div3.innerHTML = " ";
        return true;
    }
}

function Gender() {
    if (female.checked || male.checked || other.checked) {
        div4.innerHTML = " ";
        return true;
    }
    else {
        div4.innerHTML = "You must choose one of the options";
        return false;
    }
}

function CheckEmail() {
    var text = email.value;
    if (text.includes("@gmail.com") == true) {
        div5.innerHTML = " ";
        return true;
    }
    else {
        div5.innerHTML = "Address must end with - @gmail.com";
        return false;
    }
}

function CheckPassword() {
    if (password.value.length <= 8) {
        div6.innerHTML = "The password must be at least 8 characters long";
        return false;
    }
    else {
        div6.innerHTML = " ";
        return true;
    }
}

function CheckVpassword() {
    if (password.value == Vpassword.value) {
        div7.innerHTML = " ";
        return true;
    }
    else {
        div7.innerHTML = "The password verification is different from the password";
        return false;
    }
}

function ending() {
    var result = true;
    result = FirstName() && result;
    result = LastName() && result;
    result = YearBorn() && result;
    result = Gender() && result;
    result = CheckEmail() && result;
    result = CheckPassword() && result;
    result = CheckVpassword() && result;
    return result;
}