const someJsonData = '{"name": "Tom", "age": 20}';

const parseUser = jsonString => {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    return null;
  }
};

console.log(parseUser(someJsonData));
