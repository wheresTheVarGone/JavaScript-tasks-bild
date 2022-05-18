/*
    3. 
        Napisati program koji ce simulirati unos n slučajnih vrijednosti u opsegu od 0 do 1000. Za n uzeti proizvoljan broj. 
        Izračunati statističke podatke u kojem procentu se od n generisanih slučajnih vrijednosti pojavljuje prost broj.
        Npr. Ako je generisano 10 brojeva (n = 10): 5,7,4,13,17,20,25,23,30,45, u ovom uzorku od 10 brojeva postoji 
        5 prostih brojeva pa je procenat prostih brojeva u ovom slučaju 50%.
        Napomena: Po želji kreirati dodatne funkcije da se olakša rješavanje zadatka.
*/
function isPrime(num) {
    let numOfFactors = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
            numOfFactors++;
    }
    if (numOfFactors == 2) {
        return true;
    }
    return false;
}
function getPercentageOfPrimeNums(primeNumbers, numOfGenerations) {
    return (primeNumbers / numOfGenerations) * 100;
}

let n = 10, primeNums = 0;
for (let i = 0; i < n; i++) {
    const rand = Math.floor(Math.random() * 1000);
    console.log(rand);
    if (isPrime(i))
        primeNums++;
}
const primeNumPercentageOfN = getPercentageOfPrimeNums(primeNums, n);
console.log(`Broj prostih brojeva je ${primeNums} i postotak u ${n} generisanja je ${primeNumPercentageOfN}%`);