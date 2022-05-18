/*
    4.
        Napisite JavaScript rekurzivnu funkciju da dobijete prvih n Fibonacijevih brojeva. 
        Napomena: Fibonacijev niz je niz brojeva: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
        Svaki naredni broj je zbir prethodna dva i krece od 0.
*/
function fibonacciArr(arr, start, stop) {
    if (start == 1 || start == 0) {
        arr.push(start);
        return start + fibonacciArr(arr, ++start, stop);
    }
    if (start == stop) return 0;
    arr.push(arr[start - 1] + arr[start - 2]);
    return start + fibonacciArr(arr, ++start, stop);
}
const arr = [], n = 10, firstNum = 0;
fibonacciArr(arr, firstNum, n);
console.table(arr);