/*
    5. 
        Napisati rekurzivnu funkciju koja racuna faktorijel nekog broja. Primjer faktorijela broja 5 je 
        5 * 4 * 3 * 2 * 1 = 120. Rekurzivna funkcija je funkcija koja poziva samu sebe.
*/

function numFactoriel(num){
    let product = 1;
    while(num > 0){
        product = product * num;
        num--;
        numFactoriel(num);
    }
    return product;
}

console.log(numFactoriel(6));