function CheckValiues() {
    var resault = CheckEmail();
    resault = FNamet() && resault;
    resault = LNamet() && resault;
    resault = passequal() && resault;
    resault = checkboxses() && resault;
    return resault;
}
function CheckEmail() {
    var email = Email.value;
    if (email.includes("@")) {
        return true;
    }
    return false;
}
function FNamet() {
    var name = FName.value.length;
    if (FName.value.length < 1) {
        FND.innerHTML = " required"
    }
    else {
        if (name < 2) {
            return false;
        }
    }
    
    return true;
}
function LNamet() {
    var lname = LName.value.length;
    if (LName.value.length < 1) {
        LND.innerHTML = " required"
    }
    else {
        if (lname < 2) {
            return false;
        }
    }
    return true;
}
function passequal() {
    
    var PASS1 = pass1.value;
    var PASS2 = pass2.value;
    if (PASS1 == PASS2) {
        return true;
    }
    P_A.innerHTML = "the passwords are not the same";
    return false;
}
function checkboxses() {
    var check1 = ch1.value;
    var check2 = ch2.value;
    var check3 = ch3.value;
    if (check1 == check2 && check1 == check3) {
        checkback.innerHTML = "Grate! ;-)";
        return true;
    }
    else {
        if (check2 == check3 && check2 != check1) {
            checkback.innerHTML = "Grate! ;-) but why not plaing by your self?";
            return true;
        }
        else {
            if (check1 == check3 && check1 != check2) {
                checkback.innerHTML = "Grate! ;-) and thanks for your answer";
                return true;
            }
        }
    }
    return false
}