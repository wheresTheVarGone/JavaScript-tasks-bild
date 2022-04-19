/*
    2. 
        Napisati funkciju koja vraca neogranicen broj argumenata number tipa podatka te vraca najveci broj. 
        Funkcija najmanje mora imati 2 parametra, ali nema gornje granice.
*/
function najveci(num1, num2, ...nums){
    let najv = num1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > najv){
            najv = nums[i];
        }
    }
    if(num2 > najv) {
        najv = num2;
    }
    return najv;
}

console.log(najveci(1, 12));