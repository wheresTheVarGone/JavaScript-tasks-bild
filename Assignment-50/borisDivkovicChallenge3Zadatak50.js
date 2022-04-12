/*
    3.  
        Napisati funkciju koja generiše te ispisuje 100 nasumičnih brojeva, 10 brojeva po liniji. 
        Ispis programa treba da izgleda kao 10x10 matrica nasumičnih brojeva.
*/
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        const randNum = Math.floor(1 + Math.random() * 9);
        process.stdout.write(`${randNum}\t`); // works like console.log() without forcing /n
    }
    console.log("\n"); // force double /n after every 10 numbers.
}