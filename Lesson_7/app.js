var numbers2 = [1, 2, 3, 4, 5];
var numbers = Array.of(1, 2, 3, 4, 5);

var me = {};
var me2 = Object.create(null);

var warehouse = {
  shirt: 5,
  shoes: 15,
  short: 7,
  hats: 8,
};

var salePoint1 = {
  shoes: 7,
  accessories: 45,
};

// salePoint1.shirt -= 2;

Object.assign(salePoint1, warehouse);

console.log("warehouse =>", warehouse);
console.log("salePoint1 =>", salePoint1);

Array.prototype.first = function () {
  return this[0];
};

Array.prototype.last = function () {
  return this[this.length - 1];
};

Array.prototype.take = function (n) {
  return this.slice(0, n);
};

Array.prototype.filter = function (filterCb) {
  console.log("I'm new filter");
  var filtered = [];
  for (const item of this) {
    if (filterCb(item)) filtered.push(item);
  }
  return filtered;
};

console.log(numbers.first());
console.log(numbers.last());

console.log(
  numbers.filter(function (number) {
    return number > 3;
  })
);

console.log(
  numbers.filter(function (number) {
    return number > 3;
  })
);

var balanceGroupCounter = {};
var generateAccountNo = function (balanceGroup) {
  var orderNo = balanceGroupCounter[balanceGroup];
  balanceGroupCounter[balanceGroup] = orderNo ? orderNo + 1 : 1;
  return (
    balanceGroup +
    balanceGroupCounter[balanceGroup].toString().padStart(11, "0")
  );
};

function Account(balanceGroup, curr, owner, isSalary, balance) {
  this.AccountNo = generateAccountNo(balanceGroup);
  this.Currency = curr;
  this.Owner = owner;
  this.Balance = balance || 0;
  this.isSalary = isSalary || false;
  this.makeReplanishment = function (amount) {
    this.Balance += amount;
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
  this.toString = function () {
    return "".concat(this.AccountNo, " ", this.Currency);
  };
  //   return {
  //     AccountNo: acNo,
  //     Currency: curr,
  //     Balance: balance || 0,
  //     Owner: owner,
  //   }
}

Account.prototype.makeWithdraw = function (amount) {
  if (amount > this.Balance) {
    console.error("Amount over of balance!!!");
    return;
  }
  if (this.isSalary) return;
  this.Balance -= amount;
};

Account.prototype.toString = function () {
  return "".concat(this.AccountNo, "_", this.Currency);
};

var acc = new Account("10521", "KGS", "Kiselev Evgenii");

console.log(acc.toString());

Object.prototype.log = function (logType) {
  //JSON - JavaScript Object Notation
  //сериализация
  this.logtype = logType;
  console.log(JSON.stringify(this));
};

var accountJSON = `{
    "AccountNo": "1052100000000001",
    "Currency": "KGS",
    "Owner": "Kiselev Evgenii",
    "Balance": 0,
    "isSalary": false
  }`;

//парсинг (десериализация)
acc = JSON.parse(accountJSON);

function myFunc() {
  console.log(this);
}

myFunc();

var binListJSON = `[
    {
    "bin": 19627,
    "brand": "PRIVATE LABEL",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 21502,
    "brand": "PRIVATE LABEL",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 42410,
    "brand": "PRIVATE LABEL",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 57164,
    "brand": "PRIVATE LABEL",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 63047,
    "brand": "VISA",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 63048,
    "brand": "VISA",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 63049,
    "brand": "VISA",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 103003,
    "brand": "PRIVATE LABEL",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 111100,
    "brand": "PRIVATE LABEL",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 111102,
    "brand": "PRIVATE LABEL",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 111103,
    "brand": "PRIVATE LABEL",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 111301,
    "brand": "PRIVATE LABEL",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 111904,
    "brand": "PRIVATE LABEL",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 131000,
    "brand": "PRIVATE LABEL",
    "type": "DEBIT",
    "category": "",
    "issuer": "",
    "alpha_2": "US",
    "alpha_3": "USA",
    "country": "United States",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180000,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180001,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180002,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180003,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180004,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180005,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180006,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180007,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180008,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180009,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180010,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180011,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180012,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180013,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180014,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180015,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180016,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180017,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180018,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180019,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180020,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180021,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180022,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180023,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180024,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  },
  {
    "bin": 180025,
    "brand": "JCB",
    "type": "CREDIT",
    "category": "",
    "issuer": "JCB CO., LTD.",
    "alpha_2": "JP",
    "alpha_3": "JPN",
    "country": "Japan",
    "latitude": 36.2048,
    "longitude": 138.253,
    "bank_phone": "",
    "bank_url": ""
  }
]`;

var binlist = JSON.parse(binListJSON);

var binInput = document.querySelector(".iin");

binInput.addEventListener("input", function (event) {
  var foundBin = binlist.find(function (binListItem) {
    return binListItem.bin === Number(event.target.value);
  });
  var containerNode = document.querySelector(".result");
  for (const key in foundBin) {
    var foundNode = null;
    switch (key) {
      case "brand":
      case "country":
        foundNode = containerNode.querySelector(`.${key} p`);
        foundNode.textContent = foundBin[key];
        break;
      case "latitude":
      case "longitude":
        foundNode = containerNode.querySelector(`span.${key}`);
        foundNode.innerText = foundBin[key];
        break;
      case "type":
        foundNode = containerNode.querySelector(
          `[data-value="${foundBin[key].toLowerCase()}"]`
        );
        Object.assign(foundNode.style, { color: "black" });
    }
  }
});

for (const key in numbers) {
  console.log(key);
}

//внутреннее устройство массива
var array = {
  0: 1,
  1: 2,
};
