function checkp() {
    var minman = inweight.value * 1.5;
    var maxman = inweight.value * 1.8;
    var minwoman = inweight.value * 1;
    var maxwoman = inweight.value * 1.4;
    if (document.getElementById('man').checked == true) {
        div10.innerHTML = "אתה צריך לצרוך בין " + minman + "ל " + '<br>' + maxman + "גרם חלבון ביום";
    }
    else { 
        if (document.getElementById('woman').checked == true) {
         div10.innerHTML = "את צריכה לצרוך בין " + minwoman + "ל " + '<br>' + maxwoman + "גרם חלבון ביום";
        }
    }
}