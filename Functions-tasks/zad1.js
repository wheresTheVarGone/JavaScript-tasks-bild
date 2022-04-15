// declaration of functions //
function printArrayAndAverage(arr, length, min, max){ // prikaze prosljedjeni niz i prosijecnu vrijednost nasumicnih elemenata unutar njega
    console.log(`\n\nZa niz:\n\n${arr}\n\nProsjek je ${randArrayAverage(arr, length, min, max)}.\n`);  
    printHr();
}
function randArrayAverage(arr, length){ // racuna prosijek za prosljedjeni niz
    let sum = 0;
    for(let i = 0; i < length; i++){
        sum += arr[i]; 
    }
    return parseFloat(sum) / parseFloat(length);
}
function fillArrayWithRandomNum(arr, length, min, max){ // popunjava prosljedjeni niz nasumicnim brojevima
    for(let i = 0; i < length; i++){
        arr[i] = Math.floor(min + Math.random() * (max - min)); 
    }
}
function printHr(){ // ispisuje krkansku horizontalnu liniju
    for(let i = 0; i < 80; i++){
        process.stdout.write("-");
    }
}
// main programme //
let arr1 = [], arr2 = [], arr3 = []; // array declarations
printHr();
fillArrayWithRandomNum(arr1, 10, 1, 10);
fillArrayWithRandomNum(arr2, 15, 10, 100);
fillArrayWithRandomNum(arr3, 20, 100, 1000);
printArrayAndAverage(arr1, 10, 1, 10);
printArrayAndAverage(arr2, 15, 10, 100);
printArrayAndAverage(arr3, 20, 100, 1000);