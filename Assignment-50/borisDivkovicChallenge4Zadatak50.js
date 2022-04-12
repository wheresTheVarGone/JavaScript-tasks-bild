/*
    4.  
        Napisati funkciju koja broji karaktere u nekom stringu te vraća korisniku isti kao i broj suglasnika i samoglasnika u datom stringu.
        Primjer poziva funkcije: stringPodaci("Dobrodosli");
        Primjer ispisa: String "Dobrodosli" se sastoji od 10 karaktera od cega su 4 samoglasnici i 6 suglasnici.
*/
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let punctuationArr = ['.', '!', '?', ','];

stringPodaci("Welcome to the colony.");

function stringPodaci(str){
    let newStr = str.toLowerCase();
    let brojSamoglasnika = 0, brojSuglasnika = 0, brojKaraktera = str.length, brojRazmaka = 0, brojInterpZnakova = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == ' '){
            brojRazmaka++;
        } else if( isVowel(str[i]) == 1){
            brojSamoglasnika++;
        } else if( isPunctation(str[i]) == 1 ){
            brojInterpZnakova++;
        } else {
            brojSuglasnika++;
        }
    }
    console.log(`String "${str}" se sastoji od ${brojKaraktera} karaktera od cega su ${brojSamoglasnika} samoglasnici i ${brojSuglasnika} suglasnici.`);
    console.log(`String takodjer sadrzi ${brojRazmaka} razmaka i ${brojInterpZnakova} znaka interpunkcije.`);
}

function isVowel(str){ // check for vowels
    for(let i = 0; i < vowelArr.length; i++){
        if(str == vowelArr[i]){
            return 1;
        }
    }
}

function isPunctation(str){ // check for punctation
    for(let i = 0; i < punctuationArr.length; i++){
        if(str == punctuationArr[i]){
            return 1;
        }
    }
}