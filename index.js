let convertBtn = document.querySelector(".btn");
let valueInput = document.querySelector(".value-container");
let valueBox = document.querySelectorAll(".value-converted");
let toggleBtn = document.querySelector(".toggle-btn");
let boxTwo = document.querySelector(".box-two");
let unitContainer = document.querySelectorAll(".unit-container");
let inputValue = 0
let theme = "dark";

valueInput.addEventListener("change", () => {
    inputValue = Number(valueInput.value);
    console.log(inputValue)
})

//value conversion
convertBtn.addEventListener("click", () => {
    let lengthString = `${inputValue} meters = ${(inputValue * 3.2810).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`;
    let literString = `${inputValue} litres = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} litres`;
    let kiloString = `${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`;

    console.log(lengthString, literString, kiloString);

    valueBox[0].textContent = lengthString;
    valueBox[1].textContent = literString;
    valueBox[2].textContent = kiloString;
})

//toggle theme
toggleBtn.addEventListener("click", () => {
    if (theme === "dark") {
        boxTwo.style.backgroundColor = "#1F2937";
        boxTwo.style.color = "#CCC1FF";
        for (let i = 0; i < unitContainer.length; i++) {
            unitContainer[i].style.backgroundColor = "#273549";
        }
        theme = "light";
    } else {
        boxTwo.style.backgroundColor = "#F4F4F4";
        boxTwo.style.color = "#5A537B";
        for (let i = 0; i < unitContainer.length; i++) {
            unitContainer[i].style.backgroundColor = "#FFFFFF";
        }
        theme = "dark"
    }
})