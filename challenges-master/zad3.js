/* 
    3. 
        Napisati funkciju koja racuna koliko kilometara neko auto moze preci na osnovu nivoa goriva u rezervoaru.
        Funkcija prima 2 parametra, nivo goriva u rezervoaru u litrima, i potrosnju auta tj. koliko litara auto trosi na 100km.
*/

function travelLength(fuelLevel, consumptionLevel) {
    return (fuelLevel / consumptionLevel * 100)
}
let fuelLevelCurrent = 20;
let consumptionLevelCurrent = 10;

console.log(`Auto moze preci ${travelLength(fuelLevelCurrent, consumptionLevelCurrent)} sa ${fuelLevelCurrent}l goriva i potrosnjom od ${consumptionLevelCurrent}l/100km.`);