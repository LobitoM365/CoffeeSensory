let desplegarSubmenu = document.querySelectorAll(".desplegar-submenu");
let itemSubmenu = document.querySelectorAll(".item-submenu");
let chevron = document.querySelectorAll(".chevron");
let navUl = document.getElementById("navUl");
let menuHamburguer = document.getElementById("menuHamburguer");
let divHamburguer = document.getElementById("divHamburguer");
let navHorizontal = document.getElementById("navHorizontal");
let navVertical = document.getElementById("navVertical");
let chincheIcon = document.getElementById("chincheIcon");


let heightdivHamburguer = divHamburguer.scrollHeight;

navUl.style.marginTop = (heightdivHamburguer + 25) + "px";


//////////////////////////////////Menu hamburguer //////////////////

let widthNavUl = navUl.scrollWidth;
navUl.style.width = "75px";
divHamburguer.style.width = "75px";

menuHamburguer.addEventListener("click", function () {
    navUl.classList.toggle("nav-desplegado")
    divHamburguer.classList.toggle("nav-desplegado")
    if (navUl.classList.contains("nav-desplegado")) {
        navUl.style.width = widthNavUl + "px";
        divHamburguer.style.width = widthNavUl + "px";
        navUl.classList.remove("transition-nav-ul")
        divHamburguer.classList.remove("transition-nav-ul")
    } else {
        navUl.style.width = "75px";
        divHamburguer.style.width = "75px";
        navUl.classList.add("transition-nav-ul")
        divHamburguer.classList.add("transition-nav-ul")
    }

    for (let x = 0; x < desplegarSubmenu.length; x++) {
        let height = itemSubmenu[x].scrollHeight;
        console.log(height)
        itemSubmenu[x].classList.remove("focus2")
        itemSubmenu[x].classList.remove("focus3")
        itemSubmenu[x].classList.remove("focus4")
        itemSubmenu[x].classList.remove("focus")
        itemSubmenu[x].style.marginTop = "-" + height + "px";
        itemSubmenu[x].classList.remove("transition-submenu-bottom");
        chevron[x].classList.remove("transition-chevron");
        itemSubmenu[x].style.opacity = 0;

    }
})

////////////////////////////////////////////////////////////////////




//////////////////// Nav Hover//////////////////////////

/* navVertical.addEventListener("mouseleave", function () {
    if (navUl.classList.contains("nav-fijo")) {

    } else {
        for (let h = 0; h < itemSubmenu.length; h++) {
            let height = itemSubmenu[h].scrollHeight;
            itemSubmenu[h].style.marginTop = "-" + height + "px";
            itemSubmenu[h].classList.remove("transition-submenu-bottom")
            itemSubmenu[h].style.opacity = "0";
            chevron[h].classList.remove("transition-chevron");
            divHamburguer.style.width = "";
        }
    }

})

chincheIcon.addEventListener("click", function () {
    navUl.classList.toggle("nav-fijo");
    divHamburguer.style.width = "273px";
}) */

///////////////////////////////



for (let i = 0; i < desplegarSubmenu.length; i++) {
    let height = itemSubmenu[i].clientHeight;
    itemSubmenu[i].style.marginTop = "-" + height + "px";

    ////////////Menu hover /////////////////
    /* itemSubmenu[i].style.opacity = 0; */
    ////////////////////////////////////////////

    desplegarSubmenu[i].addEventListener("click", function () {

        for (let x = 0; x < desplegarSubmenu.length; x++) {
            if (x < i) {
                if (itemSubmenu[x].classList.contains("transition-submenu-bottom")) {
                    itemSubmenu[x].classList.remove("focus3");
                    itemSubmenu[x].classList.add("focus4");
                } else {
                    itemSubmenu[x].classList.add("focus3");
                }
            }
            if (i == x) {
                let height = itemSubmenu[i].scrollHeight;
                itemSubmenu[i].classList.toggle("transition-submenu-bottom");
                if (itemSubmenu[i].classList.contains("transition-submenu-bottom")) {
                    itemSubmenu[i].style.marginTop = 0;
                    itemSubmenu[i].classList.add("transition-submenu-top");
                    itemSubmenu[i].style.opacity = 1;

                } else {
                    itemSubmenu[i].style.marginTop = "-" + height + "px";
                    itemSubmenu[i].style.opacity = 0;
                    itemSubmenu[i].classList.add("transition-submenu-top");
                }

                ////////////Menu hamburguer /////////////////
                divHamburguer.style.width = widthNavUl + "px";
                navUl.style.width = widthNavUl + "px";
                //////////////////////////////////////////////

                navUl.classList.add("nav-desplegado")
                navUl.classList.remove("transition-nav-ul")
                divHamburguer.classList.add("nav-desplegado")
                divHamburguer.classList.remove("transition-nav-ul")
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

                        }
                    }
                }

            }
        }


    });
}

