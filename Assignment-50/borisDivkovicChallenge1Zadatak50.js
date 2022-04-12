/*
    1. 
        Napisati funkciju koja prima tri broja kao parametre te ispisuje ta ista tri broja u rastućem redosljedu.
        Primjer poziva funkcije: ispisiSortiraneBrojeve(17, 3, 42);
        Primjer ispisa: Sortirani brojevi: 3, 17, 42. 
*/

ispisiSortiraneBrojeve(15, 29, 11);

function ispisiSortiraneBrojeve(num1, num2, num3){
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    let mid;
    if(num1 < max && num1 > min){
        mid = num1;
    } else if(num2 < max && num2 > min){
        mid = num2;
    } else if(num3 < max && num3 > min){
        mid = num3;
    }
    console.log(`Sortirani brojevi: ${min}, ${mid}, ${max}`);
}