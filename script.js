const captcha = document.querySelector(".captcha"),
    reloadBtn = document.querySelector(".reload-btn"),
    inputCaptcha = document.querySelector("#captcha"),
    checkBtn = document.querySelector(".submitBtn"),
    statusTxt = document.querySelector(".status-txt"),
    // check inputs

    // vessel  data
    vesselName = document.querySelector("#vesselName"),
    vesselIMO = document.querySelector("#vesselIMO"),

    // Requestor of Inspection Contact Details
    requestorName = document.querySelector("#requestorName"),
    technicalName = document.querySelector("#technicalName"),
    requestorEmail = document.querySelector("#requestorEmail"),

    // Port details
    portName = document.querySelector("#portName"),
    arrivalDate = document.querySelector("#arrivalDate"),
    timeAtBerth = document.querySelector("#timeAtBerth"),
    cargoOperation = document.querySelector("#cargoOperation"),
    typeOfCargo = document.querySelector("#typeOfCargo"),
    meansOfAccess = document.querySelector("#meansOfAccess"),

    // Agent details
    agentName = document.querySelector("#agentName"),
    agentEmail = document.querySelector("#agentEmail");

function required(inputtX)
{
    if (inputtX.value.length == 0)
    {
        inputtX.style.borderColor = "red";
        inputtX.focus();
        return false;
    }
    inputtX.style.borderColor = "#aaa";
    statusTxt.innerText = "";
    return true;
}

// function validateEmail(inputtX) {
//
//     if (inputtX.value != /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
//     {
//         inputtX.style.borderColor = "red";
//         inputtX.focus();
//         return false;
//     } else {
//
//         inputtX.style.borderColor = "#aaa";
//         statusTxt.innerText = "";
//         return true;
//     }
// }

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha() { // получаем 5 рандомных символов из массива
    for (let i = 0; i < 5; i++) {
        let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];

        captcha.innerText += ` ${randomChar}`; // вставляем 6 рандомных символов из массива
    }
}

getCaptcha();
reloadBtn.addEventListener("click", ()=> {
    captcha.innerText = "";
    getCaptcha();
});

checkBtn.addEventListener("click",  () => {
    statusTxt.style.display = "block";

    if (required(vesselName) == false) {
        statusTxt.innerText = "Please enter vessel name!";
        return;
    }

    if (required(vesselIMO) == false) {
        statusTxt.innerText = "Please enter vessel IMO!";
        return;
    }

    if (required(requestorName) == false) {
        statusTxt.innerText = "Please enter requestor's name! We need to know how to contact you.";
        return;
    }

    if (required(technicalName) == false) {
        statusTxt.innerText = "Please enter technical management company!";
        return;
    }

    if (required(requestorEmail) == false) {
        statusTxt.innerText = "Please enter your e-mail address! Report will be sent to this address.";
        return;
    }

    if (!requestorEmail.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        statusTxt.innerText = "Please enter correct e-mail address! Report will be sent to this address.";
        requestorEmail.style.borderColor = "red";
        requestorEmail.focus();
        return; }
    else {
        requestorEmail.style.borderColor = "#aaa";
        statusTxt.innerText = "";
    }


    if (required(portName) == false) {
        statusTxt.innerText = "Please enter port(s) of arrival!";
        return;
    }

    // if (required(arrivalDate) == false) {
    //     statusTxt.innerText = "Please enter estimated arrival date!";
    //     return;
    // }

    if (required(timeAtBerth) == false) {
        statusTxt.innerText = "Please enter length of time at berth!";
        return;
    }

    if (required(cargoOperation) == false) {
        statusTxt.innerText = "Please enter cargo operation!";
        return;
    }

    if (required(typeOfCargo) == false) {
        statusTxt.innerText = "Please enter type of cargo to be handled!";
        return;
    }

    if (required(meansOfAccess) == false) {
        statusTxt.innerText = "Please enter means of access!";
        return;
    }

    if (required(agentName) == false) {
        statusTxt.innerText = "Please enter agent name!";
        return;
    }

    if (required(agentEmail) == false) {
        statusTxt.innerText = "Please enter agent e-mail address!";
        return;
    }

    let inputVal = inputCaptcha.value.split('').join(' ');
    if (inputVal == captcha.innerText){
        statusTxt.style.color = 'green';
        statusTxt.innerText = "Very good!";
        return true;
    } else {
        statusTxt.innerText = "Captch not matched. Please try again!";
        inputCaptcha.style.borderColor = "red";
        inputCaptcha.focus();
        return;
    }
});
