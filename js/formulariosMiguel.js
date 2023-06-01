let select = document.querySelectorAll(".select");
let labelSelect = document.querySelectorAll(".labelSelect");
let label = document.querySelectorAll(".label");
let input = document.querySelectorAll(".input");
let enviar = document.getElementById("enviar");
let inputModalAlert = document.getElementById("inputModalAlert");
let contenidoModal = document.getElementById("contenidoModal");


for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("click", function () {
        if (select[i].value == "") {
            select[i].style.color = "";
            labelSelect[i].style.color = "";
        } else {
            select[i].style.color = "white";
            labelSelect[i].style.color = "orange";
            select[i].classList.add("transition-color");
            labelSelect[i].classList.add("transition-color");
        }
    })

}

for (let x = 0; x < input.length; x++) {
    input[x].addEventListener("input", function () {
        if (input[x].value == "") {
            label[x].style.color = "";
        } else {
            label[x].style.color = "orange";
            label[x].classList.add("transition-color");
        }
    })
}

enviar.addEventListener("click", function (event) {
    let inputSinValor = 0;
    let selectSinValor = 0;
    for (let s = 0; s < select.length; s++) {
        if (select[s].value == "") {
            selectSinValor = 1;
        } 
    }
    for (let u = 0; u < input.length; u++) {
        if (input[u].value == "") {
            inputSinValor = 1;
        } 
    }
    if ( selectSinValor == 1 || inputSinValor == 1) {
        /* alert("Por favor debe llenar todos los campos") */
        contenidoModal.style.display= "block";
        event.preventDefault();
    }
})



inputModalAlert.addEventListener("click", function(){
    contenidoModal.style.display= "none";
})