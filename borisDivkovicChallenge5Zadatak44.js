/* 
    5. 
        Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100.
        Zatim program kreira novi niz koji ima sve elemente kao i prvi niz ali obrnut redoslijed. Ako je prvi niz [12, 24, 7],
        drugi niz ce biti [7, 24, 12]
*/
let arr1 = [];
let arr2 = [];

for(let i = 0; i < 20; i++){
    arr1[i] = Math.ceil(Math.random() * (100 - 1));
}
console.log(arr1);
let b = 19;
for(let i = 0; i < 20; i++){
    arr2[b] = arr1[i];
    b--;
}
console.log(arr2);