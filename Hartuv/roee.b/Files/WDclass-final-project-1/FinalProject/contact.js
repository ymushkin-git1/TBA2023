function input1(){
  var input1 = document.getElementById("name");
  var input1V = input1.value;
  if (input1V) {
    return true;
  } else {
    document.getElementById("error-1").innerHTML="Error: you must fill out this field";
    return false;
  }
}
function input2(){
    var input2 = document.getElementById("email");
    var input2V = input2.value;
    if (input2V.includes("@") && input2V.indexOf("@") != 0) {
      return true;
    } else {
      document.getElementById("error-2").innerHTML="Error: incorrect email format please type a correct email address";
      return false;
    }
}
function input3(){
    var input3 = document.getElementById("message");
    var input3V = input3.value;
    if (input3V) {
      return true;
    } else {
      document.getElementById("error-3").innerHTML="Error: you must fill out this field";
      return false;
    }
  }





function verify(){
  var input1R=input1();
  var input2R=input2();
  var input3R=input1();

  if (!input1R) {
    return false;
  }
  if (!input2R) {
    return false;
  }
  if (!input3R) {
    return false;
  }

}

