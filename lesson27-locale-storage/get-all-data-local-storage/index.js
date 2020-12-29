localStorage.clear();
localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('name', 'Bob');
localStorage.setItem('age', JSON.stringify(17));

// console.log(JSON.parse(localStorage.getItem('hobbies')));

const getLocalStorageData = () =>
  Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});

console.log(getLocalStorageData());
