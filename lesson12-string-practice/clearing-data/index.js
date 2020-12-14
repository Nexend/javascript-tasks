const cleanTransactionsList = arr => arr
    .map(el => (typeof el === "string" ? +el.trim() : el))
    .filter(el => !Number.isNaN(el))
    .map(el => "$" + el.toFixed(2));
console.log(cleanTransactionsList(["  1.9 ", "16.4", 17, " 1 dollar "]));
