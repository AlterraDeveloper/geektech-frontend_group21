import MenuItem from "./Models/MenuItem";
import User from "./Models/User";

export const state = {
  //   users: [
  //     new User("qwerty", "123", "vlad"),
  //     new User("qazwsx", "78946", "ksenya"),
  //     new User("__ivan__", "0000", "ivan"),
  //   ],
  filterValue: null,
  menuItems: [
    new MenuItem(
      "./images/burger.jpeg",
      "burger",
      15.99,
      "dghyuviweiunviow  wuie new",
      "Burgers"
    ),
    new MenuItem(
      "./images/burger.jpeg",
      "cheeseburger",
      25.99,
      "dghyuviweiunviow  wuie new",
      "Burgers"
    ),
    new MenuItem(
      "./images/burger.jpeg",
      "Cola",
      10,
      "dghyuviweiunviow  wuie new",
      "Drinks"
    ),
    new MenuItem(
      "./images/burger.jpeg",
      "Pepsi",
      12,
      "dghyuviweiunviow  wuie new",
      "Drinks"
    ),
    new MenuItem(
      "./images/burger.jpeg",
      "Chicken roll",
      100,
      "dghyuviweiunviow  wuie new",
      "Rolls"
    ),
    new MenuItem(
      "./images/burger.jpeg",
      "Beef roll",
      200,
      "dghyuviweiunviow  wuie new",
      "Rolls"
    ),
  ],
};
