/*
    5. 
        Napisati program koji izračunava prosjek svih savršenih brojeva iz zadatog intervala. Uzeti proizvoljan interval. 
        Za neki broj se kaže da je savršen ukoliko je jednak sumi svih svojih djelilaca (ne uključujući njega samog). 
        Na primjer, 28 je savršen broj: njegovi djelioci su 1, 2, 4, 7 i 14, a 1 + 2 + 4 + 7 + 14 = 28. 
        Jedini savršeni brojevi u opsegu od 1 do 100 su brojevi 6 i 28.
*/
function isNumPerfect(num) {
    let sumOfFactors = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0)
            sumOfFactors += i;
    }
    if (sumOfFactors == num)
        return true;
    return false;
}
function getPercentageOfPerfectNums(perfectNumbers, numOfIterations) {
    return (perfectNumbers / numOfIterations) * 100;
}
let n = 1;      // Donja granica
let m = 1000;    // Gornja granica
let perfectNums = 0; // Broj savrsenih brojeva
for (let i = n; i < 100; i++) {
    if (isNumPerfect(i)) {
        perfectNums++;
    }
}
const percentageOfPerfectNums = getPercentageOfPerfectNums(perfectNums, m);
console.log(`U opsegu od ${n} do ${m} ima ${perfectNums} savrsenih brojeva.\nU postotcima to iznosi ${percentageOfPerfectNums}%`);