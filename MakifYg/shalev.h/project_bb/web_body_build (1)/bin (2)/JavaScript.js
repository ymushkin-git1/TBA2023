function calculate() {
    ans.innerHTML = ""
    var x = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    if (x == "men") {
        var y = document.getElementById("trainings").value;
        if (y == "no")
            var z = 1.2;
        else {
            if (y == "one to three")
                var z = 1.55;
            else {
                if (y == "four to five")
                    var z = 1.725
                else {
                    var z = 1.9

                }
            }
        }
        var calories = ((66 + weight * 13.8 + height * 5 - age * 6.8) * z)
        ans.innerHTML = ("כמות הקלוריות שגופך שורף ביום היא בערך" + calories + " " + "קלוריות")
    }
    else {
        var y = document.getElementById("trainings").value;
        if (y == "no")
            var z = 1.2;
        else {
            if (y == "one to three")
                var z = 1.55;
            else {
                if (y == "four to five")
                    var z = 1.725
                else {
                    var z = 1.9

                }
            }
        }
        var calories = ((655 + weight * 9.6 + height * 1.8 - age * 4.7) * z)
        ans.innerHTML = ("כמות הקלוריות שגופך שורף ביום היא בערך" + calories + " " + "קלוריות")
    }
}
function fcolor_3() {
    document.body.style.backgroundColor = color_3.value;
}
function ftcolor_3() {
    document.body.style.color = tcolor_3.value;
}
function ftextsmall_3() {
    document.getElementById("bench").style.fontSize = "20px";
    document.getElementById("dbench").style.fontSize = "20px";
    document.getElementById("butterfly").style.fontSize = "20px";
    document.getElementById("backhand").style.fontSize = "20px";
    document.getElementById("dips").style.fontSize = "20px";
}
function ftextbig_3() {
    document.getElementById("bench").style.fontSize = "100px";
    document.getElementById("dbench").style.fontSize = "100px";
    document.getElementById("butterfly").style.fontSize = "100px";
    document.getElementById("backhand").style.fontSize = "100px";
    document.getElementById("dips").style.fontSize = "100px";
}

function fcolor_4() {
    document.body.style.backgroundColor = color_4.value;
}
function ftcolor_4() {
    document.body.style.color = tcolor_4.value;
}
function ftextsmall_4() {
    document.getElementById("hatira").style.fontSize = "20px";
    document.getElementById("hatirap").style.fontSize = "20px";
    document.getElementById("pullups").style.fontSize = "20px";
    document.getElementById("byceps").style.fontSize = "20px";
    document.getElementById("hammers").style.fontSize = "20px";
}
function ftextbig_4() {
    document.getElementById("hatira").style.fontSize = "100px";
    document.getElementById("hatirap").style.fontSize = "100px";
    document.getElementById("pullups").style.fontSize = "100px";
    document.getElementById("byceps").style.fontSize = "100px";
    document.getElementById("hammers").style.fontSize = "100px";
}
function fcolor_5() {
    document.body.style.backgroundColor = color_5.value;
}
function ftcolor_5() {
    document.body.style.color = tcolor_5.value;
}
function ftextsmall_5() {
    document.getElementById("squat").style.fontSize = "20px";
    document.getElementById("deadlift").style.fontSize = "20px";
    document.getElementById("galil").style.fontSize = "20px";
    document.getElementById("legpress").style.fontSize = "20px";
    document.getElementById("hiptrust").style.fontSize = "20px";
}
function ftextbig_5() {
    document.getElementById("squat").style.fontSize = "100px";
    document.getElementById("deadlift").style.fontSize = "100px";
    document.getElementById("galil").style.fontSize = "100px";
    document.getElementById("blegpress").style.fontSize = "100px";
    document.getElementById("hiptrust").style.fontSize = "100px";
}
function fcolor_2() {
    document.body.style.backgroundColor = color_2.value;
}
function ftcolor_2() {
    document.body.style.color = tcolor_2.value;
}
function fcolor_main() {
    document.body.style.backgroundColor = color_main.value;
}
function ftcolor_main() {
    document.body.style.color = tcolor_main.value;
}
function fcolor_6() {
    document.body.style.backgroundColor = color_6.value;
}
function ftcolor_6() {
    document.body.style.color = tcolor_6.value;
}
function ftcolor_7() {
    document.body.style.color = tcolor_7.value;
}
function ftcolor_8() {
    document.body.style.color = tcolor_8.value;
}
function ftcolor_9() {
    document.body.style.color = tcolor_9.value;
}
