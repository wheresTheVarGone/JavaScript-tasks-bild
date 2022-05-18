/*
    2. 
        Napisati program koji generiše jednodimenzionalni niz od 50 jednocifrenih brojeva. 
        Nakon što je niz generisan, ispisati broj ponavljanja svakog broja u nizu.

        Primjer niza: 1, 1, 2, 5, 2, 3, 1 …….. 3

        Broj 1 se ponavlja: 3 puta
        Broj 2 se ponavlja: 2 puta
        Broj 3 se ponavlja: 2 puta
        Broj 5 se ponavlja: 1 puta
*/
function arrNumOccurances(array, length) {
    let arrOneDigitNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let digitOccurances = 0;
    for (let i = 0; i < arrOneDigitNums.length; i++) {
        for (let j = 0; j < length; j++) {
            if (arrOneDigitNums[i] == array[j])
                digitOccurances++;
        }
        console.log(`Broj ${arrOneDigitNums[i]} se ponavlja: ${digitOccurances} puta`);
        digitOccurances = 0;
    }
}

let arr = [], arrLen = 50;
for (let i = 0; i < arrLen; i++)
    arr[i] = Math.floor(1 + Math.random() * 9);
console.table(arr);
arrNumOccurances(arr, arrLen);