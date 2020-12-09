/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const rooms = {
  room1: [
    { name: "room1 name1" },
    { name: "room1 name2" },
    { name: "room1 name3" },
    { name: "room1 name4" },
  ],
  room2: [
    { name: "room2 name1" }
  ],
  room3: [
    { name: "room3 name1" },
    { name: "room3 name2" },
    { name: "room3 name3" },
  ],
};


// function getPeople(obj) {
//   const arrProperties = [];
//   if ( Object.keys(obj).length === 0 ) {
//     return arrProperties
//   }
//   const objProperties = Object.entries(obj)
//     .map(name => name[1])
//     .reduce((acc, elem) => acc.concat(elem));
  
//   for ( const key in objProperties ) {
//     arrProperties.push(objProperties[key].name);
//   }

//   return arrProperties;
// }


const getPeople = obj => Object.entries(obj)
      .map(item => item[1]).flat()
      .map(item => Object.values(item)).flat();

console.log(getPeople(rooms));



// ['room1 name1', 'room1 name2', ... 'room2 name1', 'room3 name1', ...]

