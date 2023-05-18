let desplegarSubmenu = document.querySelectorAll(".desplegar-submenu");
let itemSubmenu = document.querySelectorAll(".item-submenu");
let navUl = document.getElementById("navUl");
let menuHamburguer = document.getElementById("menuHamburguer");

menuHamburguer.addEventListener("click", function () {
    navUl.classList.toggle("transition-nav-ul")
    for (let x = 0; x < desplegarSubmenu.length; x++) {
        itemSubmenu[x].classList.remove("focus2")
        itemSubmenu[x].classList.remove("focus3")
        itemSubmenu[x].classList.remove("focus4")
        itemSubmenu[x].classList.remove("focus")
        itemSubmenu[x].classList.remove("transition-item-submenu")
    }
})

for (let i = 0; i < desplegarSubmenu.length; i++) {
    desplegarSubmenu[i].addEventListener("click", function () {
       if(navUl.classList.contains("transition-nav-ul")){

       }else{
        for (let x = 0; x < desplegarSubmenu.length; x++) {
            if (x < i) {
                if (itemSubmenu[x].classList.contains("transition-item-submenu")) {
                    itemSubmenu[x].classList.remove("focus3");
                    itemSubmenu[x].classList.add("focus4");
                } else {
                    itemSubmenu[x].classList.add("focus3");
                }
            } else if (x > i) {
                if (itemSubmenu[x].classList.contains("transition-item-submenu")) {

                } else {
                    itemSubmenu[x].classList.add("focus");
                    itemSubmenu[x].classList.remove("focus3");
                }
            }
            if (i == x) {
                itemSubmenu[i].classList.toggle("transition-item-submenu");
                itemSubmenu[x].classList.toggle("focus2");
                itemSubmenu[x].classList.add("focus3");
                itemSubmenu[x].classList.remove("focus4");
                for (let u = 0; u < desplegarSubmenu.length; u++) {
                    if (u < x) {
                        if (itemSubmenu[u].classList.contains("transition-item-submenu")) {
                            itemSubmenu[u].classList.add("focus3");
                            itemSubmenu[u].classList.add("focus4")
                        } else {
                            itemSubmenu[u].classList.remove("focus3");
                            ;
                        }
                    }
                }

            }
        }
       }

    });
}




