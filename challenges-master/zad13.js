/*
    13. 
        Napisati program koji za proizvoljni string ispisuje:
            a) broj (procenat) samoglasnika
            b) broj (procenat) suglasnika
            c) broj (procenat) ostalih karakatera
        Koristiti funkcije u rjesavanju ovog zadatka
*/
let vowelArr = ['a', 'b', 'c', 'd', 'e'];

function vowelPercentage(str){
    let vowelCounter = 0;
    for(let i = 0; i < str.length; i++){
        if(vowelArr.includes(str[i])){
            vowelCounter++;
        }
    }
    return parseFloat(vowelCounter / str.length) * 100;
}
function consonantPercentage(str){

}
function specialCharPercentage(str){

}

let word = 'Jupi heheh';

console.log(`Samoglasnika u rijeci "${word}" ima ${vowelPercentage(word)}%`);