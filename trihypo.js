let input_of_sides = document.querySelectorAll(".sides-input");

let checkBtn = document.querySelector("#check-btn");
let output = document.querySelector("#output");
checkBtn.addEventListener("click", calculateHypo);

function calculateHypo() {
  let c = calculateSumOfSquares(
    Number(input_of_sides[0].value),
    Number(input_of_sides[1].value)
  );
  let hypoLength = Math.sqrt(c);
  output.innerText = "The Hypotenuse of triangle is " + hypoLength;
}

function calculateSumOfSquares(a, b) {
  const c = a * a + b * b;
  return c;
}
