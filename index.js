let convertBtn = document.querySelector(".btn");
let valueInput = document.querySelector(".value-container");
let valueBox = document.querySelectorAll(".value-converted");
let inputValue = 0

valueInput.addEventListener("change",() => {
    inputValue = Number(valueInput.value);
    console.log(inputValue)
})

//value conversion
convertBtn.addEventListener("click",() => {
    let lengthString = `${inputValue} meters = ${(inputValue*3.2810).toFixed(3)} feet | ${inputValue} feet = ${(inputValue/3.281).toFixed(3)} meters`;
    let literString = `${inputValue} litres = ${(inputValue*0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue/0.264).toFixed(3)} litres`;
    let kiloString = `${inputValue} kilos = ${(inputValue*2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue/2.204).toFixed(3)} kilos`;

    console.log(lengthString,literString,kiloString);

    valueBox[0].textContent = lengthString;
    valueBox[1].textContent = literString;
    valueBox[2].textContent = kiloString;
})
