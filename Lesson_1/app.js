// я строчный комментарий

/*
Я
Многострочный
комментарий
*/

/*
Урок 1
Основы JavaScript
Группа 21
Дата: 03.12.2022
*/

//alert("Hello world");

// console.log("Hello console");
// console.warn("JS has bugs");
// console.error("It's bug");

//Типы данных - Data types
//1) строковый (текстовый) - string
//2) числовой - number
//3) логический - boolean
//4) неопределенный - undefined
//5) пустой - null
//6) Число с длинной арифметикой - BigInt
//7) Уникальный - Symbol
//8) Объектный (комплексный) - Object

//1) строковый (текстовый) - string
var customerName = "Evgenii"; //Camel case
var customerSurname = "Kiselev";

//Concatenation - конкатенация
console.log("Customer fullname is =>", customerSurname + " " + customerName);

console.log("String =>", typeof "");

// customerName = prompt("Enter your name");
// console.log("Customer name is =>", customerName);

//2) числовой - number
var customerId = 54123;
var accountBalance = 500;

console.log(accountBalance + 500);
console.log(accountBalance - 500);
console.log(accountBalance * 2);
console.log(accountBalance / 500);
console.log(accountBalance % 41);
console.log(accountBalance ** 2);
console.log("Zero =>", -accountBalance / 0);
console.log("Invalid math operation =>", accountBalance * "qwerty");

//NaN - Not a Number
console.log("Number =>", typeof NaN);

//3) логический - boolean
var isResident = true;
var isInternetBankingUser = false;

//4) неопределенный - undefined
var customerBirthDate;

console.log("Customer BirthDate =>", customerBirthDate);
console.log("Undefined =>", typeof undefined);

//5) пустой - null
customerBirthDate = null;

console.log("Customer BirthDate =>", customerBirthDate);
console.log("Undefined =>", typeof null); //object это баг

//6) Число с длинной арифметикой - BigInt
//7) Уникальный - Symbol

//8) Объектный (комплексный) - Object

var customer = {
  Name: "Evgenii",
  Surname: "Kiselev",
  isResident: true,
  BirthDate: null,
  Account: {
    AccountNo: "637846278364823",
    Balance: 2500,
    Currency: "USD",
  },
};

console.log(customer.Surname);
console.log(customer["Surname"]);
console.log("Object =>", typeof {});

var loanRequestSum = 5000000;

if (isResident || loanRequestSum < 1000000) {
  console.log("Issue loan allowed");
} else {
  console.warn("Issue loan rejected");
}

//период в месяцах
var depositPeriod = 60;

if (depositPeriod > 0 && depositPeriod <= 12) {
  console.log("Краткосрочный депозит");
} else if (depositPeriod > 12 && depositPeriod <= 60) {
  console.log("Среднесрочный депозит");
} else if (depositPeriod > 60) {
  console.log("Долгосрочный депозит");
} else {
  console.log("Неверный период депозита");
}


