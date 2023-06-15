let input = document.querySelectorAll(".input");
let submit = document.getElementById("btnSubmit");
let modalMain = document.getElementById("main-modal");
let modal = document.querySelectorAll(".main-soul-inv");
let notif = document.querySelectorAll(".notif");
let btnOk = document.querySelectorAll(".btn-ok");
let shadow = document.getElementById("shadow");
let number = document.querySelectorAll(".num")

function inputVacio() {
    let cont = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].value.trim() == '') {
            cont = cont + 0;
            notif[i].classList.add("notif-visible");
        } else {
            cont = cont + 1;
        }
    }
    return cont
}

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", function () {
        notif[i].classList.remove("notif-visible");

    })
}

function nums() {
    for (let a = 0; a < number.length; a++) {
        let inputValue = number[a].value;
        let valueReplaced = inputValue.replace(/\D/g, '');
        number[a].value = valueReplaced;
    }
}
submit.addEventListener("click", function () {
    console.log(inputVacio())
    inputVacio()
    shadow.classList.add("contai-modal");
    if (inputVacio() < 7) {
        modalMain.classList.remove("main-soul-inv");
        modalMain.classList.add("main");
        modal[1].classList.remove("main-soul-inv");
        modal[1].classList.add("main-soul");
        modal[2].classList.add("main-soul-inv");
    } else if (inputVacio() >= 7) {
        modalMain.classList.remove("main-soul-inv");
        modalMain.classList.add("main");
        modal[1].classList.add("main-soul-inv");
        modal[2].classList.remove("main-soul-inv");
        modal[2].classList.add("main-soul");
    }
})

for (let j = 0; j < btnOk.length; j++) {
    btnOk[j].addEventListener("click", function () {
        console.log(j)
        if (j ==1) {
            location.reload();
        }
        shadow.classList.remove("contai-modal");
        modalMain.classList.add("main-soul-inv");

    })
}