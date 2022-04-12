/* 
    7. 
        Napisati program koji će generisati Fibonacci niz i smjestiti ga u jedan niz od 20 elemenata. 
        (Fibbonacijev niz je niz brojeva koji počinje brojevima 0 i 1, 
        a svaki sljedeći broj u nizu dobija se zbrajanjem prethodna dva: F(0) = 0, F(1) = 1,F(n) = F(n-1) + F(n-2)). 
        Zatim napraviti funkciju koja će u nizu pronaći sve brojeve koji završavanju parnom cifrom i ukloniti ih iz niza. 
        Uklanjanje elemenata niza obavezno uraditi tako da ne ostaju prazni elementi već da se ostatak niza pomjeri kako ne bi bilo praznih elemenata. 
        Pomjeranje ostatka niza obavezno raditi prilikom uklanjanja elemenata.
*/
let fibArr = [0, 1];
for(let i = 1; i < 20; i++){
    const next = fibArr[i] + fibArr[i-1];
    fibArr.push(next);
}
console.log(fibArr);

console.log("\n");

const newarr = removeEvenNumFromArr();  
console.log(newarr);

function removeEvenNumFromArr(arr = []) {
    for(let i=0; i<20; i++){
        if(fibArr[i] % 2 !== 0) arr.push(fibArr[i]);
    }
    return arr;
}