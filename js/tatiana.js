let botonVertical=document.getElementById("menu1")
let despligeVertical=document.getElementById("despliege-lado")
let subitem=document.getElementById("subitem")
botonVertical.addEventListener("click",function (){
    
    if (despligeVertical.classList.contains("menu_activo")) {
        despligeVertical.classList.add("menu_inactivo")
        despligeVertical.classList.remove("menu_activo")
    }else{
        despligeVertical.classList.remove("menu_inactivo")
        despligeVertical.classList.add("menu_activo")
    }
    
})
