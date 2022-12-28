//ES5 -> ECMA2015
//ES6+

//1. let, const

//Hoisting - поднятие(всплытие)
var a;
var fn;
// console.log(c);
// fn();

// var fn = function () {
//   console.log("I'm func");
// }

a = 5;
let b = 5;
const c = 5;

let counter = 500;

function increaseCounter() {
  console.log("In func", counter);
  var counter = 2000;
  counter += 100;
  console.log("In func", counter);
}

increaseCounter();

for (let i = 0; i < 5; i++) {
  if (true) {
    let counter = i;
    console.log("inner counter", counter);
  }
  console.log("outter counter", counter);
}

console.log(counter);

//c = 'qwerty';
console.log(b);

const fruits = ["apple", "orange"];
console.log(fruits);
fruits.push("cherry");
fruits.shift();
// fruits = ["bmw", "mazda"];
console.log(fruits);

const me = {
  name: "342342",
  surname: "213",
};

me.Passport = "AN12345";
delete me.Passport;
delete me.name;

console.log(me);

//2. Arrow functions - стрелочные функции

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function isEven(number) {
//   return number % 2 === 0;
// }

const isEven = (number) => number % 2 === 0;

console.log(numbers.filter(isEven));
console.log(numbers.filter((num) => num > 6));

console.log(numbers.map((num) => num ** 2));
console.log(numbers.map((num) => num.toString(2)));

function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColorHash() {
  var red = generateRandomNumber(0, 255);
  var green = generateRandomNumber(0, 255);
  var blue = generateRandomNumber(0, 255);
  return (
    "#" +
    [red, green, blue]
      .map((color) => color.toString(16).padStart(2, "0"))
      .join("")
  );
}

console.log(generateColorHash());

console.log(
  numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, num) => (sum += num), 0)
);

console.log(numbers.every((num) => num > 1));

//3. Template strings - шаблонные строки

var customer = {
  Name: "Evgenii",
  Surname: "Kiselev",
  isResident: true,
  BirthDate: null,
  IdentificationNumber: "21234567891234",
  PhoneNumbers: [
    "996555112233",
    "+(996)500112233",
    "+(996) 770 11-22-33",
    "7(123)4567878",
    "+1(985)412587",
  ],
  //                      0               1                 2
  Account: {
    AccountNo: "637846278364823",
    Balance: 2500,
    Currency: "USD",
  },
  Card: {
    PAN: "4215 8945 2378 1523",
    CVC: 954,
    Owner: "Kiselev Evgenii",
    ExpiryDate: "05/25",
    CardType: "1",
  },
  Passport: {
    Series: "AN",
    Number: "987654",
  },
  PrintCustomerInfo: function () {
    console.log("Hello, i'am", this.Surname + " " + this.Name);
  },
  //   Passport: "ID12345",
};

const agreementText = `Уважаемый ${[customer.Surname, customer.Name].join(" ")}.
  На вашем счете ${customer.Account.AccountNo} текущий баланс составляет ${
  customer.Account.Balance
} (${customer.Account.Currency})`;

console.log(agreementText);

//4. spread rest operators

//rest
function mean(...numbers) {
  const sum = numbers.reduce((sum, num) => (sum += num));
  return sum / numbers.length;
}

console.log(mean(5, 7, 9, 10));

function sendDataToBackendEs6(token, format, ...items) {
  return {
    Token: token,
    Format: format,
    Data: items,
  };
}
function sendDataToBackendEs5() {
  const token = arguments[0];
  const format = arguments[1];
  const items = Array.from(arguments).slice(2);

  return {
    Token: token,
    Format: format,
    Data: items,
  };
}

const openAccountRequest = sendDataToBackendEs6(
  "532874e632876428",
  "text/json",
  "10102",
  ["USD", "KGS"]
);

const openAccountRequest2 = sendDataToBackendEs5(
  "532874e632876428",
  "text/json",
  "10102",
  ["USD", "KGS"]
);

console.log(openAccountRequest);
console.log(openAccountRequest2);
fruits.push("melon", "blackberry");
const [fruit1, , fruit3] = [...fruits]; //[1,2,3] -> fruit = 1, fruit2 =  2, 3

const { PhoneNumbers: phones } = { ...customer };
console.log("Cust phones =>", phones);

const customerFromGRS = {
  Name: "Евгений",
  Surname: "Киселев",
  Passport: {
    Series: "ID",
    Number: "123456",
  },
};

console.log({ ...customer, ...customerFromGRS });

//5. Default params - параметры по умолчанию

const backendFormat = "text/json";
const getFormatFromSettings = () => "text/json";

const backendRequest = {
  Token: "hefewjfwecwecwrv43f3",
  Format: "text/json",
  Client: {},
};

function logRequest({ Token: token, Format: format }) {
  console.log(token);
  console.log(format);
}

//NPM - Node package manager
