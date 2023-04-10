
//LOGIN PAGE---------------------------
function checkright() {

    
    var result = checkFname();
    if (result == true)
        result = checkLname();
    if (result == true)
        result = username1();
    if (result == true)
        result = checkPassword();  
    if (result == true) 
        result = checkDate();
    if (result == true)
        result = checkEmail();
    return result;
}


function checkPassword() {
    
    if (password1.value != password2.value) {
        document.getElementById("notmatchingp").innerHTML = "Not Matching Passwords";    
        return false;
       
    }
    else {
        document.getElementById("notmatchingp").innerHTML = "";
        return true;
    }
}

function checkDate() {
    if (yearofbirth.value >= 2009 || yearofbirth.value < 1900 ) {
        document.getElementById("datemsg1").innerHTML = "Please insert as correct date! Bewteen 1900 - 2009.";
        return false;

    }
    else {
        document.getElementById("datemsg1").innerHTML = "";
        return true;
    }
}
function checkFname() {
    if (firstname.value == "" || firstname.value == "First Name" || firstname.value.length < 2) {
        document.getElementById("firstnamecheck").innerHTML = "Please write a first name with more the 2 letters";
        return false;
    }
    else {
        document.getElementById("firstnamecheck").innerHTML = "";
        return true;
    }
}
function checkLname() {
    if (lastname.value == "" || lastname.value == "Last Name" || lastname.value.length < 2) {
        document.getElementById("lastnamecheck").innerHTML = "Please write a last name with more the 2 letters";
        return false;
    }
    else {
        document.getElementById("lastnamecheck").innerHTML = "";
        return true;
    }
}

function username1() {
    if (username.value == "" || username.value == "username" || username.value.length < 2) {
        document.getElementById("usernamediv").innerHTML = "Please write a username with more the 2 letters";
        return false;
    }
    else {
        document.getElementById("usernamediv").innerHTML = "";
        return true;
    }
}


function checkEmail() {
    let email = document.getElementById("email").value;
    let divvalidemail = document.getElementById("notvalidemail");
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        divvalidemail.innerHTML = "Invalid email address, Please enter a @ and non other characters.";
        return false;
    } else {
        divvalidemail.innerHTML = "";
        return true;
    }
}



//---------------------------------------------------------

//SCROLL TO TOP BUTTON:
const scrolltotop = () => window.scrollTo({ top: 0, behavior: "smooth" })
//-----------------







//YOUR WORKOUT PAGE:
window.onload = function () {
    let collapseButton = document.getElementById("collapseButton");
    let collapseContent = document.getElementById("collapseContent");
    let exerciseDisplay = document.getElementById("exerciseDisplay");

    if (!collapseButton) {
        console.error("Element with id 'collapseButton' not found");
    } else {
        collapseButton.addEventListener("click", function () {
            if (collapseContent.style.display === "none") {
                collapseContent.style.display = "";
            } else {
                collapseContent.style.display = "none";
            }
        });
    }

    if (!collapseContent) {
        console.error("Element with id 'collapseContent' not found");
    }

    if (!exerciseDisplay) {
        console.error("Element with id 'exerciseDisplay' not found");
    } else {
        let buttons = document.querySelectorAll("#collapseContent button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                if (!this.classList.contains("selected")) {
                    this.classList.add("selected");
                    exerciseDisplay.innerHTML += this.innerHTML + "<br>";
                }
            });
        }
    }
};



function resetyourworkout() {
    document.getElementById("exerciseDisplay").innerHTML = " ";
    return;
}
//--------------------------------------------------------------------------------

//MAIN PAGE


function changeColor() {
    var colorInput = document.getElementById("colorinputmain");
    var color = colorInput.value;

    var colorContainer1 = document.getElementById("colorchangediv");
    var colorContainer2 = document.getElementById("colorchangediv1");
    colorContainer1.style.color = color;
    colorContainer2.style.color = color;
}

//---------------