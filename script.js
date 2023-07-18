let principal = document.getElementById("principal");
let rate = document.getElementById("rate");
let time = document.getElementById("time");
let result = document.getElementById("result");
function calculate(){
    let out = principal.value*Math.pow((1+(rate.value/100)), time.value);
    result.innerText = "Total Amount: " + out.toFixed(2);
}