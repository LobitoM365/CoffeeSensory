let Desplegable=document.getElementById("menuclick")
let DespliegeVertical=document.getElementById("desplegable")
let DespliegeBajo=document.getElementById("DespliegeBajo")
let Children=document.getElementById("children")
Desplegable.addEventListener("click",function(){
    if (DespliegeVertical.classList.contains("despliege-inactivo")){
        DespliegeVertical.classList.add("vertical")
        DespliegeVertical.classList.remove("despliege-inactivo")
    }else{
        DespliegeVertical.classList.add("despliege-inactivo")
        DespliegeVertical.classList.remove("vertical")  
    }
})
DespliegeBajo.addEventListener("click",function () {
    if (Children.classList.contains(".children-inactivo")) {
        Children.classList.add("nav ul li .children li a")
        Children.classList.remove(".children-inactivo")
    }
   
})
