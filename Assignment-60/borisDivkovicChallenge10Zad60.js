/*
    10. 
        Napisati program koji će generisati niz od 20 elemenata popunjen trocifrenim brojevima. 
        Zatim napraviti funkciju koja će u nizu pronaći sve brojeve kojima je prva cifra 
        (početna cifra sa lijeve strane) parna i ukloniti ih iz niza. Uklanjanje elemenata niza obavezno uraditi 
        tako da ne ostaju prazni elementi već da se ostatak niza pomjeri kako ne bi bilo praznih elemenata. NOTE: Ne koristiti splice().
*/
let arr = [];
for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(100 + Math.random() * 900));
    const firstDigit = Math.floor(arr[i] / 100);
    if (firstDigit % 2 == 0) {
        arr[i] = undefined;
    }
}
console.log(arr);
for (let i = 0; i < 20; i++) {
    if (arr[i] === undefined) {
        for (let j = 19; j >= 0; j--) {
            if (arr[j] !== undefined) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
console.log(arr);
let weirdElement = arr.pop(); // koliko god izmjenio algoritam, jedan element uvijek ostane na kraju niza umjesto undefined
while (arr.includes(undefined)) {
    arr.pop();
}
arr.push(weirdElement); // zato sam ga uklonio sa zadnjeg mjesta i dodao na kraj niza nakon sto se uklone undefined elementi.
console.log(arr);

/*
    +   algoritam zahtjeva daljnju analizu i testiranje.
*/