let nombreUsuario=document.getElementById("NombreUsuario")
let ApellidoUsuario=document.getElementById("ApellidoUsuario")
let DocumentoUsuario=document.getElementById("DocumentoUsuario")
let TelefonoUsuario=document.getElementById("TelefonoUsuario")
let EmailUsuario=document.getElementById("EmailUsuario")
let botonEnviar=document.getElementById("botonEnviar")
let modal=document.getElementById("modal_alert")
let boton=document.getElementById("regreso")
let validaciones=document.getElementById("validacion")
let validaciones1=document.getElementById("validacion1")
let validaciones2=document.getElementById("validacion2")
let validaciones3=document.getElementById("validacion3")
let validaciones4=document.getElementById("validacion4")





botonEnviar.addEventListener("click",function(){
   
    if (nombreUsuario.value.length===0 ) {
        validaciones.classList.add("validacion_activa")
    }else{
        validaciones.classList.remove("validacion_activa")
    }
    if (ApellidoUsuario.value.length===0 ) {
        validaciones1.classList.add("validacion_activa")
    }else{
        validaciones1.classList.remove("validacion_activa")
    }
    if (DocumentoUsuario.value.length===0 ) {
        validaciones2.classList.add("validacion_activa")
    }else{
        validaciones2.classList.remove("validacion_activa")
    }
    if (TelefonoUsuario.value.length===0 ) {
        validaciones3.classList.add("validacion_activa")
    }else{
        validaciones3.classList.remove("validacion_activa")
    }
    if (EmailUsuario.value.length===0 ) {
        validaciones4.classList.add("validacion_activa")
    }else{
        validaciones4.classList.remove("validacion_activa")
    }

    if(nombreUsuario.value.length===0 || ApellidoUsuario.value.length===0 || DocumentoUsuario.value.length===0 || TelefonoUsuario.value.length===0 || EmailUsuario.value.length===0 ){
       /*  alert("El nombre de usuario es un campo obligatorio")  */
        
        
        modal.classList.add("modal-alert")
        modal.classList.remove("inactivo")
        boton.addEventListener("click",function (){
            modal.classList.remove("modal-alert")
            modal.classList.add("inactivo")
        }) 
    }
    else{
        alert("Bienvenido ") 
    }
})