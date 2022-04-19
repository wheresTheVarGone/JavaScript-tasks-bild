/*
    4. 
        Napisati funkciju koja vraca apsolutnu vrijednost nekog broja. NE koristiti Math.abs()
*/
function absVal(num){
    if(num <= 0){
        return num*(-1);
    } else {
        return num;
    }
}
let number = -4;
console.log(`Apsolutna vrijednost broja ${number} je ${absVal(number)}.`);