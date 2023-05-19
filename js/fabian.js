let item = document.querySelectorAll(".delay");
let subNav = document.querySelectorAll(".sub-nav")
let iconRotate = document.querySelectorAll(".icon-down");
let menu = document.getElementById("menu")

for (let i = 0; i < item.length; i++) {
    for (let index = 0; index < subNav.length; index++) {

        item[i].addEventListener("click", function () {
            // console.log(i)
            subNav[i].classList.remove("sub-nav");


            if (i == 0) {
                if (subNav[i].classList.contains("sub")) {
                    subNav[i].classList.remove("sub")
                    subNav[i].classList.add("sub-nav");
                    item[i].classList.remove("item-nav-color");
                    iconRotate[i].classList.remove("icon-down-rotate");
                } else {
                    subNav[i].classList.add("sub");
                    item[i].classList.add("item-nav-color");
                    iconRotate[i].classList.add("icon-down-rotate");
                }
            }
            if (i == 1) {
                if (subNav[i].classList.contains("sub-two")) {
                    subNav[i].classList.remove("sub-two")
                    subNav[i].classList.add("sub-nav");
                    item[i].classList.remove("item-nav-color");
                    iconRotate[i].classList.remove("icon-down-rotate");
                } else {
                    subNav[i].classList.add("sub-two");
                    item[i].classList.add("item-nav-color");
                    iconRotate[i].classList.add("icon-down-rotate");
                }
            }
            if (i == 2) {
                if (subNav[i].classList.contains("sub-three")) {
                    subNav[i].classList.remove("sub-three")
                    subNav[i].classList.add("sub-nav");
                    item[i].classList.remove("item-nav-color");
                    iconRotate[i].classList.remove("icon-down-rotate");
                } else {
                    subNav[i].classList.add("sub-three");
                    item[i].classList.add("item-nav-color");
                    iconRotate[i].classList.add("icon-down-rotate");
                }
            }


        })
    }
    
menu.addEventListener("mouseover", function(){
    menu.classList.add("item-nav-hover")
    console.log("MO")
})
menu.addEventListener("mouseleave", function(){
    menu.classList.add("menu")
    menu.classList.remove("item-nav-hover")
    subNav[i].classList.add("sub-nav");
    subNav[i].classList.remove("sub")
    subNav[i].classList.remove("sub-two")
    subNav[i].classList.remove("sub-three")
    item[i].classList.remove("item-nav-color");
    iconRotate[i].classList.remove("icon-down-rotate");
    console.log("MU")

})
}
