let modal = document.getElementById("modal");
let modalGood = document.getElementById("modal-good");
let modalError = document.getElementById("modal-error");
let btnRegister = document.getElementById("register");
let btnOk = document.querySelectorAll(".btnOk");
let input = document.querySelectorAll(".inp");
let txtWarning = document.querySelectorAll(".txt-warning");
let inputNumber = document.querySelectorAll(".inp-number");
let inputLetter = document.querySelectorAll(".inp-letter");
let inputValidated = 0;

function removeWarning() {
    for (let index = 0; index < input.length; index++) {
        input[index].addEventListener("input", function () {
            txtWarning[index].classList.remove("txt-warning-visible")
            input[index].classList.remove("input-border")
        })
    }
}
removeWarning();

function inputValidate() {
    for (let i = 0; i < input.length; i++) {
        if (input[i].value.trim() === '') {
            inputValidated = 0;
            txtWarning[i].classList.add("txt-warning-visible")
            input[i].classList.add("input-border")
        } else {
            inputValidated = inputValidated + 1;
        }
    }
}

function onlyNumbers() {
    for (let a = 0; a < inputNumber.length; a++) {
        let inputValue = inputNumber[a].value;
        let valueReplaced = inputValue.replace(/\D/g, '');
        inputNumber[a].value = valueReplaced;
    }
}

function onlyLetters() {
    for (let a = 0; a < inputLetter.length; a++) {
        // let inputValue = ;
        let valueReplaced = inputLetter[a].value.replace(/\d/g, '');
        inputLetter[a].value = valueReplaced;
        let space = inputLetter[a].value.replace("  "," ");
        inputLetter[a].value = space;
        let spaceStart = inputLetter[a].value.trimStart();
        inputLetter[a].value = spaceStart;
        // inputLetter[a].value.
    }
}
btnRegister.addEventListener("click", function () {
    inputValidate()
    if (inputValidated >= input.length) {
        modal.classList.add("container-modal-visible");
        modalError.classList.remove("modal-register-visible");
        modalGood.classList.add("modal-register-visible");
        console.log("Good")
    } else {
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

