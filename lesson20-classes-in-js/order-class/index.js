class Order {
  isConfirmed = false;

  id = `${Math.floor(Math.random() * 100)}`;

  dateCreated = new Date();

  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === "Buy" || this.type === "Sell") {
      return true;
    }
    return false;
  }
}

const order1 = new Order(100, "Odessa", "Buy");

console.log(order1.isValidType());
console.log(order1.checkPrice());
console.log(order1.isConfirmed);
console.log(order1.id);
console.log(order1.dateCreated);
console.log(order1);
console.log(order1.confirmOrder());
console.log(order1);
