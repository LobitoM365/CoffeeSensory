let validacion=document.getElementById("registro")
let validacion2=document.getElementById("registro_correcto")
let botonAceptar=document.getElementById("botonAceptar")
let botonAceptar2=document.getElementById("botonAceptar2")
let botonRegistrar=document.getElementById("botonRegistrar")
let nombre=document.getElementById("nombre")
let apellido=document.getElementById("apellido")
let documento=document.getElementById("documento")
let telefono=document.getElementById("telefono")
let correo=document.getElementById("correo")
let TextoError=document.getElementById("textoError")
let TextoError2=document.getElementById("textoError2")
let TextoError3=document.getElementById("textoError3")
let TextoError4=document.getElementById("textoError4")
let TextoError5=document.getElementById("textoError5")
botonRegistrar.addEventListener("click",function(){
    if ( nombre.value.length===0 ) {
        TextoError.classList.add("one")
        TextoError.classList.remove("correcto")
    } else {
        TextoError.classList.remove("one")
        
    }
    if (apellido.value.length===0 ) {
        TextoError2.classList.add("one")
        TextoError2.classList.remove("correcto")
      
    } else {
        TextoError2.classList.remove("one")
       
    }
    if (documento.value.length===0 ) {
        TextoError3.classList.add("one")
        TextoError3.classList.remove("correcto")
    
    } else {
        TextoError3.classList.remove("one")
     
    }
    if (telefono.value.length===0 ) {
        TextoError4.classList.add("one")
        TextoError4.classList.remove("correcto")
    
    } else {
        TextoError4.classList.remove("one")
      
    }
    if (correo.value.length===0 ) {
        TextoError5.classList.add("one")
        TextoError5.classList.remove("correcto")
       
    } else {
        TextoError5.classList.remove("one")
       
    }
    if(nombre.value.length===0 || apellido.value.length===0 || documento.value.length===0 || telefono.value.length===0 || correo.value.length===0 ){
        validacion.classList.add("central")
        validacion.classList.remove("inactivo") 
        botonAceptar.addEventListener("click",function(){
            validacion.classList.remove("central")
            validacion.classList.add("inactivo")
        }) 
    } else{
        
        validacion2.classList.add("inactivo-exito")
        validacion2.classList.remove("inactivo-apagado")
        botonAceptar2.addEventListener("click",function(){
            validacion2.classList.remove("inactivo-exito")
            validacion2.classList.add("inactivo-apagado")
        }) 
    } 
})