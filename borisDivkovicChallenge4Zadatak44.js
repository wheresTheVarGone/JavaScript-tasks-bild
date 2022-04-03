/*
    4. 
        Napisati program koji simulira dijeljenje 6 karata korisniku iz spila. Spil ukupno ima 52 karte,
        'A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' u cetiri znaka
        'List', 'Srce', 'Kocka' i 'Mak'. Ispisati podjeljene karte.
*/

let cardNumArr = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let newArr = [];
let draw = [];

fillWithCards(0, 13, 0);
fillWithCards(14, 27, 1);
fillWithCards(28, 41, 2);
fillWithCards(42, 55, 3);

console.log(newArr);
console.log('Luck of the draw: ');

for(let i = 0; i < 6; i++){
    const rand = Math.floor(1 + Math.random() * 52);
    draw[i] = newArr[rand];
}
console.log(draw);

function fillWithCards(lB, hB, signNum){
    let j = 0;
    for(let i = lB; i <= hB; i++){
        switch(signNum){
            case 0:
                newArr[i] = cardNumArr[j] + ' ♣';
                break;
            case 1:
                newArr[i] = cardNumArr[j] + ' ♥';
                break;
            case 2:
                newArr[i] = cardNumArr[j] + ' ♦';
                break;
            case 3:
                newArr[i] = cardNumArr[j] + ' ♠';
                break;
        }
        j++;
    }
}