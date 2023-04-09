function page1(){
    start.innerHTML = "Get started";
    start2.innerHTML = "To get started click here: ---> ";
    start3.innerHTML = "Creat my own BBC";
    read.innerHTML = "Menu";
    read2.innerHTML = "To read the menu click here ---> ";
    read3.innerHTML = "menu";
    document.getElementById("start2").scrollIntoView();
}
function nutrition() {
    var x = serving.value;
    cgrams.innerHTML = 56 * x;
    C.innerHTML = 151 * x;
    tfgrams.innerHTML = 2.5 * x;
    tfat.innerHTML = 4 * x;
    Sfgrams.innerHTML = 0.5 * x;
    Sfat.innerHTML = 3 * x;
    Tfgrams.innerHTML = 0 * x;
    Pfgrams.innerHTML = 1 * x;
    Mfgrams.innerHTML = 0.4 * x;
    Chgrams.innerHTML = 0 * x;
    Chole.innerHTML = 0 * x;
    Sograms.innerHTML = 239 * x;
    Sod.innerHTML = 10 * x;
    Pograms.innerHTML = 136 * x;
    Pota.innerHTML = 4 * x;
    Tcgrams.innerHTML = 25 * x;
    Totc.innerHTML = 8 * x;
    Dief.innerHTML = 3.4 * x;
    Suga.innerHTML = 3.3 * x;
    Prot.innerHTML = 6.9 * x;
}
function checkRadio() {
    if (Wheatbun.checked) {
        document.getElementById("divbun").src = "../../images/lastp/LP1wheatbun.png"
        document.getElementById("divbun2").src = "../../images/lastp/LP2wheatbun.png"
    }
    if (WWheatbun.checked) {
        document.getElementById("divbun").src = "../../images/lastp/LP1wholewheatbun.png"
        document.getElementById("divbun2").src = "../../images/lastp/LP2wholewheatbun.png"
    }

    if (Briochebun.checked) {
        document.getElementById("divbun").src = "../../images/lastp/LP1briochebun.png"
        document.getElementById("divbun2").src = "../../images/lastp/LP2briochebun.png"
    }

    if (lettuce.checked) {
        document.getElementById("divveg").src = "../../images/lastp/LPlettuce.png"
    }
    else {
        document.getElementById("divveg").src = " "
    }
    if (tomato.checked) {
        document.getElementById("divveg2").src = "../../images/lastp/LPtomato.png"
    }
    else {
        document.getElementById("divveg2").src = " "
    }
    if (pickle.checked) {
        document.getElementById("divveg3").src = "../../images/lastp/LPpickle.png"
    }
    else {
        document.getElementById("divveg3").src = " "
    }
    if (burger.checked) {
        document.getElementById("divburg").src = "../../images/lastp/LPburger.png"
    }
    if (vegburger.checked) {
        document.getElementById("divburg").src = "../../images/lastp/LPvegburger.png"
    }
    if (egg.checked) {
        document.getElementById("divextra").src = "../../images/lastp/LPsunnysideup.png"
    }
    else {
        document.getElementById("divextra").src = " "
    }
}

function sup() {
    alert ("thank you for visiting");
}


