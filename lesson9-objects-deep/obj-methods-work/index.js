function getAdults(obj) {
  const result = Object.entries(obj)
    .filter(key => key[1] >= 18)
    .map(key => key[0])

    return result
}


console.log(getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }));