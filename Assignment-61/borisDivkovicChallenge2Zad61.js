/*
    2. 
        Julije Cezar je zastitio svoje povjerljive informacije enkripcijom.
        Cezarova enkripcija pomice svako slovo za odredjeni broj slova. Ako vas pomak odvede preko kraja abecede, 
        samo se vratite na pocetak abecede. U slučaju rotacije za 3, w, x, y i z bi se mapirali u z, a, b i c. 
        Kreirajte funkciju koja uzima string s (tekst koji treba sifrirati) i cijeli broj n (faktor rotacije). Funkcija bi trebala vratiti sifrirani string.

        Primjeri: 
        caesarCipher("middle-Out", 2) ➞ "okffng-Qwv" 
        // m -> o 
        // i -> k 
        // d -> f 
        // d -> f 
        // l -> n 
        // e -> g 
        // - - 
        // O -> Q 
        // u -> w 
        // t -> v

        caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5) ➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj" 
        caesarCipher("A friend in need is a friend indeed", 20) ➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx" 
        Koristiti engleski abeceda. Engleska abeceda se sastoji od 26 slova: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.
*/
function caesarCipher(string, saberi) {
    let newString = '';

    for (let i = 0; i < string.length; i++) {

        if (arrUpperCase.includes(string[i])) {

            if ((string.charCodeAt(i) + saberi) > 96)
                newString += String.fromCharCode(saberi + string.charCodeAt(i) - 96 + 64);
            else
                newString += String.fromCharCode(string.charCodeAt(i) + saberi);
        } else if (arrLowerCase.includes(string[i])) {

            if (string.charCodeAt(i) + saberi > 122) {
                newString += String.fromCharCode(saberi + string.charCodeAt(i) - 122 + 96);
            }
            else
                newString += String.fromCharCode(string.charCodeAt(i) + saberi);
        } else {
            newString += string[i];
        }
    }
    return newString;
}

let arrUpperCase = [];
let arrLowerCase = [];

for (i = 1; i <= 26; i++)
    arrUpperCase.push(String.fromCharCode(64 + i)); // kreiraj niz popunjen velikim slovima pomocu ASCII tabele

for (i = 1; i <= 26; i++)
    arrLowerCase.push(String.fromCharCode(96 + i)); // kreiraj niz popunjen malim slovima pomocu ASCII tabele

const sifriraniString = caesarCipher('A friend in need is a friend indeed', 20);
console.log(sifriraniString);