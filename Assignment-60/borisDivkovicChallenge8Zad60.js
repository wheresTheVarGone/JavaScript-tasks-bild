/*
    8. 
        Svaki paran broj se može prikazati kao suma dva prosta broja (tkz. Goldbachovo pravilo). 
        Napisati program koji ce prikazati sve parne brojeve u intervalu od n1 do n2 kao sumu dva prosta broja. 
        n1 i n2 uzeti proizvoljno s tim da n2 mora biti veci od n1.
*/
function fillArrWithPrime(arr = [], n, m){
    let numOfFactors = 0;
    for(let i = n; i < m; i++){
        for(let j = 1; j <= i; j++){
            if(i % j == 0){
                numOfFactors++;
            }
        }
        if(numOfFactors == 2){
            arr.push(i);
        }
        numOfFactors = 0;
    }
}

let n1 = 0, n2 = 100, sum;
let primeNumArray = [];
let newArr = [];
fillArrWithPrime(primeNumArray, n1, n2);
console.log(primeNumArray);

for(let i = 0; i < primeNumArray.length; i++){
    for(let j = 0; j < primeNumArray.length; j++){
        sum = primeNumArray[i] + primeNumArray[j]; 
        if((sum) % 2 == 0 && sum <= n2 && sum >= n1)
            newArr.push(`${primeNumArray[i]} + ${primeNumArray[j]} = ${sum}`); 
    }
}
console.log(newArr);