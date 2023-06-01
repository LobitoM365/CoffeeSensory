let select = document.querySelectorAll(".select");
let labelSelect = document.querySelectorAll(".labelSelect");
let label = document.querySelectorAll(".label");
let input = document.querySelectorAll(".input");
let enviar = document.getElementById("enviar");
let formulario = document.getElementById("formulario");
let iframeAlertModal = document.getElementById("iframeAlertModal");

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
    if (selectSinValor == 1 || inputSinValor == 1) {
        /* alert("Por favor debe llenar todos los campos") */
        iframeAlertModal.style.display = "block";
        event.preventDefault();
    } else {
        iframeAlertModal.style.display = "block";
        event.preventDefault();
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
            if (input[u].value == "") {
                inputSinValor = 1;
            }
        }
        if (selectSinValor == 1 || inputSinValor == 1) {
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

