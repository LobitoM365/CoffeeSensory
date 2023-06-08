let nombreUsuario=document.getElementById("NombreUsuario")
let ApellidoUsuario=document.getElementById("ApellidoUsuario")
let DocumentoUsuario=document.getElementById("DocumentoUsuario")
let TelefonoUsuario=document.getElementById("TelefonoUsuario")
let EmailUsuario=document.getElementById("EmailUsuario")
let botonEnviar=document.getElementById("botonEnviar")
let modal=document.getElementById("modal_alert")
let boton=document.getElementById("regreso")

botonEnviar.addEventListener("click",function(){
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