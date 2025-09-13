function calc() {
    var p = parseFloat(document.getElementById("amounttext").value);
    var r = parseFloat(document.getElementById("ratetext").value);
    var n = parseFloat(document.getElementById("yearsvalue").value);

    if (!isNaN(p) && !isNaN(r) && !isNaN(n)) {
        var si = (p * n * r) / 100;
        document.getElementById("res").textContent = "Simple Interest is " + si;
    } else {
        document.getElementById("res").textContent = "Please enter valid numbers in all fields.";
    }
}
