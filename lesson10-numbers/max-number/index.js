function getMaxAbsoluteNumber(arr) {
    if ( !Array.isArray(arr) || arr.length === 0 ) {
        return null;
    }
    const absNumbers = arr.map(num => Math.abs(num));

    return Math.max(...absNumbers);
}

console.log(getMaxAbsoluteNumber([21,-777, 3, -1, 45, -20]))