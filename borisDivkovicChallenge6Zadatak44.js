/* 
    6. 
        Napisati program koji racuna faktorijel nekog broja n. N broj uzeti proizvoljno, 
        izracunati faktorijel zatim ispisati rezultat. Faktorijel broje se racuna na sljedeci nacin: 
        faktorijel = n * (n-1)* (n-2)... * 1.
*/

let n = 5, fakt = 1;
let nVar = n;
while(n > 0){
    fakt *= n;
    n--;
}
console.log(`Faktorijel broja ${nVar} je ${fakt}`);