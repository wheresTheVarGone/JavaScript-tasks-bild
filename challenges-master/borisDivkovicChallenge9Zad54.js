/*
    9.
        Napisati funkciju koja provjerava da li postoji neki element u nizu. Funkcija prima dva parametra, niz koji pretrazujemo i element koji trazimo. Funkcija
        radi za sve tipove podataka.
*/

function find(searchArray, lookForThis) {
    for (let i = 0; i < searchArray.length; i++) {
        if (searchArray[i] === lookForThis) {
            return true;
        }
    }
    return false;
}

console.log(`${find(["1", "2", "3"], "#")}`);