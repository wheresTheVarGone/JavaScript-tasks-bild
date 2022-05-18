/*
    4. 
        Neko je pokusao cenzurirati moje stringove zamjenom svakog samoglasnika sa zvjezdicon (*) npr. 
        l*k* th*s(like this). Srećom, uspio sam pronaći samoglasnike koji su uklonjeni. 
        Uzimajuci u obzir cenzurirani string i string cenzuriranih samoglasnika, vratite originalni necenzurirani string.

        Primjeri: 
        uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?" 
        uncensor("abcd", "") ➞ "abcd" 
        uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"

        NOTE: 
        - Proslijedjeni samoglasnici su uvijek u ispravnom redoslijedu - Broj proslijedjenih samoglasnika uvijek odgovara broju zvjezdica(*) u cenzurisanom stringu
*/
function uncensor(censoredString, vowelString){
    let j = 0, newString = '';
    for(let i = 0; i < censoredString.length; i++){
        if(censoredString[i] == '*'){
            newString += vowelString[j];
            j++;
        } else {
            newString += censoredString[i];
        }
    }
    return newString;
}

const uncensoredString = uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo");
console.log(uncensoredString);