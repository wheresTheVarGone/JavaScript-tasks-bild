/*
    13. 
        Napisati program koji za proizvoljni string ispisuje:
            a) broj (procenat) samoglasnika
            b) broj (procenat) suglasnika
            c) broj (procenat) ostalih karakatera
        Koristiti funkcije u rjesavanju ovog zadatka
*/

let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let consonantArr = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'z', 'y', 'q', 'w'];
function vowelPercentage(str) {
    let vowelCounter = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelArr.includes(str[i])) vowelCounter++;
    }
    return (vowelCounter / str.length) * 100;
}
function consonantPercentage(str) {
    let consonantCounter = 0;
    for (let i = 0; i < str.length; i++) {
        if (consonantArr.includes(str[i])) consonantCounter++;
    }
    return (consonantCounter / str.length) * 100;
}
function specialCharPercentage(str) {
    return 100 - (vowelPercentage(str) + consonantPercentage(str));
}

let word = 'Danas nam je divan dan';

console.log(`U stringu "${word}", ${vowelPercentage(word).toFixed(2)}% su samoglasnici, ${consonantPercentage(word).toFixed(2)}% su suglasnici i ${specialCharPercentage(word).toFixed(2)}% su posebni karakteri.`);