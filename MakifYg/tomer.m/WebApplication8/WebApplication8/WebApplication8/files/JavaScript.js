//page1
//joke1
function like() {
    if (joke1.style.backgroundColor != "lightgreen") {
        joke1.style.backgroundColor = "lightgreen";
    }     
    else
        joke1.style.backgroundColor = "transparent";

}

function left() {
    if (joke1.style.textAlign != "center" && joke1.style.textAlign != "left")
        joke1.style.textAlign = "center";
    else
        if (joke1.style.textAlign == "center")
            joke1.style.textAlign = "left";
}

function right() {

    if (joke1.style.textAlign != "center" && joke1.style.textAlign != "right")
        joke1.style.textAlign = "center";
    else
        if (joke1.style.textAlign == "center")
            joke1.style.textAlign = "right";
}

//joke2
function like2() {
    if (joke2.style.backgroundColor != "lightgreen") {
        joke2.style.backgroundColor = "lightgreen";
    }
    else
        joke2.style.backgroundColor = "transparent";

}

function left2() {
    if (joke2.style.textAlign != "center" && joke2.style.textAlign != "left")
        joke2.style.textAlign = "center";
    else
        if (joke2.style.textAlign == "center")
            joke2.style.textAlign = "left";
}

function right2() {

    if (joke2.style.textAlign != "center" && joke2.style.textAlign != "right")
        joke2.style.textAlign = "center";
    else
        if (joke2.style.textAlign == "center")
            joke2.style.textAlign = "right";
}

//joke3
function like3() {
    if (joke3.style.backgroundColor != "lightgreen") {
        joke3.style.backgroundColor = "lightgreen";
    }
    else
        joke3.style.backgroundColor = "transparent";

}

function left3() {
    if (joke3.style.textAlign != "center" && joke3.style.textAlign != "left")
        joke3.style.textAlign = "center";
    else
        if (joke3.style.textAlign == "center")
            joke3.style.textAlign = "left";
}

function right3() {

    if (joke3.style.textAlign != "center" && joke3.style.textAlign != "right")
        joke3.style.textAlign = "center";
    else
        if (joke3.style.textAlign == "center")
            joke3.style.textAlign = "right";
}

//joke4
function like4() {
    if (joke4.style.backgroundColor != "lightgreen") {
        joke4.style.backgroundColor = "lightgreen";
    }
    else
        joke4.style.backgroundColor = "transparent";

}

function left4() {
    if (joke4.style.textAlign != "center" && joke4.style.textAlign != "left")
        joke4.style.textAlign = "center";
    else
        if (joke4.style.textAlign == "center")
            joke4.style.textAlign = "left";
}

function right4() {

    if (joke4.style.textAlign != "center" && joke4.style.textAlign != "right")
        joke4.style.textAlign = "center";
    else
        if (joke4.style.textAlign == "center")
            joke4.style.textAlign = "right";
}

//joke5
function like5() {
    if (joke5.style.backgroundColor != "lightgreen") {
        joke5.style.backgroundColor = "lightgreen";
    }
    else
        joke5.style.backgroundColor = "transparent";

}

function left5() {
    if (joke5.style.textAlign != "center" && joke5.style.textAlign != "left")
        joke5.style.textAlign = "center";
    else
        if (joke5.style.textAlign == "center")
            joke5.style.textAlign = "left";
}

function right5(){

    if (joke5.style.textAlign != "center" && joke5.style.textAlign != "right")
        joke5.style.textAlign = "center";
    else
        if (joke5.style.textAlign == "center")
            joke5.style.textAlign = "right";
}


//page2
function color1() {

    krsh1.style.color = col.value;
   
}

function backgroundcolor1() {

    krsh1.style.backgroundColor = bcol.value;

}

function ipus() {
    krsh1.style.backgroundColor = "transparent";
    krsh1.style.color = "black";
    document.body.style.backgroundImage = "url(../images/1-56.jpg)"
}


function keresh() {
    document.body.style.backgroundImage = "url(../images/photo.jpg)";
}


//page3
function color2() {
    if (document.body.style.backgroundColor != "black")
        document.body.style.backgroundColor = "black";
    else
        document.body.style.backgroundColor = "white";
}


//page4 
function pic() {

    table1.style.backgroundColor = picolor.value;
    body4.style.backgroundColor = picolor.value;
}


//page5
function question() {
    if (op1.checked) {
        question1.innerHTML = "correct";
        question1.style.color = "black";
        question1.style.backgroundColor = "forestgreen";

    }
    else
        if (op2.checked) {
            question1.innerHTML = "incorrect";
            question1.style.color = "black";
            question1.style.backgroundColor = "red";
        }
        else {
            question1.style.color = "red";
            question1.innerHTML = "must choose an answer";
            
        }
       
   
}


//page6
function song(){
    var x = song1.value;
    alert(song1.value +" is a very good song");
}



//page7
 function checkFirstName() {
           var x = firstname.value;

           if (x.length >= 2){
               return true;
               msg1.innerHTML = " ";
           }
           else {
               msg1.innerHTML = "First Name must be long than 2 characters";
               return false;
           }

 }


       function checkLastName() {
           var x = lastname.value;

           if (x.length >= 2) {
               return true;
               msg2.innerHTML = " ";
           }
               
           else {
               msg2.innerHTML = "Last Name must be long than 2 characters";
               return false;
           }

       }

       function country() {
           if (israel.checked || other.checked) {
               return true;
               msg3.innerHTML = " ";
           }
           else {
               msg3.innerHTML = "Must Choose at least one option";
               return false;
           }
       }

       function genderr() {
           if (male.checked || female.checked || othergender.checked) {
               return true;
               msg4.innerHTML = " ";
           }
           else {
               msg4.innerHTML = "Must Choose at least one option";
               return false;
           }
       }

       function PassWord() {
           var p = password.value;
           if (p.length >= 2) {
               return true;
               msg5.innerHTML = " ";
           }
           else {
               msg5.innerHTML = "Password must be long than 2 characters";
               return false;
           }
       }

       function CheckPassword() {
           if (password.value == check_password.value) {
               return true;
               msg6.innerHTML = " ";
           }
           else {
               msg6.innerHTML = "does not match with the previous password";
               return false;
           }
       }

       function hobbie() {
           var x = hobbies.value;
           if (x.length >= 1) {
               return true;
               msg8.innerHTML = " ";
           }
           else {
               msg8.innerHTML = "must write at least one word";
               return false;
           }
       }

        function Email() {
            var x = mail.value;
            if (x.includes("@") && x.length > 2) {
                return true;
                msg9.innerHTML = " ";
            }
            else {
                msg9.innerHTML = "Email incorrect";
                return false;
            }
        }


       function CheckFavWord() {
           var x = FavWord.value;
           if (x.length > 1) {
               return true;
               msg10.innerHTML = " ";
           }
           else {
               msg10.innerHTML = "must write a word";
               return false;
           }
       }


       function Checks() {
           var result = checkFirstName();
           result = checkLastName() && result;
           result = country() && result;
           result = genderr() && result;
           result = PassWord() && result;
           result = Email() && result;
           result = CheckPassword() && result;
           result = hobbie() && result;
           result = CheckFavWord() && result;
           return result;
        }  