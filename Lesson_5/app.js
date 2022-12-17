//HTML - Hyper Text Markup Language
//HTTP(S) - Hyper Text Transfer Protocol (Secured)
//RSA1024

//URL - Unified Resource Locator
//URI - Unified Resource Identifier

//https://google.com -> 8.8.8.8:443 114.52.78.3 -> http://eda.kg

//Парсинг (десериализация)

var number = Number.parseInt("45.25");

//DOM - Document Object Model

var startEventDate = moment("01-01-2023 00:00:00", "DD-MM-YYYY HH:mm:SS");

var daysNode = document.getElementById("timer-days-value");
var hoursNode = document.getElementById("timer-hours-value");
var minutesNode = document.querySelector("#timer-minutes-value");
var secondsNode = document.querySelector("#timer-seconds-value");

var timerNode = document.querySelector("#counterTimer");

function createTextElement() {
  var textNode = document.createElement("div");
  textNode.textContent =
    "Курс уже начался " + startEventDate.format("DD MMMM YYYY");
  textNode.classList.add("counter-big-text");
  return textNode;
}

function CountDown() {
  var dateNow = moment();

  if (startEventDate - dateNow <= 0) {
    timerNode.appendChild(createTextElement());
    var timerBlocks = document.querySelectorAll(".timer-block");
    for (const timerBlock of timerBlocks) {
      timerBlock.remove();
    }
    clearInterval(interval);
  }

  var days = startEventDate.diff(dateNow, "days");
  daysNode.textContent = days;

  var hours = startEventDate.diff(dateNow.add(days, "days"), "hours");
  hoursNode.textContent = hours;

  var minutes = startEventDate.diff(dateNow.add(hours, "hours"), "minutes");
  minutesNode.textContent = minutes;

  var seconds = startEventDate.diff(dateNow.add(minutes, "minutes"), "seconds");
  secondsNode.textContent = seconds;
}

var interval = setInterval(CountDown, 1000);
