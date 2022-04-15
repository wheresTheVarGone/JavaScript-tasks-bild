/*
    Napisati program koji ispisuje brojeve od 10 do 100 naopako. Za ispisivanje broja naopako koristiti funkciju. Npr br. 17 naopako je 71.
*/
function ispisiKolikoGodZelis(donjaGranica, gornjaGranica){
    for(let i = donjaGranica; i <= gornjaGranica; i++){
        ispisiNaopako(i);
    }
}
function ispisiNaopako(num){
    num = String(num);
    reverseStringNum = '';
    for(let i = num.length - 1; i >= 0; i--){
        reverseStringNum += num[i];
    }
    console.log(reverseStringNum);
}

ispisiKolikoGodZelis(10, 100);