/*
    6.
        Napisati program koji sabira nasumicne brojeve sve dok suma ne predje
        1000. Zatim ispisati koliko je bilo parnih a koliko neparnih brojeva i
        ukupnu sumu. Nasumicne brojeve generisati izmedju 10 i 100.
*/
let random, randomMin = 10, randomMax = 100, sum = 0, numEven = 0, numUnEven = 0, numAllTogether;
while(sum <= 1000){
    random = Math.floor(randomMin + Math.random() * (randomMax - randomMin));
    if( (random % 2) == 0 ){
        numEven++;
    } else {
        numUnEven++;
    }
    sum += random;
}
numAllTogether = numEven + numUnEven;
console.log(`Suma ${numAllTogether} nasumicnih brojeva od kojih je ${numEven} parnih i ${numUnEven} neparnih iznosi ${sum}, `);