const inputText = document.getElementById("text");
const inputRange = document.getElementById("range");
const button = document.getElementById("btn");
const eButton = document.getElementById("e_btn");
const square = document.getElementById("square");
const circle = document.getElementById("circle");
const rangeValue = document.getElementById("range-span");

circle.style.height = range.value + '%';
circle.style.width = range.value + '%';
rangeValue.textContent = `${inputRange.value}%`;

const changeCollor = function () {
    if (inputText.value === "") return;
    square.style.backgroundColor = inputText.value;
}

const changeCircle = function () {
    circle.style.width = `${inputRange.value}%`;
    circle.style.height = `${inputRange.value}%`;
    rangeValue.textContent = `${inputRange.value}%`;
}

button.addEventListener('click', changeCollor);

eButton.style.display = "none";

inputRange.addEventListener('input', changeCircle);