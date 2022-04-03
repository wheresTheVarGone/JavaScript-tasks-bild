/*
    8. 
        Napisati program koji uklanja sve samoglasnike iz stringa 
        ‘Make it work, make it right, make it fast.’. 
        Nakon sto program ukloni sve samoglasnike ispisati string u konzolu.
*/
let startString = 'Make it work, make it right, make it fast.' 
let removeVowelsStr = '';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];


for(let i = 0; i < startString.length; i++)
{
    let currentChar = startString[i].toLowerCase();
    const isVowel = !vowelArr.includes(currentChar);
    if(isVowel){ // provjera da li vowelArr arr sadrzi karakter na i-tom mjestu u pocetnom stringu
        removeVowelsStr += startString[i]; 
    }
}
console.log(removeVowelsStr);

/*
function checkIsVowel(currentChar){
    return !vowelArr.includes(currentChar);
}
*/