let inputBase = document.querySelector(".inputBase")
let inputHeight = document.querySelector(".inputHeight")
let calculateBtn = document.querySelector("#calculateArea")
let output = document.querySelector("#output")

calculateBtn.addEventListener('click' , calculateArea)

function calculateArea() {
    let area = 1/2*((Number(inputBase.value)) * (Number(inputHeight.value)))
    output.innerText = "The area of Tringle is =>" + area
}