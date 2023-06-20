function fibs(num) {
    if (num < 1) return 'Error: need a number higher than 0';

    let arr = [];
    for (let i = 0; i < num; i++) {
        if (arr.length === 0) {
            arr.push(0)
        } else if (arr.length === 1) {
            arr.push(1)
        } else {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        }
    }
    return arr;
}

console.log(fibs(8))