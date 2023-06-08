
let valueRangeIntensidad = document.querySelectorAll(".value-range-intensidad");
let rangeIntensidad = document.querySelectorAll(".range-intensidad");
let puntajeRange  = document.querySelectorAll(".puntaje-range ");
let rangePuntaje  = document.querySelectorAll(".range-puntaje ");


for(let RI = 0; RI < rangeIntensidad.length ; RI++){
    rangeIntensidad[RI].addEventListener("input", function(){
        valueRangeIntensidad[RI].innerHTML= rangeIntensidad[RI].value;
    })
}

for(let x = 0; x < rangePuntaje.length; x++){
    rangePuntaje[x].addEventListener("input", function(){
        puntajeRange[x].innerHTML = rangePuntaje[x].value;
        
    })
}