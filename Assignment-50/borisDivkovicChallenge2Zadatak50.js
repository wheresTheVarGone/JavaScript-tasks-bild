/*
    2. 
        Napisati funkciju koja prima neki broj te provjerava da li je isti prosti broj.
        Napisati test program koji poziva ovu metodu i ispisuje sve proste
        brojeve u rasponu od 0 do 10.000. (VAŽNO: Zadatak nije ispisati prvih 10.000 prostih brojeva nego sve proste brojeve izmedju 0 i 10.000)
*/
console.log("Prime numbers between 1 and 10000: ");
for(let i = 1; i < 10000; i++){
    isPrime(i);
}

function isPrime(n){
    let factorsNum = 0;
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            factorsNum++;
        }
    }
    if(factorsNum == 2){
        process.stdout.write(`${n}\n`); // testing out the method for standard output which doesn't force /n like console.log() does.
    }
}

// So long flags and complications! :)