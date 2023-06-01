let nombreUsuario=document.getElementById("nombreUsuario")
let botonEnviar=document.getElementById("botonEnviar")

botonEnviar.addEventListener("click",function(){
    if(nombreUsuario.value.length===0){
        alert("El nombre de usuario es un campo obligatorio")
    }
    else{
        alert("Bienvenido")
    }
   })