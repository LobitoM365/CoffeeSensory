let modal = document.getElementById("modal");
let modalGood = document.getElementById("modal-good");
let modalError = document.getElementById("modal-error");
let btnRegister = document.getElementById("register");
let btnOk = document.querySelectorAll(".btnOk");
let input = document.querySelectorAll(".inp");
let txtWarning =  document.querySelectorAll(".txt-warning");
let inputSelect = document.getElementById("selectDni");
let inputSelectCourse = document.getElementById("selectCourse");
let inputValidated = 0;

function inputValidate() {
    for (let i = 0; i < input.length; i++) {
        if (input[i].value.trim() === '') {
            inputValidated = 0;
        } else {
            inputValidated = inputValidated + 1;
        }
    }
    return inputValidated
}
function warningPosition(){
    for (let y = 0; y < txtWarning.length; y++) {
        console.log()
    }
    return y
}
btnRegister.addEventListener("click", function () {
    inputValidate()
    if (inputValidated >= input.length && inputSelect.value != '' && inputSelectCourse.value != '') {
        modal.classList.add("container-modal-visible");
        modalError.classList.remove("modal-register-visible");
        modalGood.classList.add("modal-register-visible");
        console.log("Good")
    } else {
        // txtWarning[y].classList.add("txt-warning-visible")
        modal.classList.add("container-modal-visible");
        modalGood.classList.remove("modal-register-visible");
        modalError.classList.add("modal-register-visible");
        console.log("Bad")
    }
})

for (let j = 0; j < btnOk.length; j++) {
    btnOk[j].addEventListener("click", function () {
        console.log("JOTA: ", j)
        if (j == 0) {
            location.reload();
        }
        modal.classList.remove("container-modal-visible");
    })
}

