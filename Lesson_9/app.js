import { isCyrillic, isNumber } from "./functions";
import MenuItem from "./Components/MenuItem";
import { state as AppState } from "./state";
import Button from "./Components/Button";

console.log("My first import");

const c = 5;

const isEven = (number) => number % 2 === 0;

const customerFIO = "Евгений Киселев";

console.log(Array.from(customerFIO).some(isCyrillic));
console.log(Array.from(customerFIO).some(isNumber));
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
  const menuContainerNode = document.querySelector("#menu");
  const menuItemsAsHTML = AppState.menuItems
    .filter(item => AppState.filterValue === null || item.Category === AppState.filterValue)
    .map((item) => MenuItem(item))
    .join("");
  menuContainerNode.innerHTML = menuItemsAsHTML;

  const buttonsContainerNode = document.querySelector("#buttons");
  buttonsContainerNode.innerHTML = Array.from(
    new Set(AppState.menuItems.map((item) => item.Category))
  )
    .map((category) => Button(category))
    .join("");

  Array.from(document.querySelectorAll(".btn")).forEach((btn) => {
    btn.addEventListener("click", (event) => {
      AppState.filterValue = event.target.textContent;
      console.log(AppState);
      render();
    });
  });
}

render();
