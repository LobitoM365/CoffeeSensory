
let valueRangeIntensidad = document.querySelectorAll(".value-range-intensidad");
let rangeIntensidad = document.querySelectorAll(".range-intensidad");
let puntajeRange = document.querySelectorAll(".puntaje-range ");
let rangePuntaje = document.querySelectorAll(".range-puntaje ");
let cuadroSelect = document.querySelectorAll(".cuadro-select ");


for (let RI = 0; RI < rangeIntensidad.length; RI++) {
    rangeIntensidad[RI].addEventListener("input", function () {
        valueRangeIntensidad[RI].innerHTML = rangeIntensidad[RI].value;
    })
}

for (let x = 0; x < rangePuntaje.length; x++) {
    rangePuntaje[x].addEventListener("input", function () {
        puntajeRange[x].innerHTML = rangePuntaje[x].value;

    })
}
for (let CS = 0; CS < cuadroSelect.length; CS++) {
    if (CS >= 0 && CS <= 4) {
        cuadroSelect[CS].addEventListener("click", function () {

            for (let CSF = 0; CSF <= 4; CSF++) {
                if (CSF <= CS) {
                    cuadroSelect[CSF].classList.add("focus-cuadro-select")
                } else if (CSF > CS) {
                    cuadroSelect[CSF].classList.remove("focus-cuadro-select")
                }
                cuadroSelect[CS].addEventListener("click", function () {
                    if (CSF > CS) {
                        if (cuadroSelect[CSF].classList.contains("focus-cuadro-select")) {
                            cuadroSelect[CS].classList.add("focus-cuadro-select")
                        } else {
                            cuadroSelect[CS].classList.toggle("focus-cuadro-select")
                        }
                    }
                })


            }
        })
    }
    if (CS >= 5 && CS <= 9) {
        cuadroSelect[CS].addEventListener("click", function () {
            for (let CSF = 5; CSF <= 9; CSF++) {
                if (CSF <= CS) {
                    cuadroSelect[CSF].classList.add("focus-cuadro-select")
                } else if (CSF > CS) {
                    cuadroSelect[CSF].classList.remove("focus-cuadro-select")
                }
                cuadroSelect[CS].addEventListener("click", function () {
                    if (CSF > CS) {
                        if (cuadroSelect[CSF].classList.contains("focus-cuadro-select")) {
                            cuadroSelect[CS].classList.add("focus-cuadro-select")
                        } else {
                            cuadroSelect[CS].classList.toggle("focus-cuadro-select")
                        }
                    }
                })


            }
        })
    }
    if (CS >= 10 && CS <= 14) {
        cuadroSelect[CS].addEventListener("click", function () {

            for (let CSF = 10; CSF <= 14; CSF++) {
                if (CSF <= CS) {
                    cuadroSelect[CSF].classList.add("focus-cuadro-select")
                } else if (CSF > CS) {
                    cuadroSelect[CSF].classList.remove("focus-cuadro-select")
                    cuadroSelect[CSF].classList.toggle("focus-no-active");

                    if (cuadroSelect[CSF].classList.contains("focus-no-active")) {
                        if (cuadroSelect[CSF].classList.contains("focus-no-active")) {
                            cuadroSelect[CS].classList.remove("focus-cuadro-select");
                            cuadroSelect[CSF].classList.add("focus-active");
                        } else
                            if (cuadroSelect[CSF].classList.contains("focus-active")) {
                                cuadroSelect[CS].classList.add("focus-cuadro-select");
                                cuadroSelect[CSF].classList.remove("focus-active");
                                cuadroSelect[CSF].classList.remove("focus-active");
                            }
                    }
                }
               

            }

        })
    }
}