// vehicle and ship

const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: "Argo",
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  // __proto__: vehicle,
};

Object.setPrototypeOf(ship, vehicle);

ship.startMachine();
ship.stopMachine();

const getOwnProps = (obj) => Object.keys(obj).filter((el) => typeof obj[el] !== 'function' ? el : false);


// function getOwnProps1(obj) {
//   const res = [];
//   for (let prop in obj) {
//     if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
//       res.push(prop);
//     }
//   }
//   return res;
// }

console.log(getOwnProps(ship));
