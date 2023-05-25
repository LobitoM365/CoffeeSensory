let sidebar= document.getElementById("sidebar");
let barMenu= document.getElementById("barMenu");

barMenu.addEventListener("click", function(){ 
    if (sidebar.classList.contains("sidebar-papy")){
        sidebar.classList.remove("sidebar-papy")
        /* sidebar.classList.remove("sidebar") */
        sidebar.classList.add("sidebar-mamy")



    }else 
    {
        // sidebar.classList.add("sidebar")
        sidebar.classList.remove("sidebar-mamy")
        sidebar.classList.add("sidebar-papy")
    }
})
