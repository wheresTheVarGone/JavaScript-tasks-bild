/*
    12.
        Napisati program koji ispisuje paskalov trougao. Program treba da radi za bilo koji broj redova.
        1
        2   3
        4   5   6
        7   8   9   10
        11  12  13  14  15
*/
let numCounter = 1;
let num = 1;
for(let i = 0; i < 5; i++){
    for(let j = 0; j < numCounter; j++){
        process.stdout.write(`${num}\t`);
        num++;
    }
    numCounter++;
    console.log();
}