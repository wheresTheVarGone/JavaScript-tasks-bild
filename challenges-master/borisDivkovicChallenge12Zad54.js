/*
    12.
        Napisati program koji ispisuje paskalov trougao. Program treba da radi za bilo koji broj redova.
        1
        2   3
        4   5   6
        7   8   9   10
        11  12  13  14  15
*/

let numCounter = 1; // koliko brojeva treba po redu
let num = 1; // pocetni broj
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < numCounter; j++) { // za broj redova ispisi odgovarajuci broj
        process.stdout.write(`${num}\t`);
        num++; // povecaj broj kako bi se mogao ispisat
    }
    numCounter++; // povecaj broj redova
    console.log(); // dodaj newline (\n) jer process.stdout.write ne forsira newline
}