// generateAccountNo();

//function declaration - определение функции
// function generateAccountNo(){
//     console.log("11111111");

// }

console.log(generateAccountNo);

//function expression - функциональное выражение
var generateAccountNo = function (balanceGroup) {
  var orderNo = 1;
  return balanceGroup + orderNo.toString().padStart(11, "0");
};

console.log(typeof generateAccountNo); // баг JS

console.log(generateAccountNo("10102", 1, null, undefined));

function findMax() {
  var max = arguments[0];
  for (const param of arguments) {
    max = param > max ? param : max;
  }
  return max;
}
var numbers = [1, 4, 5, 2];

console.log("Math.max => ", Math.max(5, 7, 8, 4, 17, -1, 8));
console.log("findMax => ", findMax(5, 7, 8, 4, 17, -1, 8));

console.log("Array max => ", findMax(numbers));
console.log("Array Math.max => ", Math.max.apply(null, numbers));
console.log(1);
console.log(1, 2, null, "", [1, 2, 3], { text: "dsvwd" });

console.log("".concat("21", ":", "30", ":", "00"));
console.log(["21", "30", "00"].join());
console.log(MyJoin(["21", "30", "00"]));

function MyJoin(array, separator) {
  separator = separator || ",";
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += array[i] + (i === array.length - 1 ? "" : separator);
  }
  return result;
}

//callback - функция обратного вызова

function MyFilter(array, filterCb) {
  var filtered = [];
  for (const item of array) {
    if (filterCb(item)) filtered.push(item);
  }
  return filtered;
}

numbers = [1, -5, 4, 0, -20, 1, 4, -7];

console.log(
  MyFilter(numbers, function (number) {
    return number > 2;
  })
);

var fruits = ["banana", "melon", "cherry", "apple", "orange"];
console.log(
  MyFilter(fruits, function (fruit) {
    return !["a", "e", "u", "i", "o", "y"].includes(fruit[0]);
  })
);

var sender = "Иванов Иван Иванович"; // Ivanov

var senderResponse = "?????? ???? ?????????";

var isCyrillyc = false;
for (const char of sender) {
  isCyrillyc = ("я" >= char && char <= "а") || ("Я" >= char && char <= "А");
  if (isCyrillyc) break;
}

console.log(isCyrillyc);

function isCyrillycFn(char) {
  return ("я" >= char && char <= "а") || ("Я" >= char && char <= "А");
}

console.log(Array.from(sender).some(isCyrillycFn));

function Account(acNo, curr, owner, isSalary, balance) {
  this.AccountNo = acNo;
  this.Currency = curr;
  this.Owner = owner;
  this.Balance = balance || 0;
  this.isSalary = isSalary || false;
  this.makeReplanishment = function (amount) {
    this.Balance += amount;
  };
  this.makeWithdraw = function (amount) {
    if (amount > this.Balance) {
      console.error("Amount over of balance!!!");
      return;
    }
    if (this.isSalary) return;
    this.Balance -= amount;
  };
  this.createNewAccount = function (curr) {
    if (curr === this.Currency) return;
    var newAccount = Object.create(this);
    Object.assign(newAccount, {
      Currency: curr,
      Balance: 0,
    });
    return newAccount;
  };
  //   return {
  //     AccountNo: acNo,
  //     Currency: curr,
  //     Balance: balance || 0,
  //     Owner: owner,
  //   }
}


//10102: 1
//20201: 3
var balanceGroupCounter = {};
var generateAccountNo = function (balanceGroup) {
  var orderNo = balanceGroupCounter[balanceGroup];
  balanceGroupCounter[balanceGroup] = orderNo ? orderNo + 1 : 1;
  return (
    balanceGroup +
    balanceGroupCounter[balanceGroup].toString().padStart(11, "0")
  );
};

var accounts = [
  new Account(generateAccountNo("20201"), "USD", "Ivanov I.", false, 150),
  new Account(generateAccountNo("20201"), "EUR", "Petrov E.", false),
  new Account(generateAccountNo("15110"), "KGS", "Glazova I.", true, 50000),
];

accounts.forEach(function (account) {
  account.makeWithdraw(100);
  console.log(account);
  console.log(account.toString());
});


console.log(generateAccountNo("10102"));
console.log(generateAccountNo("20201"));
console.log(generateAccountNo("10102"));
console.log(generateAccountNo("10102"));
console.log(generateAccountNo("20201"));

var newAccount = accounts[0].createNewAccount("RUB");
newAccount && accounts.push(newAccount);
