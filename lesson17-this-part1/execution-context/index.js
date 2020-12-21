const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
user.getFullName();
console.log(user.getFullName())
