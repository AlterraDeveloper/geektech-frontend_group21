/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/Button.js":
/*!******************************!*\
  !*** ./Components/Button.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
function Button(text) {
  return "<div class=\"btn\">".concat(text, "</div>");
}

/***/ }),

/***/ "./Components/MenuItem.js":
/*!********************************!*\
  !*** ./Components/MenuItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuItem)
/* harmony export */ });
function MenuItem(_ref) {
  var picture = _ref.Picture,
    name = _ref.Name,
    price = _ref.Price,
    text = _ref.Text;
  return "\n    <article class=\"menu-item\">\n            <div class=\"menu-item-photo\">\n              <img src=\"".concat(picture, "\" alt=\"buttermilk pancakes\" width=\"300\" height=\"200\">\n            </div>\n            <div class=\"menu-item-content\">\n              <div class=\"menu-item-content-title\">\n                <span class=\"menu-item-content-name\">").concat(name, "</span>\n                <span class=\"menu-item-content-price\">$").concat(price, "</span>\n              </div>\n              <div class=\"menu-item-content-description\">").concat(text, "</div>\n            </div>\n        </article>\n    ");
}

/***/ }),

/***/ "./Models/MenuItem.js":
/*!****************************!*\
  !*** ./Models/MenuItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuItem)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var MenuItem = /*#__PURE__*/_createClass(function MenuItem(picture, name, price, text, category) {
  _classCallCheck(this, MenuItem);
  this.Picture = picture;
  this.Name = name;
  this.Price = price;
  this.Text = text;
  this.Category = category;
});


/***/ }),

/***/ "./Models/User.js":
/*!************************!*\
  !*** ./Models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// export default function User(login, password, username){
//     this.Login = login;
//     this.Password = password;
//     this.UserName = username;
// }
var User = /*#__PURE__*/function () {
  function User(login, password, username) {
    _classCallCheck(this, User);
    this.Login = login;
    this.Password = password;
    this.UserName = username;
  }
  _createClass(User, [{
    key: "authenticate",
    value: function authenticate(login, password) {
      return login === this.Login && password === this.Password ? this.UserName : null;
    }
  }]);
  return User;
}();


/***/ }),

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCyrillic": () => (/* binding */ isCyrillic),
/* harmony export */   "isNumber": () => (/* binding */ isNumber)
/* harmony export */ });
function isCyrillic(_char) {
  return _char >= "а" && _char <= "я" || _char >= "А" && _char <= "Я";
}
var isNumber = function isNumber(_char2) {
  return _char2 >= "0" && _char2 <= "9";
};

/***/ }),

/***/ "./state.js":
/*!******************!*\
  !*** ./state.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _Models_MenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Models/MenuItem */ "./Models/MenuItem.js");
/* harmony import */ var _Models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/User */ "./Models/User.js");


var state = {
  //   users: [
  //     new User("qwerty", "123", "vlad"),
  //     new User("qazwsx", "78946", "ksenya"),
  //     new User("__ivan__", "0000", "ivan"),
  //   ],
  filterValue: null,
  menuItems: [new _Models_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]("./images/burger.jpeg", "burger", 15.99, "dghyuviweiunviow  wuie new", "Burgers"), new _Models_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]("./images/burger.jpeg", "cheeseburger", 25.99, "dghyuviweiunviow  wuie new", "Burgers"), new _Models_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]("./images/burger.jpeg", "Cola", 10, "dghyuviweiunviow  wuie new", "Drinks"), new _Models_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]("./images/burger.jpeg", "Pepsi", 12, "dghyuviweiunviow  wuie new", "Drinks"), new _Models_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]("./images/burger.jpeg", "Chicken roll", 100, "dghyuviweiunviow  wuie new", "Rolls"), new _Models_MenuItem__WEBPACK_IMPORTED_MODULE_0__["default"]("./images/burger.jpeg", "Beef roll", 200, "dghyuviweiunviow  wuie new", "Rolls")]
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./functions.js");
/* harmony import */ var _Components_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/MenuItem */ "./Components/MenuItem.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./state.js");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Button */ "./Components/Button.js");




console.log("My first import");
var c = 5;
var isEven = function isEven(number) {
  return number % 2 === 0;
};
var customerFIO = "Евгений Киселев";
console.log(Array.from(customerFIO).some(_functions__WEBPACK_IMPORTED_MODULE_0__.isCyrillic));
console.log(Array.from(customerFIO).some(_functions__WEBPACK_IMPORTED_MODULE_0__.isNumber));
// console.log(AppName);

// document.querySelector("#loginBtn").addEventListener("click", () => {
//   const loginText = document.querySelector("#login").value;
//   const passwordText = document.querySelector("#password").value;

//   AppState.users.forEach((user) => {
//     const userName = user.authenticate(loginText, passwordText);
//     userName && alert(userName);
//   });
// });

function render() {
  var menuContainerNode = document.querySelector("#menu");
  var menuItemsAsHTML = _state__WEBPACK_IMPORTED_MODULE_2__.state.menuItems.filter(function (item) {
    return _state__WEBPACK_IMPORTED_MODULE_2__.state.filterValue === null || item.Category === _state__WEBPACK_IMPORTED_MODULE_2__.state.filterValue;
  }).map(function (item) {
    return (0,_Components_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])(item);
  }).join("");
  menuContainerNode.innerHTML = menuItemsAsHTML;
  var buttonsContainerNode = document.querySelector("#buttons");
  buttonsContainerNode.innerHTML = Array.from(new Set(_state__WEBPACK_IMPORTED_MODULE_2__.state.menuItems.map(function (item) {
    return item.Category;
  }))).map(function (category) {
    return (0,_Components_Button__WEBPACK_IMPORTED_MODULE_3__["default"])(category);
  }).join("");
  Array.from(document.querySelectorAll(".btn")).forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      _state__WEBPACK_IMPORTED_MODULE_2__.state.filterValue = event.target.textContent;
      console.log(_state__WEBPACK_IMPORTED_MODULE_2__.state);
      render();
    });
  });
}
render();
})();

/******/ })()
;
//# sourceMappingURL=project.js.map