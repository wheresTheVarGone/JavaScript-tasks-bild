/*
    19.
        Napisati funkciju koja provjerava da li string sadrzi brojeve i slova naizmjenicno. 
        Funkcija prima string a vraca true ili false zavisno toga da li su brojevi i slova naizmjenicni. 
        Npr. za string: “a1b2c3d4” vraca true, a za string “a12b3c4d” vraca false jer imamo dva broja(1i2) jedan pored drugog.
*/

function checkStr(strToCheck) {
    let counter = 0;
    for (let i = 0; i < strToCheck.length; i++) {
        const convertedToNumber = Number(str[i]); // pretvori ga u broj
        if (isNaN(convertedToNumber)) { // ako nije broj
            // console.log(str[i]); // za debugging
            counter++; // povecaj counter za jedan
        } else {
            counter--; // ako jest broj smanji counter za jedan
            // console.log(str[i]); // za debugging
        }
        // console.log(counter); // za debugging
        // u idealnom slucaju, kada ide slovo pa broj, trebalo bi da se vrijednost brojaca nikad ne smanji ispod 0 ili poveca iznad 1
        if (counter > 1 || counter < 0) { // te ako se desi, vrati false i nema potrebe da se dalje provjerava
            return false;
        }
    }
    return true; // ako se do sada vec nije vratilo false, vrati true.
}
let str = 'a1b2c3d4';
console.log(checkStr(str));