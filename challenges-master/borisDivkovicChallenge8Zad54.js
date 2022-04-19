/*
    8. 
        Napisati funkciju koja dijeli niz u manje dijelove, funkcija treba da prima dva argumenta, niz i broj u koliko dijelova trebamo podijeliti taj niz
        Recimo da se funkcija zove divide, poziv funkcije bio bi divide([1 ,2 ,3 ,4 ,5 ,6 ,7], 3), funkcija ce vratiti 2D niz koji izgleda ovako [[1,2,3], [4,5,6], [7]]
*/
function divide(arrToDivide, divideBy) {
    if (!(divideBy > arrToDivide.length)) {
        if (divideBy > 0) {
            var matrix = [];
            for (i = 0; i < arrToDivide.length; i += 0) {
                const slicedPart = arrToDivide.slice(i, divideBy);
                matrix.push(slicedPart);
                arrToDivide.splice(0, divideBy);
            }
            return matrix;
        } else {
            console.log(`Unesite neki broj koji je veci od 0.`);
            return 0;
        }
    } else {
        console.log(`Nema potrebe da se niz dijeli sa brojem vecim od njegove duzine, unesite neki drugi broj. Manji od ili jednak ${arrToDivide.length}.`);
        return 0;
    }
    console.log(`Nepoznata greska :), svaka cast.`);
}
console.table(divide([1, 2, 3, 4, 5, 6, 7], 3));