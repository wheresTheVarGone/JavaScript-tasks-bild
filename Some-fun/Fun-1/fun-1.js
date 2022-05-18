/* 
    1. 
        Proslijediti neki string, za svaku rijec u stringu, potrebno je napraviti niz koji ce sadrzati taj string od pocetka do kraja (bez razmaka).
    1.1 
        Iz niza ukloniti sve prazne stringove
    1.2 
        Za svaku rijec u novonastalom nizu koja ima paran broj slova izbaciti iz niza. 
    1.3
        Ispisati novonastali niz
    1.4 
        Svaku rijec u novonastalom niz koja ima neparan broj slova unazad ispisanu dodati u novi niz.
    1.5 
        Ispisati novonastali niz
*/
let string = 'Danas je subota, kisa je padala do maloprije.';
let arr = [];
let wordToPushInArr = ''
let brRijeci = 1;
let newArr = [];
// 1

for (let i = 0; i < string.length; i++) {
    if (string[i] == ' ')
        brRijeci++;
    if (string[i] == ' ' || string[i] == '.' || string[i] == ',' || string[i + 1] == '') {
        // 1.1
        if (wordToPushInArr == '') {
            continue;
        } else {
            arr.push(wordToPushInArr);
        }
        wordToPushInArr = '';
        continue;
    }
    wordToPushInArr += string[i];
}
// 1.2
for (let i = 0; i < arr.length; i++) {
    const rijec = arr[i];
    if (rijec.length % 2 == 0) {
        arr.splice(i, 1)
        i--;
    } else {
        // 1.4
        let novaRijec = ''
        for (let j = rijec.length - 1; j >= 0; j--) {
            novaRijec += rijec[j];
        }
        newArr.push(novaRijec);
    }
}
// 1.3
console.log(`Broj rijeci u recenici - "${string}" je ${brRijeci}\n`);
console.log(`To u nizu izgleda ovako:`)
console.log(arr);
console.log();
// 1.5
console.log(`Iste te rijeci napisane unatrag su:`)
console.log(newArr);