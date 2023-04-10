document.addEventListener("DOMContentLoaded", function() {
   // open the modal when the page loads
   const modal = document.querySelector(".modal");
   modal.showModal();
 
   // got to newsletter
   const button = document.querySelector("#newsletterOpen");
   button.addEventListener("click", function() {
     window.open("https://news-letter-signup.onrender.com/", "_blank");
     modal.close;
     setTimeout(function() {
      modal.close();
   }, 500);
   });
 
   // close btn
   const button2 = document.querySelector("#close-button")
   button2.addEventListener("click", function(){
    modal.close();
    //  modal.style.display = "none"
   })
 });

 // name
 function inputGroup1Check() {
  var inputG1 = document.getElementById("input-group-1");
  var inputG1V = inputG1.value;
  if (inputG1V) {
    alert
    return true;
  } else {
    document.getElementById("error-G1").innerHTML="Error: you must fill out this field";
    return false;
  }
}
//last name
function inputGroup1_1Check() {
  var inputG11 = document.getElementById("input-group-1-1");
  var inputG11V = inputG11.value;
  if (inputG11V) {
    return true;
  } else {
    document.getElementById("error-G1-1").innerHTML="Error: you must fill out this field";
    return false;
  }
}
//user name
function inputGroup2Check() {
  var inputG2 = document.getElementById("input-group-2");
  var inputG2V = inputG2.value;
  if (inputG2V.length >= 4 && inputG2V.length <= 16) {
    return true;
  } else {
    document.getElementById("error-G2").innerHTML="Error: user name must be between 4-16 characters";
    return false;
  }
}
//email
function inputGroup3Check() {
  var inputG3 = document.getElementById("input-group-3");
  var inputG3V = inputG3.value;
  if (inputG3V.includes("@") && inputG3V.indexOf("@") != 0) {
    return true;
  } else {
    document.getElementById("error-G3").innerHTML="Error: incorrect email format please type a correct email address";
    return false;
  }
}

function inputGroup4Check() {
  var inputG4 = document.getElementById("input-group-4");
  var inputG4V = inputG4.value;
  if (inputG4V) {
    return true;
  } else {
    document.getElementById("error-G4").innerHTML="Error: you must fill out this field";
    return false;
  }
}
function inputGroup5Check() {
  var inputG5 = document.getElementById("input-group-5");
  var inputG5V = inputG5.value;
  const decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
  if (inputG5V.match(decimal)) {
    return true;
  } else {
    document.getElementById("error-G5").innerHTML="Error: password must be between 8-16 charachters and must include at least: one lowercase letter, one uppercase letter, one numeric digit, and one special character";
    return false
  }
}

function inputGroup6Check() {
  var inputG5V = inputG5.value;
  var inputG5 = document.getElementById("input-group-5");
  var inputG6 = document.getElementById("input-group-6");
  var inputG6V = inputG6.value;
  if (inputG6V== inputG5V) {
    return true;
  } else {
    document.getElementById("error-G6").innerHTML="Error: password does not match and must be between 8-16 charachters and must include at least: one lowercase letter, one uppercase letter, one numeric digit, and one special character";
    return false;
  }
}
function inputGroup7Check(){
  if (document.getElementById("input-group-7-1").checked || document.getElementById("input-group-7-2").checked || document.getElementById("input-group-7-3").checked) {
    return true
  } else {
    document.getElementById("error-G7").innerHTML="you must check one of the options";
    return false
  }
}

function inputGroup8Check() {
  var inputG8 = document.getElementById("input-group-8");
  var inputG8V = inputG8.value;
  if (inputG8V) {
    return true;
  } else {
    document.getElementById("error-G8").innerHTML="Error: you must fill out this field";
    return false;
  }
}

function healthCheck() {
  var inputGroup1Result = inputGroup1Check();
  var inputGroup1_1Result = inputGroup1_1Check();
  var inputGroup2Result = inputGroup2Check();
  var inputGroup3Result = inputGroup3Check();
  var inputGroup4Result = inputGroup4Check();
  var inputGroup5Result = inputGroup5Check();
  var inputGroup6Result = inputGroup6Check();
  var inputGroup6Result = inputGroup7Check();
  var inputGroup6Result = inputGroup8Check();


  if (!inputGroup1Result) {
    return false;
  }
  if (!inputGroup1_1Result) {
    return false;
  }
  if (!inputGroup2Result) {
    return false;
  }
  if (!inputGroup3Result) {
    return false;
  }
  if (!inputGroup4Result) {
    return false;
  }
  if (!inputGroup5Result) {
    return false;
  }
  if (!inputGroup6Result) {
    return false;
  }
  return true;
}

