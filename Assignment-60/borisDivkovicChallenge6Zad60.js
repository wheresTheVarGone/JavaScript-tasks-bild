/*
    6. 
        Napisati funkciju koja kao parametar prima rečenicu (od najviše 200 karaktera) i iz nje uklanja svaku riječ koja počinje velikim slovom. 
        Pored toga, funkcija treba da prebroji ukupan broj riječi u rečenici prije izmjene. 
        Koristiti sljedeću funkciju: ukloniRijeci(string);. 
        Npr. ako je data rečenica: "Stari most u Mostaru spaja obale rijeke Neretve." funkcija je treba pretvoriti u: "most u spaja obale rijeke". 
        Funkcija ispisuje broj riječi u polaznoj rečenici (prije odsijecanja ostalih riječi).
        Radi jednostavnosti rješenja, pretpostavite da je riječ bilo koji niz znakova razdvojen znakom razmak.
*/
function ukloniRijeci(str) {
    let newStr = '';
    let brRijeci = 1, brUpperCaseRijeci = 0;
    let j = 0, thisWord = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            brRijeci++;
        }
    }
    console.log(`Broj rijeci u recenici prije uklanjanja rijeci je ${brRijeci}`);

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            thisWord = true;
        }
        if (thisWord) {
            while (str[i] != ' ') i++;
            thisWord = false;
        }

        newStr += str[i];
    }
    return newStr;
}
let str = 'Stari most u Mostaru spaja obale rijeke Neretve '; 
let newStr = '';
if (str.length < 200) {
    newStr = ukloniRijeci(str);
    console.log(newStr);
}