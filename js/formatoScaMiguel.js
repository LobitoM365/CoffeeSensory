let value = document.getElementById("value");
let range = document.getElementById("range");

range.oninput = function(){
    value.innerHTML= range.value;
}