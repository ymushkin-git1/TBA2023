function Fn()
{
    if (fn.value.length > 2)
        return true;
    else{
        a.innerHTML = "* You must enter at least 3 characters";
        return false;
    }    
}
function Ln() {
    if (ln.value.length > 2)
        return true;
    else {
        b.innerHTML = "* You must enter at least 2 characters";
        return false;
    }
}
function Ge() {
    if (gm.checked || gf.checked)
        return true;
    else {
        c.innerHTML = "* You must Choose one option";
        return false;
    }
}
function Em() {
    if (em.value.indexOf("@") != 0 && em.value.includes("@gmail.com"))
        return true;
    else {
        d.innerHTML = "* Email is not correct";
        return false;
    }
}
function Us() {
    if (fn.value.length > 2)
        return true;
    else {
        e.innerHTML = "* You must enter at least 2 characters";
        return false;
    }
}
function Pa() {
    if (pa1.value.length > 5)
        return true;
    else {
        f.innerHTML = "* Password must be at least 6 characters";
        return false;
    }
}
function Pa2() {
    if (pa1.value == pa2.value)
        return true;
    else {
        g.innerHTML = "* Passwords do not match";
        return false;
    }
}
function Wh() {
    if (wh.value.length > 35)
        return true;
    else {
        i.innerHTML = "* You need to right more";
        return false;

    }
}
function Check() {
    var result = Fn();
    result = Ln() && result;
    result = Ge() && result;
    result = Em() && result;
    result = Us() && result;
    result = Pa() && result;
    result = Pa2() && result;
    result = Wh() && result;
    return result;
}












