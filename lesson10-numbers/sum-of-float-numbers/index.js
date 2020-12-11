function getTotalPrice (arr) {
    const sumArr = arr.reduce((acc,item) => acc + item);
    return '$' + Math.floor(sumArr * 100) / 100;
}
console.log(getTotalPrice([2.79,1.489,3.9,11,0.5]));