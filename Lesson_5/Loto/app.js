function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var slotsNode = document.querySelector("#slots");
var minimumNode = document.querySelector("#minimum");
var maximumNode = document.querySelector("#maximum");

var numbersNode = document.querySelector(".numbers");

function createNumberNode(value) {
  var div = document.createElement("div");
  div.classList.add("number");
  div.textContent = value.toString().padStart(2, "0");
  return div;
}

function buttonClickFunc() {
  var slotsValue = Number(slotsNode.value);
  var minimumValue = Number(minimumNode.value);
  var maximumValue = Number(maximumNode.value);
  if (!(slotsValue && minimumValue && maximumValue)) return;
  numbersNode.innerHTML = "";
  for (let i = 0; i < slotsValue; i++) {
    var randomNumber = generateRandomNumber(minimumValue, maximumValue);
    var numberNode = createNumberNode(randomNumber);
    numbersNode.appendChild(numberNode);
  }
}
