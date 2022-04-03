/*
    1. 
        Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima
        od 1 do 100. Zatim ispisati niz u konzolu
*/
let arr = [];
for(let i = 0; i < 20; i++){
    arr[i] = Math.ceil(Math.random() * (100 - 1));
    console.log(arr[i]);
}