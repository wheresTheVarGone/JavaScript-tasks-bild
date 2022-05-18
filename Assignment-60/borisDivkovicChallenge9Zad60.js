/*
    9. 
        Uzeti dva proizvoljna prirodna broja A i B (A>100000, B>50000). 
        Napisati program koji će kreirati i ispisati broj C koji će se sastojati od cifara broja A 
        u obrnutom redoslijedu ali bez cifara koje se pojavljuju u broju B. 
        Obavezno koristiti bar jednu funkciju. Ispsati razliku brojeva A i C.
*/
function stringUNiz(str){
    const array = [];
    for(let i = 0; i < str.length; i++){
        array.push(str[i]);
    }
    return array;
}

let A = 123456789, B = 345555;
let strA = A.toString(), strB = B.toString(), strC = '';
let arrA, arrB;

arrA = stringUNiz(strA);
arrB = stringUNiz(strB);

for(let i = arrA.length - 1; i >= 0; i--){
    if(arrB.includes(arrA[i])){
        continue;
    } else {
        strC += arrA[i];
    }
}
const C = Number(strC);
const razlikaAC = A - C;
console.log(`Broj ${A} unazad bez cifri iz broja ${B} je ${C}\nRazlika izmedju A i C je ${razlikaAC}`);