/*
    Koristeci nasumicno generisan niz brojeva, kreirajte funkciju koja uklanja 25% iz svakog broja u nizu
    osim najmanjeg broja i dodaje ukupan iznos uklonjen najmanjem broju u nizu.
*/
function showSomeLove(arr) {
    const indexOfSmallest = indexNajmanjiUNizu(arr);
    const totalSum = getNeededSum(arr, indexOfSmallest);
    arr[indexOfSmallest] += totalSum;
    return arr;
}
function indexNajmanjiUNizu(arr) {
    let min = Math.min(...arr);
    return arr.indexOf(min);
}
function getNeededSum(arr, indexOfSmallest) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((indexOfSmallest !== i)) {
            sum += arr[i] * 0.25;
            arr[i] *= 0.75;
        }
    }
    return sum;
}
const arr = [];
for (let i = 0; i < 10; i++) {
    const rand = Math.floor(1 + Math.random() * 9);
    arr.push(rand);
}
console.table(arr);
const newArr = showSomeLove(arr);
console.table(newArr);