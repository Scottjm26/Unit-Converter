/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let input = document.getElementById("input")
let volumeUpdate = document.getElementById("volume-update")
let lengthUpdate = document.getElementById("length-update")
let massUpdate = document.getElementById("mass-update")
let inputButton = document.getElementById("button")


inputButton.addEventListener("click", function (){
  let number = (Number(input.value))
  
  let meter = number*3.281
  
  let feet = number* 0.3048
  
  lengthUpdate.textContent = `${number} meters = ${meter.toFixed(2)} feet | ${number} feet = ${feet.toFixed(2)} meters`
  
  let volume = number*0.264
  let gallons = number *3.54
  volumeUpdate.textContent = `${number} liters = ${volume.toFixed(2)} gallons | ${number} gallons = ${gallons.toFixed(2)} liters`
  
  let kilograms = number * 2.204
  let pounds = number * 0.4536
  massUpdate.textContent = `${number} kilograms = ${kilograms.toFixed(2)} pounds | ${number} pounds = ${pounds.toFixed(2)} kilograms`
  
  
   } )

