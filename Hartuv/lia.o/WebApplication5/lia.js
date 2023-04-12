

function ega() {
    var fname = document.getElementById("FirstName").value;
    if (fname.length > 2) {
        return true;
    }
    else {
        div1.innerHTML = "your First Name must be long than 2 characters";
        return false;
    }
    var lname = document.getElementById("lastname").value;
    if (lname.length > 2) {
        return true;
    }
    else {
        div2.innerHTML = "your last Name must be long than 2 characters";
        return false;
    }



}

