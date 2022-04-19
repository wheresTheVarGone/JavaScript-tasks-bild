/*
    18.
        Napisati funkciju koja provjerava da li cijeli broj ima tacno 3 djelioca, i vraca true ukoliko broj ima tacno 3 djelioca a false u suprotnom. 
        Npr broj 4 ima tacno 3 djelioca: 1, 2 i 4. Zatim ispisati prvih 20 brojeva koji imaju tacno 3 djelioca.
*/

function hasOnlyThreeFactors(num) {
    let numFactorCounter = 0;
    let hasThreeFactors = true;
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            numFactorCounter++;
        }
    }
    if (numFactorCounter == 3) return hasThreeFactors; // ako ima samo tri faktora, vrati pocetnu varijablu koja je preset na true
    else return !hasThreeFactors; // ako ima vise ili manje, vrati not od varijable koja je preset na true (false)
}

let count = 0;
let number = 1;
while (count <= 20) {
    if (hasOnlyThreeFactors(number)) { // ako ima samo tri faktora
        console.log(number); // ispisi ga
        count++; // dodaj na brojac koji treba da broji do 20 ispisivanja
    }
    number++; // u svakom slucaju povecaj broj koji se provjerava u sljedecoj iteraciji
}
