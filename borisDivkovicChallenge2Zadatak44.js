/*
    2.
        Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100.
        Zatim sabrati sve elemente koji se nalaze na parnom indexu, i ispisati sumu u konzolu.
*/
let arr = [], suma = 0;
for(let i = 0; i < 20; i++){
    arr[i] = Math.ceil(Math.random() * (100 - 1));
    if(i%2==0){
        suma += arr[i];
    }
    console.log(`${arr[i]}\t[${i}]`)
}
console.log('Suma elemenata na parnim indeksima je', suma);