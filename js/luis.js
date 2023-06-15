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
let flecha=document.querySelectorAll(".submenu")
let cuerpoDespliegue=document.querySelectorAll(".children")
for (let index = 0; index < flecha.length; index++) {
    flecha[index].addEventListener("click",function(){
       /* alert (index)  */
        if (cuerpoDespliegue[index].classList.contains("children")) { 
            cuerpoDespliegue[index].classList.remove("children")
           
        }else{ 
            cuerpoDespliegue[index].classList.add("children")
        }   
    })
    
}
