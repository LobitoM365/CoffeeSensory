let validacion=document.getElementById("registro")
let  botonAceptar=document.getElementById("botonAceptar")
let botonRegistrar=document.getElementById("botonRegistrar")
let nombre=document.getElementById("nombre")
let apellido=document.getElementById("apellido")
let documento=document.getElementById("documento")
let telefono=document.getElementById("telefono")
let correo=document.getElementById("correo")
botonRegistrar.addEventListener("click",function(){
    if(nombre.value.length===0 || apellido.value.length===0 || documento.value.length===0 || telefono.value.length===0 || correo.value.length===0 ){
        validacion.classList.add("central")
        validacion.classList.remove("inactivo")
        botonAceptar.addEventListener("click",function(){
            validacion.classList.remove("central")
            validacion.classList.add("inactivo")
        })
    }
    else{
        alert("Bievenido")
    }
})