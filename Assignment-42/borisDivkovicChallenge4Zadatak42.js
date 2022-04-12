/* 
    4. 
        Napisati program koji ce izbrojati koliko puta se karakter ‘a’ ponavlja u stringu:
        ‘Java is to JavaScript what car is to Carpet.’. Nakon sto program prebroji,
        ispisuje koliko puta se karakter 'a' pojavio u stringu.
*/
let str = 'Java is to JavaScript what car is to Carpet.'; // inicijaliziran string
let occCounter = 0; // brojac koliko se puta ponavlja slovo
for(let i = 0; i < str.length; i++){ // for petlja za prolazak kroz string
    if(str[i] == 'a') occCounter++; // ako se slovo pojavi unutar stringa i jednako je slovu 'a', povecaj brojac za 1
}
console.log(`Slovo "a" se u stringu "${str}" ponavlja ${occCounter} puta.`); // ispis