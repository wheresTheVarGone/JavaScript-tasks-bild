/*
    17.
        Napisati funkciju koja validira broj telefona. Funkcija treba da prima string tj broj telefona, 
        a vraca true ili false zavisno od toga da li je broj telefona ispravan. 
        Broj telefona da bi bio ispravan mora biti u jednom od 2 sljedeca formata: 
        06x/xxx-xxx ili 060/xx-xx-xxx.
*/
function isMobNumValid(num) {
    let isValidFormat1 = false, isValidFormat2 = false;
    if (num.length == 11 || num.length == 13) {
        if (num[0] == '0' && num[1] == '6' && num[3] == '/' && num[7] == '-') {
            isValidFormat1 = true;
        } else if (num[0] == '0' && num[1] == '6' && num[2] == '0' && num[3] == '/' && num[6] == '-' && num[9] == '-') {
            isValidFormat2 = true;
        }
        return isValidFormat1 || isValidFormat2;
    } else {
        return false;
    }

}
let mobNum = '061/123-345';

if (isMobNumValid(mobNum)) {
    console.log(`Format unesenog broja ${mobNum} je validan.`);
} else {
    console.log(`Format unesenog broja ${mobNum} nije validan.`);
}