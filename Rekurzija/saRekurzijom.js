/*
    2.
        Napisati program koji sabira brojeve od 1 do 10
*/
function recursionSum(start, end) {
    if (start == end)
        return end;
    return start + recursionSum(++start, end);
}
let start = 1, end = 10;

console.log(recursionSum(1, 10));