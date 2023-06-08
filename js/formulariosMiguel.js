let select = document.querySelectorAll(".select");
let labelSelect = document.querySelectorAll(".labelSelect");
let label = document.querySelectorAll(".label");
let input = document.querySelectorAll(".input");
let inputNumberDocumento = document.getElementById("inputNumberDocumento");
let alertInputDocumento = document.getElementById("alertInputDocumento");
let inputNumberTelefono = document.getElementById("inputNumberTelefono");
let alertInputTelefono = document.getElementById("alertInputTelefono");
let inputText = document.querySelectorAll(".inputText");
let inputNumber = document.querySelectorAll(".inputNumber");
let alertInputVacio = document.querySelectorAll(".alert-input-vacio");
let alertSelectVacio = document.querySelectorAll(".alert-select-vacio");
let enviar = document.getElementById("enviar");
let formulario = document.getElementById("formulario");
let iframeAlertModal = document.getElementById("iframeAlertModal");
let inputCorreo = document.getElementById("inputCorreo");
let labelTelefono = document.getElementById("labelTelefono");
let labelDocumento = document.getElementById("labelDocumento");


inputNumberTelefono.addEventListener("input", function(){
    if(inputNumberTelefono.value.length = 10 ){
        inputNumberTelefono.value = inputNumberTelefono.value.slice(0,10);
    }
})

inputNumberDocumento.addEventListener("input", function(){
    if(inputNumberDocumento.value.length = 10 ){
        inputNumberDocumento.value = inputNumberDocumento.value.slice(0,10);
    }
})


for (let n = 0; n < inputNumber.length; n++) {
    inputNumber[n].addEventListener("input", function () {
        inputNumber[n].value = inputNumber[n].value.replace(/\D/g, "");
    })
}

for (let t = 0; t < inputText.length; t++) {
    inputText[t].addEventListener("input", function () {
        inputText[t].value = inputText[t].value.replace(/\d+/g, "");
    })
}

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
            alertSelectVacio[i].style.visibility= "hidden";
            alertSelectVacio[i].style.opacity= "0";
        }
       
    })

}
for (let x = 0; x < input.length; x++) {
    input[x].addEventListener("input", function () {
        input[x].value = input[x].value.trimStart();
        if (input[x].value.trim() == "") {
            label[x].style.color = "";
        } else {
            label[x].style.color = "orange";
            label[x].classList.add("transition-color");
            alertInputVacio[x].style.visibility= "hidden";
            alertInputVacio[x].style.opacity= "0";
        }
        if(inputNumberTelefono.value.length < 10 ){
            labelTelefono.style.color = "white";
        }
        if(inputNumberDocumento.value.length < 8 || inputNumberDocumento.value.length == 9){
            labelDocumento.style.color = "white";
        }
    })
}

enviar.addEventListener("click", function (event) {
    let inputSinValor = 0;
    let selectSinValor = 0;
    for (let s = 0; s < select.length; s++) {
        if (select[s].value == "") {
            selectSinValor = 1;
            alertSelectVacio[s].style.opacity = "1";
            alertSelectVacio[s].style.visibility = "visible";
        }
    }
    for (let u = 0; u < input.length; u++) {
        if (input[u].value.trim() == "") {
            inputSinValor = 1;
            alertInputVacio[u].style.opacity = "1";
            alertInputVacio[u].style.visibility = "visible";
        }
    }
    if (selectSinValor == 1 || inputSinValor == 1) {
        /* alert("Por favor debe llenar todos los campos") */
        iframeAlertModal.style.display = "block";
        event.preventDefault();
    } else {
        iframeAlertModal.style.display = "block";
        event.preventDefault();
    }
    if(inputNumberTelefono.value.length < 10 ){
        alertInputTelefono.style.opacity = "1";
        alertInputTelefono.style.visibility = "visible";
    }
    if(inputNumberDocumento.value.length < 8 || inputNumberDocumento.value.length == 9){
        alertInputDocumento.style.opacity = "1";
        alertInputDocumento.style.visibility = "visible";
    }
})

window.addEventListener('load', function () {
    enviar.addEventListener("click", function (event) {
        let iframe = document.getElementById("iframeAlertModal").contentWindow;
        let inputModalAlert = iframe.document.querySelectorAll(".inputModalAlert");
        let mistake = iframe.document.getElementById("mistake");
        let noMistake = iframe.document.getElementById("noMistake");

        let inputSinValor = 0;
        let selectSinValor = 0;
        for (let s = 0; s < select.length; s++) {
            if (select[s].value == "") {
                selectSinValor = 1;
            }
        }
        for (let u = 0; u < input.length; u++) {
            if (input[u].value.trim() == "") {
                inputSinValor = 1;
            }
        }
        if (selectSinValor == 1 || inputSinValor == 1 || inputNumberTelefono.value.length < 10 || inputNumberDocumento.value.length < 8 || inputNumberDocumento.value.length == 9 ) {
            mistake.style.display = "block";
            noMistake.style.display = "none";
        } else {
            noMistake.style.display = "block";
            mistake.style.display = "none";
        }
        for (let x = 0; x < inputModalAlert.length; x++) {
            inputModalAlert[x].addEventListener("click", function () {
                iframeAlertModal.style.display = "none";
                console.log(x)
                if (x == 1) {
                    formulario.submit()
                    console.log(inputModalAlert[x])
                }
            })
        }
    })
})

