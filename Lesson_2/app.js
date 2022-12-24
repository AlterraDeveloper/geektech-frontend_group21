//Операторы

// унарные операторы: +, -, !

var numberAsString = "55";
console.log(-numberAsString);
console.log(typeof -numberAsString);

var number = -77;
console.log(-number);

var isInternetBankingUser = true;
console.log(isInternetBankingUser);
isInternetBankingUser = !isInternetBankingUser;
console.log(isInternetBankingUser);

// бинарные операторы: + - * / **
// операторы сравнения: > < >= <= == != === !==
// логические операторы: && ||

var num1 = 5;
var num2 = "5";

console.log(num1, "==", num2, num1 == num2);
console.log(num1, "!=", num2, num1 != num2);
console.log(num1, "===", num2, num1 === num2);
console.log(num1, "!==", num2, num1 !== num2);

// var numberFromUser = prompt("");

// if (numberFromUser == 5) {
//   console.log(numberFromUser + 5);
// }

var isIB = true;
var isMB = false;
var isSomeApp = false;

var isDboUser = (isIB && isMB) || isSomeApp;

// тернарный оператор

var customer = {
  Name: "Evgenii",
  Surname: "Kiselev",
  isResident: true,
  BirthDate: null,
  PhoneNumbers: null, //["+996555112233", "+996500112233", "+996770112233"],
  //                      0               1                 2
  Account: {
    AccountNo: "637846278364823",
    Balance: 2500,
    Currency: "USD",
  },
  //   Passport: "ID12345",
};

var isLogin = false;

console.log(
  isLogin
    ? "Hello, " + customer.Surname + " " + customer.Name
    : "Please, enter to website"
);

if (isLogin) {
  console.log();
} else {
  console.log("Please, enter to website");
}

//falsy: false, 0, NaN, undefined, null, ""
//truthy: все что не falsy

// console.log(customer.PhoneNumbers[50]);
console.log(customer.Passport || "passport not found");

// customer.PhoneNumbers = customer.PhoneNumbers || [];
var phoneNumbersCount =
  (customer.PhoneNumbers && customer.PhoneNumbers.length) || 0;
console.log("phoneNumbersCount =>", phoneNumbersCount);

if (customer.PhoneNumbers) {
  //0..3 - 0 1 2
  for (var i = 0; i < customer.PhoneNumbers.length; i++) {
    console.log(customer.PhoneNumbers[i]);
  }
}

//Бесконечный цикл  -Infinity loop

// for(;;){

// }

// while(true){

// }
// var i = 10;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
// var guessNumber = getRandomArbitrary(1, 5);
// var tries = 0;
// do {
//   var userNum = Number(prompt("1-5"));
//   tries++;
// } while (userNum !== guessNumber);

// console.log("Tries:", tries, "guessed number = ", guessNumber);

var trafficLight = "red";

switch (trafficLight) {
  case "red":
  case "красный":
    console.log("STOP");
    break;
  case "yellow":
  case "желтый":
  case "жёлтый":
    console.log("WAIT");
    break;
  case "green":
  case "зеленый":
  case "зелёный":
    console.log("GO");
    break;
  default:
    console.log("Unknown color");
}

// if (trafficLight == "" || trafficLight == undefined) {
//   console.log("Не введено");
// } else if (trafficLight == "красный") {
//   console.log("Стой!");
// } else if (trafficLight == "желтый") {
//   console.log("Жди!");
// } else if (trafficLight == "зеленый") {
//   console.log("Переходи!");
// } else {
//   console.log("Другое значение");
// }
