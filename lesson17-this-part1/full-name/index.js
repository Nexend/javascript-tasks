const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');

    this.firstName = firstName;
    this.lastName = lastName;
  },
};

const fullName = user.getFullName.bind(user);
console.log(fullName());
user.setFullName.call(user, fullName());


/* Метод объекта setFullName должен принимать полное имя пользователя в формате John Doe,
 где John - имя, Doe - фамилия, и сохранять отдельно имя и фамилию в поля объекта */
