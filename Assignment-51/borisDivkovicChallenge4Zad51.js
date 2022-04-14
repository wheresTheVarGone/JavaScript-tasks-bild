/*
    4. 
        Napisati funkciju koja vraća ukupan broj riječi u rečenici.
        Primjer poziva funkcije: brojRijeci("Ja mrzim proste brojeve u svim njihovim oblicima");
        Primjer ispisa programa: Unijeta rečenica se sastoji od 8 riječi.
*/

brojRijeci("Ja mrzim proste brojeve u svim njihovim oblicima");

function brojRijeci(str){
    let brojRazmaka = 1; // prva rijec nema razmak prije sebe.
    for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            brojRazmaka++;
        }
    }
    console.log(`Unijeta recenica se sastoji od ${brojRazmaka} rijeci.`);
}