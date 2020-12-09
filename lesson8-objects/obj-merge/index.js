/* eslint-disable no-shadow */
/* eslint-disable prefer-object-spread */
const obj1 = {
  name: 'Tom',
  age: 17
};
const obj2 = {
  name: 'Bob',
  student: false
};



const mergeObjectsV1 = (obj1,obj2) => Object.assign({}, obj1, obj2);

const mergeObjectsV2 = (obj1,obj2) => Object.assign({}, obj2, obj1);

const mergeObjectsV3 = (obj1,obj2) => ( { ...obj1, ...obj2 } );

const mergeObjectsV4 = (obj1,obj2) => ( { ...obj2, ...obj1 } );



console.log(mergeObjectsV1(obj1,obj2));
console.log(mergeObjectsV2(obj1,obj2));
console.log(mergeObjectsV3(obj1,obj2));
console.log(mergeObjectsV4(obj1,obj2));
