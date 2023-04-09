function CheckFirstName() {
    var x = FirstName.value;

    if (x.length > 2)
        return true;
    else {
        div1.innerHTML = "You must enter at least 2 characters";
        return false;
    }
}

function CheckLastName() {
    var x = LastName.value;

    if (x.length > 2)
        return true;
    else {
        div2.innerHTML = "You must enter at least 2 characters";
        return false;
    }
}

function CheckEmail() {
    var check = Email.value.includes("@gmail.com");
    if (check == false) {
        div3.innerHTML = "gmail is not valid";
        return false;
    }
    else {
        if (Email.value.indexOf("@") != 0) {
            div3.innerHTML = "valid";
            return true;
        }
        else
            return false;
    }
}

function CheckUserName() {
    var x = UserName.value;

    if (x.length > 2)
        return true;
    else {
        div4.innerHTML = "You must enter at least 2 characters";
        return false;
    }
}

function Checkcitizenship() {
    if (idIsraeli.checked || idOther.checked)
        return true;
    else {
        div9.innerHTML = "You must Choose at least one option";
        return false;
    }
}

function Checkgender() {
    if (idMale.checked || idFemale.checked) {
        return true;
        div7.innerHTML = " ";
    }
    else {
        div7.innerHTML = "You must Choose at least one option";
        return false;
    }
}

function CheckPassWord() {
    var p = Password.value;
    if (p.length >= 4)
        return true;
    else {
        div5.innerHTML = "Password must be longer than 4 characters";
        return false;
    }
}

function CheckPasswordAuthentication() {
    if (Password.value = CheckPassword.value)
        return true;
    else {
        div6.innerHTML = "Does not match with the password";
        return false;
    }
}

function CheckCity() {
    if (Rishon.selected || Jerusalem.selected || Telaviv.selected || Ashdod.selected)
        return true;
    else {
        div8.innerHTML = "You must choose one of the options";
        return false;
    }
}

function CheckNumber() {
    var n = myNumber.value;
    if (n > 0 && n <= 10)
        return true;
    else {
        div10.innerHTML = "You must enter a rating between 1 and 10";
        return false;
    }
}

function clearMessages() {
    div1.innerHTML = "";
    div2.innerHTML = "";
    div3.innerHTML = "";
    div4.innerHTML = "";
    div5.innerHTML = "";
    div6.innerHTML = "";
    div7.innerHTML = "";
    div8.innerHTML = "";
    div9.innerHTML = "";
    div10.innerHTML = "";
}

function CheckValues() {
    clearMessages();
    var result = CheckFirstName();
    result = CheckLastName() && result;
    result = CheckEmail() && result;
    result = Checkcitizenship() && result;
    result = Checkgender() && result;
    result = CheckPassWord() && result;
    result = CheckPasswordAuthentication() && result;
    result = CheckUserName() && result;
    result = CheckCity() && result;
    result = CheckNumber() && result;
    return result;
}