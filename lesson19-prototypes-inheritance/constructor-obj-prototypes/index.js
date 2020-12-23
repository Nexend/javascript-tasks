function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (newAge) {
  if (newAge < 0) {
    return false;
  }
  this.age = newAge;
  if (this.age >= 25) {
    this.requestNewPhoto();
  }
  return this.age;
};

const user1 = new User("John", 17);

console.log(user1);
user1.sayHi();

const user2 = new User("Bob", 21);

console.log(user2);
user2.sayHi();

console.log(user2.sayHi === user1.sayHi);

user1.requestNewPhoto();
user1.setAge(26);
