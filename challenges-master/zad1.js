/* 
    1
        Napisati funkciju koja prima broj minuta, a zatim vraca koliko je to u sekundama. Funkcija prima cijele kao i decimalne brojeve.
*/

function kolikoSekundi(min) {
    return min * 60;
}

let brojMin = 1.5;
console.log(`${brojMin} minuta u sekundama je ${kolikoSekundi(brojMin)}`);
