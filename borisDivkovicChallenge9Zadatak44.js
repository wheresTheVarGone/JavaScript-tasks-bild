/* 
   9. 
            Napisati program koji simulira bacanje 3 kockice (jedna kockica ima 6 strana i na tim stranama su brojevi 1 - 6). 
            Simulirati konstantno bacanje sve tri kockice dok se u dva uzastopna bacanja ne desi da se dobiju 
            isti brojevi na sve tri kockice (npr. u šestom bacanju se dobiju brojevi 2, 2, 2 a u sedmom 4,4,4 na sve tri kockice). 
            Ispisati koliko je ukupno bilo bacanja dok se nije ispunio navedeni uslov.
*/
let d1, d2, d3;
let occuranceCounter = 0;
let totalThrowsCounter = 0;

while(true){
    totalThrowsCounter++;
    d1 = diceThrow();
    d2 = diceThrow();
    d3 = diceThrow();

    console.log(d1, d2, d3);

    if(d1 === d2 && d2 === d3){
        occuranceCounter++;
    } else {
        occuranceCounter = 0;
    }
    if(occuranceCounter == 2) break; 
}
console.log(`Ukupan broj bacanja -> ${totalThrowsCounter}`);

function diceThrow(){
    return Math.floor(1 + Math.random() * 6);
}