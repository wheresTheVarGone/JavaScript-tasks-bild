/*
    1.
        Napisati funkciju koja prima 2 argumenta, string i karakter koji treba
        ukloniti iz datog stringa. Nakon poziva, funkcija treba da vrati novi
        string koji predstavlja orginalni string sa izuzetkom prosljedjenog
        karaktera.
        Primjer poziva funkcije: ukloniKarakter("Dobrodosli", "o");
        Primjer ispisa programa: Dbrdsli
*/
let randomString = "Dobrodosli", charToRemove = "o";
console.log(`"${randomString}" kada se ukloni slovo "${charToRemove}" glasi:`);
ukloniKarakter(randomString, charToRemove);

function ukloniKarakter(str, char){
    let newstr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            continue;
        } else {
            newstr += str[i];
        }
    }
    console.log(newstr);
}