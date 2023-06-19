
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input1")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet` 
})
convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    volumeEl.textContent = `${baseValue} liter = ${baseValue * literToGallon } gallon` 
})
convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    massEl.textContent = `${baseValue} kilo = ${baseValue * kiloToPound } pound` 
})

