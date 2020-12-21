const event = {
  guests: [
    { name: "Tom", age: 17, email: "a@gmail.com" },
    { name: "John", age: 18, email: "example@server.com" },
  ],
  message: "Welcome to the party!",
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`
      }));
  },
};

console.log(event.getInvitations());
