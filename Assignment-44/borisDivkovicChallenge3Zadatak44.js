/* 
    3.
        Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima
        od 1 do 100. Ispisati ovaj pocetni niz u konzolu. Zatim izmjesati elemente u nizu, te ponovo
        ispisati niz u konzolu. Za mijesanje niza minimalan broj iteracija je jedna duzini niza.
*/
let arr = [], temp;
console.log('Niz na pocetku');
for(let i = 0; i < 20; i++){
    arr[i] = Math.ceil(Math.random() * (100 - 1));
}
console.log(arr);
console.log('Niz nakon mijesanja: ');

for(let i = 0; i < 20; i++){
    const random = Math.ceil(Math.random()*(20-1));
    temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
}
console.log(arr);