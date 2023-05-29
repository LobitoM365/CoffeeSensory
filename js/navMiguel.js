let desplegarSubmenu = document.querySelectorAll(".desplegar-submenu");
let itemSubmenu = document.querySelectorAll(".item-submenu");
let chevron = document.querySelectorAll(".chevron");
let navUl = document.getElementById("navUl");
let menuHamburguer = document.getElementById("menuHamburguer");

menuHamburguer.addEventListener("click", function () {
    navUl.classList.toggle("transition-nav-ul")
    for (let x = 0; x < desplegarSubmenu.length; x++) {
        let height = itemSubmenu[x].scrollHeight;
        itemSubmenu[x].classList.remove("focus2")
        itemSubmenu[x].classList.remove("focus3")
        itemSubmenu[x].classList.remove("focus4")
        itemSubmenu[x].classList.remove("focus")
        itemSubmenu[x].style.marginTop = "-" + height + "px";
        itemSubmenu[x].classList.remove("transition-submenu-bottom");
        chevron[x].classList.remove("transition-chevron");
    }
})

for (let i = 0; i < desplegarSubmenu.length; i++) {
    let height = itemSubmenu[i].scrollHeight;
    itemSubmenu[i].style.marginTop = "-" + height + "px";
    console.log(height)
    desplegarSubmenu[i].addEventListener("click", function () {
        
        for (let x = 0; x < desplegarSubmenu.length; x++) {
            if (x < i) {
                if (itemSubmenu[x].classList.contains("transition-submenu-bottom")) {
                    itemSubmenu[x].classList.remove("focus3");
                    itemSubmenu[x].classList.add("focus4");
                } else {
                    itemSubmenu[x].classList.add("focus3");
                }
            } else if (x > i) {
                if (itemSubmenu[x].classList.contains("transition-submenu-bottom")) {

                } else {
                    itemSubmenu[x].classList.add("focus");
                    itemSubmenu[x].classList.remove("focus3");
                }
            }
            if (i == x) {
                itemSubmenu[i].classList.toggle("transition-submenu-bottom");
                if(itemSubmenu[i].classList.contains("transition-submenu-bottom")){
                    itemSubmenu[i].style.marginTop = 0;
                    itemSubmenu[i].classList.add("transition-submenu-top");
                }else{
                    itemSubmenu[i].style.marginTop = "-" + height + "px";
                    itemSubmenu[i].classList.add("transition-submenu-top");
                }


                navUl.classList.remove("transition-nav-ul")
                chevron[i].classList.toggle("transition-chevron");
                itemSubmenu[x].classList.toggle("focus2");
                itemSubmenu[x].classList.add("focus3");
                itemSubmenu[x].classList.remove("focus4");
                for (let u = 0; u < desplegarSubmenu.length; u++) {
                    if (u < x) {
                        if (itemSubmenu[u].classList.contains("transition-submenu-bottom")) {
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
     

    });
}




