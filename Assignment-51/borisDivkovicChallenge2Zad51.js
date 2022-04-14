/*
    2.
        Twin prime brojevi su par prostih brojeva koji se razlikuju za 2. Na
        primjer, brojevi 3 i 5 su twin primes, brojevi 5 i 7 i 11 i 13 su
        također twin primes. Napisati funkciju koja ispisuje sve twin prime
        brojeve manje od 10.000, 10 parova po liniji. (Ne prvi 10.000 twin prime
        brojeva, sve twin prime brojeve u rasponu od 0 do 10.000)
*/

let limit = 10000, numOfPrime = 0;

for (let i = 2; i <= limit; i++) {
    if (isTwinPrime(i) && isTwinPrime(i + 2)) { 
        /*  salju se prost broj i naredni prost broj plus 2, provjerava se da li su zapravo twins i prosti, 
        ako jesu funkcija za oba proslijedi truthy vrijednost */
        process.stdout.write(`| ${i}, ${i + 2} |\t`); // opet sam koristio ovu metodu jer nema forsiran /n
        numOfPrime++; // broji proste brojeve 
        if(numOfPrime % 10 == 0){ // jer kada broj ispisanih prostih brojeva bude 10 po liniji,
            console.log("\n"); // treba ispisivati formatirano po 10 od sljedece linije.
        }
    }
}
console.log(`\nUkupan broj prostih brojeva blizanaca od 2 do ${limit} je ${numOfPrime}`);

function isTwinPrime(n) {
    let i = 2;
    for(i = 2; i <= n / 2; i++) { // idi do polovice prosljedjenog broja za koji se provjerava da li je prost
        if (n % i == 0) return 0; // ako je djeljivo sa i u bilo kojem slucaju, onda nije prost broj - vrati falsy vrijednost
    }
    if(i > n / 2) return 1; // ako je i eventualno vece od aritmeticke sredine trazenog broja, onda je broj prost i vrati truthy vrijednost
}  