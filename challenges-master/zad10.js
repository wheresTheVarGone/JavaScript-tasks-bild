/*
    10. 
        Napisati program koji ispisuje ispod prikazani pattern. Program treba da pita korisnika od koliko redova se torkut sastoji.
    
        1 2 3 4 5
          2 3 4 5
            3 4 5
              4 5
                5
*/

let brojRedova = 10, preskoci = 0, strZaIspis = '', strRazmak = ' ';
for(let i = 1; i <= brojRedova; i++){
    strZaIspis += strRazmak.repeat(i*2)
    for(let j = 1 + preskoci; j <= brojRedova; j++){
        strZaIspis += String(j);
        strZaIspis += strRazmak.repeat(1)
    }
    console.log(strZaIspis);
    preskoci++;
    strZaIspis = '';
}