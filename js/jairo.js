let sidebar = document.getElementById("sidebar");
let barMenu = document.getElementById("barMenu");


barMenu.addEventListener("click", function () {
    if (sidebar.classList.contains("sidebar-papy")) {
        sidebar.classList.remove("sidebar-papy")
        /* sidebar.classList.remove("sidebar") */
        sidebar.classList.add("sidebar-mamy")



    } else {
        // sidebar.classList.add("sidebar")
        sidebar.classList.remove("sidebar-mamy")
        sidebar.classList.add("sidebar-papy")
    }
})


let itemDesplegable = document.querySelectorAll(".item-menu")
let chill = document.querySelectorAll(".chill")

for (let i = 0; i < itemDesplegable.length; i++) {
    itemDesplegable[i].addEventListener("click", function () {
        if (!chill[i].classList.contains("chill-desp")) {
            if (i == 1) {
                if (chill[1].classList.contains("chill-two")) {
                    chill[1].classList.remove("chill-two");
                }else{
                    chill[1].classList.add("chill-two")
                }
            }
            else {
                chill[i].classList.add("chill-desp");
            }
        } else {
            chill[i].classList.remove("chill-desp");
        }

    })

}