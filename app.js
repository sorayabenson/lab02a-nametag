const nameInput = document.getElementById('yourNamehere');
const clickButton = document.getElementById('Click');
const nameOutput = document.getElementById('name');
const fontButton1 = document.getElementById('fontType1');
const fontButton2 = document.getElementById('fontType2');
const fontButton3 = document.getElementById('fontType3');
const colorButton1 = document.getElementById('colorButton1');
const colorButton2 = document.getElementById('colorButton2');
const colorButton3 = document.getElementById('colorButton3');
const nameTagcolor = document.getElementById('nameTag');


clickButton.addEventListener('click', () => {
    nameOutput.textContent = nameInput.value;

})

fontButton1.addEventListener('click', () => {
    nameOutput.style.fontFamily = "'Amiri', serif"

})
fontButton2.addEventListener('click', () => {
    nameOutput.style.fontFamily = "'Harmattan', sans-serif"

})
fontButton3.addEventListener('click', () => {
    nameOutput.style.fontFamily = "'Reem Kufi', sans-serif"

})
colorButton1.addEventListener('click', () => {
    nameTagcolor.style.background = "rgb(0, 142, 35)";

})
colorButton2.addEventListener('click', () => {
    nameTagcolor.style.background = "rgb(255, 183, 0)";

})
colorButton3.addEventListener('click', () => {
    nameTagcolor.style.background = "rgb(255, 21, 139)";

})
let clickCounter = document.getElementById('clickCounter'), count = 0;

clickButton.onclick = function() {
    count ++;
    clickCounter.innerHTML = count;
}




console.log('sweet birthday baby!')