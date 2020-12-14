const countOccurrences = (str, search) => search.length === 0 ? null : str.split(search).length - 1
console.log(countOccurrences('hello world','o'));