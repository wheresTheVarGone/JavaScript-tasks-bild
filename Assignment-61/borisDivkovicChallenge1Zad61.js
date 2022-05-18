/*
    1. 
        Jake je osoba od navike. On uvijek ima dorucak u 7:00 ujutro, rucak u 12:00 sati i vecera u 19:00 sati. 
        Kreirajte funkciju koja uzima trenutno vrijeme kao string i racuna vrijeme do Jakeovog sljedeceg obroka. 
        Predstavite ovo kao niz od dva elementa koji predstavljaju sate i minute.

        Primjeri: 
        timeToEat("14:00") ➞ [5, 0] 
        // 5 sati do sljedeceg obroka, vecera

        timeToEat("5:50") ➞ [1, 10] 
        // 1 sat i 10 minuta do sljedeceg obroka, dorucak
*/
function timeToEat(vrijeme) {
    let arr = [];
    let strSati = '', strMinuta = '', i = 0;
    while (vrijeme[i] != ':') {
        strSati += vrijeme[i];
        i++;
    }
    i++;
    while (i != vrijeme.length) {
        strMinuta += vrijeme[i];
        i++;
    }
    brSati = Number(strSati), brMinuta = Number(strMinuta);
    const vrijemeUMin = (brSati * 60) + brMinuta;
    let dorucak = 420;
    let rucak = 720;
    let vecera = 1140;
    if (vrijemeUMin <= dorucak) {
        getHoursAndMinutesIntoArray(arr, vrijemeUMin, dorucak, 0);
    } else if (vrijemeUMin > dorucak && vrijemeUMin <= rucak) {
        getHoursAndMinutesIntoArray(arr, vrijemeUMin, rucak, 0);
    } else if (vrijemeUMin > rucak && vrijemeUMin <= vecera) {
        getHoursAndMinutesIntoArray(arr, vrijemeUMin, 1140, 0);
    } else if (vrijemeUMin > vecera && vrijemeUMin <= 1440) {
        getHoursAndMinutesIntoArray(arr, vrijemeUMin, 1440, dorucak);
    }
    return arr;
}

function getHoursAndMinutesIntoArray(arr, vrijemeUMin, highLimit, lowLimit) {
    const novoVrijemeUMin = lowLimit + highLimit - vrijemeUMin;
    const novoVrijemeBrMin = novoVrijemeUMin % 60;
    const novoVrijemeBrSati = Math.floor(novoVrijemeUMin / 60);
    arr.push(novoVrijemeBrSati);
    arr.push(novoVrijemeBrMin);
}

let vrijeme = "23:15";
let arr = timeToEat(vrijeme);
var brSati, brMinuta, i = 0;

if (brSati && brMinuta) {
    if (brSati < 7 || brSati >= 19) {
        console.log(`${arr[0]} sati i ${arr[1]} minuta do obroka, dorucak`);
    } else if (brSati >= 7 && brSati < 12) {
        console.log(`${arr[0]} sati i ${arr[1]} minuta do obroka, rucak`);
    } else if (brSati >= 12 && brSati < 19) {
        console.log(`${arr[0]} sati i ${arr[1]} minuta do obroka, vecera`);
    }
} else {
    if (brSati <= 7 || brSati > 19) {
        console.log(`${arr[0]} sati do obroka, dorucak`);
    } else if (brSati >= 7 && brSati <= 12) {
        console.log(`${arr[0]} sati do obroka, rucak`);
    } else if (brSati >= 12 && brSati <= 19) {
        console.log(`${arr[0]} sati do obroka, vecera`);
    }
}