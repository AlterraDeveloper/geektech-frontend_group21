// export default function User(login, password, username){
//     this.Login = login;
//     this.Password = password;
//     this.UserName = username;
// }

export default class User {
  constructor(login, password, username) {
    this.Login = login;
    this.Password = password;
    this.UserName = username;
  }

  authenticate(login, password) {
    return login === this.Login && password === this.Password ? this.UserName : null;
  }
}
