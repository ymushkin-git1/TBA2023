//function myfunction() {
//    var first = prompt(" הכנס את סכום השקלים שאתה רוצה להמיר ליורו");
//    ("השקלים ששמת הופכים ל" + first / 3.7273 + "€");
//}


function login() {
	var fname = document.getElementById("fname1").value;
	var lname = document.getElementById("lname1").value;
	var uname = document.getElementById("email").value;
	var pwd = document.getElementById("pwd1").value;
	var pwds = document.getElementById("pwd2").value;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (uname == '') {
		alert("please enter Email name.");
	}
	else if (fname == '') {
		alert("Please Enter Your First Name");
	}
	else if (fname.length<2) {
		alert("Enter a your first name must be with more then 2 letters.");
	}
	else if (lname.length < 2) {
		alert("Enter a your Last name must be with more then 2 letters.");
	}
	else if (pwd == '') {
		alert("enter the password");
	}
	else if (!filter.test(uname)) {
		alert("Enter valid email id.");
	}
	else if (pwd.length < 6) {
		alert("Password min length is 6.");
	}
	else if (pwds!= pwd) {
		 alert("Passwords Dont Match.")
	}
	else {
		alert('Thank You for Login & You are Redirecting to Campuslife Website');
	}
}

function clearFunc() {
	document.getElementById("email").value = "";
	document.getElementById("pwd1").value = "";
	document.getElementById("pwd2").value = "";
}	