class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }
    this.age = newAge;
    if (this.age >= 25) {
      this.requestNewPhoto();
    }
    return this.age;
  }

  static createEmpty() {
    const user = {
      name: "",
      age: null,
    };
    return user;
  }
}

const user1 = new User("John", 17);
const user2 = new User("Bob", 20);

console.log(user1);
console.log(User.creatEmpty);
