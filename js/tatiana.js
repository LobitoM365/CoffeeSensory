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
let subMenu=document.querySelectorAll(".item-menu")
let children = document.querySelectorAll(".children")

for (let index = 0; index < subMenu.length; index++) {
    subMenu[index].addEventListener("click",function () {
    /* alert(index) */
    if (children[index].classList.contains("children-desp")) {
        children[index].classList.remove("children-desp")
       
    }else{
        if(index==1){
            if(children[1].classList.contains("children-two")){
                children[1].classList.remove("children-two")
                 
            }else{
            children[1].classList.add("children-two")

            }
            
        }
        else if(index==2){
            if(children[2].classList.contains("children-three")){
                children[2].classList.remove("children-three")
                 
            }else{
            children[2].classList.add("children-three")

            }
           
        }else{
            children[index].classList.add("children-desp")
        }
    }

})
    
}
