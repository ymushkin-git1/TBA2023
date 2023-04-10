function dat1() {
    if (dat.value.length < 2) {
        div50.innerHTML = "יש להכניס לפחות 9 תווים";
        return false;
    }
    else {
        div50.innerHTML = " ";
        return true;
    }
}
function ending4() {
    var result = true;
    result = dat1() && result;
    return result;
}