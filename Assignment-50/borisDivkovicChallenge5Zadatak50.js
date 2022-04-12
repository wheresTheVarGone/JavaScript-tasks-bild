/* 
    5. 
        Napisati funkciju koja pronalazi broj pronavljanja određenog karaktera u stringu.
        Primjer poziva funckije: brojacKaraktera("Dobrodosli", "o")
        Primjer ispisa: Karakter o se ponavlja 3 puta u stringu "Dobrodosli".
*/
brojacKaraktera("Dobrodosli", "o");

function brojacKaraktera(str, karakter){
    let brojacPonavljanjaKaraktera = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i).includes(karakter)){
            brojacPonavljanjaKaraktera++;
        }
    }
    console.log(`Karakter ${karakter} se ponavlja ${brojacPonavljanjaKaraktera} puta u stringu "${str}"`);
}