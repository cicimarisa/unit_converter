/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convert = document.getElementById("convert")
const unit = document.getElementById("unit")
const meterFeet = document.getElementById("meter-feet")
const literGallon = document.getElementById("liter-gallon")
const kilogramsPounds = document.getElementById("kilograms-pounds")
const error = document.getElementById("error")


convert.addEventListener("click", function(){
	if(unit.value){
		convertMeterFeet(unit.value)
		convertLiterGallon(unit.value)
		convertKilogramsPounds(unit.value)
		error.style.display = "none"
	} else{
		error.style.display = "inline"
		meterFeet.innerHTML = ""
		literGallon.innerHTML = ""
		kilogramsPounds.innerHTML = ""
	}
})

function convertMeterFeet(unitToConvert){
	const meterToFeet = (unitToConvert * 3.281).toFixed(3)
	const feetToMeter = (unitToConvert / 3.281).toFixed(3)
	return meterFeet.innerHTML = `<p>${unitToConvert} meters = ${meterToFeet} feet | ${unitToConvert} feet = ${feetToMeter} meters</p>`
}

function convertLiterGallon(unitToConvert){
	const literToGallon = (unitToConvert * 0.264).toFixed(3)
	const gallonToLiter = (unitToConvert / 0.264).toFixed(3)
	return literGallon.innerHTML = `<p>${unitToConvert} meters = ${literToGallon} feet | ${unitToConvert} feet = ${gallonToLiter} meters</p>`
}

function convertKilogramsPounds(unitToConvert){
	const kilogramsToPounds = (unitToConvert * 2.204).toFixed(3)
	const poundsToKilograms = (unitToConvert / 2.204).toFixed(3)
	return kilogramsPounds.innerHTML = `<p>${unitToConvert} meters = ${kilogramsToPounds} feet | ${unitToConvert} feet = ${poundsToKilograms} meters</p>`
}