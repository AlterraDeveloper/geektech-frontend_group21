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
  PrintCustomerInfo: function () {
    console.log("Hello, i'am", this.Surname + " " + this.Name);
  },
  //   Passport: "ID12345",
};

var customerCardType = customer.Card.CardType;
// if (customerCardType === "VISA") {
//   console.log("Send request to VISA processing");
// } else if (
//   customerCardType === "MasterCard" ||
//   customerCardType === "Maestro"
// ) {
//   console.log("Send request to MasterCard processing");
// } else if (customerCardType === "Elcard") {
//   console.log("Send request to Elcard processing");
// } else {
//   console.warn("Invalid processing name");
// }

switch (customerCardType) {
  case "VISA":
  case 1:
    console.log("Send request to VISA processing");
    break;
  case "MasterCard":
  case "Maestro":
  case 2:
    console.log("Send request to MasterCard processing");
    break;
  case "Elcard":
  case 3:
    console.log("Send request to Elcard processing");
    break;
}

var customerINN = customer.IdentificationNumber;
var firstINNChar = customerINN[0];
if (
  Number(customerINN) &&
  customerINN.length === 14 &&
  ["0", "1", "2"].includes(customerINN[0])
  //(firstINNChar === "0" || firstINNChar === "1" || firstINNChar === "2")
) {
  console.log("INN is valid");
} else {
  console.warn("INN ERROR!!!");
}

customer.PrintCustomerInfo();

var fruits = ["banana", "cherry", "melon", "apple", "orange"];
console.log(fruits.includes("melon"));

for (var fruit of fruits) {
  console.log(fruit.toUpperCase());
}

function RemoveNonDigitChars(text) {
  var newText = "";
  for (var textChar of text) {
    newText += textChar >= "0" && textChar <= "9" ? textChar : "";
  }
  return newText;
}

//+996 XXX YYYYYY -> +996 555 112233
function FormatKgPhoneNumber(phoneNumber) {
  phoneNumber = RemoveNonDigitChars(phoneNumber);
  var countryCode = phoneNumber.substring(0, 3);
  var operatorCode = phoneNumber.substring(3, 6);
  var number = phoneNumber.substring(6);
  return "+".concat(countryCode, " ", operatorCode, " ", number);
}

//+7 XXX YYYYYYY
function FormatRuPhoneNumber(phoneNumber) {
  phoneNumber = RemoveNonDigitChars(phoneNumber);
  var countryCode = phoneNumber.substring(0, 1);
  var operatorCode = phoneNumber.substring(1, 4);
  var number = phoneNumber.substring(4);
  return "+".concat(countryCode, " ", operatorCode, " ", number);
}

function detectPhoneNumberCountry(phoneNumber) {
  var phoneNumber = RemoveNonDigitChars(phoneNumber);
  if (phoneNumber.startsWith("996")) {
    return "KG";
  } else if (phoneNumber.startsWith("7")) {
    return "RU";
  }
  return null;
}

function FormatPhoneNumber(phone) {
  var phoneCountry = detectPhoneNumberCountry(phone);
  switch (phoneCountry) {
    case "KG":
      return FormatKgPhoneNumber(phone);
    case "RU":
      return FormatRuPhoneNumber(phone);
    default:
      return phone;
  }
}

for (var i = 0; i < customer.PhoneNumbers.length; i++) {
  console.log(FormatPhoneNumber(customer.PhoneNumbers[i]));
}

function ValidationByLuhn(cardNumber) {
  var isSecond = false;
  var sum = 0;
  for (var i = cardNumber.length - 1; i >= 0; i--) {
    var digit = Number(cardNumber[i]);
    console.log(typeof digit);
    if (isSecond) {
      var doubledDigit = (digit * 2).toString().padStart(2, "0"); //1 -> 01, 16 -> 16
      sum += Number(doubledDigit[0]) + Number(doubledDigit[1]); //01 -> 0 + 1, 16 -> 1 + 6
    } else {
      sum += digit;
    }
    isSecond = !isSecond;
  }
  console.log(sum);
  return sum % 10 === 0;
}

console.log(
  ValidationByLuhn(RemoveNonDigitChars("4169 5853 4589 8810"))
    ? "CARD IS VALID"
    : "CARD ERROR"
);

console.log(
  ValidationByLuhn(RemoveNonDigitChars("4169 5853 5912 9152"))
    ? "CARD IS VALID"
    : "CARD ERROR"
);

console.log(
  ValidationByLuhn(RemoveNonDigitChars("5536 9141 1771 5411"))
    ? "CARD IS VALID"
    : "CARD ERROR"
);
