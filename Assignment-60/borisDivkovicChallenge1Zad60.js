/*
    1. 
    Vrati najmanji broj koraka koji je potreban da se string u potpunosti pretvori u velika ili u potpunosti u mala slova, 
    ovisno o tome koji od njih zahtijeva najmanji broj koraka. Korak se sastoji od promjene jednog karaktera iz malih u velika slova, 
    ili obrnuto.Primjeri:
    
    stepsToConvert("abC") ➞ 1
    // "abC" converted to "abc" in 1 step

    stepsToConvert("abCBA") ➞ 2
    // "abCBA" converted to "ABCBA" in 2 steps

    stepsToConvert("aba") ➞ 0

    stepsToConvert("abaCCC") ➞ 3
*/
function stepsToConvert(string) {
    let upperCaseCounter = 0, lowerCaseCounter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i].toUpperCase())
            upperCaseCounter++;
        else
            lowerCaseCounter++;
    }
    if (lowerCaseCounter <= upperCaseCounter)
        return lowerCaseCounter;
    return upperCaseCounter;
}

let string = "abaCCC";
console.log(stepsToConvert(string));