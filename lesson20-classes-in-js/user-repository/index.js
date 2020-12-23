/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

const user1 = new User("1", "Tom", "session-id");
const user2 = new User("31", "Bob", "session-id");

console.log(user1);
console.log(user1.name);

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((el) => el.name);
  }

  getUserIds() {
    return this._users.map((el) => el.id);
  }

  getUserNameById(id) {
    return this._users.find((el) => el.id === id).name;
  }
}

const userRep = new UserRepository([user1, user2]);
console.log(userRep);
console.log(userRep.getUserNames());
console.log(userRep.getUserIds());
console.log(userRep.getUserNameById());
