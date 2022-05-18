/*
    2.     
        Kreirajte funkciju koja određuje da li je broj Oddish ili Evenish.
        Broj je Oddish ako je zbir svih njegovih cifara neparan, a broj je Evenish ako
        je zbir svih njegovih cifara paran. Ako je broj Oddish, vratite
        "Oddish". U suprotnom, vratite "Evenish". Na primjer,
        oddishOrEvenish(121) bi trebao vratiti "Evenish", budući da je 1 + 2
        + 1 = 4. oddishOrEvenish(41) bi trebao vratiti "Oddish", budući da je
        4 + 1 = 5.
*/
function isOddishOrEvenish(num){
    let suma = 0;
    while(num >= 1){
        suma += num % 10;
        num = Math.trunc(num / 10);
    }
    if(suma % 2 == 0) return 'Evenish';
    return 'Oddish';
}
console.log(`${isOddishOrEvenish(121)}`);