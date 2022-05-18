/* 
    1.
        Generisati niz od 10 elemenata, random brojevi
        sabrati iterativno i rekurzivno elemente
*/
function recursionSum(start, end) {
    if (start == end)
        return 0;
    return arr[start] + recursionSum(++start, end);
}

let arr = [], sum = 0;

for (let i = 0; i < 10; i++)
    arr.push(Math.floor(Math.random() * 9));
console.table(arr);

for (let i = 0; i < 10; i++)
    sum += arr[i];
console.log(sum);

console.log(recursionSum(0, 10));